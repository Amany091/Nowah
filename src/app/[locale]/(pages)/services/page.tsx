import ServiceGallerySection from '@/components/common/services/ServiceGallerySection'
import ServicesSliderSection from '@/components/common/ServicesSliderSection'
import Services from '@/components/routes/home/services/Services'
import ServiceHero from '@/components/routes/services/ServiceHero'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Our Services",
  description: "Discover our range of services designed to help you achieve your digital transformation goals and drive business growth."
}

export default function ServicesPage() {
  return (
    <main>
        <ServiceHero/>
        <Services/>
        {/* <ServicesSliderSection/> */}
    </main>
  )
}
