import { BookOpen, Cake, DoorOpen, Gift, Heart, Mic2, Music2, Sparkles, Users, Utensils } from 'lucide-react'

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
  {
    time: '08:30 - 09:00 AM',
    title: 'Arrival of Guests',
    description: 'Guests are welcomed and seated warmly.',
    icon: Users,
  },
  {
    time: '09:00 - 09:15 AM',
    title: 'Hymn & Opening Prayers',
    description: 'The service opens in worship and prayer.',
    icon: Music2,
  },
  {
    time: '09:15 - 09:45 AM',
    title: 'Bridal Team Entrance',
    description: 'The bridal party makes its grand entrance.',
    icon: Sparkles,
  },
  {
    time: '09:15 - 10:45 AM',
    title: 'Exchange of Vows & Sermon',
    description: 'Vows are exchanged before God and family.',
    icon: Heart,
  },
  {
    time: '10:45 - 11:00 AM',
    title: 'End of Service & Closing Prayers',
    description: 'The ceremony closes with a final blessing.',
    icon: BookOpen,
  },
  {
    time: '11:00 - 01:15 PM',
    title: 'Lunch and Photoshoot',
    description: 'Guests enjoy lunch while photos are taken.',
    icon: Utensils,
  },
  {
    time: '01:15 - 02:00 PM',
    title: 'Reception Entrance',
    description: 'The newlyweds make their reception entrance.',
    icon: DoorOpen,
  },
  {
    time: '02:00 - 03:30 PM',
    title: 'Family Introductions & Speeches',
    description: 'Families are introduced and share heartfelt speeches.',
    icon: Mic2,
  },
  {
    time: '03:30 - 04:00 PM',
    title: 'Cake Cutting',
    description: 'The couple cuts the wedding cake together.',
    icon: Cake,
  },
  {
    time: '04:00 - 04:30 PM',
    title: 'Gifts & Closing Prayers',
    description: 'Gifts are presented and prayers close the day.',
    icon: Gift,
  },
] as const
