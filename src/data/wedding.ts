import { Camera, Gem, Heart, Music2, Sparkles, Users, Utensils } from 'lucide-react'

export const navItems = [
  ['Home', '#home'],
  ['Event Details', '#event-details'],
  ['Gallery', '#gallery'],
  ['Love Story', '#love-story'],
  ['Contact', '#contact'],
] as const

export const loveStory = [
  {
    chapter: 'Chapter One',
    title: 'The First Hello',
    description: 'A quiet introduction became the beginning of a story neither of us wanted to rush.',
  },
  {
    chapter: 'Chapter Two',
    title: 'The Promise',
    description: 'Through seasons of distance, work, prayer, and joy, love became a decision we chose daily.',
  },
  {
    chapter: 'Chapter Three',
    title: 'The Yes',
    description: 'Under golden evening light, the question was asked, the answer was yes, and forever felt near.',
  },
]

export const orderOfEvents = [
  ['2:00 PM', 'Guest Arrival', Users],
  ['2:30 PM', 'Ceremony', Heart],
  ['3:30 PM', 'Photos', Camera],
  ['4:30 PM', 'Cocktail Hour', Sparkles],
  ['5:30 PM', 'Reception', Music2],
  ['6:30 PM', 'Dinner', Utensils],
  ['8:00 PM', 'Cake Cutting', Gem],
  ['8:30 PM', 'First Dance', Music2],
  ['9:00 PM', 'Celebration', Sparkles],
] as const
