import ServicesSliderSection from '@/components/common/ServicesSliderSection'
import WebsiteDevelopmentContainer from '@/components/routes/servicesFeatures/websiteDevelopment/WebsiteDevelopmentContainer'
import WebsiteDevelopmentHero from '@/components/routes/servicesFeatures/websiteDevelopment/WebsiteDevelopmentHero'

export default function WebsiteDevelopmentPage() {
  return (
    <main>
        <WebsiteDevelopmentHero/>
        <WebsiteDevelopmentContainer/>
        {/* <ServicesSliderSection/> */}
    </main>
  )
}
