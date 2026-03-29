import ServicesSliderSection from '@/components/common/ServicesSliderSection'
import MobileDevelopment from '@/components/routes/servicesFeatures/mobileDevelopment/MobileDevelopment'
import MobileDevelopmentHero from '@/components/routes/servicesFeatures/mobileDevelopment/MobileDevelopmentHero'
import { getTranslations } from 'next-intl/server'
import React from 'react'

export default async function MobileDevelopmentPage() {
    const t = await getTranslations("mobileDevelopment")
  return (
    <main>
        <MobileDevelopmentHero/>
        <MobileDevelopment/>
        <ServicesSliderSection/>
    </main>
  )
}
