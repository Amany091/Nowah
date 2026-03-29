import { getTranslations } from 'next-intl/server'
import DetailsSection from '../DetailsSection'

export default async function BusinessManagementContainer() {
    const t = await getTranslations("businessManagement")

    const steps = [
        {title: t.rich("steps.0.title", {highlight: ((chunks)=> <span className='text-green-normal'>{chunks}</span>)}), description: t("steps.0.description"), image: '/services/team-government.webp'},
        {title: t.rich("steps.1.title", {highlight: ((chunks)=> <span className='text-green-normal'>{chunks}</span>)}), description: t("steps.1.description"), image: '/services/modern-workspace.webp'},
        {title: t.rich("steps.2.title", {highlight: ((chunks)=> <span className='text-green-normal'>{chunks}</span>)}), description: t("steps.2.description"), image: '/services/glowing-green.webp'},
        {title: t.rich("steps.3.title", {highlight: ((chunks)=> <span className='text-green-normal'>{chunks}</span>)}), description: t("steps.3.description"), image: '/services/server-room-ict.webp'},
        {title: t.rich("steps.4.title", {highlight: ((chunks)=> <span className='text-green-normal'>{chunks}</span>)}), description: t("steps.4.description"), image: '/services/luxurious-boardroom.webp'},
        {title: t.rich("steps.5.title", {highlight: ((chunks)=> <span className='text-green-normal'>{chunks}</span>)}), description: t("steps.5.description"), image: '/services/glowing-green-checkmark.webp'},
        {title: t.rich("steps.6.title", {highlight: ((chunks)=> <span className='text-green-normal'>{chunks}</span>)}), description: t("steps.6.description"), image: '/services/data-center-engineer.webp'},
    ]
  return (
    <DetailsSection steps={steps} />
  )
}
