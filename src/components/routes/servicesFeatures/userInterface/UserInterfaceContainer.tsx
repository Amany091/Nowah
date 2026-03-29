import { getTranslations } from 'next-intl/server'
import React from 'react'
import DetailsSection from '../DetailsSection'

export default async function UserInterfaceContainer() {
    const t = await getTranslations("userInterfaceDesign")

    const steps = [
        {title: t.rich("steps.0.title", {highlight: ((chunks)=> <span className='text-green-normal'>{chunks}</span>)}), description: t("steps.0.description"), image: '/services/woman-student.webp'},
        {title: t.rich("steps.1.title", {highlight: ((chunks)=> <span className='text-green-normal'>{chunks}</span>)}), description: t("steps.1.description"), image: '/services/woman-scanning.webp'},
        {title: t.rich("steps.2.title", {highlight: ((chunks)=> <span className='text-green-normal'>{chunks}</span>)}), description: t("steps.2.description"), image: '/services/futuristic-digital-checklist.webp'},
        {title: t.rich("steps.3.title", {highlight: ((chunks)=> <span className='text-green-normal'>{chunks}</span>)}), description: t("steps.3.description"), image: '/services/employee-using-green-screen.webp'},
        {title: t.rich("steps.4.title", {highlight: ((chunks)=> <span className='text-green-normal'>{chunks}</span>)}), description: t("steps.4.description"), image: '/services/confirmation-page.webp'},
        {title: t.rich("steps.5.title", {highlight: ((chunks)=> <span className='text-green-normal'>{chunks}</span>)}), description: t("steps.5.description"), image: '/services/future-concept.webp'},
    ];

  return (
    <DetailsSection steps={steps} />
  )
}
