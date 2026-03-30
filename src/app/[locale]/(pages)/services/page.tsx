import ServiceGallerySection from '@/components/common/services/ServiceGallerySection'
import ServicesSliderSection from '@/components/common/ServicesSliderSection'
import Services from '@/components/routes/home/services/Services'
import ServiceHero from '@/components/routes/services/ServiceHero'
import React from 'react'

export default function ServicesPage() {
  return (
    <main>
        <ServiceHero/>
        <Services/>
        {/* <ServicesSliderSection/> */}
    </main>
  )
}
