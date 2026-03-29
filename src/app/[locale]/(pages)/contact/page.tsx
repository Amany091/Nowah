import ServicesSliderSection from '@/components/common/ServicesSliderSection'
import ContactContainer from '@/components/routes/contact/ContactContainer'
import ContactHero from '@/components/routes/contact/ContactHero'
import React from 'react'

export default function ContactUsPage() {
  return (
    <main>
        <ContactHero/>
        <ContactContainer/>
        <ServicesSliderSection/>
    </main>
  )
}
