import { ContactForm } from '../shared/ContactForm'
import { Section } from '../shared/Section'
import { SocialCard } from '../shared/SocialCard'

export function ContactSection() {
  return (
    <Section id="contact" title="Stay Connected" eyebrow="Contact" dark={true}>
      <div className="mx-auto max-w-5xl">
        <ContactForm />
        <SocialCard />
      </div>
    </Section>
  )
}
