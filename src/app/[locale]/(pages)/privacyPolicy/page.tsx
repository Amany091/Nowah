import ServicesSliderSection from '@/components/common/ServicesSliderSection'
import PrivacyContainer from '@/components/routes/privacyPolicy/PrivacyContainer'
import PrivacyHero from '@/components/routes/privacyPolicy/PrivacyHero'
import React from 'react'

export default function PrivacyPolicyPage() {
  return (
    <main>
        <PrivacyHero/>
        <PrivacyContainer/>
        <ServicesSliderSection/>
    </main>
  )
}
