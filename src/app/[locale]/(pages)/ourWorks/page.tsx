import ServicesSliderSection from '@/components/common/ServicesSliderSection'
import Works from '@/components/routes/works/index'
import WorksHero from '@/components/routes/works/WorksHero'
import React from 'react'

export default function WorksPage() {
  return (
    <main>
      <WorksHero/>
      <Works/>
      {/* <ServicesSliderSection/> */}
    </main>
  )
}
