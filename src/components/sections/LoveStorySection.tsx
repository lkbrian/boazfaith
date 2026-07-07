import { loveStory } from '../../data/wedding'
import { Reveal } from '../shared/Reveal'
import { Section } from '../shared/Section'

export function LoveStorySection() {
  return (
    <Section id="love-story" title="Our Love Story" eyebrow="A graceful journey" dark={false}>
      <div className="relative mx-auto max-w-3xl">
        {/* Line: left on mobile, center on desktop */}
        <div className="absolute bottom-0 left-2.5 top-1 w-px bg-purple-600/20 md:left-1/2 md:-ml-px" />

        {loveStory.map((item, index) => {
          const isLeft = index % 2 === 0
          return (
            <Reveal key={item.title}>
              <div className={`relative flex items-start gap-6 md:items-center md:gap-0 ${index < loveStory.length - 1 ? 'mb-10' : ''}`}>

                {/* Dot — left on mobile, reorders to center on desktop */}
                <div className="relative z-10 mt-1 h-5 w-5 shrink-0 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(153,0,255,0.9),0_0_25px_rgba(153,0,255,0.6),0_0_45px_rgba(153,0,255,0.35)] md:order-2 md:mx-5 md:mt-0 md:h-3.5 md:w-3.5" />

                {/* Text — right of dot on mobile, alternates sides on desktop */}
                <div className={`flex-1 md:flex-none md:w-[calc(50%-1.75rem)] ${isLeft ? 'md:order-1 md:text-right' : 'md:order-3'}`}>
                  <p className="text-xs uppercase tracking-widest text-purple-600">{item.chapter}</p>
                  <h3 className="mt-2 font-serif text-2xl text-black">{item.title}</h3>
                  <p className="mt-2 leading-7 text-black/60">{item.description}</p>
                </div>

                {/* Spacer — desktop only, fills the opposite half */}
                <div className={`hidden md:block md:w-[calc(50%-1.75rem)] ${isLeft ? 'md:order-3' : 'md:order-1'}`} />
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
