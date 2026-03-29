import ServiceHero from '@/components/ui/ServiceHero'
import { getTranslations } from 'next-intl/server'

export default async function MobileDevelopmentHero() {
    const t = await getTranslations("mobileDevelopment.hero")
  return (
        <ServiceHero
            title={t("title")}
            description={t("description")}
            image='/services/collection-green.webp'
        />
  )
}
