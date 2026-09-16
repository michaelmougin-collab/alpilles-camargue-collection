import { territories, type Territory } from '../data/content'
import { Img } from './ui/Img'
import { Logo } from './ui/Logo'
import { Reveal } from './ui/Reveal'

function Card({ t }: { t: Territory }) {
  const wide = t.span === 'wide'
  return (
    <a href="#contact" className="group relative block overflow-hidden">
      <div className={wide ? 'aspect-[16/9]' : 'aspect-[3/4]'}>
        <div className="h-full w-full transition-transform duration-[1400ms] ease-out group-hover:scale-105">
          <Img src={t.image} alt={t.name} className="h-full w-full" />
        </div>
      </div>

      {/* Voile + libellés */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent transition-opacity duration-500 group-hover:from-ink/80" />
      <div className="absolute inset-x-0 bottom-0 p-7 lg:p-8">
        <p className="text-[0.68rem] uppercase tracking-[0.3em] text-gold/90">{t.note}</p>
        <h3 className="mt-2 font-serif text-2xl font-light text-ivory lg:text-3xl">
          {t.name}
        </h3>
        <span className="mt-3 block h-px w-0 bg-gold transition-all duration-700 group-hover:w-14" />
      </div>
    </a>
  )
}

export function Territories() {
  return (
    <section id="territoires" className="bg-ink py-[var(--spacing-section)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <Reveal>
              <Logo tone="silhouette" className="mb-6 h-24 w-auto" />
              <span className="eyebrow">{territories.eyebrow}</span>
              <div className="u-line mt-6" />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 max-w-lg font-serif text-3xl font-light leading-[1.15] text-ivory sm:text-4xl lg:text-[2.8rem]">
                {territories.title}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p className="max-w-md text-[0.98rem] leading-relaxed text-mist lg:pb-2">
              {territories.intro}
            </p>
          </Reveal>
        </div>

        {/* Mosaïque */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {territories.items.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.06} className={t.span === 'wide' ? 'sm:col-span-2' : ''}>
              <Card t={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
