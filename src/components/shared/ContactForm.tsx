import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'

import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import { Field } from './Field'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send Us A Message</CardTitle>
        <CardDescription>Questions about the big day? Drop us a note and we'll reply soon.</CardDescription>
      </CardHeader>
      <CardContent>
        {submitted ? (
          <div className="flex flex-col items-center gap-3 py-8 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-600/15 text-purple-600 shadow-[0_0_24px_rgba(153,0,255,0.35)]">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <p className="font-serif text-2xl text-black">Message Sent</p>
            <p className="text-black/60">Thank you — we've received your message and will get back to you soon.</p>
          </div>
        ) : (
          <form className="grid gap-5" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full Name" name="name" />
              <Field label="Email Address" name="email" type="email" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" placeholder="Write your message" required rows={5} />
            </div>
            <Button className="w-full shadow-[0_14px_34px_rgba(153,0,255,0.3)] sm:w-fit" size="lg" type="submit">
              <Send className="h-4 w-4" /> Send Message
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
