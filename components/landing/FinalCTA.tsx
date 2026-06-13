import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="py-24 sm:py-32 border-t border-border">
      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-sm px-3.5 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
          <span className="text-xs font-medium text-primary tracking-wide uppercase">
            Coming Soon on Stellar Mainnet
          </span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6">
          Unlock Yield Markets
          <br />
          on Stellar
        </h2>

        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
          Access fixed yield, future yield trading, and a new generation of RWA
          financial products built on Stellar.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-sm hover:bg-primary/90 transition-all duration-200 glow-gold text-base">
            Launch App <ArrowRight className="w-4 h-4" />
          </button>
          <button className="flex items-center justify-center gap-2 border border-border text-foreground font-medium px-8 py-4 rounded-sm hover:border-foreground/30 hover:bg-muted transition-all duration-200 text-base">
            Read Documentation <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
