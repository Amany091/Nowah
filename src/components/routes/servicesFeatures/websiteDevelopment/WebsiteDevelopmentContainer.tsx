import DetailsSection from '@/components/routes/servicesFeatures/DetailsSection'
import { getTranslations } from 'next-intl/server'
import React from 'react'

export default async function WebsiteDevelopmentContainer() {
    const t = await getTranslations("websiteDevelopment")

    const steps = [
        {title: t.rich("steps.0.title", {highlight: ((chunks)=> <span className='text-green-normal'>{chunks}</span>)}), description: t("steps.0.description"), image: '/services/double-exposure.webp'},
        {title: t.rich("steps.1.title", {highlight: ((chunks)=> <span className='text-green-normal'>{chunks}</span>)}), description: t("steps.1.description"), image: '/services/digital-board.webp'},
        {title: t.rich("steps.2.title", {highlight: ((chunks)=> <span className='text-green-normal'>{chunks}</span>)}), description: t("steps.2.description"), image: '/services/single-figure-lab-coat.webp'},
        {title: t.rich("steps.3.title", {highlight: ((chunks)=> <span className='text-green-normal'>{chunks}</span>)}), description: t("steps.3.description"), image: '/services/employee-using-green-screen.webp'},
        {title: t.rich("steps.4.title", {highlight: ((chunks)=> <span className='text-green-normal'>{chunks}</span>)}), description: t("steps.4.description"), image: '/services/business-professional.webp'},
        {title: t.rich("steps.5.title", {highlight: ((chunks)=> <span className='text-green-normal'>{chunks}</span>)}), description: t("steps.5.description"), image: '/services/business-hand.webp'},
    ]

  return (
    <DetailsSection steps={steps} />
  )
}
