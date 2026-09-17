/**
 * Protection du site pendant la construction.
 *
 * Demande un mot de passe avant d'afficher quoi que ce soit, sauf sur
 * /admin et /api/ : le CMS reste joignable, sa propre authentification
 * GitHub le protégeant déjà.
 *
 * Le mot de passe vit dans la variable d'environnement SITE_PASSWORD.
 * Tant qu'elle est absente, le site reste ouvert — un oubli de
 * configuration ne doit pas rendre le site inaccessible par surprise.
 *
 * Pour ouvrir le site au public : supprimer la variable SITE_PASSWORD.
 * Ce fichier peut rester en place, il devient sans effet.
 */

const PUBLIC_PATHS = ['/admin', '/api/']

const askPassword = () =>
  new Response(
    `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex, nofollow" />
    <title>Site en préparation</title>
  </head>
  <body style="margin:0;display:grid;place-items:center;min-height:100vh;background:#f6f3ee;color:#1c1a17;font:300 17px/1.6 ui-sans-serif,system-ui,sans-serif">
    <main style="max-width:30rem;padding:2rem;text-align:center">
      <p style="font-size:.7rem;letter-spacing:.28em;text-transform:uppercase;color:#7c766b;margin:0 0 1.5rem">
        Alpilles &amp; Camargue Collection
      </p>
      <h1 style="font:300 2rem/1.2 Georgia,serif;margin:0 0 1rem">Site en préparation</h1>
      <p style="color:#7c766b;margin:0">
        Cette page est réservée pour le moment. Un mot de passe est nécessaire pour y accéder.
      </p>
    </main>
  </body>
</html>`,
    {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Site en preparation", charset="UTF-8"',
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-store',
      },
    },
  )

export default async (request, context) => {
  const { pathname } = new URL(request.url)

  if (PUBLIC_PATHS.some((p) => pathname.startsWith(p))) {
    return context.next()
  }

  const expected = Netlify.env.get('SITE_PASSWORD')
  if (!expected) {
    return context.next()
  }

  const header = request.headers.get('authorization') || ''
  const [scheme, encoded] = header.split(' ')

  if (scheme === 'Basic' && encoded) {
    try {
      const decoded = atob(encoded)
      // L'identifiant est ignoré : seul le mot de passe compte.
      const given = decoded.slice(decoded.indexOf(':') + 1)
      if (given === expected) {
        return context.next()
      }
    } catch {
      // En-tête mal formé : on redemande le mot de passe.
    }
  }

  return askPassword()
}

export const config = { path: '/*' }
