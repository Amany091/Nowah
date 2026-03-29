import ServiceHero from '@/components/ui/ServiceHero'
import { getTranslations } from 'next-intl/server'
import React from 'react'

export default async function BusinessManagementHero() {
    const t= await getTranslations("businessManagement.hero")
    
  return (
    <ServiceHero
        description={t("description")}
        title={t("title")}
        image='/services/web-analyzing.webp'
    />
  )
}
