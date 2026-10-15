import { motion } from 'framer-motion'
import { Instagram, MapPin, MessageCircle } from 'lucide-react'
import { ADDRESS, HOURS, INSTAGRAM_URL, MAPS_URL, WHATSAPP_URL } from '../config'
import { CTAButton, Glow, container, fadeUp } from './ui'

const linkClass =
  'inline-flex items-center gap-2 text-zinc-400 transition-all duration-300 hover:translate-x-1 hover:text-gold'

export default function FinalCTA() {
  return (
    <>
      <section id="agendar" className="relative overflow-x-clip bg-black pb-24 pt-32 sm:pt-40">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="relative mx-auto flex max-w-3xl flex-col items-center px-5 text-center sm:px-8"
        >
          <Glow className="left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 sm:h-80 sm:w-80" />
          <motion.h2
            variants={fadeUp}
            className="relative font-display text-4xl font-semibold leading-tight tracking-tight sm:text-6xl"
          >
            Pronto para alinhar sua imagem?
          </motion.h2>
          <motion.p variants={fadeUp} className="relative mt-5 text-base text-zinc-300 sm:text-lg">
            Agende seu horário direto pelo WhatsApp.
          </motion.p>
          <motion.div variants={fadeUp} className="relative mt-12 w-full sm:w-auto">
            <CTAButton large pulse>
              Agendar agora (077 99872-0600)
            </CTAButton>
          </motion.div>
        </motion.div>
      </section>

      <footer className="relative">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm text-sm leading-relaxed text-zinc-400">
            <p className="font-display text-lg font-semibold text-white">
              GUI<span className="text-gold"> STYLE</span>
            </p>
            <p className="mt-3">Gui Style - Brumado, Bahia.</p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-start gap-2 transition-colors duration-300 hover:text-gold"
            >
              <MapPin size={16} className="mt-0.5 shrink-0" aria-hidden />
              <span>{ADDRESS}</span>
            </a>
            <dl className="mt-5 grid grid-cols-[auto_auto] justify-start gap-x-6 gap-y-1">
              {HOURS.map((h) => (
                <div key={h.day} className="contents">
                  <dt>{h.day}</dt>
                  <dd className={h.time === 'Fechado' ? 'text-zinc-500' : 'text-white'}>{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
          <ul className="flex flex-col gap-4 text-sm">
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <MessageCircle size={16} aria-hidden /> WhatsApp
              </a>
            </li>
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <Instagram size={16} aria-hidden /> @guistyle_
              </a>
            </li>
          </ul>
        </div>
        <p className="py-5 text-center text-xs text-zinc-400">
          © {new Date().getFullYear()} Gui Style. Todos os direitos reservados.
        </p>
      </footer>
    </>
  )
}
