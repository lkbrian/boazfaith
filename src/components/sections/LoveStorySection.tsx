import { loveStory } from '../../data/wedding'
import { Reveal } from '../shared/Reveal'
import { Section } from '../shared/Section'

export function LoveStorySection() {
  return (
    <Section id="love-story" title="Our Love Story" eyebrow="A graceful journey" dark={false}>
      <div className="relative mx-auto max-w-3xl">
        {/* Vertical center line */}
        <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-[#DDB665]/20 md:block" />

        {loveStory.map((item, index) => {
          const isLeft = index % 2 === 0
          return (
            <Reveal key={item.title}>
              <div className={`relative mb-10 flex flex-col items-center gap-6 md:flex-row ${isLeft ? '' : 'md:flex-row-reverse'}`}>
                {/* Text card */}
                <div className="w-full md:w-[calc(50%-1.5rem)]">
                  <div className="rounded-xl border border-white/10 bg-[#0F0D0B] p-6 shadow-xl">
                    <p className="text-xs uppercase tracking-widest text-[#DDB665]">{item.chapter}</p>
                    <h3 className="mt-2 font-serif text-2xl text-[#F8F5EF]">{item.title}</h3>
                    <p className="mt-3 leading-7 text-[#B9B4AA]">{item.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="relative z-10 hidden h-3.5 w-3.5 shrink-0 rounded-full bg-[#DDB665] shadow-[0_0_14px_rgba(221,182,101,0.55)] md:block" />

                {/* Spacer */}
                <div className="hidden w-[calc(50%-1.5rem)] md:block" />
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
