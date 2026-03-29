import React from 'react'
import WorkGallery from './WorkGallery'
import { getTranslations } from 'next-intl/server'
import NoisBackgroundWrapper from '@/components/ui/NoisBackgroundWrapper'

function DetailItem({title, description}: {title: string; description: string}){
    return (
        <div className='pb-3 border-b border-gray-300 mb-6' >
            <p className='text-18 font-changa font-regular text-gray-500'> {title} </p>
            <p className='text-gray-dark font-changa text-20 font-medium'> {description} </p>
        </div>
    )
}


export default async function WorkDetails() {
    const t = await getTranslations("workDetailsPage")
  return (
    <section>
        <NoisBackgroundWrapper>
            <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-29.75 gap-10">
                <div>
                    <DetailItem title={t("services.title")} description={t("services.service")} />
                    <DetailItem title={t("category.title")} description={t("category.category")} />
                    <DetailItem title={t("client.title")} description={t("client.client")} />
                </div>

                <div>
                    <p className='font-bold text-32 font-changa text-gray-dark'> {t("workTitle")} </p>
                    <p className='text-20 text-gray-500 font-regular mt-2'> {t("workDescription")} </p>
                    <WorkGallery/>
                </div>
            </div>
        </div>
        </NoisBackgroundWrapper>
    </section>
  )
}
