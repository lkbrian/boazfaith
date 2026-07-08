import { useEffect, useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'

import { SUBMIT_CONTACT_MESSAGE } from '../../services/contact'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import { Field } from './Field'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!submitted) return
    const timer = setTimeout(() => setSubmitted(false), 5000)
    return () => clearTimeout(timer)
  }, [submitted])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      await SUBMIT_CONTACT_MESSAGE({
        name: String(data.get('name') ?? ''),
        email: String(data.get('email') ?? ''),
        phone: String(data.get('phone') ?? ''),
        message: String(data.get('message') ?? ''),
      })
      form.reset()
      setSubmitted(true)
    } catch (currentError) {
      setError(currentError instanceof Error ? currentError.message : 'Unable to send your message. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Card className='hover:border-none'>
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
              <Field label="Full Name" name="name" required />
              <Field label="Email Address" name="email" required type="email" />
            </div>
            <Field label="Phone Number (optional)" name="phone" type="tel" />
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" placeholder="Write your message" required rows={5} />
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <Button className="w-full shadow-[0_14px_34px_rgba(153,0,255,0.3)] sm:w-fit" disabled={submitting} size="lg" type="submit">
              <Send className="h-4 w-4" /> {submitting ? 'Sending…' : 'Send Message'}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
