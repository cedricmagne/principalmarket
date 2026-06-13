import { Lock, TrendingUp, Zap } from 'lucide-react'

const items = [
  {
    icon: Lock,
    title: 'Fixed Yield',
    description:
      'Lock in predictable returns from tokenized RWAs. Know your yield at entry — no surprises.'
  },
  {
    icon: TrendingUp,
    title: 'Yield Trading',
    description:
      'Trade future yield separately from principal ownership. Long or short yield exposure without selling your asset.'
  },
  {
    icon: Zap,
    title: 'Capital Efficiency',
    description:
      "Unlock new strategies and liquidity opportunities across Stellar's growing RWA ecosystem."
  }
]

export default function WhyPrincipal() {
  return (
    <section className="py-24 sm:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <p className="text-xs text-primary uppercase tracking-widest font-medium mb-3">
            Why Principal
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Why Principal
          </h2>
          <p className="mt-4 text-muted-foreground text-base max-w-2xl mx-auto">
            Purpose-built yield primitives for the Stellar real-world asset
            ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col gap-4">
              <div className="w-11 h-11 rounded-sm bg-primary/10 border border-primary/25 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">
                {title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
