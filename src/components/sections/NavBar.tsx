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
      <header className="fixed inset-x-0 top-0 z-40 border-b border-black/5 bg-white" style={{ fontFamily: 'var(--font-nav)' }}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 lg:px-8">
          <button className=" font-semibold tracking-wide text-purple-400 font-serif" onClick={() => handleClick('#home')} type="button">
            <h1 className='text-3xl font-bold'>B&F</h1>
          </button>
          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map(([label, href]) => (
              <button
                key={label}
                className="text-[9px] text-black transition hover:text-purple-600"
                onClick={() => handleClick(href)}
                type="button"
              >
                <span className='text-sm'>{label}</span>
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
            className="fixed inset-0 z-50 bg-white p-6 lg:hidden"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            style={{ fontFamily: 'var(--font-nav)' }}
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold tracking-wide text-purple-600">B&A</span>
              <Button aria-label="Close menu" onClick={() => setMenuOpen(false)} size="icon" variant="ghost">
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="mt-16 grid gap-6">
              {navItems.map(([label, href]) => (
                <button
                  key={label}
                  className="border-b border-black/10 pb-4 text-left text-xl text-black transition hover:text-purple-600"
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
