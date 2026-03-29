import { getTranslations } from 'next-intl/server'
import DetailsSection from '../DetailsSection';

export default async function EcommerceDevelopmentContainer() {
     const t = await getTranslations("ecommerceDevelopment");

    const steps = [
        {title: t.rich("steps.0.title", {highlight: ((chunks)=> <span className='text-green-normal'>{chunks}</span>)}), description: t("steps.0.description"), image: '/services/business-people-meeting.webp'},
        {title: t.rich("steps.1.title", {highlight: ((chunks)=> <span className='text-green-normal'>{chunks}</span>)}), description: t("steps.1.description"), image: '/services/representations.webp'},
        {title: t.rich("steps.2.title", {highlight: ((chunks)=> <span className='text-green-normal'>{chunks}</span>)}), description: t("steps.2.description"), image: '/services/green-screen.webp'},
        {title: t.rich("steps.3.title", {highlight: ((chunks)=> <span className='text-green-normal'>{chunks}</span>)}), description: t("steps.3.description"), image: '/services/creative-glowing.webp'},
        {title: t.rich("steps.4.title", {highlight: ((chunks)=> <span className='text-green-normal'>{chunks}</span>)}), description: t("steps.4.description"), image: '/services/standard-quality.webp'},
        {title: t.rich("steps.5.title", {highlight: ((chunks)=> <span className='text-green-normal'>{chunks}</span>)}), description: t("steps.5.description"), image: '/services/woman-using-laptop.webp'},
    ]

  return (
    <DetailsSection steps={steps}/>
  )
}
