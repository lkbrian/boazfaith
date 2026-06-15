import { Mail, MessageCircle, Phone } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

export function ContactCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Card</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-[#B9B4AA]">
        <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-[#DDB665]" /> PHONE_NUMBER</p>
        <p className="flex items-center gap-3"><Mail className="h-4 w-4 text-[#DDB665]" /> EMAIL_ADDRESS</p>
        <p className="flex items-center gap-3"><MessageCircle className="h-4 w-4 text-[#DDB665]" /> WHATSAPP_LINK</p>
      </CardContent>
    </Card>
  )
}
