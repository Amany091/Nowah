import ServicesSliderSection from '@/components/common/ServicesSliderSection'
import PrivacyContainer from '@/components/routes/privacyPolicy/PrivacyContainer'
import PrivacyHero from '@/components/routes/privacyPolicy/PrivacyHero'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read our privacy policy to learn how we collect, use, and protect your personal information when you use our website and services."
}

export default function PrivacyPolicyPage() {
  return (
    <main>
        <PrivacyHero/>
        <PrivacyContainer/>
        {/* <ServicesSliderSection/> */}
    </main>
  )
}
