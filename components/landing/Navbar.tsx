'use client'

import { useState, useEffect } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import PrincipalIcon from '@/components/landing/PrincipalIcon'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { label: 'Documentation', href: '#' },
    { label: 'GitHub', href: '#' },
    { label: 'Discord', href: '#' }
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-border' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <PrincipalIcon className="w-7 h-7" />
          <span className="font-display text-sm font-bold text-foreground tracking-tight">
            Principal
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Documentation
          </a>
          <button className="flex items-center gap-1.5 bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 rounded-sm hover:bg-primary/90 transition-all duration-200 glow-gold-sm">
            Launch App <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-muted-foreground"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-b border-border px-5 pb-5 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-muted-foreground"
            >
              {l.label}
            </a>
          ))}
          <button className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-4 py-2.5 rounded-sm">
            Launch App <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </header>
  )
}
