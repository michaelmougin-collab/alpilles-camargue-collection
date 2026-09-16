/**
 * Première étape de la connexion au CMS.
 *
 * Le CMS ouvre cette adresse dans une fenêtre surgissante ; on renvoie
 * l'utilisateur vers GitHub pour qu'il autorise l'accès au dépôt.
 *
 * Le paramètre `state` est un jeton aléatoire déposé en cookie et
 * revérifié au retour : sans lui, un tiers pourrait déclencher une
 * autorisation à l'insu de l'utilisateur.
 */
export default async (req) => {
  const clientId = process.env.GITHUB_CLIENT_ID

  if (!clientId) {
    return new Response(
      "Configuration incomplète : la variable GITHUB_CLIENT_ID est absente.",
      { status: 500, headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
    )
  }

  const { origin } = new URL(req.url)
  const state = crypto.randomUUID()

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: `${origin}/api/callback`,
    // Accès en écriture au dépôt : le dépôt étant privé, `repo` est requis.
    scope: 'repo,user',
    state,
  })

  return new Response(null, {
    status: 302,
    headers: {
      Location: `https://github.com/login/oauth/authorize?${params}`,
      'Set-Cookie': `cms_oauth_state=${state}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`,
    },
  })
}

export const config = { path: '/api/auth' }
