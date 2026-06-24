import { ContactCard } from '../shared/ContactCard'
import { Section } from '../shared/Section'
import { SocialCard } from '../shared/SocialCard'

export function ContactSection() {
  return (
    <Section id="contact" title="Stay Connected" eyebrow="Contact" dark={false}>
      <div className="grid gap-6 lg:grid-cols-2">
        <ContactCard />
        <SocialCard />
      </div>
    </Section>
  )
}
