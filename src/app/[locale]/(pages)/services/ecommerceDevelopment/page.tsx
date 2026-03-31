import ServicesSliderSection from '@/components/common/ServicesSliderSection'
import EcommerceDevelopmentContainer from '@/components/routes/servicesFeatures/ecommerceDevelopment/EcommerceDevelopmentContainer'
import EcommerceDevelopmentHero from '@/components/routes/servicesFeatures/ecommerceDevelopment/EcommerceDevelopmentHero'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Ecommerce Development',
    description: 'Explore our top-notch Ecommerce Development services designed to help you build and grow your online store. Our expert team specializes in creating customized ecommerce solutions that are scalable, secure, and user-friendly. From platform selection to design and development, we provide end-to-end services to ensure your ecommerce business thrives in the competitive online marketplace.'
}

export default function EcommerceDevelopmentPage() {
  return (
    <main>
        <EcommerceDevelopmentHero/>
        <EcommerceDevelopmentContainer/>
        {/* <ServicesSliderSection/> */}
    </main>
  )
}
