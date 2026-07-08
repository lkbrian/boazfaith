import { AnimatePresence, motion } from 'framer-motion'

import { useCountdown } from './useCountdown'
import { useOutOfView } from './useOutOfView'

export function FloatingCountdown() {
  const visible = useOutOfView('#home')
  const countdown = useCountdown('2026-08-08T14:00:00+03:00')

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="fixed right-6 top-24 z-40"
          exit={{ opacity: 0, scale: 0.85, y: -16 }}
          initial={{ opacity: 0, scale: 0.85, y: -16 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            className="flex items-center gap-3 rounded-br-[2.5rem] rounded-tl-[2rem] rounded-bl-[2.5rem] bg-white px-5 py-1"
            style={{
              boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;"
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            {Object.entries(countdown).map(([label, value], index) => (
              <div className="flex items-center gap-1.5" key={label}>
                {index > 0 && <span className="text-xs text-purple-800/60">:</span>}
                <span className="font-serif text-lg text-purple-800">
                  {String(value).padStart(2, '0')}
                </span>
                <span className="text-[9px] uppercase tracking-wide text-purple-800/70 font-medium">{label[0]}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
