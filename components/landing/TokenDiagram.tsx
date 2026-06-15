const GOLD = 'hsl(43 74% 37%)'

export default function TokenDiagram() {
  return (
    <div className="rounded-sm border border-border bg-white p-6 sm:p-8 shadow-sm">
      <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6 text-center font-medium">
        Tokenization Flow
      </p>

      <div className="flex flex-col gap-3">
        {/* Asset */}
        <div className="flex items-center gap-4 bg-muted/40 rounded-sm p-4 border border-border">
          <div className="w-11 h-11 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
            <span className="text-primary font-bold text-xs font-display">
              RWA
            </span>
          </div>
          <div className="flex-1">
            <p className="font-display font-semibold text-foreground text-sm">
              Tokenized Real-World Asset
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              e.g. USDY · tokenized T-bill
            </p>
          </div>
          <span className="text-xs font-medium text-muted-foreground bg-muted border border-border px-2.5 py-1 rounded-sm">
            Input
          </span>
        </div>

        {/* Arrow down */}
        <div className="flex items-center justify-center gap-3 py-1">
          <div className="flex-1 h-px bg-border" />
          <div className="flex flex-col items-center gap-1">
            <svg width="24" height="28" viewBox="0 0 24 28" fill="none">
              <path
                d="M12 2 L12 22"
                stroke={GOLD}
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />
              <path
                d="M6 17 L12 24 L18 17"
                stroke={GOLD}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[10px] text-primary font-medium tracking-wide">
              Deposit
            </span>
          </div>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* SY */}
        <div className="flex items-center gap-4 bg-muted/40 rounded-sm p-4 border border-border">
          <div className="w-11 h-11 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
            <span className="text-primary font-bold text-sm font-display">
              SY
            </span>
          </div>
          <div className="flex-1">
            <p className="font-display font-semibold text-foreground text-sm">
              Standardized Yield Token
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Wrapped yield-bearing token
            </p>
          </div>
          <span className="text-xs font-medium text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-sm">
            Standardize
          </span>
        </div>

        {/* Split arrow */}
        <div className="flex flex-col items-center justify-center gap-1 py-1">
          <svg
            width="200"
            height="36"
            viewBox="0 0 200 36"
            fill="none"
            className="w-full max-w-xs"
          >
            <line
              x1="100"
              y1="0"
              x2="100"
              y2="14"
              stroke={GOLD}
              strokeWidth="1.5"
            />
            <line
              x1="100"
              y1="14"
              x2="40"
              y2="14"
              stroke={GOLD}
              strokeWidth="1.5"
            />
            <line
              x1="100"
              y1="14"
              x2="160"
              y2="14"
              stroke={GOLD}
              strokeWidth="1.5"
            />
            <line
              x1="40"
              y1="14"
              x2="40"
              y2="28"
              stroke={GOLD}
              strokeWidth="1.5"
            />
            <line
              x1="160"
              y1="14"
              x2="160"
              y2="28"
              stroke={GOLD}
              strokeWidth="1.5"
            />
            <path
              d="M34 24 L40 32 L46 24"
              stroke={GOLD}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M154 24 L160 32 L166 24"
              stroke={GOLD}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[10px] text-primary font-medium tracking-wide -my-3 pb-4">
            Split
          </span>
        </div>

        {/* PT + YT */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-muted/40 rounded-sm p-4 border border-border">
            <div className="w-10 h-10 rounded-full bg-foreground/8 border border-foreground/15 flex items-center justify-center mb-3">
              <span className="text-foreground font-bold text-xs font-display">
                PT
              </span>
            </div>
            <p className="font-display font-semibold text-foreground text-sm mb-1">
              Principal Token
            </p>
            <p className="text-xs text-muted-foreground">
              Principal claim redeemable at maturity
            </p>
            <div className="mt-3">
              <span className="text-xs font-medium text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-sm">
                Fixed Yield
              </span>
            </div>
          </div>
          <div className="bg-muted/40 rounded-sm p-4 border border-border">
            <div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mb-3">
              <span className="text-primary font-bold text-xs font-display">
                YT
              </span>
            </div>
            <p className="font-display font-semibold text-foreground text-sm mb-1">
              Yield Token
            </p>
            <p className="text-xs text-muted-foreground">
              Claim on yield until maturity
            </p>
            <div className="mt-3">
              <span className="text-xs font-medium text-muted-foreground bg-muted border border-border px-2 py-0.5 rounded-sm">
                Future Yield
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
