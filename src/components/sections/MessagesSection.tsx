import { MessagesList } from '../shared/MessagesList'
import { Section } from '../shared/Section'

export function MessagesSection() {
  return (
    <Section id="messages" title="Messages Of Love" eyebrow="Guest Wishes" dark={true} width="max-w-full" className="text-black">
      <div className="mx-auto max-w-6xl">
        <MessagesList />
      </div>
    </Section>
  )
}
