import { useState } from 'react'

import { useWeddingData } from '../../hooks/useWeddingData'
import { ContactSection } from '../sections/ContactSection'
import { EventDetailsSection } from '../sections/EventDetailsSection'
import { GalleryLightbox } from '../sections/GalleryLightbox'
import { GallerySection } from '../sections/GallerySection'
import { HeroSection } from '../sections/HeroSection'
import { LoveStorySection } from '../sections/LoveStorySection'
import { NavBar } from '../sections/NavBar'
import { SiteFooter } from '../sections/SiteFooter'

export function WeddingSite() {
  const { content, gallery, details, error } = useWeddingData()
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-white text-black">
      <NavBar />

      <main>
        {error && (
          <div className="fixed bottom-4 left-4 z-50 max-w-sm rounded-lg border border-purple-600/40 bg-white p-4 text-sm text-black shadow-2xl">
            {error}
          </div>
        )}
        <HeroSection
          coupleNames={content?.coupleNames}
          weddingDate={content?.weddingDate}
          tagline={content?.tagline}
        />
        <EventDetailsSection details={details} />
        <LoveStorySection />
        <GallerySection images={gallery} onImageClick={setLightboxIndex} />
        <ContactSection />
      </main>

      <SiteFooter coupleNames={content?.coupleNames} weddingDate={content?.weddingDate} />

      <GalleryLightbox
        activeIndex={lightboxIndex}
        images={gallery.map((g) => g.src)}
        onClose={() => setLightboxIndex(null)}
        onNext={() => setLightboxIndex((i) => ((i ?? 0) + 1) % gallery.length)}
        onPrev={() => setLightboxIndex((i) => ((i ?? 0) - 1 + gallery.length) % gallery.length)}
      />
    </div>
  )
}
