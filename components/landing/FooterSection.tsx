import Link from 'next/link'
import { MessageCircle, FileText } from 'lucide-react'
import { FaGithub, FaXTwitter } from 'react-icons/fa6'
import PrincipalIcon from '@/components/landing/PrincipalIcon'

const links = [
  {
    icon: FileText,
    label: 'Documentation',
    href: 'https://github.com/principal-Protocol-org/principal/blob/main/README.md'
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    href: 'https://github.com/principal-Protocol-org/principal'
  },
  { icon: MessageCircle, label: 'Discord', href: '#' },
  { icon: FaXTwitter, label: 'X (Twitter)', href: '#' }
]

export default function FooterSection() {
  return (
    <footer className="border-t border-border bg-muted/20 py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2.5">
            <PrincipalIcon className="w-7 h-7" />
            <span className="font-display font-semibold text-foreground text-sm">
              Principal
            </span>
          </div>

          <div className="flex items-center gap-6 flex-wrap justify-center">
            {links.map(({ icon: Icon, label, href }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Principal is a yield tokenization infrastructure for Stellar
            Real-World Assets.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            © {new Date().getFullYear()} Principal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
