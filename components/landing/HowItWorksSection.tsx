import React from 'react'
import { Download, Scissors, ArrowLeftRight, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: Download,
    number: '01',
    title: 'Deposit',
    description:
      'Deposit a yield-bearing RWA and receive a Standardized Yield Token (SY).'
  },
  {
    icon: Scissors,
    number: '02',
    title: 'Split',
    description:
      'Split the asset into Principal Token (PT) and Yield Token (YT) for a fixed maturity.'
  },
  {
    icon: ArrowLeftRight,
    number: '03',
    title: 'Trade',
    description:
      'Trade principal and yield exposure separately before maturity through the Yield Trading AMM.'
  },
  {
    icon: CheckCircle,
    number: '04',
    title: 'Redeem',
    description:
      'Redeem PT at maturity, or claim the yield generated through YT settlements.'
  }
]

export default function HowItWorksSection() {
  return (
    <section className="py-24 sm:py-32 bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <p className="text-xs text-primary uppercase tracking-widest font-medium mb-3">
            How it works
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            How it works
          </h2>
          <p className="mt-4 text-muted-foreground text-base max-w-xl mx-auto">
            Deposit, split, trade, and redeem yield-bearing RWAs.
          </p>
        </div>

        <div className="relative">
          {/* Connector line desktop */}
          <div className="hidden lg:block absolute top-13 left-[12.5%] right-[12.5%] h-px bg-border" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map(({ icon: Icon, number, title, description }) => (
              <div
                key={title}
                className="relative flex flex-col items-center text-center gap-4"
              >
                <div className="relative w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center z-10">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-primary tracking-widest">
                    {number}
                  </span>
                  <h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
