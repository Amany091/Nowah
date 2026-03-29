import React from 'react'
import HeroBackgroundWrapper from '@/components/ui/HeroBackgroundWrapper'
import { getTranslations } from 'next-intl/server'

export default async function BlogHero() {
    const t = await getTranslations("blogPage.hero")
  return (
    <section>
        <HeroBackgroundWrapper image='/home/programming-background.webp'>
            <div className='flex flex-col justify-center'>
                <p className='text-[48px] font-bold font-changa bg-clip-text bg-linear-to-r from-white to-green-normal text-transparent'> {t("title")} </p>
                <p className='font-medium font-changa text-20 text-white mt-4 lg:w-177.75'> {t("description")} </p>
            </div>
        </HeroBackgroundWrapper>
    </section>
  )
}
