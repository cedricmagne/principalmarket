import Image from 'next/image'
import { Layers, TrendingUp } from 'lucide-react'

export const buildSteepEndsCurvePath = ({
  x = 0,
  y = 0,
  width,
  height,
  padY = 14, // marge verticale pour les bords raides
  samples = 40,
  steepness = 0.82
}: {
  x?: number
  y?: number
  width: number
  height: number
  padY?: number
  samples?: number
  steepness?: number
}): string => {
  const pts = Array.from({ length: samples }, (_, i) => {
    const t = i / (samples - 1)
    return { t, v: Math.tan((t - 0.5) * Math.PI * steepness) }
  })

  const vs = pts.map((p) => p.v)
  const vMin = Math.min(...vs)
  const vMax = Math.max(...vs)
  const h = height - padY * 2

  const screen = pts.map((p) => ({
    x: x + p.t * width,
    y: y + padY + ((vMax - p.v) / (vMax - vMin)) * h // y inversé => montante
  }))

  const f = (n: number) => n.toFixed(1)
  return screen.reduce((d, p2, i, a) => {
    if (i === 0) return `M ${f(p2.x)} ${f(p2.y)}`
    const p0 = a[i - 2] ?? a[i - 1]
    const p1 = a[i - 1]
    const p3 = a[i + 1] ?? p2
    const c1 = { x: p1.x + (p2.x - p0.x) / 6, y: p1.y + (p2.y - p0.y) / 6 }
    const c2 = { x: p2.x - (p3.x - p1.x) / 6, y: p2.y - (p3.y - p1.y) / 6 }
    return `${d} C ${f(c1.x)} ${f(c1.y)} ${f(c2.x)} ${f(c2.y)} ${f(p2.x)} ${f(p2.y)}`
  }, '')
}
const d = buildSteepEndsCurvePath({ x: 40, y: 20, width: 330, height: 120 })

const features = [
  {
    icon: Layers,
    tag: 'Tokenization',
    title: 'Yield Tokenization',
    description:
      'Split yield-bearing assets into principal and yield tokens, unlocking fixed yield and future yield trading.',
    visual: (
      <div className="flex items-center justify-evenly w-full flex-wrap">
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-full bg-foreground/8 border border-foreground/15 flex items-center justify-center">
            <Image
              src="/icons/principal_icon.png"
              alt="Principal"
              width={32}
              height={32}
              className="grayscale"
            />
          </div>
          <span className="text-muted-foreground text-sm font-medium">
            Principal
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 sepia rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
            <Image
              src="/icons/principal_icon.png"
              alt="Principal"
              width={32}
              height={32}
            />
          </div>
          <span className="text-muted-foreground text-sm font-medium">
            Yield
          </span>
        </div>
      </div>
    )
  },
  {
    icon: TrendingUp,
    tag: 'AMM',
    title: 'Yield Trading AMM',
    description:
      'A dedicated AMM for principal and yield trading, built around maturity-based pricing and efficient liquidity.',
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
            y="48"
            width="330"
            height="74"
            className="fill-primary/10"
          />
          <line
            x1="40"
            x2="370"
            y1="48"
            y2="48"
            className="stroke-primary/40"
            strokeWidth="1"
            strokeDasharray="3 3"
            vectorEffect="non-scaling-stroke"
          />
          <line
            x1="40"
            x2="370"
            y1="122"
            y2="122"
            className="stroke-primary/40"
            strokeWidth="1"
            strokeDasharray="3 3"
            vectorEffect="non-scaling-stroke"
          />

          {/* AMM pricing curve — flat plateau, steep maturity ends */}
          <path
            d={d}
            fill="none"
            className="stroke-primary"
            strokeWidth="2.5"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <span className="absolute left-5 top-[75%] -translate-y-1/2 text-[10px] text-muted-foreground font-mono bg-card px-1">
          5%
        </span>
        <span className="absolute right-1 top-[30%] -translate-y-1/2 text-[10px] text-muted-foreground font-mono bg-card px-1">
          10%
        </span>
        <span className="absolute -top-3 right-3 text-xs text-muted-foreground font-mono">
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
            tokenized RWAs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {features.map(({ icon: Icon, tag, title, description, visual }) => (
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

              <div className="p-5 min-h-24 flex items-center justify-center">
                {visual}
              </div>

              <p className="text-muted-foreground leading-relaxed text-sm text-center max-w-md mx-auto">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
