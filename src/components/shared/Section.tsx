import type { ReactNode } from 'react'

import { Reveal } from './Reveal'

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
    <section className={`${dark ? 'bg-[#0A0A0A]' : 'bg-[#1E1C18]'} px-5 py-24 lg:px-8`} id={id}>
      <Reveal className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase text-[#DDB665]">{eyebrow}</p>
          <h2 className="mt-3 font-serif text-5xl font-medium text-[#F8F5EF] sm:text-6xl">{title}</h2>
        </div>
        {children}
      </Reveal>
    </section>
  )
}
