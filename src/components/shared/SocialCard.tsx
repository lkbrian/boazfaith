import { Camera, Heart, Music2, X } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

export function SocialCard() {
  const socials = [
    ['Instagram', Camera, 'INSTAGRAM_URL'],
    ['Facebook', Heart, 'FACEBOOK_URL'],
    ['TikTok', Music2, 'TIKTOK_URL'],
    ['X', X, 'X_URL'],
  ] as const

  return (
    <Card>
      <CardHeader>
        <CardTitle>Social Media</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3">
        {socials.map(([label, Icon, url]) => (
          <a className="flex items-center gap-3 rounded-md border border-white/10 bg-black/20 p-3 text-[#B9B4AA] transition hover:border-[#DDB665]/50 hover:text-[#DDB665]" href="#" key={label}>
            <Icon className="h-4 w-4" /> {label} <span className="ml-auto text-xs">{url}</span>
          </a>
        ))}
      </CardContent>
    </Card>
  )
}
