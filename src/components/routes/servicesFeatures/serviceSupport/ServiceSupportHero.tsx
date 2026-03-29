import ServiceHero from '@/components/ui/ServiceHero'
import { getTranslations } from 'next-intl/server'

export default async function ServiceSupportHero() {
   const t= await getTranslations("serviceSupport.hero")
    
  return (
    <ServiceHero
        description={t("description")}
        title={t("title")}
        image='/services/circuit-board.webp'
    />
  )
}
