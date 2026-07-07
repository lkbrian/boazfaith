import type { ReactNode } from 'react'

import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Section({
  children,
  dark,
  eyebrow,
  id,
  title,
}: {
  children: ReactNode
  dark: boolean
  eyebrow: string
  id: string
  title: string
}) {
  return (
    <section className={`${dark ? 'bg-white' : 'bg-purple-50'} px-5 py-24 lg:px-8`} id={id}>
      <Reveal className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={eyebrow} title={title} />
        {children}
      </Reveal>
    </section>
  )
}
