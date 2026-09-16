import { motion } from 'framer-motion'
import { hero } from '../data/content'
import { Img } from './ui/Img'
import { Logo } from './ui/Logo'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Visuel plein écran avec léger zoom d'ouverture */}
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease }}
        className="absolute inset-0"
      >
        <Img src={hero.image} alt="Paysage de Provence" className="h-full w-full" />
      </motion.div>

      {/* Voile dégradé pour la lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/25 to-ink/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />

      {/* Contenu */}
      <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.4, ease }}
          className="mb-6"
        >
          <Logo
            tone="silhouette"
            className="h-24 w-auto drop-shadow-[0_2px_22px_rgba(0,0,0,0.5)] sm:h-28 lg:h-36"
          />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease }}
          className="eyebrow mb-8 text-gold"
        >
          {hero.eyebrow}
        </motion.span>

        <h1 className="font-serif font-light leading-[1.02] text-ivory">
          {hero.title.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block text-[2.6rem] sm:text-6xl lg:text-7xl"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.6 + i * 0.15, ease }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease }}
          className="mt-8 max-w-xl text-base font-light leading-relaxed text-ivory/85 sm:text-lg"
        >
          {hero.subtitle}
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.35, ease }}
          className="group mt-11 inline-flex items-center gap-3 border border-ivory/50 px-8 py-4 text-[0.82rem] tracking-[0.12em] text-ivory transition-all duration-500 hover:border-ivory hover:bg-ivory hover:text-ink"
        >
          {hero.cta}
          <span className="transition-transform duration-500 group-hover:translate-x-1">
            →
          </span>
        </motion.a>
      </div>

      {/* Indicateur de défilement */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="h-10 w-px bg-ivory/50"
        />
      </motion.div>
    </section>
  )
}
