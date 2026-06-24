import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

import { navItems } from '../../data/wedding'
import { Button } from '../ui/button'

const scrollTo = (href: string) =>
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleClick = (href: string) => {
    setMenuOpen(false)
    scrollTo(href)
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#0A0A0A]/40 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <button className="font-serif text-3xl text-[#DDB665]" onClick={() => handleClick('#home')} type="button">
            <h1 className='text-2xl'>B&A</h1>
          </button>
          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map(([label, href]) => (
              <button
                key={label}
                className="text-sm text-[#F8F5EF]/78 transition hover:text-[#DDB665]"
                onClick={() => handleClick(href)}
                type="button"
              >
                {label}
              </button>
            ))}
          </div>
          <Button aria-label="Open menu" className="lg:hidden" onClick={() => setMenuOpen(true)} size="icon" variant="outline">
            <Menu className="h-5 w-5" />
          </Button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 bg-[#0A0A0A]/95 p-6 backdrop-blur-xl lg:hidden"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
          >
            <div className="flex items-center justify-between">
              <span className="font-serif text-3xl text-[#DDB665]">B&A</span>
              <Button aria-label="Close menu" onClick={() => setMenuOpen(false)} size="icon" variant="ghost">
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="mt-16 grid gap-6">
              {navItems.map(([label, href]) => (
                <button
                  key={label}
                  className="border-b border-white/10 pb-4 text-left font-serif text-4xl text-[#F8F5EF] transition hover:text-[#DDB665]"
                  onClick={() => handleClick(href)}
                  type="button"
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
