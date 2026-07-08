import { ContactForm } from '../shared/ContactForm'
import { MessagesList } from '../shared/MessagesList'
import { Section } from '../shared/Section'
import { SocialCard } from '../shared/SocialCard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'

export function ContactSection() {
  return (
    <Section id="contact" title="Stay Connected" eyebrow="Contact" dark={true}>
      <div className="mx-auto grid max-w-xl gap-6">
        <Tabs defaultValue="form">
          <TabsList className="mx-auto">
            <TabsTrigger value="form">Form</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
          </TabsList>
          <TabsContent value="form">
            <ContactForm />
          </TabsContent>
          <TabsContent value="messages">
            <MessagesList />
          </TabsContent>
        </Tabs>
        <SocialCard />
      </div>
    </Section>
  )
}
