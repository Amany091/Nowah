import BackgroundWrapper from '@/components/ui/BackgroundWrapper'
import { getTranslations } from 'next-intl/server'
import React from 'react'
import FutureCardItem from './FutureCardItem'

export default async function NowahFuture() {
    const t = await getTranslations("aboutPage.future")
  return (
    <section>
        <BackgroundWrapper>
            <div className="container">
                <div className='text-center space-y-2'>
                <p className='font-semibold text-40 text-white'> {t.rich("title", {
                    exe: ((chunks)=> <span className='text-green-normal'> {chunks} </span>)
                })} </p>
                <p className='text-gray-400 text-18 lg:w-204 mx-auto'> {t("description")} </p>
                <div className='mt-10'>
                    <FutureCardItem 
                        title={t("ourMessages.title")}
                        description={t("ourMessages.description")}
                        image='/about/futuristic-hud-displaying.webp'
                    />
                    <FutureCardItem
                    title={t("ourVision.title")}
                    description={t("ourVision.description")}
                    reverse
                    image='/about/cybernetic-eye.webp'
                    />
                    <FutureCardItem
                    title={t("ourValues.title")}
                    description={t("ourValues.description")}
                    image='/about/letter-logo-idea.webp'
                    />
                </div>
            </div>
            </div>
        </BackgroundWrapper>
    </section>
  )
}
