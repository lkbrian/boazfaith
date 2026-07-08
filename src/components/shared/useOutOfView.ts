import { useEffect, useState } from 'react'

export function useOutOfView(selector: string) {
  const [outOfView, setOutOfView] = useState(false)

  useEffect(() => {
    const el = document.querySelector(selector)
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => setOutOfView(!entry.isIntersecting), { threshold: 0 })
    observer.observe(el)

    return () => observer.disconnect()
  }, [selector])

  return outOfView
}
