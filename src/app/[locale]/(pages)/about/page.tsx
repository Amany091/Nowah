import ServicesSliderSection from '@/components/common/ServicesSliderSection'
import AboutHero from '@/components/routes/about/AboutHero'
import NowahFuture from '@/components/routes/about/nowahFuture/NowahFuture'
import WhyUs from '@/components/routes/about/WhyUs'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Who We Are",
  description: "Learn more about our company and our mission."
}

export default function AboutPage() {
  return (
    <main>
      <AboutHero/>
      <WhyUs/>
      <NowahFuture/>
      {/* <ServicesSliderSection/> */}
    </main>
  )
}
