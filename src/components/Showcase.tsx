import { motion } from 'framer-motion'
import { SHOWCASE } from '../config'
import { Kicker, Media, container, fadeUp } from './ui'

function Track({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {/* Lista repetida para a faixa sempre ser mais larga que a tela (sem vão no loop). */}
      {[...SHOWCASE, ...SHOWCASE].map((src, n) => {
        const i = n % SHOWCASE.length
        return (
        <li
          key={n}
          className="group mr-4 w-56 shrink-0 sm:mr-5 sm:w-64"
        >
          <Media
            src={src}
            alt={`Corte Gui Style ${i + 1}`}
            label={`Foto ${i + 1} do portfólio`}
            className="aspect-[3/4] w-full rounded-2xl"
            imgClassName="[object-position:50%_35%] transition-transform duration-700 group-hover:scale-105"
          />
        </li>
        )
      })}
    </ul>
  )
}

export default function Showcase() {
  return (
    <section id="portfolio" className="relative overflow-hidden bg-black py-24">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        <div className="mx-auto flex max-w-2xl flex-col items-center px-5 text-center">
          <motion.div variants={fadeUp}>
            <Kicker>Portfólio</Kicker>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            Nossa Assinatura
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-base text-zinc-300 sm:text-lg">
            Mais que um corte, um projeto de imagem pessoal.
          </motion.p>
        </div>

        <motion.div
          variants={fadeUp}
          className="marquee mt-14 flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]"
        >
          <div className="marquee-inner flex w-max">
            <Track />
            <Track hidden />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
