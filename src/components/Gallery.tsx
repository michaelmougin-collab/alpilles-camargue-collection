import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { gallery, type GalleryItem } from '../data/content'
import { Img } from './ui/Img'
import { Reveal } from './ui/Reveal'

type FilterKey = 'all' | 'mas' | 'camargue'

export function Gallery() {
  const [filter, setFilter] = useState<FilterKey>('all')
  const [active, setActive] = useState<number | null>(null)

  const items = useMemo<GalleryItem[]>(
    () =>
      filter === 'all'
        ? gallery.items
        : gallery.items.filter((i) => i.category === filter),
    [filter],
  )

  const close = () => setActive(null)
  const move = (dir: 1 | -1) =>
    setActive((cur) =>
      cur === null ? cur : (cur + dir + items.length) % items.length,
    )

  // Navigation clavier dans la visionneuse
  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') move(1)
      if (e.key === 'ArrowLeft') move(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, items.length])

  return (
    <section id="collection" className="bg-paper py-[var(--spacing-section)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* En-tête */}
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">{gallery.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-3xl font-light leading-[1.15] text-ink sm:text-4xl lg:text-[2.8rem]">
              {gallery.title}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-lg text-[0.95rem] leading-relaxed text-stone">
              {gallery.intro}
            </p>
          </Reveal>
        </div>

        {/* Filtres */}
        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {gallery.filters.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                className={`relative pb-1 text-[0.8rem] tracking-[0.14em] transition-colors duration-300 ${
                  filter === f.key ? 'text-ink' : 'text-mist hover:text-stone'
                }`}
              >
                {f.label}
                {filter === f.key && (
                  <motion.span
                    layoutId="filter-underline"
                    className="absolute inset-x-0 -bottom-0.5 h-px bg-gold"
                  />
                )}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grille */}
        <motion.div
          layout
          className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {items.map((item, i) => (
              <motion.button
                type="button"
                key={item.title + item.place}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setActive(i)}
                className="group relative block overflow-hidden text-left"
              >
                <div className="aspect-[4/5]">
                  <div className="h-full w-full transition-transform duration-[1400ms] ease-out group-hover:scale-105">
                    <Img src={item.image} alt={`${item.title} — ${item.place}`} className="h-full w-full" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/5 to-transparent opacity-90 transition-opacity duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
                  <p className="text-[0.6rem] uppercase tracking-[0.28em] text-gold/90">
                    {item.place}
                  </p>
                  <h3 className="mt-1 font-serif text-lg font-light leading-tight text-ivory lg:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex items-center gap-2 text-[0.72rem] text-ivory/70 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <span className="inline-block h-px w-5 bg-gold" />
                    Découvrir
                  </p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal delay={0.1}>
          <p className="mt-12 text-center text-[0.82rem] italic leading-relaxed text-mist">
            Nombre de nos plus belles propriétés ne sont jamais présentées publiquement.
            <br className="hidden sm:block" />
            <a href="#contact" className="text-gold underline-offset-4 hover:underline">
              Confiez-nous votre projet
            </a>{' '}
            pour y accéder.
          </p>
        </Reveal>
      </div>

      {/* Visionneuse */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={close}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm sm:p-8"
          >
            {/* Fermer */}
            <button
              type="button"
              aria-label="Fermer"
              onClick={close}
              className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center text-2xl font-light text-ivory/70 transition-colors hover:text-ivory"
            >
              ×
            </button>

            {/* Précédent */}
            <button
              type="button"
              aria-label="Précédent"
              onClick={(e) => {
                e.stopPropagation()
                move(-1)
              }}
              className="absolute left-3 z-10 flex h-12 w-12 items-center justify-center text-2xl text-ivory/60 transition-colors hover:text-ivory sm:left-8"
            >
              ‹
            </button>

            {/* Image + légende */}
            <motion.figure
              key={active}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="flex max-h-full w-full max-w-4xl flex-col items-center"
            >
              <img
                src={items[active].image}
                alt={items[active].title}
                className="max-h-[74vh] w-auto max-w-full object-contain shadow-2xl"
              />
              <figcaption className="mt-5 flex flex-col items-center text-center">
                <span className="text-[0.62rem] uppercase tracking-[0.3em] text-gold">
                  {items[active].place}
                </span>
                <span className="mt-2 font-serif text-2xl font-light text-ivory">
                  {items[active].title}
                </span>
                <span className="mt-1 text-[0.8rem] text-ivory/60">
                  {items[active].detail}
                </span>
              </figcaption>
            </motion.figure>

            {/* Suivant */}
            <button
              type="button"
              aria-label="Suivant"
              onClick={(e) => {
                e.stopPropagation()
                move(1)
              }}
              className="absolute right-3 z-10 flex h-12 w-12 items-center justify-center text-2xl text-ivory/60 transition-colors hover:text-ivory sm:right-8"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
