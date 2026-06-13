import React from 'react'
import { Layers, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Layers,
    tag: 'Tokenization',
    title: 'Yield Tokenization',
    description:
      'Split yield-bearing assets into principal and yield tokens, unlocking fixed yield and future yield trading.',
    highlights: [
      'PT — Fixed Yield Token',
      'YT — Variable Yield Token',
      'SY — Standardized Yield Wrapper'
    ],
    visual: (
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {['Asset', 'SY', 'PT', 'YT'].map((label, i) => (
          <React.Fragment key={label}>
            <div
              className={`px-4 py-2.5 rounded-sm border font-display font-semibold text-sm
              ${
                label === 'PT' || label === 'YT'
                  ? 'bg-primary/10 border-primary/25 text-primary'
                  : label === 'SY'
                    ? 'bg-foreground/5 border-foreground/15 text-foreground'
                    : 'bg-muted border-border text-muted-foreground'
              }`}
            >
              {label}
            </div>
            {i < 1 && <span className="text-muted-foreground text-sm">→</span>}
            {i === 1 && (
              <span className="text-primary text-sm font-bold">→</span>
            )}
          </React.Fragment>
        ))}
      </div>
    )
  },
  {
    icon: TrendingUp,
    tag: 'AMM',
    title: 'Yield Trading AMM',
    description:
      'A dedicated AMM for principal and yield trading, built around maturity-based pricing and efficient liquidity.',
    highlights: [
      'Maturity-based pricing curve',
      'Efficient liquidity pools',
      'Low slippage PT/YT swaps'
    ],
    visual: (
      <div className="w-full h-28 relative flex items-end justify-center gap-1 px-4">
        {[40, 55, 70, 85, 95, 100, 95, 85, 70, 55, 40].map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t-none transition-all ${i === 5 ? 'bg-primary' : 'bg-foreground/10'}`}
            style={{ height: `${h}%` }}
          />
        ))}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
        <span className="absolute top-2 right-4 text-xs text-muted-foreground font-mono">
          AMM Curve
        </span>
      </div>
    )
  }
]

export default function CoreFeatures() {
  return (
    <section className="py-24 sm:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <p className="text-xs text-primary uppercase tracking-widest font-medium mb-3">
            Protocol Architecture
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Two pillars of yield markets
          </h2>
          <p className="mt-4 text-muted-foreground text-base max-w-2xl mx-auto">
            Every tool you need to fix, trade, and optimize yield exposure on
            tokenized real-world assets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {features.map(
            ({ icon: Icon, tag, title, description, highlights, visual }) => (
              <div
                key={title}
                className="border border-border rounded-sm bg-card p-7 card-hover flex flex-col gap-7"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-sm bg-muted border border-border flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <span className="text-xs text-primary font-medium uppercase tracking-widest">
                      {tag}
                    </span>
                    <h3 className="font-display text-xl font-bold text-foreground mt-1">
                      {title}
                    </h3>
                  </div>
                </div>

                <div className="bg-muted/40 rounded-sm p-5 border border-border min-h-24 flex items-center justify-center">
                  {visual}
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm">
                  {description}
                </p>

                <ul className="space-y-2">
                  {highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2.5 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
