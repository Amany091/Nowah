import { getTranslations } from 'next-intl/server'
import DetailsSection from '../DetailsSection'

export default async function ServiceSupportContainer() {
    const t = await getTranslations("serviceSupport")

    const steps = [
        {title: t.rich("steps.0.title", {highlight: ((chunks)=> <span className='text-green-normal'>{chunks}</span>)}), description: t("steps.0.description"), image: '/services/team-work.webp'},
        {title: t.rich("steps.1.title", {highlight: ((chunks)=> <span className='text-green-normal'>{chunks}</span>)}), description: t("steps.1.description"), image: '/services/businessman-hand.webp'},
        {title: t.rich("steps.2.title", {highlight: ((chunks)=> <span className='text-green-normal'>{chunks}</span>)}), description: t("steps.2.description"), image: '/services/qa-quality.webp'},
        {title: t.rich("steps.3.title", {highlight: ((chunks)=> <span className='text-green-normal'>{chunks}</span>)}), description: t("steps.3.description"), image: '/services/technology-infrastructure.webp'},
        {title: t.rich("steps.4.title", {highlight: ((chunks)=> <span className='text-green-normal'>{chunks}</span>)}), description: t("steps.4.description"), image: '/services/wireless-businessman.webp'},
        {title: t.rich("steps.5.title", {highlight: ((chunks)=> <span className='text-green-normal'>{chunks}</span>)}), description: t("steps.5.description"), image: '/services/black-men-concept.webp'},
        {title: t.rich("steps.6.title", {highlight: ((chunks)=> <span className='text-green-normal'>{chunks}</span>)}), description: t("steps.6.description"), image: '/services/cyber-security.webp'},
    ]
  return (
    <DetailsSection steps={steps}/>
  )
}
