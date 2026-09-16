import { useState } from 'react'

type Props = {
  src: string
  alt: string
  className?: string
}

/**
 * Image avec chargement en fondu et repli minéral.
 * Si la source échoue, un dégradé beige pierre / doré prend le relais :
 * aucun visuel cassé, l'esthétique reste maîtrisée.
 */
export function Img({ src, alt, className = '' }: Props) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  return (
    <div className={`relative overflow-hidden bg-sand ${className}`}>
      {/* Repli dégradé minéral — pendant le chargement ou en cas d'échec */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(135deg,#e7dfd1_0%,#d3c6ac_45%,#b3a17e_100%)]"
      />
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-out ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  )
}
