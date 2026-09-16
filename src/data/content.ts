import { images } from './images'

// ─────────────────────────────────────────────────────────────
// Contenu éditorial du site. Centralisé pour une édition simple.
// Le ton : sobre, discret, haut de gamme. Peu de texte, du souffle.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Alpilles & Camargue',
  suffix: 'Collection',
  monogram: 'AC',
  tagline: 'Conseil en acquisition, valorisation et location de propriétés d’exception.',
  email: 'contact@alpilles-camargue.collection',
  phone: '+33 4 90 00 00 00',
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
  eyebrow: 'Suisse — Provence',
  title: ['Alpilles & Camargue', 'Collection'],
  subtitle:
    'Conseil privé en immobilier de prestige, entre la Suisse et la Provence.',
  cta: 'Présenter mon projet',
  image: images.hero,
}

export const intro = {
  eyebrow: 'Le cabinet',
  title: 'Un accompagnement confidentiel, à la hauteur des plus belles propriétés.',
  paragraphs: [
    'Alpilles & Camargue Collection n’est pas une agence. C’est un cabinet de conseil privé, dédié à une clientèle exigeante qui souhaite acquérir, valoriser ou transmettre un bien d’exception en Provence.',
    'Nous cultivons une approche rare : la discrétion avant l’exposition, le conseil avant la transaction, la relation avant l’intérêt. Chaque projet est unique et mérite une attention entière.',
    'De la première conversation à la remise des clés, un seul interlocuteur orchestre l’ensemble — avec la rigueur d’un conseil patrimonial et le regard d’un esthète.',
  ],
  image: images.intro,
  signature: 'Un art du conseil, une exigence de l’excellence.',
}

export const services = {
  eyebrow: 'Nos services',
  title: 'Un savoir-faire complet, au service d’une seule ambition : la vôtre.',
  items: [
    {
      index: '01',
      title: 'Acquisition',
      text: 'Recherche confidentielle de propriétés d’exception, y compris hors marché, et négociation menée dans votre seul intérêt.',
    },
    {
      index: '02',
      title: 'Valorisation patrimoniale',
      text: 'Conseil stratégique pour révéler et faire croître la valeur d’un bien, de la rénovation à l’optimisation de sa destination.',
    },
    {
      index: '03',
      title: 'Location haut de gamme',
      text: 'Mise en valeur et gestion discrète de propriétés en location saisonnière de prestige, avec un soin d’hôtellerie.',
    },
    {
      index: '04',
      title: 'Investisseurs étrangers',
      text: 'Accompagnement des clients suisses et internationaux dans un investissement serein en France, à chaque étape.',
    },
    {
      index: '05',
      title: 'Coordination des partenaires',
      text: 'Interface unique avec notaires, fiscalistes, architectes et artisans, pour une exécution fluide et maîtrisée.',
    },
    {
      index: '06',
      title: 'Accompagnement personnalisé',
      text: 'Une relation de long terme, sur mesure, où l’écoute et la disponibilité priment sur le volume.',
    },
  ],
}

export const territories = {
  eyebrow: 'Les territoires',
  title: 'Des Alpilles à la Camargue, une géographie d’exception.',
  intro:
    'Un territoire où la lumière, la pierre et le silence composent l’un des plus beaux art de vivre de Méditerranée.',
  items: [
    {
      name: 'Saint-Rémy-de-Provence',
      note: 'L’élégance provençale',
      image: images.territories.saintRemy,
      span: 'wide',
    },
    {
      name: 'Eygalières',
      note: 'Le raffinement discret',
      image: images.territories.eygalieres,
    },
    {
      name: 'Maussane-les-Alpilles',
      note: 'Au cœur des oliveraies',
      image: images.territories.maussane,
    },
    {
      name: 'Mouriès',
      note: 'L’or vert des Alpilles',
      image: images.territories.mouries,
    },
    {
      name: 'Arles',
      note: 'L’âme romaine',
      image: images.territories.arles,
    },
    {
      name: 'Les Saintes-Maries-de-la-Mer',
      note: 'L’horizon camarguais',
      image: images.territories.saintesMaries,
    },
    {
      name: 'Camargue',
      note: 'La nature à l’état pur',
      image: images.territories.camargue,
      span: 'wide',
    },
  ] as Territory[],
}

export type Territory = {
  name: string
  note: string
  image: string
  span?: 'wide'
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
  eyebrow: 'La collection',
  title: 'Des mas des Alpilles aux maisons de Camargue.',
  intro:
    'Un aperçu de l’art de vivre que nous accompagnons — propriétés présentées à titre d’illustration, dans le plus grand respect de la confidentialité.',
  filters: [
    { key: 'all' as const, label: 'Toutes' },
    { key: 'mas' as const, label: 'Mas & Alpilles' },
    { key: 'camargue' as const, label: 'Maisons de Camargue' },
  ],
  items: [
    {
      title: 'Bastide en lavande',
      place: 'Saint-Rémy-de-Provence',
      detail: 'Domaine & champs de lavande',
      category: 'mas',
      image: images.gallery.mas1,
    },
    {
      title: 'Mas au toit de tuiles',
      place: 'Alpilles',
      detail: 'Pierre ancienne, oliveraie',
      category: 'mas',
      image: images.gallery.mas2,
    },
    {
      title: 'Maisons au bord de l’eau',
      place: 'Les Saintes-Maries-de-la-Mer',
      detail: 'Façades claires, plain-pied',
      category: 'camargue',
      image: images.gallery.cam1,
    },
    {
      title: 'Demeure fleurie',
      place: 'Maussane-les-Alpilles',
      detail: 'Jardin clos, glycine',
      category: 'mas',
      image: images.gallery.mas3,
    },
    {
      title: 'Domaine équestre',
      place: 'Camargue',
      detail: 'Manade, chevaux camarguais',
      category: 'camargue',
      image: images.gallery.cam3,
    },
    {
      title: 'Bastide & jardins',
      place: 'Eygalières',
      detail: 'Parc paysager, oliviers',
      category: 'mas',
      image: images.gallery.mas4,
    },
    {
      title: 'Propriété des marais',
      place: 'Camargue',
      detail: 'Horizon & roselières',
      category: 'camargue',
      image: images.gallery.cam2,
    },
    {
      title: 'Maison de village',
      place: 'Les Baux-de-Provence',
      detail: 'Ruelles de pierre',
      category: 'mas',
      image: images.gallery.mas5,
    },
    {
      title: 'Mas de manade',
      place: 'Camargue intérieure',
      detail: 'Terres & pâtures',
      category: 'camargue',
      image: images.gallery.cam4,
    },
    {
      title: 'Intérieur d’exception',
      place: 'Arles',
      detail: 'Pierre & matières nobles',
      category: 'mas',
      image: images.gallery.mas6,
    },
  ] as GalleryItem[],
}

export const approach = {
  eyebrow: 'Notre approche',
  title: 'Un interlocuteur unique. Une exigence absolue.',
  paragraphs: [
    'Nous croyons qu’un grand projet immobilier se conduit comme une relation de confiance : dans la durée, la discrétion et la justesse du conseil.',
    'Loin de la logique de volume, nous choisissons de n’accompagner qu’un nombre restreint de clients afin de leur consacrer une attention sans partage.',
  ],
  image: images.approach,
  pillars: [
    {
      title: 'Discrétion',
      text: 'La confidentialité est notre première marque de respect. Rien ne s’expose sans votre accord.',
    },
    {
      title: 'Excellence',
      text: 'Une exigence de chaque instant, du choix des biens à la qualité des partenaires.',
    },
    {
      title: 'Relation durable',
      text: 'Nous nous inscrivons dans le temps long, bien au-delà d’une simple transaction.',
    },
  ],
}

export const contact = {
  eyebrow: 'Contact',
  title: 'Présentons votre projet.',
  text: 'Confiez-nous quelques mots sur votre projet. Nous vous recontactons personnellement, en toute discrétion.',
  cta: 'Être rappelé',
  fields: {
    name: 'Nom',
    email: 'Email',
    phone: 'Téléphone',
    project: 'Votre projet',
  },
}
