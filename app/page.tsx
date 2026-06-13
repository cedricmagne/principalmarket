import CoreFeatures from '@/components/landing/CoreFeatures'
import EcosystemSection from '@/components/landing/EcosystemSection'
import FinalCTA from '@/components/landing/FinalCTA'
import FooterSection from '@/components/landing/FooterSection'
import HeroSection from '@/components/landing/HeroSection'
import HowItWorksSection from '@/components/landing/HowItWorksSection'
import MarketCard from '@/components/landing/MarketCard'
import Navbar from '@/components/landing/Navbar'
import WhyPrincipal from '@/components/landing/WhyPrincipal'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navbar />
      <HeroSection />
      <CoreFeatures />
      <HowItWorksSection />
      <MarketCard />
      <WhyPrincipal />
      <EcosystemSection />
      <FinalCTA />
      <FooterSection />
    </div>
  )
}
