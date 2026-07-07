import { ContactForm } from '../shared/ContactForm'
import { Section } from '../shared/Section'
import { SocialCard } from '../shared/SocialCard'

export function ContactSection() {
  return (
    <Section id="contact" title="Stay Connected" eyebrow="Contact" dark={false}>
      <div className="mx-auto grid max-w-xl gap-6">
        <ContactForm />
        <SocialCard />
      </div>
    </Section>
  )
}
