const partners = [
  { name: 'XLM Stellar', short: 'XLM' },
  { name: 'Ondo Finance', short: 'O' },
  { name: 'Freighter', short: 'F' },
  { name: 'Soroban', short: 'SRB' }
]

export default function EcosystemSection() {
  return (
    <section className="py-24 sm:py-32 bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
        <p className="text-xs text-primary uppercase tracking-widest font-medium mb-3">
          Ecosystem
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-5">
          Built for Stellar
        </h2>
        <p className="text-muted-foreground text-base max-w-2xl mx-auto mb-16">
          Principal Protocol brings yield tokenization infrastructure to Stellar
          and unlocks a new financial primitive for tokenized real-world assets.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8">
          {partners.map(({ name, short }) => (
            <div
              key={name}
              className="flex items-center gap-3 bg-white border border-border rounded-sm px-6 py-4 card-hover"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="font-display font-bold text-xs text-primary">
                  {short}
                </span>
              </div>
              <span className="font-display font-semibold text-foreground text-sm">
                {name}
              </span>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="h-px bg-border mb-12" />
          <div className="bg-muted/40 border border-border rounded-sm py-10 px-8">
            <p className="text-2xl sm:text-3xl font-display font-bold text-foreground leading-snug">
              &ldquo;Bringing institutional-grade yield markets to the Stellar
              ecosystem.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
