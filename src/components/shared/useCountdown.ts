import { useEffect, useState } from 'react'

export function useCountdown(targetDate: string) {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  const distance = Math.max(new Date(targetDate).getTime() - now, 0)
  return {
    Days: Math.floor(distance / 86_400_000),
    Hours: Math.floor((distance / 3_600_000) % 24),
    Minutes: Math.floor((distance / 60_000) % 60),
    Seconds: Math.floor((distance / 1_000) % 60),
  }
}
