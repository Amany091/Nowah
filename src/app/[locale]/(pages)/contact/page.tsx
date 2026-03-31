import ServicesSliderSection from '@/components/common/ServicesSliderSection'
import ContactContainer from '@/components/routes/contact/ContactContainer'
import ContactHero from '@/components/routes/contact/ContactHero'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with us to discuss your digital transformation needs and how we can help you achieve your goals."
}

export default function ContactUsPage() {
  return (
    <main>
        <ContactHero/>
        <ContactContainer/>
        {/* <ServicesSliderSection/> */}
    </main>
  )
}
