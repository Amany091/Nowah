import ServiceCard from '@/components/routes/home/services/ServiceCard'
import { getTranslations } from 'next-intl/server'
import React from 'react'

export default async function ServiceGallerySection() {
    const t = await getTranslations("ServicesPage.gallery")

  return (
    <div className='mt-10 grid grid-cols-1 lg:grid-cols-4 grid-rows-3 gap-4'>
        <ServiceCard
        className="col-span-1 lg:row-span-3 lg:h-full"
        image="/home/service-support.webp"
        title={t("serviceSupport.label")}
        description={t("serviceSupport.description")}
      />

      <ServiceCard
        image="/home/ui-ux-design.webp"
        title={t("userInterfaceDesign.label")}
        description={t('userInterfaceDesign.description')}
        className='lg:col-span-1 lg:row-span-1 col-span-1 '
      />

      <ServiceCard
        image="/home/smartphone-mockup.webp"
        title={t("mobileDevelopment.label")}
        description={t('mobileDevelopment.description')}
        className='lg:col-span-2 lg:row-span-1 col-span-1'
      />

      <ServiceCard
        image="/home/development-crossplatform.webp"
        title={t("websiteDevelopment.label")}
        description={t('websiteDevelopment.description')}
        className='lg:col-span-2 lg:row-span-1 col-span-1'
      />

      <ServiceCard
        image="/home/businessman-analyzing.webp"
        title={t("businessManagement.label")}
        description={t('businessManagement.description')}
        className='lg:col-span-1 lg:row-span-1 col-span-1 h-full!'
      />

      <ServiceCard
        className="lg:col-span-3 col-span-1"
        image="/home/online-shopping.webp"
        title={t("ecommerceDevelopment.label")}
        description={t('ecommerceDevelopment.description')}
      />
    </div>
  )
}
