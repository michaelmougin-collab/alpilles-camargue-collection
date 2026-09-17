import { services } from '../data/content'
import { Reveal } from './ui/Reveal'

export function Services() {
  return (
    <section id="services" className="bg-lavender py-[var(--spacing-section)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* En-tête */}
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">{services.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-3xl font-light leading-[1.15] text-ink sm:text-4xl lg:text-[2.8rem]">
              {services.title}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="u-line mx-auto mt-8" />
          </Reveal>
        </div>

        {/* Grille de cartes */}
        <div className="mt-16 grid gap-px overflow-hidden border border-ink/8 bg-ink/8 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {services.items.map((s, i) => (
            <Reveal key={s.index} delay={(i % 3) * 0.08}>
              <article className="group h-full bg-lavender p-9 transition-colors duration-500 hover:bg-lavender-light lg:p-11">
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-2xl text-clay transition-colors duration-500 group-hover:text-gold">
                    {s.index}
                  </span>
                  <span className="h-px w-8 bg-clay transition-all duration-500 group-hover:w-12 group-hover:bg-gold" />
                </div>
                <h3 className="mt-8 font-serif text-2xl font-light text-ink">{s.title}</h3>
                <p className="mt-4 text-[0.92rem] leading-relaxed text-stone">{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
