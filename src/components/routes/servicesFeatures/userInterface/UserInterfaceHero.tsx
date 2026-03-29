import ServiceHero from '@/components/ui/ServiceHero'
import { getTranslations } from 'next-intl/server'
import React from 'react'

export default async function UserInterfaceHero() {
    const t = await getTranslations("userInterfaceDesign.hero");
    
  return (
    <ServiceHero
        description={t("description")}
        image='/services/devices-with-illuminated.webp'
        title={t("title")}
    />
  )
}
