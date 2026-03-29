import ServicesSliderSection from '@/components/common/ServicesSliderSection'
import AboutHero from '@/components/routes/about/AboutHero'
import NowahFuture from '@/components/routes/about/nowahFuture/NowahFuture'
import WhyUs from '@/components/routes/about/WhyUs'

export default function AboutPage() {
  return (
    <main>
      <AboutHero/>
      <WhyUs/>
      <NowahFuture/>
      <ServicesSliderSection/>
    </main>
  )
}
