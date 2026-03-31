import ServicesSliderSection from '@/components/common/ServicesSliderSection'
import MobileDevelopment from '@/components/routes/servicesFeatures/mobileDevelopment/MobileDevelopment'
import MobileDevelopmentHero from '@/components/routes/servicesFeatures/mobileDevelopment/MobileDevelopmentHero'
import { getTranslations } from 'next-intl/server'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Mobile Development',
    description: 'Discover our expert Mobile Development services designed to create seamless and engaging mobile applications. Our team specializes in developing high-quality apps for both iOS and Android platforms, tailored to meet your specific business needs. From concept to deployment, we provide end-to-end solutions that ensure your mobile app stands out in the competitive market.'
}

export default async function MobileDevelopmentPage() {
    const t = await getTranslations("mobileDevelopment")
  return (
    <main>
        <MobileDevelopmentHero/>
        <MobileDevelopment/>
        {/* <ServicesSliderSection/> */}
    </main>
  )
}
