import { motion } from 'framer-motion'
import { site } from '../../data/content'

/**
 * Rendus disponibles :
 *  - 'color'      : emblème complet, transparent → fonds CLAIRS (ivoire, photos claires)
 *  - 'glow'       : emblème lumineux pré-rendu → fonds SOMBRES UNIS (ink, noir)
 *  - 'silhouette' : emblème en blanc → petit format sur photo sombre (navigation)
 */
type Tone = 'color' | 'glow' | 'silhouette'

type Props = {
  tone?: Tone
  className?: string
}

export function Logo({ tone = 'color', className = '' }: Props) {
  const src = tone === 'glow' ? site.logoDark : site.logoFull
  const filter = tone === 'silhouette' ? 'brightness-0 invert' : ''
  return (
    <img
      src={src}
      alt={`${site.name} ${site.suffix}`}
      className={`select-none ${filter} ${className}`}
      draggable={false}
    />
  )
}

/**
 * Séparateur de marque — emblème complet encadré de deux filets dorés.
 */
export function BrandDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-6 ${className}`}>
      <span className="h-px w-16 bg-clay sm:w-24" />
      <img
        src={site.logoFull}
        alt=""
        aria-hidden
        className="h-20 w-auto opacity-95 sm:h-24"
        draggable={false}
      />
      <span className="h-px w-16 bg-clay sm:w-24" />
    </div>
  )
}

/**
 * Bande signature — emblème lumineux en grand sur fond noir pur.
 * Le noir #000 correspond exactement aux coins de l'image : fondu parfait.
 */
export function BrandSignature() {
  return (
    <section className="bg-black">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center lg:py-28">
        <motion.img
          src={site.logoDark}
          alt={`${site.name} ${site.suffix}`}
          draggable={false}
          className="h-72 w-auto sm:h-80 lg:h-[26rem]"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="-mt-4 text-[0.72rem] uppercase tracking-[0.4em] text-gold/80 lg:-mt-8"
        >
          Suisse — Provence
        </motion.p>
      </div>
    </section>
  )
}
