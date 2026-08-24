export default function EcosystemSection() {
  return (
    <section
      id="ecosystem"
      className="py-24 sm:py-32 bg-muted/30 border-y border-border"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
        <p className="text-xs text-primary uppercase tracking-widest font-medium mb-3">
          Ecosystem
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-5">
          Built for Stellar
        </h2>
        <p className="text-muted-foreground text-base max-w-2xl mx-auto mb-16">
          Principal brings compliant yield tokenization infrastructure to
          Stellar and unlocks a new financial primitive for tokenized
          real-world assets.
        </p>

        {/* Quote */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="h-px bg-border mb-12" />
          <div className="bg-muted/40 border border-border rounded-sm py-10 px-8">
            <p className="text-2xl sm:text-3xl font-display font-bold text-foreground leading-snug">
              &ldquo;Bringing institutional-grade yield markets to Stellar
              without compromising compliance.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
