import ServiceHero from '@/components/ui/ServiceHero'
import { getTranslations } from 'next-intl/server'

export default async function WebsiteDevelopmentHero() {
    const t = await getTranslations("websiteDevelopment.hero")

  return (
    <ServiceHero
        description={t("description")}
        title={t("title")}
        image='/services/cyber-security1.webp'
    />
  )
}
