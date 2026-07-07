
import { Church, PartyPopper } from 'lucide-react'
import { orderOfEvents } from '../../data/wedding'
import type { EventDetails } from '../../services/wedding'
import { Reveal } from '../shared/Reveal'
import { Section } from '../shared/Section'

type Props = {
  details: { ceremony: EventDetails; reception: EventDetails } | null
}

export function EventDetailsSection({ details }: Props) {
  return (
    <Section id="event-details" title="The Big Day" eyebrow="Ceremony and celebration" dark>
      <div className="grid gap-10 text-center sm:grid-cols-2 sm:divide-x sm:divide-black/10">
        <div>
          <p className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-purple-600">
            <Church className="" size={24} />
            <span className='mt-2 font-semibold'>Ceremony</span>
          </p>
          <p className="mt-4 font-serif text-4xl text-black sm:text-5xl">{details?.ceremony.venue ?? 'RECEPTION_VENUE'}</p>
          <p className="mt-2 text-lg font-medium text-black">{details?.ceremony.address ?? 'CEREMONY_VENUE'}</p>
          <p className="mt-1 text-sm uppercase tracking-wide text-black/60">From {details?.ceremony.time ?? '9:00 AM'}</p>

          {/* <p className="mt-1 text-sm italic text-black/50">{details?.ceremony.address}</p> */}
        </div>
        <div>
          <p className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-purple-600">
            <PartyPopper className="" size={24} />
            <span className='mt-2 font-semibold'>Reception</span>
          </p>
          <p className="mt-4 font-serif text-4xl text-black sm:text-5xl">{details?.reception.venue ?? 'August 8, 2026'}</p>
          <p className="mt-2 text-lg font-medium text-black">{details?.reception.address ?? 'RECEPTION_VENUE'}</p>
          <p className="mt-1 text-sm uppercase tracking-wide text-black/60">From {details?.reception.time ?? '2:00 PM'}</p>

          {/* <p className="mt-1 text-sm italic text-black/50">{details?.reception.address}</p> */}
        </div>
      </div>

      {/* Order of Events horizontal timeline */}
      <div className="mt-14">
        <h3 className="mb-14 text-center font-serif text-3xl">Order Of Events</h3>
        <div className="scroll-thin overflow-x-auto py-4">
          <div className="relative mx-auto flex w-max items-start gap-8 px-2">
            <div className="absolute left-0 right-0 top-32.5 h-px bg-purple-600/20" />
            {orderOfEvents.map((event, index) => {
              const isTop = index % 2 === 0
              const content = (
                <>
                  <p className="text-xs tabular-nums text-purple-600">{event.time}</p>
                  <p className="mt-1 text-sm font-medium text-black">{event.title}</p>
                  <p className="mt-1 text-xs leading-5 text-black/60">{event.description}</p>
                </>
              )
              return (
                <Reveal key={event.title}>
                  <div className="relative flex w-44 shrink-0 flex-col items-center">
                    <div className={`mb-4 flex h-24 flex-col justify-end text-center ${isTop ? '' : 'invisible'}`}>
                      {content}
                    </div>

                    <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-purple-500/50 bg-white text-purple-600 shadow-[0_0_16px_rgba(153,0,255,0.45)]">
                      <event.icon className="h-4 w-4" />
                    </div>

                    <div className={`mt-4 flex h-24 flex-col justify-start text-center ${isTop ? 'invisible' : ''}`}>
                      {content}
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>

      {/* Map */}
      {/* <Card className="mt-14 overflow-hidden">
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
      </Card> */}
    </Section>
  )
}
