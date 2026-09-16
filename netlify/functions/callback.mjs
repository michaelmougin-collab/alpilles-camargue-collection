/**
 * Seconde étape de la connexion au CMS.
 *
 * GitHub renvoie ici avec un code temporaire. On l'échange contre un
 * jeton d'accès, puis on le transmet à la fenêtre du CMS qui a ouvert
 * la fenêtre surgissante, selon le dialogue attendu par Sveltia/Decap :
 * le CMS annonce `authorizing:github`, on répond avec le jeton.
 *
 * Le jeton ne transite que par cette fenêtre : il n'est jamais écrit
 * dans une URL ni conservé côté serveur.
 */

/** Page renvoyée à la fenêtre surgissante. */
const relayPage = (status, payload) => `<!doctype html>
<html lang="fr">
  <head><meta charset="utf-8" /><title>Connexion…</title></head>
  <body>
    <p style="font:16px/1.5 system-ui;padding:2rem;color:#1C1A17">
      ${status === 'success' ? 'Connexion réussie. Cette fenêtre va se fermer.' : 'La connexion a échoué.'}
    </p>
    <script>
      (function () {
        var message = 'authorization:github:${status}:' + ${JSON.stringify(JSON.stringify(payload))};

        function relay(event) {
          window.opener.postMessage(message, event.origin);
          window.removeEventListener('message', relay, false);
        }

        if (!window.opener) {
          document.body.textContent =
            "Cette page doit être ouverte depuis l'interface d'administration.";
          return;
        }

        window.addEventListener('message', relay, false);
        window.opener.postMessage('authorizing:github', '*');
      })();
    </script>
  </body>
</html>`

const htmlResponse = (body, status = 200) =>
  new Response(body, {
    status,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })

export default async (req) => {
  const url = new URL(req.url)
  const code = url.searchParams.get('code')
  const state = url.searchParams.get('state')

  // Le `state` renvoyé par GitHub doit correspondre au cookie déposé à l'aller.
  const savedState = /cms_oauth_state=([^;]+)/.exec(req.headers.get('cookie') || '')?.[1]

  if (!code || !state || state !== savedState) {
    return htmlResponse(
      relayPage('error', { message: "Requête d'autorisation invalide ou expirée." }),
      400,
    )
  }

  const clientId = process.env.GITHUB_CLIENT_ID
  const clientSecret = process.env.GITHUB_CLIENT_SECRET

  if (!clientId || !clientSecret) {
    return htmlResponse(
      relayPage('error', { message: 'Configuration incomplète côté serveur.' }),
      500,
    )
  }

  try {
    const res = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
        redirect_uri: `${url.origin}/api/callback`,
      }),
    })

    const data = await res.json()

    if (!data.access_token) {
      return htmlResponse(
        relayPage('error', {
          message: data.error_description || "GitHub n'a pas délivré de jeton.",
        }),
        400,
      )
    }

    return new Response(
      relayPage('success', { token: data.access_token, provider: 'github' }),
      {
        status: 200,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          // Le cookie a servi, on l'efface.
          'Set-Cookie': 'cms_oauth_state=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0',
        },
      },
    )
  } catch {
    return htmlResponse(
      relayPage('error', { message: 'Impossible de joindre GitHub.' }),
      502,
    )
  }
}

export const config = { path: '/api/callback' }
