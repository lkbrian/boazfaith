export type EventDetails = {
  venue: string
  date: string
  time: string
  address: string
}

export type GalleryImage = {
  src: string
  tall: boolean
  position: 'top' | 'center' | 'bottom'
}

export const FETCH_CONTENT = async () => ({
  coupleNames: 'Boaz & Faith',
  weddingDate: 'August 8, 2026',
  tagline: 'A celebration of covenant, joy, and forever.',
})

export const FETCH_GALLERY = async (): Promise<GalleryImage[]> => [
  { src: '/love_one.jpeg', tall: true, position: 'center' },
  { src: '/love_two.jpeg', tall: true, position: 'center' },
  { src: '/love_three.jpeg', tall: true, position: 'center' },
  { src: '/love_four.jpeg', tall: true, position: 'center' },
  { src: '/love_five.jpeg', tall: true, position: 'center' },
]

export const GET_EVENT_DETAILS = async () => ({
  ceremony: {
    venue: 'The Grand Garden Chapel',
    date: 'August 8, 2026',
    time: '2:00 PM',
    address: 'CEREMONY_DETAILS, Nairobi',
  },
  reception: {
    venue: 'The Imperial Ballroom',
    date: 'August 8, 2026',
    time: '5:30 PM',
    address: 'RECEPTION_DETAILS, Nairobi',
  },
})
