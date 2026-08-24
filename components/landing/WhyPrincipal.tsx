import { Landmark, KeyRound, Undo2 } from 'lucide-react'

const items = [
  {
    icon: Landmark,
    title: 'Administration',
    description:
      'The underlying RWA administrator controls market creation and compliance rights.'
  },
  {
    icon: KeyRound,
    title: 'Authorization',
    description:
      'Only wallets authorized to hold the underlying RWA can hold and trade PT/YT.'
  },
  {
    icon: Undo2,
    title: 'Clawback',
    description:
      'PT/YT positions can be settled into the underlying RWA for native clawback.'
  }
]

export default function WhyPrincipal() {
  return (
    <section
      id="why-principal"
      className="py-24 sm:py-32 border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <p className="text-xs text-primary uppercase tracking-widest font-medium mb-3">
            Compliance Architecture
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Compliance inherited by design
          </h2>
          <p className="mt-4 text-muted-foreground text-base max-w-2xl mx-auto">
            Principal extends the underlying RWA’s native compliance controls
            to PT/YT markets.
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
