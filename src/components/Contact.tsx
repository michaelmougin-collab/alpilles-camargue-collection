import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { contact, site } from '../data/content'
import { Logo } from './ui/Logo'
import { Reveal } from './ui/Reveal'

const inputClass =
  'peer w-full border-0 border-b border-ink/15 bg-transparent pb-3 pt-2 text-ink placeholder-transparent transition-colors duration-300 focus:border-gold focus:outline-none'
const labelClass =
  'pointer-events-none absolute left-0 top-2 text-stone transition-all duration-300 peer-focus:-top-3.5 peer-focus:text-[0.7rem] peer-focus:tracking-[0.2em] peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-3.5 peer-[:not(:placeholder-shown)]:text-[0.7rem] peer-[:not(:placeholder-shown)]:tracking-[0.2em] peer-[:not(:placeholder-shown)]:text-stone'

export function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Aucun backend pour l'instant : on confirme visuellement la prise en compte.
    // Brancher ici l'envoi réel (email, API, service de formulaire).
    setSent(true)
  }

  return (
    <section id="contact" className="bg-paper py-[var(--spacing-section)]">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-10">
        {/* Colonne éditoriale */}
        <div>
          <Reveal>
            <Logo className="mb-8 h-24 w-auto lg:h-28" />
            <span className="eyebrow">{contact.eyebrow}</span>
            <div className="u-line mt-6" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-serif text-4xl font-light leading-[1.1] text-ink sm:text-5xl">
              {contact.title}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-7 max-w-md text-[0.98rem] leading-relaxed text-stone">
              {contact.text}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-12 space-y-4 border-t border-ink/10 pt-8">
              <a
                href={`mailto:${site.email}`}
                className="group flex items-center gap-4 text-ink transition-colors hover:text-gold"
              >
                <span className="text-[0.7rem] uppercase tracking-[0.28em] text-stone">
                  Email
                </span>
                <span className="font-serif text-lg">{site.email}</span>
              </a>
              <a
                href={`tel:${site.phone.replace(/\s/g, '')}`}
                className="group flex items-center gap-4 text-ink transition-colors hover:text-gold"
              >
                <span className="text-[0.7rem] uppercase tracking-[0.28em] text-stone">
                  Tél.
                </span>
                <span className="font-serif text-lg">{site.phone}</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Formulaire */}
        <Reveal delay={0.1}>
          <div className="relative">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="merci"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex min-h-[24rem] flex-col items-start justify-center border border-ink/10 bg-ivory p-10"
                >
                  <span className="eyebrow">Bien reçu</span>
                  <p className="mt-6 font-serif text-3xl font-light leading-snug text-ink">
                    Merci. Nous vous recontactons très prochainement, en toute discrétion.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-10"
                >
                  <Field id="name" label={contact.fields.name} type="text" autoComplete="name" />
                  <Field id="email" label={contact.fields.email} type="email" autoComplete="email" />
                  <Field id="phone" label={contact.fields.phone} type="tel" autoComplete="tel" />

                  <div className="relative">
                    <textarea
                      id="project"
                      name="project"
                      rows={3}
                      required
                      placeholder={contact.fields.project}
                      className={`${inputClass} resize-none`}
                    />
                    <label htmlFor="project" className={labelClass}>
                      {contact.fields.project}
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-3 bg-ink py-5 text-[0.82rem] tracking-[0.14em] text-ivory transition-colors duration-500 hover:bg-gold sm:w-auto sm:px-14"
                  >
                    {contact.cta}
                    <span className="transition-transform duration-500 group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  type,
  autoComplete,
}: {
  id: string
  label: string
  type: string
  autoComplete?: string
}) {
  return (
    <div className="relative">
      <input
        id={id}
        name={id}
        type={type}
        required
        autoComplete={autoComplete}
        placeholder={label}
        className={inputClass}
      />
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
    </div>
  )
}
