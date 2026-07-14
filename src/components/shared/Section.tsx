import type { ReactNode } from 'react'

import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Section({
  children,
  dark,
  eyebrow,
  id,
  title,
  width,
  className,
}: {
  children: ReactNode
  dark: boolean
  eyebrow: string
  id: string
  title: string
  width?: string
  className?: string
}) {
  return (
    <section className={`${dark ? 'bg-white' : 'bg-purple-50'} px-5 py-24 lg:px-8 ${className ?? ''}`} id={id}>
      <Reveal className={`mx-auto ${width ?? 'max-w-7xl'}`}>
        <SectionHeading eyebrow={eyebrow} title={title} />
        {children}
      </Reveal>
    </section>
  )
}
