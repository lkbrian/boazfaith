import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.querySelector('#home')
    if (!hero) return

    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), { threshold: 0 })
    observer.observe(hero)

    return () => observer.disconnect()
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="fixed bottom-6 right-6 z-40"
          exit={{ opacity: 0, scale: 0.85, y: 16 }}
          initial={{ opacity: 0, scale: 0.85, y: 16 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <motion.button
            animate={{ y: [0, -8, 0] }}
            aria-label="Back to top"
            className="flex cursor-pointer items-center gap-2 rounded-full border border-purple-400/30 bg-purple-600 p-2 y-3 text-sm font-medium text-white shadow-[0_20px_45px_-8px_rgba(153,0,255,0.35)]"
            onClick={scrollToTop}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            type="button"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="h-4 w-4" />
            {/* Back to Top */}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
