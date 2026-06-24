import { navItems } from '../../data/wedding'

type Props = {
  coupleNames?: string
  weddingDate?: string
}

const scrollTo = (href: string) =>
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

export function SiteFooter({ coupleNames, weddingDate }: Props) {
  return (
    <footer className="bg-[#0A0A0A] px-5 py-12 text-center">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-serif text-4xl text-[#DDB665]">{coupleNames ?? 'Boaz & Faith'}</h2>
        <p className="mt-2 text-[#B9B4AA]">{weddingDate ?? 'August 8, 2026'}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-5">
          {navItems.map(([label, href]) => (
            <button
              className="text-sm text-[#B9B4AA] transition hover:text-[#DDB665]"
              key={label}
              onClick={() => scrollTo(href)}
              type="button"
            >
              {label}
            </button>
          ))}
        </div>
        <p className="mt-8 text-sm text-[#B9B4AA]">Made with love for our special day.</p>
      </div>
    </footer>
  )
}
