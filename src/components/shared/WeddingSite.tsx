import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  CalendarDays,
  Camera,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Copy,
  Gem,
  Heart,
  MapPin,
  Menu,
  Music2,
  Send,
  Sparkles,
  Users,
  Utensils,
  X,
} from 'lucide-react'

import { useWeddingData } from '../../hooks/useWeddingData'
import { SUBMIT_MESSAGE, SUBMIT_PLEDGE, SUBMIT_RSVP } from '../../services/wedding'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Textarea } from '../ui/textarea'
import { ContactCard } from './ContactCard'
import { DressList } from './DressList'
import { EventCard } from './EventCard'
import { Field } from './Field'
import { fadeUp, Reveal } from './Reveal'
import { Section } from './Section'
import { SocialCard } from './SocialCard'
import { useCountdown } from './useCountdown'

const heroImage =
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=90'

const navItems = [
  ['Home', '#home'],
  ['Love Story', '#love-story'],
  ['Event Details', '#event-details'],
  ['RSVP', '#rsvp'],
  ['Gallery', '#gallery'],
  ['Dress Code', '#dress-code'],
  ['Contact', '#contact'],
]

const timeline = [
  {
    date: 'TIMELINE_EVENT_1',
    title: 'The First Hello',
    description: 'A quiet introduction became the beginning of a story neither of us wanted to rush.',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=85',
  },
  {
    date: 'TIMELINE_EVENT_2',
    title: 'The Promise',
    description: 'Through seasons of distance, work, prayer, and joy, love became a decision we chose daily.',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=85',
  },
  {
    date: 'TIMELINE_EVENT_3',
    title: 'The Yes',
    description: 'Under golden evening light, the question was asked, the answer was yes, and forever felt near.',
    image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=800&q=85',
  },
]

const orderOfEvents = [
  ['2:00 PM', 'Guest Arrival', Users],
  ['2:30 PM', 'Ceremony', Heart],
  ['3:30 PM', 'Photos', Camera],
  ['4:30 PM', 'Cocktail Hour', Sparkles],
  ['5:30 PM', 'Reception', Music2],
  ['6:30 PM', 'Dinner', Utensils],
  ['8:00 PM', 'Cake Cutting', Gem],
  ['8:30 PM', 'First Dance', Music2],
  ['9:00 PM', 'Celebration', Sparkles],
] as const

const colors = ['#F8F5EF', '#DDB665', '#B9B4AA', '#6F1D2F', '#1E1C18']

export function WeddingSite() {
  const { content, gallery, messages, details } = useWeddingData()
  const [menuOpen, setMenuOpen] = useState(false)
  const [storyIndex, setStoryIndex] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [remindMe, setRemindMe] = useState(false)
  const [copied, setCopied] = useState('')
  const countdown = useCountdown('2026-12-12T14:00:00+03:00')

  const storyImages = useMemo(() => gallery.slice(0, 8), [gallery])
  const lightboxImage = lightboxIndex === null ? null : gallery[lightboxIndex]

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const copyText = async (label: string, value: string) => {
    await navigator.clipboard.writeText(value)
    setCopied(label)
    window.setTimeout(() => setCopied(''), 1500)
  }

  const submitRsvp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await SUBMIT_RSVP(Object.fromEntries(new FormData(event.currentTarget)))
    event.currentTarget.reset()
  }

  const submitPledge = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await SUBMIT_PLEDGE(Object.fromEntries(new FormData(event.currentTarget)))
    event.currentTarget.reset()
  }

  const submitMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await SUBMIT_MESSAGE(Object.fromEntries(new FormData(event.currentTarget)))
    event.currentTarget.reset()
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F8F5EF]">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#0A0A0A]/40 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <button className="font-serif text-3xl text-[#DDB665]" onClick={() => scrollTo('#home')} type="button">
            B&A
          </button>
          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map(([label, href]) => (
              <button
                key={label}
                className="text-sm text-[#F8F5EF]/78 transition hover:text-[#DDB665]"
                onClick={() => scrollTo(href)}
                type="button"
              >
                {label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Button className="hidden h-8 sm:inline-flex" onClick={() => scrollTo('#rsvp')}>RSVP</Button>
            <Button aria-label="Open menu" className="lg:hidden" onClick={() => setMenuOpen(true)} size="icon" variant="outline">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 bg-[#0A0A0A]/95 p-6 backdrop-blur-xl lg:hidden"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
          >
            <div className="flex items-center justify-between">
              <span className="font-serif text-3xl text-[#DDB665]">B&A</span>
              <Button aria-label="Close menu" onClick={() => setMenuOpen(false)} size="icon" variant="ghost">
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="mt-16 grid gap-6">
              {navItems.map(([label, href]) => (
                <button
                  key={label}
                  className="border-b border-white/10 pb-4 text-left font-serif text-4xl text-[#F8F5EF] transition hover:text-[#DDB665]"
                  onClick={() => scrollTo(href)}
                  type="button"
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <section id="home" className="relative h-[80vh] overflow-hidden bg-[#1E1C18] pt-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(221,182,101,0.14),transparent_30%)]" />
          <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 px-5 pb-12 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <motion.div initial="hidden" animate="show" variants={fadeUp}>
              <h1 className="font-serif text-6xl font-medium leading-none text-[#F8F5EF] sm:text-7xl lg:text-8xl">
                {content?.coupleNames ?? 'COUPLE_NAMES'}
              </h1>
              <p className="mt-6 flex items-center gap-3 text-lg text-[#DDB665]">
                <CalendarDays className="h-5 w-5" />
                {content?.weddingDate ?? 'WEDDING_DATE'}
              </p>
              <p className="mt-6 max-w-xl text-xl leading-8 text-[#B9B4AA]">{content?.tagline ?? 'TAGLINE'}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button onClick={() => scrollTo('#rsvp')}>RSVP Now</Button>
                <Button onClick={() => scrollTo('#event-details')} variant="outline">View Event Details</Button>
              </div>
            </motion.div>
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
              initial={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="aspect-4/5 overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] p-3 shadow-2xl">
                <img alt="HERO_IMAGE" className="h-full w-full rounded-md object-cover" src={heroImage} />
              </div>
            </motion.div>
          </div>
          <div className="relative mx-auto grid max-w-5xl grid-cols-2 gap-3 px-5 pb-10 sm:grid-cols-4">
            {Object.entries(countdown).map(([label, value]) => (
              <Card key={label} className="text-center">
                <CardContent className="p-5">
                  <div className="font-serif text-4xl text-[#DDB665]">{value}</div>
                  <div className="mt-1 text-xs uppercase text-[#B9B4AA]">{label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Section id="love-story" title="Our Love Story" eyebrow="A graceful timeline" dark={false}>
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-[#DDB665]/30 md:left-1/2 md:block" />
            <div className="grid gap-8">
              {timeline.map((item, index) => (
                <Reveal key={item.title} className={`grid gap-6 md:grid-cols-2 ${index % 2 ? '' : 'md:[&>*:first-child]:col-start-2'}`}>
                  <Card className="overflow-hidden">
                    <img alt={item.title} className="h-56 w-full object-cover transition duration-500 hover:scale-105" src={item.image} />
                    <CardHeader>
                      <CardDescription>{item.date}</CardDescription>
                      <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[#B9B4AA]">{item.description}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="mt-16">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-serif text-3xl">Love Story Gallery</h3>
              <div className="flex gap-2">
                <Button aria-label="Previous story image" onClick={() => setStoryIndex((storyIndex - 1 + Math.max(storyImages.length, 1)) % Math.max(storyImages.length, 1))} size="icon" variant="outline">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button aria-label="Next story image" onClick={() => setStoryIndex((storyIndex + 1) % Math.max(storyImages.length, 1))} size="icon" variant="outline">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {storyImages.slice(storyIndex, storyIndex + 3).concat(storyImages.slice(0, Math.max(0, storyIndex + 3 - storyImages.length))).map((image, index) => (
                <img key={`${image}-${index}`} alt={`STORY_IMAGE_${index + 1}`} className="aspect-[4/3] rounded-lg object-cover" src={image} />
              ))}
            </div>
          </div>
        </Section>

        <Section id="event-details" title="The Big Day" eyebrow="Ceremony and celebration" dark>
          <div className="grid gap-6 lg:grid-cols-2">
            <EventCard icon={<Heart />} title="Ceremony" details={details?.ceremony} />
            <EventCard icon={<Sparkles />} title="Reception" details={details?.reception} />
          </div>
          <div className="mt-14">
            <h3 className="mb-6 font-serif text-3xl">Order Of Events</h3>
            <div className="grid gap-4 md:grid-cols-3">
              {orderOfEvents.map(([time, title, Icon]) => (
                <Card key={`${time}-${title}`}>
                  <CardContent className="flex items-center gap-4 p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DDB665]/15 text-[#DDB665]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-[#DDB665]">{time}</p>
                      <p className="font-medium">{title}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <Card className="mt-14 overflow-hidden">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
              <iframe
                className="h-80 w-full grayscale"
                loading="lazy"
                src="https://www.google.com/maps?q=Nairobi%20Kenya&output=embed"
                title="GOOGLE_MAP_EMBED"
              />
              <CardContent className="flex flex-col justify-center p-8">
                <MapPin className="mb-5 h-8 w-8 text-[#DDB665]" />
                <h3 className="font-serif text-3xl">Map Section</h3>
                <p className="mt-3 text-[#B9B4AA]">GOOGLE_MAP_EMBED placeholder connected to Nairobi until the final venue map is added.</p>
                <Button asChild className="mt-6 w-fit">
                  <a href="https://maps.google.com/?q=Nairobi+Kenya" rel="noreferrer" target="_blank">Open In Maps</a>
                </Button>
              </CardContent>
            </div>
          </Card>
        </Section>

        <Section id="support" title="Support Our Event" eyebrow="A gracious contribution" dark={false}>
          <div className="mx-auto max-w-3xl text-center text-lg leading-8 text-[#B9B4AA]">{content?.supportMessage}</div>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
            <Card>
              <CardHeader>
                <CardTitle>Contribution Form</CardTitle>
                <CardDescription>FORM_SUBMISSION_HANDLER and PAYMENT_HANDLER placeholders are ready for integration.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4" onSubmit={submitPledge}>
                  <Field label="Full Name" name="fullName" />
                  <Field label="Email Address" name="email" type="email" />
                  <Field label="Phone Number" name="phone" type="tel" />
                  <Field label="Pledge Amount" name="amount" type="number" />
                  <div className="flex items-center gap-3">
                    <Checkbox checked={remindMe} id="remind" name="remindMe" onCheckedChange={(value) => setRemindMe(Boolean(value))} />
                    <Label htmlFor="remind">Remind Me</Label>
                  </div>
                  {remindMe && <Field label="Reminder Date" name="reminderDate" type="date" />}
                  <Button type="submit">Submit Pledge</Button>
                </form>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Payment Card</CardTitle>
                <CardDescription>M-Pesa contribution details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  ['Paybill', 'PLACEHOLDER'],
                  ['Account', 'PLACEHOLDER'],
                  ['M-Pesa', 'PLACEHOLDER'],
                  ['M-Pesa', 'PLACEHOLDER'],
                ].map(([label, value]) => (
                  <div className="flex items-center justify-between rounded-md border border-white/10 bg-black/20 p-4" key={`${label}-${value}`}>
                    <div>
                      <p className="text-xs uppercase text-[#B9B4AA]">{label}</p>
                      <p className="mt-1 font-serif text-2xl text-[#DDB665]">{value}</p>
                    </div>
                    <Button aria-label={`Copy ${value}`} onClick={() => copyText(value, value)} size="icon" type="button" variant="outline">
                      {copied === value ? <CheckCircle2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </Section>

        <Section id="rsvp" title="Reserve Your Seat" eyebrow="RSVP" dark>
          <Card className="mx-auto max-w-3xl">
            <CardContent className="p-6 sm:p-8">
              <form className="grid gap-4 sm:grid-cols-2" onSubmit={submitRsvp}>
                <Field label="Full Name" name="fullName" />
                <Field label="Email" name="email" type="email" />
                <Field label="Phone Number" name="phone" type="tel" />
                <div className="grid gap-2">
                  <Label>Attendance</Label>
                  <Select name="attendance">
                    <SelectTrigger><SelectValue placeholder="Select attendance" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="attending">Joyfully attending</SelectItem>
                      <SelectItem value="not-attending">Unable to attend</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Field label="Guest Count" name="guestCount" type="number" />
                <div className="grid gap-2">
                  <Label>Plus One</Label>
                  <Select name="plusOne">
                    <SelectTrigger><SelectValue placeholder="Select option" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2 sm:col-span-2">
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea id="notes" name="notes" placeholder="Share dietary needs or seating notes" />
                </div>
                <Button className="sm:col-span-2" type="submit">Submit RSVP</Button>
              </form>
            </CardContent>
          </Card>
        </Section>

        <Section id="gallery" title="Gallery" eyebrow="Captured moments" dark={false}>
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {gallery.map((image, index) => (
              <button className="mb-4 block w-full overflow-hidden rounded-lg border border-white/10" key={image} onClick={() => setLightboxIndex(index)} type="button">
                <img alt={`GALLERY_IMAGE_${index + 1}`} className="w-full object-cover transition duration-500 hover:scale-105" src={image} />
              </button>
            ))}
          </div>
        </Section>

        <Section id="dress-code" title="Dress Code" eyebrow="Elegant evening attire" dark>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Style Notes</CardTitle>
                <CardDescription>STYLE_NOTES</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6 sm:grid-cols-2">
                <DressList title="Men" items={['Suits', 'Tuxedos', 'Dress Shoes']} />
                <DressList title="Women" items={['Evening Gowns', 'Cocktail Dresses', 'Elegant Accessories']} />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Color Palette</CardTitle>
                <CardDescription>COLOR_1 through COLOR_5</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4 sm:grid-cols-5">
                {colors.map((color, index) => (
                  <div key={color}>
                    <div className="aspect-square rounded-lg border border-white/15" style={{ backgroundColor: color }} />
                    <p className="mt-2 text-xs text-[#B9B4AA]">COLOR_{index + 1}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </Section>

        <Section id="contact" title="Stay Connected" eyebrow="Contact" dark={false}>
          <div className="grid gap-6 lg:grid-cols-3">
            <ContactCard />
            <SocialCard />
            <Card>
              <CardHeader>
                <CardTitle>Guest Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4" onSubmit={submitMessage}>
                  <Field label="Name" name="name" />
                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" />
                  </div>
                  <Button type="submit"><Send className="h-4 w-4" /> Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </Section>

        <Section id="messages" title="Read What Others Have Shared" eyebrow="Guest messages" dark>
          <div className="grid gap-5 md:grid-cols-3">
            {messages.map((message) => (
              <Card key={`${message.name}-${message.date}`}>
                <CardContent className="p-6">
                  <p className="text-[#B9B4AA]">"{message.message}"</p>
                  <div className="mt-6 border-t border-white/10 pt-4">
                    <p className="font-serif text-xl text-[#DDB665]">{message.name}</p>
                    <p className="text-sm text-[#B9B4AA]">{message.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      </main>

      <footer className="bg-[#0A0A0A] px-5 py-12 text-center">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-4xl text-[#DDB665]">{content?.coupleNames ?? 'COUPLE_NAMES'}</h2>
          <p className="mt-2 text-[#B9B4AA]">{content?.weddingDate ?? 'WEDDING_DATE'}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-5">
            {navItems.map(([label, href]) => (
              <button className="text-sm text-[#B9B4AA] transition hover:text-[#DDB665]" key={label} onClick={() => scrollTo(href)} type="button">
                {label}
              </button>
            ))}
          </div>
          <div className="mt-7 flex justify-center gap-3">
            {[Camera, Heart, Music2, X].map((Icon, index) => (
              <Button aria-label={`Social ${index + 1}`} key={index} size="icon" variant="outline">
                <Icon className="h-4 w-4" />
              </Button>
            ))}
          </div>
          <p className="mt-8 text-sm text-[#B9B4AA]">Made with love for our special day. FOOTER_CONTENT</p>
        </div>
      </footer>

      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-5"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
          >
            <Button aria-label="Close gallery" className="absolute right-5 top-5" onClick={() => setLightboxIndex(null)} size="icon" variant="outline">
              <X className="h-5 w-5" />
            </Button>
            <Button aria-label="Previous gallery image" className="absolute left-4 top-1/2" onClick={(event) => {
              event.stopPropagation()
              setLightboxIndex((lightboxIndex! - 1 + gallery.length) % gallery.length)
            }} size="icon" variant="outline">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <img alt="Gallery lightbox" className="max-h-[84vh] max-w-full rounded-lg object-contain" src={lightboxImage} />
            <Button aria-label="Next gallery image" className="absolute right-4 top-1/2" onClick={(event) => {
              event.stopPropagation()
              setLightboxIndex((lightboxIndex! + 1) % gallery.length)
            }} size="icon" variant="outline">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
