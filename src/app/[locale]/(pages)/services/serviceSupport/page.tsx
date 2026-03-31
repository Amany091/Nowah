import ServicesSliderSection from '@/components/common/ServicesSliderSection'
import ServiceSupportContainer from '@/components/routes/servicesFeatures/serviceSupport/ServiceSupportContainer'
import ServiceSupportHero from '@/components/routes/servicesFeatures/serviceSupport/ServiceSupportHero'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Service Support',
    description: 'Experience our exceptional Service Support designed to provide you with reliable assistance and solutions for all your service-related needs. Our dedicated support team is available to help you with troubleshooting, maintenance, and any inquiries you may have. We are committed to ensuring your satisfaction and success by delivering prompt and effective support services.'
}

export default function ServiceSupportPage() {
  return (
    <main>
        <ServiceSupportHero/>
        <ServiceSupportContainer/>
        {/* <ServicesSliderSection/> */}
    </main>
  )
}
