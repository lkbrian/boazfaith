import { AnimatePresence, motion } from 'framer-motion'
import { CalendarDays } from 'lucide-react'

import { weddingDayMessages } from '../../data/wedding'
import { Button } from '../ui/button'
import { fadeUp } from '../shared/Reveal'
import { useCountdown } from '../shared/useCountdown'
import { useRotatingIndex } from '../shared/useRotatingIndex'

type Props = {
  coupleNames?: string
  weddingDate?: string
  tagline?: string
}

const scrollTo = (href: string) =>
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

export function HeroSection({ coupleNames, weddingDate, tagline }: Props) {
  const countdown = useCountdown('2026-08-08T14:00:00+03:00')
  const isToday = Object.values(countdown).every((value) => value === 0)
  const messageIndex = useRotatingIndex(weddingDayMessages.length, 60000, isToday)

  return (
    <section id="home" className="relative h-[95svh] overflow-hidden ">
      <img alt="Wedding hero" className="absolute inset-0 h-full w-full object-cover" src="/hero.jpeg" />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative flex h-full flex-col items-center justify-center px-5 pb-36 pt-28 text-center">
        <motion.div animate="show" initial="hidden" variants={fadeUp}>
          <p className="mb-4 text-sm uppercase tracking-[0.45rem]  text-purple-300">You are invited</p>
          <h1 className="font-serif text-6xl font-medium leading-none text-white sm:text-7xl lg:text-9xl">
            {coupleNames ?? 'Boaz & Faith'}
          </h1>
          <p className="mt-6 flex items-center justify-center gap-3 text-2lg text-purple-200">
            <CalendarDays className="h-5 w-5" />
            <h1 className='text-3xl font-bold'>{weddingDate ?? 'August 8, 2026'}</h1>
          </p>
          <p className="mx-auto mt-4 max-w-xl text-xl text-white/75">
            {tagline ?? 'A celebration of covenant, joy, and forever — two families, one love, and a lifetime of memories waiting to be written together.'}
          </p>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button onClick={() => scrollTo('#event-details')} size="lg">View Event Details</Button>
            {/* <Button
              className="border-white/40 bg-white/10 text-white hover:border-white hover:bg-white/20 hover:text-white"
              onClick={() => scrollTo('#love-story')}
              size="lg"
              variant="outline"
            >
              Our Story
            </Button> */}
          </div>
        </motion.div>
      </div>

      {/* Countdown */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto flex items-start justify-center rounded-t-2xl border border-purple-400/20 bg-purple-950 px-6  lg:px-12 w-fit py-3 gap-4">
          {isToday ? (
            <AnimatePresence mode="wait">
              <motion.p
                animate={{ opacity: 1, y: 0 }}
                className="font-serif text-3xl text-purple-200 [text-shadow:0_0_20px_rgba(153,0,255,0.65)] sm:text-4xl"
                exit={{ opacity: 0, y: -8 }}
                initial={{ opacity: 0, y: 8 }}
                key={messageIndex}
                transition={{ duration: 0.35 }}
              >
                {weddingDayMessages[messageIndex]}
              </motion.p>
            </AnimatePresence>
          ) : (
            Object.entries(countdown).map(([label, value], index) => (
              <div className="flex items-start" key={label}>
                {index > 0 && (
                  <span className="font-serif text-4xl text-purple-200 [text-shadow:0_0_20px_rgba(153,0,255,0.65)] sm:text-5xl">:</span>
                )}
                <div className="px-3 text-center">
                  <div className="font-serif text-4xl text-purple-200 [text-shadow:0_0_20px_rgba(153,0,255,0.65)] sm:text-5xl">
                    {String(value).padStart(2, '0')}
                  </div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-purple-100/70">{label}</div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
