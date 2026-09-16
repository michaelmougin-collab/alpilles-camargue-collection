import { nav, site } from '../data/content'
import { Logo } from './ui/Logo'

export function Footer() {
  return (
    <footer className="bg-ivory">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        {/* Marque */}
        <div className="flex flex-col items-center text-center">
          <Logo className="w-44 lg:w-52" />
          <div className="mt-6">
            <p className="font-serif text-2xl font-light tracking-wide text-ink lg:text-3xl">
              {site.name}
            </p>
            <p className="mt-2 text-[0.7rem] uppercase tracking-[0.4em] text-gold">
              {site.suffix}
            </p>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-stone">{site.tagline}</p>
        </div>

        {/* Séparateur en losange doré */}
        <div className="my-12 flex items-center justify-center gap-3">
          <span className="h-px w-16 bg-clay" />
          <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
          <span className="h-px w-16 bg-clay" />
        </div>

        {/* Navigation + coordonnées */}
        <div className="flex flex-col items-center gap-8">
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[0.8rem] tracking-wide text-stone transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[0.8rem] text-stone">
            <a href={`mailto:${site.email}`} className="transition-colors hover:text-gold">
              {site.email}
            </a>
            <a
              href={`tel:${site.phone.replace(/\s/g, '')}`}
              className="transition-colors hover:text-gold"
            >
              {site.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Bas de page */}
      <div className="border-t border-ink/8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-[0.72rem] text-mist sm:flex-row lg:px-10">
          <p>
            © {2026} {site.name} {site.suffix}. Tous droits réservés.
          </p>
          <p className="tracking-wide">Conseil privé — Suisse &amp; Provence</p>
        </div>
      </div>
    </footer>
  )
}
