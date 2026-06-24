import { Heart, MapPin, Sparkles } from 'lucide-react'

import { orderOfEvents } from '../../data/wedding'
import type { EventDetails } from '../../services/wedding'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import { EventCard } from '../shared/EventCard'
import { Reveal } from '../shared/Reveal'
import { Section } from '../shared/Section'

type Props = {
  details: { ceremony: EventDetails; reception: EventDetails } | null
}

export function EventDetailsSection({ details }: Props) {
  return (
    <Section id="event-details" title="The Big Day" eyebrow="Ceremony and celebration" dark={false}>
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Left: Ceremony + Reception cards */}
        <div className="grid content-start gap-6">
          <EventCard icon={<Heart />} title="Ceremony" details={details?.ceremony} />
          <EventCard icon={<Sparkles />} title="Reception" details={details?.reception} />
        </div>

        {/* Right: Order of Events vertical timeline */}
        <div>
          <h3 className="mb-8 font-serif text-3xl">Order Of Events</h3>
          <div className="relative">
            <div className="absolute bottom-4 left-22 top-4 w-px bg-[#DDB665]/20" />
            {orderOfEvents.map(([time, title, Icon], index) => (
              <Reveal key={`${time}-${title}`}>
                <div className={`relative flex items-center gap-5 ${index < orderOfEvents.length - 1 ? 'pb-6' : ''}`}>
                  <div className="w-20 shrink-0 text-right text-sm tabular-nums text-[#DDB665]">{time}</div>
                  <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#DDB665]/40 bg-[#0A0A0A] text-[#DDB665] shadow-[0_0_12px_rgba(221,182,101,0.18)]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="font-medium text-[#F8F5EF]">{title}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Map */}
      <Card className="mt-14 overflow-hidden">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
          <iframe
            className="h-80 w-full grayscale"
            loading="lazy"
            src="https://www.google.com/maps?q=Nairobi%20Kenya&output=embed"
            title="Venue map"
          />
          <CardContent className="flex flex-col justify-center p-8">
            <MapPin className="mb-5 h-8 w-8 text-[#DDB665]" />
            <h3 className="font-serif text-3xl">Nairobi, Kenya</h3>
            <p className="mt-3 text-[#B9B4AA]">Full venue address will be confirmed closer to the date.</p>
            <Button asChild className="mt-6 w-fit">
              <a href="https://maps.google.com/?q=Nairobi+Kenya" rel="noreferrer" target="_blank">Open In Maps</a>
            </Button>
          </CardContent>
        </div>
      </Card>
    </Section>
  )
}
