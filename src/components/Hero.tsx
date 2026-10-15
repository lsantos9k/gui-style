import { motion } from 'framer-motion'
import { IMAGES } from '../config'
import { CTAButton, Glow, container, ease, fadeUp } from './ui'
import { Media } from './ui'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-black">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:min-h-[calc(100vh-4rem)] md:grid-cols-2 md:gap-16 md:py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative flex flex-col items-center text-center md:items-start md:text-left"
        >
          <Glow className="left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 md:left-1/4 md:h-96 md:w-96" />
          <motion.h1
            variants={fadeUp}
            className="relative font-display text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            O SEU ESTILO, <span className="text-gold">ELEVADO.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="relative mt-6 max-w-md text-base leading-relaxed text-zinc-300 sm:text-lg"
          >
            A barbearia de referência em Brumado para quem exige um fade impecável, alinhamento
            perfeito e atendimento exclusivo.
          </motion.p>
          <motion.div variants={fadeUp} className="relative mt-10">
            <CTAButton>Agendar meu horário</CTAButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease }}
          className="mx-auto w-full max-w-sm md:max-w-none"
        >
          <Media
            src={IMAGES.hero}
            alt="Cadeira de barbeiro e prateleiras no interior da Gui Style"
            label="Retrato: cadeira do barbeiro ou fade impecável (4:5, dessaturado)"
            className="aspect-[4/5] w-full rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  )
}
