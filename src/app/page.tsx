import { Hero } from '@/components/sections/Hero'
import { MarketIntro } from '@/components/sections/MarketIntro'
import { UpcomingEvents } from '@/components/sections/UpcomingEvents'
import { FeaturedVendors } from '@/components/sections/FeaturedVendors'
import { ProduceBoxPreview } from '@/components/sections/ProduceBoxPreview'
import { Testimonials } from '@/components/sections/Testimonials'
import { Newsletter } from '@/components/sections/Newsletter'
import { MapSection } from '@/components/sections/MapSection'

export default function Home() {
  return (
    <>
      <Hero />
      <MarketIntro />
      <UpcomingEvents />
      <FeaturedVendors />
      <ProduceBoxPreview />
      <Testimonials />
      <Newsletter />
      <MapSection />
    </>
  )
}
