import ServicesSliderSection from '@/components/common/ServicesSliderSection'
import ServiceSupportContainer from '@/components/routes/servicesFeatures/serviceSupport/ServiceSupportContainer'
import ServiceSupportHero from '@/components/routes/servicesFeatures/serviceSupport/ServiceSupportHero'

export default function ServiceSupportPage() {
  return (
    <main>
        <ServiceSupportHero/>
        <ServiceSupportContainer/>
        <ServicesSliderSection/>
    </main>
  )
}
