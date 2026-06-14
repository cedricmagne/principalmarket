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
      'PT — Principal Token',
      'YT — Yield Token',
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
      'Low slippage and efficient PT/YT swaps'
    ],
    visual: (
      <div className="w-full h-28 relative">
        <svg
          viewBox="0 0 400 160"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          {/* grid */}
          {[20, 50, 80, 110, 140].map((y) => (
            <line
              key={`h${y}`}
              x1="40"
              x2="370"
              y1={y}
              y2={y}
              className="stroke-border"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          ))}
          {[40, 105, 170, 235, 300, 370].map((x) => (
            <line
              key={`v${x}`}
              x1={x}
              x2={x}
              y1="20"
              y2="140"
              className="stroke-border"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          ))}

          {/* band between 5% and 10% reference levels */}
          <rect
            x="40"
            y="68"
            width="330"
            height="34"
            className="fill-primary/10"
          />
          <line
            x1="40"
            x2="370"
            y1="68"
            y2="68"
            className="stroke-primary/40"
            strokeWidth="1"
            strokeDasharray="3 3"
            vectorEffect="non-scaling-stroke"
          />
          <line
            x1="40"
            x2="370"
            y1="102"
            y2="102"
            className="stroke-primary/40"
            strokeWidth="1"
            strokeDasharray="3 3"
            vectorEffect="non-scaling-stroke"
          />

          {/* AMM pricing curve — flat plateau, steep maturity ends */}
          <path
            d="M 52 148 C 60 148 62 104 78 100 C 165 92 240 80 322 70 C 340 66 344 24 352 16"
            fill="none"
            className="stroke-primary"
            strokeWidth="2.5"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <span className="absolute left-1 top-[58%] -translate-y-1/2 text-[10px] text-muted-foreground font-mono bg-card px-1">
          5%
        </span>
        <span className="absolute right-1 top-[40%] -translate-y-1/2 text-[10px] text-muted-foreground font-mono bg-card px-1">
          10%
        </span>
        <span className="absolute top-2 right-3 text-xs text-muted-foreground font-mono">
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
            Everything needed to fix, trade, and optimize yield exposure on
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
