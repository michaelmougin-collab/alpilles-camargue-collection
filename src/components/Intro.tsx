import { intro } from '../data/content'
import { Img } from './ui/Img'
import { Reveal } from './ui/Reveal'

export function Intro() {
  return (
    <section id="cabinet" className="bg-ivory py-[var(--spacing-section)]">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-24 lg:px-10">
        {/* Image */}
        <Reveal>
          <div className="relative">
            <Img
              src={intro.image}
              alt="Mas provençal entouré d'oliviers"
              className="aspect-[4/5] w-full"
            />
            {/* Cartouche signature superposé */}
            <div className="absolute -bottom-8 -right-4 hidden max-w-[15rem] bg-ink px-8 py-7 lg:block">
              <p className="font-serif text-lg italic leading-snug text-ivory">
                {intro.signature}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Texte */}
        <div>
          <Reveal>
            <span className="eyebrow">{intro.eyebrow}</span>
            <div className="u-line mt-6" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-serif text-3xl font-light leading-[1.15] text-ink sm:text-4xl lg:text-[2.8rem]">
              {intro.title}
            </h2>
          </Reveal>
          <div className="mt-8 space-y-5">
            {intro.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.15 + i * 0.08}>
                <p className="max-w-xl text-[0.98rem] leading-relaxed text-stone">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
