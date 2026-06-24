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
    <div className="min-h-screen bg-[#0A0A0A] text-[#F8F5EF]">
      <NavBar />

      <main>
        {error && (
          <div className="fixed bottom-4 left-4 z-50 max-w-sm rounded-lg border border-[#DDB665]/40 bg-[#11100E] p-4 text-sm text-[#F8F5EF] shadow-2xl">
            {error}
          </div>
        )}
        <HeroSection
          coupleNames={content?.coupleNames}
          weddingDate={content?.weddingDate}
          tagline={content?.tagline}
        />
        <LoveStorySection />
        <EventDetailsSection details={details} />
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
