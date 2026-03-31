import ServicesSliderSection from '@/components/common/ServicesSliderSection'
import WebsiteDevelopmentContainer from '@/components/routes/servicesFeatures/websiteDevelopment/WebsiteDevelopmentContainer'
import WebsiteDevelopmentHero from '@/components/routes/servicesFeatures/websiteDevelopment/WebsiteDevelopmentHero'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Website Development',
    description: 'Discover our expert Website Development services designed to create stunning and functional websites that drive results. Our team of skilled developers specializes in crafting custom websites tailored to your unique business needs. From responsive design to seamless user experience, we provide end-to-end solutions that ensure your online presence stands out in the competitive digital landscape.'
}

export default function WebsiteDevelopmentPage() {
  return (
    <main>
        <WebsiteDevelopmentHero/>
        <WebsiteDevelopmentContainer/>
        {/* <ServicesSliderSection/> */}
    </main>
  )
}
