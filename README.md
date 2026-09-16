# Alpilles & Camargue Collection

Site vitrine (landing page) pour un cabinet de conseil privé en immobilier de prestige,
entre la Suisse et la Provence.

Stack : **React + Vite + TypeScript + Tailwind CSS v4 + Framer Motion**.

## Démarrer

```bash
npm install
npm run dev      # développement — http://localhost:5173
npm run build    # build de production dans /dist
npm run preview  # prévisualiser le build
```

## Déposer le logo

Le logo fourni doit être enregistré ici :

```
public/logo.png     (ou public/logo.svg — dans ce cas, changez site.logo dans src/data/content.ts)
```

Tant que le fichier n'est pas présent, le pied de page affiche automatiquement
un repli typographique élégant — rien n'est cassé.

## Modifier le contenu

Tout le texte est centralisé, aucun besoin de toucher aux composants :

- **`src/data/content.ts`** — tous les textes (hero, services, territoires, contact…)
- **`src/data/images.ts`** — toutes les images (placeholders Unsplash de qualité)

Pour remplacer une photo par une image définitive, déposez-la dans `public/images/`
et remplacez l'URL correspondante dans `src/data/images.ts`
(ex. `hero: '/images/hero.jpg'`). Si une image ne se charge pas, un dégradé
minéral prend le relais : aucun visuel cassé.

## Structure

```
src/
  App.tsx                 assemblage des sections
  data/
    content.ts            contenu éditorial
    images.ts             sources des images
  components/
    Nav.tsx               navigation (transparente sur le hero, opaque au défilement)
    Hero.tsx              visuel plein écran + titre
    Intro.tsx             présentation du cabinet
    Services.tsx          6 services en cartes
    Territories.tsx       mosaïque des territoires
    Approach.tsx          approche + 3 piliers
    Contact.tsx           formulaire « Être rappelé »
    Footer.tsx            logo + coordonnées
    ui/
      Img.tsx             image en fondu, repli minéral
      Reveal.tsx          révélation discrète au défilement
```

## Formulaire de contact

Le formulaire affiche une confirmation visuelle mais **n'envoie encore rien**.
Pour brancher l'envoi réel (email, API, service type Formspree), voir le
commentaire dans `src/components/Contact.tsx` → `handleSubmit`.

## Palette

Blanc cassé `#F6F3EE` · Noir chaud `#1C1A17` · Gris chaud `#7C766B` ·
Beige pierre `#C9BDA6` · Doré discret `#A98B5E`.
Définie dans `src/index.css` (`@theme`).
