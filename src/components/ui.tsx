import { motion, type Variants } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import type { ReactNode } from 'react'
import { WHATSAPP_URL } from '../config'

export const ease = [0.22, 1, 0.36, 1] as const

export const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-gold">
      {children}
    </span>
  )
}

export function Glow({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full bg-gold/10 blur-3xl ${className}`}
    />
  )
}

export function CTAButton({
  children,
  pulse = false,
  large = false,
}: {
  children: ReactNode
  pulse?: boolean
  large?: boolean
}) {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease }}
      className={`inline-flex items-center justify-center gap-3 rounded-full bg-gold font-sans font-bold uppercase tracking-[0.14em] text-black transition-shadow duration-300 hover:shadow-[0_12px_40px_-6px_rgba(255,255,255,0.45)] ${
        large ? 'px-8 py-5 text-sm sm:px-12 sm:py-6 sm:text-base' : 'px-8 py-4 text-sm'
      } ${pulse ? 'animate-soft-pulse' : ''}`}
    >
      <MessageCircle size={large ? 22 : 18} aria-hidden />
      {children}
    </motion.a>
  )
}

/** Imagem real quando `src` existe (lazy), senão placeholder marcado. */
export function Media({
  src,
  alt,
  label,
  className = '',
  imgClassName = '',
}: {
  src: string | null
  alt: string
  label: string
  className?: string
  imgClassName?: string
}) {
  return (
    <div className={`relative overflow-hidden border border-gold/10 bg-surface ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      ) : (
        <div
          role="img"
          aria-label={`${alt} (imagem pendente)`}
          className={`flex h-full w-full flex-col items-center justify-center gap-2 bg-[radial-gradient(ellipse_at_30%_20%,#171717_0%,#0a0a0a_60%,#000_100%)] p-4 text-center ${imgClassName}`}
        >
          <span className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
            Imagem pendente
          </span>
          <span className="font-sans text-sm text-zinc-400">{label}</span>
        </div>
      )}
    </div>
  )
}
