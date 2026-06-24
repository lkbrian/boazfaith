import type { GalleryImage } from '../../services/wedding'
import { Section } from '../shared/Section'

type Props = {
  images: GalleryImage[]
  onImageClick: (index: number) => void
}

export function GallerySection({ images, onImageClick }: Props) {
  return (
    <Section id="gallery" title="Gallery" eyebrow="Captured moments" dark={true}>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {images.map((image, index) => (
          <button
            className="mb-5 block w-full break-inside-avoid h-110  p-2 relative border  shadow-lg hover: cursor-pointer border-[#DDB665]/30"
            key={image.src}
            onClick={() => onImageClick(index)}
            type="button"
          >
            <img
              alt={`Gallery ${index + 1}`}
              className={[
                'w-full absolute h-110 -left-2 object-cover -top-2 transition duration-500 hover:',
                image.tall ? 'h-110' : 'h-56',
                image.position === 'top' ? 'object-top' : image.position === 'center' ? 'object-center' : 'object-bottom',
              ].join(' ')}
              src={image.src}
            />
          </button>
        ))}
      </div>
    </Section>
  )
}


