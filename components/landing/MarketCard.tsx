import Link from 'next/link'
import { Clock, Lock, TrendingUp, Droplets, ArrowRight } from 'lucide-react'

const metrics = [
  {
    icon: Clock,
    label: 'Maturity Date',
    value: 'Dec 31, 2026'
  },
  {
    icon: TrendingUp,
    label: 'Underlying APY',
    value: '4.70%',
    sub: 'USDY base yield'
  },
  {
    icon: Lock,
    label: 'Fixed APY (PT)',
    value: 'TBD',
    sub: 'Available at launch'
  },
  { icon: Droplets, label: 'Total Liquidity', value: '$0', sub: 'Pre-launch' }
]

export default function MarketCard() {
  return (
    <section id="market" className="py-24 sm:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <p className="text-xs text-primary uppercase tracking-widest font-medium mb-3">
            Upcoming Markets
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            First market on Principal
          </h2>
          <p className="mt-4 text-muted-foreground text-base">
            USDY by Ondo Finance — Principal&apos;s first yield tokenization
            market on Stellar.
          </p>
        </div>

        <div className="border border-border rounded-sm bg-white overflow-hidden shadow-sm">
          {/* Card header */}
          <div className="px-6 sm:px-8 py-5 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center font-display font-bold text-primary text-base">
                  $
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-muted border-2 border-white flex items-center justify-center">
                  <span className="text-[8px] font-bold text-foreground">
                    O
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    USDY
                  </h3>
                  <span className="bg-primary/10 border border-primary/25 text-primary text-xs font-semibold px-2.5 py-1 rounded-sm uppercase tracking-wide">
                    Coming Soon
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-0.5">
                  USDY by Ondo Finance · Stellar RWA
                </p>
              </div>
            </div>

            <div className="flex gap-3 flex-wrap">
              <button
                disabled
                className="flex items-center gap-2 border border-border text-muted-foreground text-sm font-medium px-5 py-2.5 rounded-sm opacity-60 cursor-not-allowed"
              >
                <Lock className="w-4 h-4" /> PT Access
              </button>
              <button
                disabled
                className="flex items-center gap-2 border border-primary/30 text-primary text-sm font-medium px-5 py-2.5 rounded-sm opacity-60 cursor-not-allowed"
              >
                <ArrowRight className="w-4 h-4" /> YT Access
              </button>
            </div>
          </div>

          {/* Metrics grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border">
            {metrics.map(({ icon: Icon, label, value, sub }) => (
              <div key={label} className="px-6 py-6">
                <div className="flex items-center gap-2 mb-3">
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {label}
                  </span>
                </div>
                <p className="font-display text-2xl font-bold text-foreground">
                  {value}
                </p>
                {sub && (
                  <p className="text-xs text-muted-foreground mt-1">{sub}</p>
                )}
              </div>
            ))}
          </div>

          {/* Bottom banner */}
          <div className="px-6 sm:px-8 py-4 bg-muted/30 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground">
              <span className="text-foreground font-medium">USDY</span> is a
              yield-bearing stablecoin backed by short-term US Treasuries,
              issued by Ondo Finance.
            </p>
            <Link
              href="#"
              className="flex items-center gap-1.5 text-sm text-primary hover:underline shrink-0"
            >
              Learn about USDY <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
