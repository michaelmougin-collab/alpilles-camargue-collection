import { approach } from '../data/content'
import { Img } from './ui/Img'
import { Reveal } from './ui/Reveal'

export function Approach() {
  return (
    <section id="approche" className="bg-ivory py-[var(--spacing-section)]">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-12 lg:gap-20 lg:px-10">
        {/* Texte */}
        <div className="lg:col-span-6">
          <Reveal>
            <span className="eyebrow">{approach.eyebrow}</span>
            <div className="u-line mt-6" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-serif text-3xl font-light leading-[1.15] text-ink sm:text-4xl lg:text-[2.8rem]">
              {approach.title}
            </h2>
          </Reveal>
          <div className="mt-8 space-y-5">
            {approach.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.15 + i * 0.08}>
                <p className="max-w-xl text-[0.98rem] leading-relaxed text-stone">{p}</p>
              </Reveal>
            ))}
          </div>

          {/* Piliers */}
          <div className="mt-12 space-y-px border-t border-ink/10">
            {approach.pillars.map((pil, i) => (
              <Reveal key={pil.title} delay={0.2 + i * 0.08}>
                <div className="flex gap-6 border-b border-ink/10 py-6">
                  <span className="font-serif text-lg text-gold">0{i + 1}</span>
                  <div>
                    <h3 className="font-serif text-xl text-ink">{pil.title}</h3>
                    <p className="mt-1.5 text-[0.92rem] leading-relaxed text-stone">
                      {pil.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Image */}
        <Reveal delay={0.1} className="lg:col-span-6">
          <Img
            src={approach.image}
            alt="Intérieur de pierre baigné de lumière"
            className="aspect-[4/5] w-full lg:sticky lg:top-28"
          />
        </Reveal>
      </div>
    </section>
  )
}
