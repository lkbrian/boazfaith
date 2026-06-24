import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

import { Button } from '../ui/button'

type Props = {
  images: string[]
  activeIndex: number | null
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export function GalleryLightbox({ images, activeIndex, onClose, onPrev, onNext }: Props) {
  const image = activeIndex === null ? null : images[activeIndex]

  useEffect(() => {
    if (!image) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [image, onClose, onPrev, onNext])

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-5"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          onClick={onClose}
        >
          <Button aria-label="Close gallery" className="absolute right-5 top-5" onClick={onClose} size="icon" variant="outline">
            <X className="h-5 w-5" />
          </Button>
          <Button
            aria-label="Previous image"
            className="absolute left-4 top-1/2"
            onClick={(e) => { e.stopPropagation(); onPrev() }}
            size="icon"
            variant="outline"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <img alt="Gallery lightbox" className="max-h-[84vh] max-w-full rounded-lg object-contain" src={image} />
          <Button
            aria-label="Next image"
            className="absolute right-4 top-1/2"
            onClick={(e) => { e.stopPropagation(); onNext() }}
            size="icon"
            variant="outline"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
