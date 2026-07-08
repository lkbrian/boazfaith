import { AnimatePresence, motion } from 'framer-motion'

import { weddingDayMessages } from '../../data/wedding'
import { useCountdown } from './useCountdown'
import { useOutOfView } from './useOutOfView'
import { useRotatingIndex } from './useRotatingIndex'

export function FloatingCountdown() {
  const visible = useOutOfView('#home')
  const countdown = useCountdown('2026-08-08T14:00:00+03:00')
  const isToday = Object.values(countdown).every((value) => value === 0)
  const messageIndex = useRotatingIndex(weddingDayMessages.length, 60000, isToday)

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
              boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            {isToday ? (
              <AnimatePresence mode="wait">
                <motion.span
                  animate={{ opacity: 1, y: 0 }}
                  className="px-1 py-1 font-serif text-lg text-purple-800"
                  exit={{ opacity: 0, y: -6 }}
                  initial={{ opacity: 0, y: 6 }}
                  key={messageIndex}
                  transition={{ duration: 0.3 }}
                >
                  {weddingDayMessages[messageIndex]}
                </motion.span>
              </AnimatePresence>
            ) : (
              Object.entries(countdown).map(([label, value], index) => (
                <div className="flex items-center gap-1.5" key={label}>
                  {index > 0 && <span className="text-xs text-purple-800/60">:</span>}
                  <span className="font-serif text-lg text-purple-800">
                    {String(value).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] uppercase tracking-wide text-purple-800/70 font-medium">{label[0]}</span>
                  <div className='h-2 w-full ' style={{ boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;" }} />
                </div>
              ))
            )}
          </motion.div>
        </motion.div>
      )}

    </AnimatePresence>
  )
}
