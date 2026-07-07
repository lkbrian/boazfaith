// import { navItems } from '../../data/wedding'

type Props = {
  coupleNames?: string
  weddingDate?: string
}

// const scrollTo = (href: string) =>
//   document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

export function SiteFooter({ coupleNames, weddingDate }: Props) {
  return (
    <footer className="relative overflow-hidden bg-purple-950">
      {/* Purple gradient top border */}
      <div className="h-px bg-linear-to-r from-transparent via-purple-400/40 to-transparent" />

      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        {/* Main content */}
        <div className="flex flex-col items-center py-10 text-center">
          {/* Rings */}
          <img alt="Rings" className="mb-8 h-8 w-auto opacity-75" src="/rings.png" />

          {/* Names */}
          <h2 className="font-serif text-4xl font-medium text-purple-200 md:text-6xl">
            {coupleNames ?? 'Boaz & Faith'}
          </h2>
          <p className="mt-3 text-purple-100/80">{weddingDate ?? 'August 8, 2026'}</p>
          <p className="mt-1 text-sm text-purple-100/50">Nairobi, Kenya</p>

          {/* Thin purple divider */}
          <div className="my-3 h-px w-80 bg-purple-400/20" />
          <p className="text-xs text-purple-100/40">A little keepsake from our special day.</p>

          {/* Nav links */}
          {/* <nav className="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-3">
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
          </nav> */}
        </div>

        {/* Bottom bar */}
        {/* <div className="border-t border-white/5 py-6 text-center">
          <p className="text-xs text-[#B9B4AA]/50">A little keepsake from our special day.</p> 
        </div> */}
      </div>
    </footer>
  )
}
