import { getTranslations } from 'next-intl/server'
import React from 'react'
import Services from './Services'

export default async function WhyUsSection() {
   const t = await getTranslations("HomePage.whyUs")
    return (
      <section className=" py-20 bg-gray-100 relative">
        <div className='absolute inset-0 bg-[url(/home/green-background.webp)] bg-cover bg-no-repeat' />
          <div className="container z-20 relative">
            <div>
              <span className='rounded-4xl gap-4 bg-midnight-normal font-changa max-w-37.5 w-26 font-semibold text-white p-3'> {t("badge")} </span>
              <p className='font-changa font-medium text-20 text-[#2F2F2F] mt-4'> {t("description")} </p>
            </div>
  
          <Services/>
          </div>
      </section>
    )
}
