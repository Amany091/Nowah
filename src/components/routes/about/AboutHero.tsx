import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import React from 'react'

export default async function AboutHero() {
    const t = await getTranslations("aboutPage.hero")
  return (
    <section className=' pt-32 min-h-screen flex-col relative flex justify-center'
    >
        <Image src={'/about/collaborative-committee.webp'} alt='hero-about' fill className='object-cover' />

        <div
        className='absolute inset-0'
         style={{background: 'linear-gradient(270.02deg, #232E44 32.04%, rgba(35, 46, 68, 0.71) 93.38%, rgba(35, 46, 68, 0.88) 107.16%, #232E44 125.36%, #232E44 125.36%)', zIndex: 1}}
        ></div>
        <div className="container relative z-10 ">
            <div className='flex flex-col justify-center'>
                <p className='text-[48px] font-bold font-changa bg-clip-text bg-linear-to-r from-white to-green-normal text-transparent'> {t("title")} </p>
            <p className='font-medium font-changa text-20 text-white mt-4 lg:w-177.75'> {t("description")} </p>
            </div>
        </div>
    </section>
  )
}
