import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { nav, site } from '../data/content'
import { Logo } from './ui/Logo'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Verrouille le défilement quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const solid = scrolled || open
  // Le menu n'affiche pas « Contact » : le bouton « Nous contacter » en tient lieu.
  const menu = nav.filter((item) => item.href !== '#contact')

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid
          ? 'border-b border-ink/5 bg-ivory/85 backdrop-blur-md'
          : 'bg-gradient-to-b from-black/55 via-black/25 to-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a
          href="#top"
          className={`flex items-center gap-3.5 transition-colors duration-500 ${
            solid ? 'text-ink' : 'text-ivory'
          }`}
        >
          <Logo
            tone={solid ? 'color' : 'silhouette'}
            className={`h-12 w-auto transition-all duration-500 lg:h-14 ${
              solid ? '' : 'drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]'
            }`}
          />
          <span
            className={`leading-tight ${
              solid ? '' : '[text-shadow:0_1px_14px_rgba(0,0,0,0.55)]'
            }`}
          >
            <span className="block font-serif text-lg font-normal tracking-[0.02em] lg:text-xl">
              Alpilles <span className="italic text-gold">&amp;</span> Camargue
            </span>
            <span className="mt-1 flex items-center gap-2">
              <span className={`h-px w-5 ${solid ? 'bg-gold/60' : 'bg-ivory/50'}`} />
              <span className="text-[0.56rem] uppercase tracking-[0.46em] text-gold">
                {site.suffix}
              </span>
            </span>
          </span>
        </a>

        {/* Desktop */}
        <ul
          className={`hidden items-center gap-8 lg:flex ${
            solid ? '' : '[text-shadow:0_1px_12px_rgba(0,0,0,0.5)]'
          }`}
        >
          {menu.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`group relative text-[0.72rem] uppercase tracking-[0.2em] transition-colors duration-500 ${
                  solid ? 'text-graphite hover:text-ink' : 'text-ivory hover:text-white'
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className={`border px-5 py-2.5 text-[0.66rem] uppercase tracking-[0.2em] transition-all duration-500 ${
                solid
                  ? 'border-ink/25 text-ink hover:border-gold hover:text-gold'
                  : 'border-ivory/50 text-ivory hover:border-ivory hover:bg-ivory hover:text-ink'
              }`}
            >
              Nous contacter
            </a>
          </li>
        </ul>

        {/* Bouton mobile */}
        <button
          type="button"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-[6px] lg:hidden"
        >
          <span
            className={`h-px w-6 transition-all duration-300 ${
              solid ? 'bg-ink' : 'bg-ivory'
            } ${open ? 'translate-y-[3.5px] rotate-45' : ''}`}
          />
          <span
            className={`h-px w-6 transition-all duration-300 ${
              solid ? 'bg-ink' : 'bg-ivory'
            } ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`}
          />
        </button>
      </nav>

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 top-0 -z-10 flex flex-col justify-center bg-ivory px-8 lg:hidden"
          >
            <ul className="space-y-6">
              {menu.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-serif text-3xl text-ink"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
