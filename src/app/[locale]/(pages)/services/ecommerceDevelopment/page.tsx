import ServicesSliderSection from '@/components/common/ServicesSliderSection'
import EcommerceDevelopmentContainer from '@/components/routes/servicesFeatures/ecommerceDevelopment/EcommerceDevelopmentContainer'
import EcommerceDevelopmentHero from '@/components/routes/servicesFeatures/ecommerceDevelopment/EcommerceDevelopmentHero'

export default function EcommerceDevelopmentPage() {
  return (
    <main>
        <EcommerceDevelopmentHero/>
        <EcommerceDevelopmentContainer/>
        <ServicesSliderSection/>
    </main>
  )
}
