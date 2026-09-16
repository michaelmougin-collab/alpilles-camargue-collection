// ─────────────────────────────────────────────────────────────
// Contenu éditorial du site.
//
// Les textes et les images ne vivent plus ici : ils sont dans les
// fichiers JSON de `content/`, que le CMS (/admin) écrit directement
// dans le dépôt. Ce fichier ne fait que les charger et leur redonner
// la forme attendue par les composants.
//
// Conséquence : pour changer un texte, passer par /admin — pas par ce
// fichier. Les seules valeurs restées ici sont techniques (ancres de
// navigation, libellés du formulaire), sans intérêt éditorial.
// ─────────────────────────────────────────────────────────────

import siteData from '../../content/site.json'
import heroData from '../../content/hero.json'
import introData from '../../content/intro.json'
import servicesData from '../../content/services.json'
import territoriesData from '../../content/territories.json'
import galleryData from '../../content/gallery.json'
import approachData from '../../content/approach.json'
import contactData from '../../content/contact.json'

export const site = {
  ...siteData,
  // Déclinaisons du logo (dans public/) :
  logoMark: '/logo-monogram.png', // monogramme AC + cercle (fond transparent)
  logoFull: '/logo-emblem-tight.png', // emblème complet transparent — fonds clairs
  logoDark: '/logo-emblem-dark.png', // emblème lumineux — fonds sombres unis
  logoWhite: '/logo-emblem.png', // emblème sur fond blanc d'origine
}

export const nav = [
  { label: 'Le cabinet', href: '#cabinet' },
  { label: 'Services', href: '#services' },
  { label: 'Territoires', href: '#territoires' },
  { label: 'Collection', href: '#collection' },
  { label: 'Approche', href: '#approche' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  eyebrow: heroData.eyebrow,
  // Le titre s'affiche sur deux lignes ; le CMS les édite séparément.
  title: [heroData.titleLine1, heroData.titleLine2],
  subtitle: heroData.subtitle,
  cta: heroData.cta,
  image: heroData.image,
}

export const intro = introData

export const services = servicesData

export type Territory = {
  name: string
  note: string
  image: string
  span?: 'wide'
}

// Le CMS manipule une case à cocher « pleine largeur » ; la mise en page
// attend la valeur 'wide'. La conversion se fait ici.
export const territories = {
  eyebrow: territoriesData.eyebrow,
  title: territoriesData.title,
  intro: territoriesData.intro,
  items: territoriesData.items.map(({ wide, ...rest }) => ({
    ...rest,
    ...(wide ? { span: 'wide' as const } : {}),
  })) as Territory[],
}

export type GalleryCategory = 'mas' | 'camargue'

export type GalleryItem = {
  title: string
  place: string
  detail: string
  category: GalleryCategory
  image: string
}

export const gallery = {
  eyebrow: galleryData.eyebrow,
  title: galleryData.title,
  intro: galleryData.intro,
  filters: [
    { key: 'all' as const, label: 'Toutes' },
    { key: 'mas' as const, label: 'Mas & Alpilles' },
    { key: 'camargue' as const, label: 'Maisons de Camargue' },
  ],
  items: galleryData.items as GalleryItem[],
}

export const approach = approachData

export const contact = {
  ...contactData,
  // Libellés techniques du formulaire, hors CMS.
  sending: 'Envoi…',
  error: 'L’envoi n’a pas abouti. Écrivez-nous directement à',
  fields: {
    name: 'Nom',
    email: 'Email',
    phone: 'Téléphone',
    project: 'Votre projet',
  },
}
