import { AnimatePresence, motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { useEffect, useState } from 'react'
import { SPACE_PHOTOS } from '../config'
import { Glow, Kicker, ease } from './ui'

const INTERVAL_MS = 4500

function Slideshow() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = window.setInterval(() => setIndex((i) => (i + 1) % SPACE_PHOTOS.length), INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [paused, index])

  const photo = SPACE_PHOTOS[index]

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-gold/10 bg-black">
        <AnimatePresence initial={false}>
          <motion.img
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            loading={index === 0 ? 'lazy' : 'eager'}
            decoding="async"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
      </div>
      <div className="mt-5 flex justify-center gap-2" role="group" aria-label="Fotos do espaço">
        {SPACE_PHOTOS.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Foto ${i + 1} de ${SPACE_PHOTOS.length}`}
            aria-current={i === index}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? 'w-8 bg-gold' : 'w-3 bg-zinc-600 hover:bg-zinc-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Space() {
  return (
    <section id="espaco" className="relative overflow-hidden bg-black py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease }}
        >
          <Slideshow />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
          className="relative text-center md:text-left"
        >
          <Glow className="left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2" />
          <div className="relative flex flex-col items-center md:items-start">
            <Kicker>A Experiência</Kicker>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              O Espaço Gui Style
            </h2>
            <p className="mt-4 inline-flex items-center gap-2 text-base font-medium text-gold sm:text-lg">
              <MapPin size={18} aria-hidden />
              Localizado em Brumado. Projetado para o seu conforto.
            </p>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-zinc-300 sm:text-lg">
              Um ambiente pensado para quem não tem tempo a perder, mas não abre mão da
              excelência. Atendimento com hora marcada, climatização perfeita e respeito à sua
              imagem.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
