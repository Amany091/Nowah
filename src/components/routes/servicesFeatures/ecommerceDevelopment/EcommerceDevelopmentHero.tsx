import ServiceHero from '@/components/ui/ServiceHero'
import { getTranslations } from 'next-intl/server'

export default async function EcommerceDevelopmentHero() {
   const t= await getTranslations("ecommerceDevelopment.hero")
    
  return (
    <ServiceHero
        description={t("description")}
        title={t("title")}
        image='/services/futuristic-digital-shopping.webp'
    />
  )
}
