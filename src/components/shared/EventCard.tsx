import type { ReactNode } from 'react'
import { CalendarDays, Clock, MapPin } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

export function EventCard({
  details,
  icon,
  title,
}: {
  details?: { venue: string; date: string; time: string; address: string }
  icon: ReactNode
  title: string
}) {
  return (
    <Card>
      <CardHeader>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#DDB665]/15 text-[#DDB665]">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-[#B9B4AA]">
        <p className="text-xl text-[#F8F5EF]">{details?.venue ?? `${title.toUpperCase()}_DETAILS`}</p>
        <p className="flex items-center gap-3"><CalendarDays className="h-4 w-4 text-[#DDB665]" /> {details?.date}</p>
        <p className="flex items-center gap-3"><Clock className="h-4 w-4 text-[#DDB665]" /> {details?.time}</p>
        <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-[#DDB665]" /> {details?.address}</p>
      </CardContent>
    </Card>
  )
}
