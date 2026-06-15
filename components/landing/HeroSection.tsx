import React from 'react'
import { ArrowRight } from 'lucide-react'
import TokenDiagram from '@/components/landing/TokenDiagram'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-20 w-full">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-center">
          {/* Left — text */}
          <div className="flex-1 text-left animate-slide-up">
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/25 text-primary text-xs font-semibold px-3 py-1.5 rounded-sm uppercase tracking-wide">
                ✦ Built on Stellar
              </span>
              <span className="inline-flex items-center gap-1.5 bg-muted border border-border text-muted-foreground text-xs font-medium px-3 py-1.5 rounded-sm uppercase tracking-wide">
                Powered by Soroban
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-none tracking-tight text-foreground mb-6">
              Yield
              <br />
              Tokenization
              <br />
              for Stellar
              <br />
              <span className="text-primary">RWAs</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md mb-10">
              Transform yield-bearing RWAs into tradable principal and yield
              positions. Lock in fixed yield, trade future yield, and optimize
              RWA exposure on Stellar.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-sm hover:bg-primary/90 transition-all duration-200 glow-gold text-sm">
                Launch App <ArrowRight className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-center gap-2 border border-border text-foreground font-medium px-7 py-3.5 rounded-sm hover:border-foreground/30 hover:bg-muted transition-all duration-200 text-sm">
                Documentation <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right — diagram */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none animate-slide-up delay-200">
            <TokenDiagram />
          </div>
        </div>
      </div>
    </section>
  )
}
