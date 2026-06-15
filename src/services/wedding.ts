export type TimelineEvent = {
  date: string
  title: string
  description: string
  image: string
}

export type EventDetails = {
  venue: string
  date: string
  time: string
  address: string
}

export type GuestMessage = {
  name: string
  message: string
  date: string
}

export const AUTH_PROVIDER = async () => ({ authenticated: false, role: 'guest' })

export const FETCH_CONTENT = async () => ({
  coupleNames: 'Boaz & Abigail',
  weddingDate: 'December 12, 2026',
  tagline: 'A celebration of covenant, joy, and forever.',
  supportMessage:
    'Your presence is the gift we treasure most. For guests who wish to support the celebration, pledges can be shared below.',
})

export const FETCH_GALLERY = async () => [
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1509610973147-232dfea52a97?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1494955870715-979ca4f13bf0?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1525772764200-be829a350797?auto=format&fit=crop&w=900&q=85',
]

export const FETCH_MESSAGES = async (): Promise<GuestMessage[]> => [
  {
    name: 'Grace W.',
    message: 'Counting down to a beautiful day. May this home be full of peace, laughter, and steady love.',
    date: 'May 18, 2026',
  },
  {
    name: 'David K.',
    message: 'Honored to witness this next chapter. The celebration already feels timeless.',
    date: 'May 24, 2026',
  },
  {
    name: 'Mercy A.',
    message: 'Wishing you both a day as graceful and joyful as your story.',
    date: 'June 2, 2026',
  },
]

export const GET_EVENT_DETAILS = async () => ({
  ceremony: {
    venue: 'The Grand Garden Chapel',
    date: 'December 12, 2026',
    time: '2:00 PM',
    address: 'CEREMONY_DETAILS, Nairobi',
  },
  reception: {
    venue: 'The Imperial Ballroom',
    date: 'December 12, 2026',
    time: '5:30 PM',
    address: 'RECEPTION_DETAILS, Nairobi',
  },
})

export const SUBMIT_RSVP = async (payload: unknown) => ({ ok: true, placeholder: 'RSVP_SUBMISSION_HANDLER', payload })
export const SUBMIT_PLEDGE = async (payload: unknown) => ({ ok: true, placeholder: 'SUBMIT_PLEDGE / PAYMENT_HANDLER', payload })
export const SUBMIT_MESSAGE = async (payload: unknown) => ({ ok: true, placeholder: 'MESSAGE_SUBMISSION_HANDLER', payload })
