import { motion } from 'framer-motion'
import { CalendarDays } from 'lucide-react'

import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import { fadeUp } from '../shared/Reveal'
import { useCountdown } from '../shared/useCountdown'

type Props = {
  coupleNames?: string
  weddingDate?: string
  tagline?: string
}

const scrollTo = (href: string) =>
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

export function HeroSection({ coupleNames, weddingDate, tagline }: Props) {
  const countdown = useCountdown('2026-08-08T14:00:00+03:00')

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <img alt="Wedding hero" className="absolute inset-0 h-full w-full object-cover" src="/hero.jpeg" />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative flex min-h-screen flex-col items-center justify-center px-5 pb-36 pt-28 text-center">
        <motion.div animate="show" initial="hidden" variants={fadeUp}>
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#DDB665]">You are invited</p>
          <h1 className="font-serif text-6xl font-medium leading-none text-[#F8F5EF] sm:text-7xl lg:text-9xl">
            {coupleNames ?? 'Boaz & Faith'}
          </h1>
          <p className="mt-6 flex items-center justify-center gap-3 text-lg text-[#DDB665]">
            <CalendarDays className="h-5 w-5" />
            {weddingDate ?? 'August 8, 2026'}
          </p>
          <p className="mt-4 text-xl text-[#B9B4AA]">{tagline ?? 'A celebration of covenant, joy, and forever.'}</p>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button onClick={() => scrollTo('#event-details')} size="lg">View Event Details</Button>
            <Button onClick={() => scrollTo('#love-story')} size="lg" variant="outline">Our Story</Button>
          </div>
        </motion.div>
      </div>

      {/* Countdown */}
      <div className="absolute inset-x-0 bottom-0 py-8">
        <div className="mx-auto grid max-w-lg grid-cols-4 gap-3 px-5">
          {Object.entries(countdown).map(([label, value]) => (
            <Card key={label} className="text-center">
              <CardContent className="p-4">
                <div className="font-serif text-3xl text-[#DDB665]">{value}</div>
                <div className="mt-1 text-xs uppercase text-[#B9B4AA]">{label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
