// Toutes les images du site sont centralisées ici.
// Placeholders de qualité (Unsplash), sélectionnés pour l'esprit du lieu :
// pierre provençale, lavande, oliviers, villages des Alpilles, Camargue.
// Pour une photo définitive, remplacez l'URL par un chemin local
// (ex. hero: '/images/hero.jpg' après dépôt dans public/images/).
//
// Le composant <Img /> affiche un dégradé minéral en repli si une image
// ne se charge pas : aucun visuel cassé.

const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const images = {
  hero: unsplash('photo-1499002238440-d264edd596ec', 2400), // champ de lavande au couchant
  intro: unsplash('photo-1782037307691-2f2835ec7433'), // bâtisses de pierre, volets, fleurs
  approach: unsplash('photo-1738585608732-49294c24ece0'), // intérieur, mur de pierre, lumière douce

  territories: {
    saintRemy: unsplash('photo-1782039361383-74941a941987'), // ruelle voûtée ensoleillée
    eygalieres: unsplash('photo-1770915999076-04383378e0a6'), // maison de pierre, volets bleus
    maussane: unsplash('photo-1782038800671-5adef2b3fd54'), // vignes, oliveraies, montagnes
    mouries: unsplash('photo-1782039522700-91eb3cb12569'), // paysage vallonné, mas, vignes
    arles: unsplash('photo-1782040652087-e31305731017'), // monastère de pierre, coquelicots
    saintesMaries: unsplash('photo-1642269443356-1d0b041acfe8'), // envol d'oiseaux au crépuscule
    camargue: unsplash('photo-1562747981-1975c624e26e', 2400), // flamants roses de Camargue
  },

  // Galerie « Collection » — mas provençaux & propriétés de Camargue
  gallery: {
    mas1: unsplash('photo-1561718541-42d8a5e5792b'), // bastide au cœur des lavandes
    mas2: unsplash('photo-1779777847760-0c0278ff8fb6'), // mas au toit de tuiles, lavande
    mas3: unsplash('photo-1660851976151-2325f1ce9859'), // demeure fleurie
    mas4: unsplash('photo-1780761152169-c298c98ff7f2'), // domaine entouré de lavande
    mas5: unsplash('photo-1782039361562-35cdf7239d57'), // ruelle de pierre, village perché
    mas6: unsplash('photo-1781795035627-fa93f2863bba'), // intérieur pierre & matières nobles
    cam1: unsplash('photo-1675093470046-519ce18a2d51'), // maisons basses au bord de l'eau
    cam2: unsplash('photo-1592056311354-82e8f59fc01a'), // propriété au bord des marais
    cam3: unsplash('photo-1643790397054-947867b0c327'), // domaine équestre, manade
    cam4: unsplash('photo-1602174230639-9fb1cfb980f8'), // cheval camarguais, pâtures
  },
} as const
