import { FaFacebookF, FaInstagram, FaTiktok, FaXTwitter } from 'react-icons/fa6'

import { Card, CardContent } from '../ui/card'

export function SocialCard() {
  const socials = [
    ['Instagram', FaInstagram, '#'],
    ['Facebook', FaFacebookF, '#'],
    ['TikTok', FaTiktok, '#'],
    ['X', FaXTwitter, '#'],
  ] as const

  return (
    <Card>
      <CardContent className="flex items-center justify-between gap-3">
        <p className="text-xs font-medium uppercase tracking-wide text-black">Follow Along</p>
        <div className="flex items-center gap-2">
          {socials.map(([label, Icon, url]) => (
            <a
              aria-label={label}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-black/5 text-black/70 transition hover:border-purple-600/50 hover:bg-purple-600/10 hover:text-purple-600"
              href={url}
              key={label}
            >
              <Icon className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
