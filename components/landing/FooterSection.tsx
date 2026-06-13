import { MessageCircle, FileText } from 'lucide-react'
import { FaGithub, FaXTwitter } from 'react-icons/fa6'

const links = [
  { icon: FileText, label: 'Documentation', href: '#' },
  { icon: FaGithub, label: 'GitHub', href: '#' },
  { icon: MessageCircle, label: 'Discord', href: '#' },
  { icon: FaXTwitter, label: 'X (Twitter)', href: '#' }
]

export default function FooterSection() {
  return (
    <footer className="border-t border-border bg-muted/20 py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-sm bg-foreground flex items-center justify-center">
              <span className="text-background font-bold text-xs font-display">
                P
              </span>
            </div>
            <span className="font-display font-semibold text-foreground text-sm">
              Principal Protocol
            </span>
          </div>

          <div className="flex items-center gap-6 flex-wrap justify-center">
            {links.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Principal Protocol is a yield tokenization infrastructure for
            Stellar Real-World Assets.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            © 2025 Principal Protocol. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
