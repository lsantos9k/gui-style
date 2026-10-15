import { motion } from 'framer-motion'
import { WHATSAPP_URL } from '../config'

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="sticky top-0 z-50 border-b border-gold/10 bg-black/60 backdrop-blur-xl"
    >
      <nav
        aria-label="Principal"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#top" className="font-display text-lg font-semibold tracking-wide text-white">
          GUI<span className="text-gold"> STYLE</span>
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-gold/40 px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-gold transition-colors hover:bg-gold hover:text-black"
        >
          Agendar
        </a>
      </nav>
    </motion.header>
  )
}
