import ServicesSliderSection from '@/components/common/ServicesSliderSection'
import Works from '@/components/routes/works/index'
import WorksHero from '@/components/routes/works/WorksHero'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Our Works",
  description: "Explore our portfolio of successful digital transformation projects and see how we've helped businesses like yours achieve their goals."
}

export default function WorksPage() {
  return (
    <main>
      <WorksHero/>
      <Works/>
      {/* <ServicesSliderSection/> */}
    </main>
  )
}
