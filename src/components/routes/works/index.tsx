"use client"
import Badge from '@/components/ui/Badge'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'
import works from '@/components/common/works/worksTabsData'
import WorksCategoriesTabs from '@/components/common/works/WorksCategoriesTabs'
import WorksGallery from './WorksGallery'
import NoisBackgroundWrapper from '@/components/ui/NoisBackgroundWrapper'

export default function Works() {
    const t = useTranslations("worksPage")
    const [active, setActive] = useState("All")
    const filteredItems = active === "All"? works : works.filter((item)=> item.category === active);

  return (
    <section className=''>
        <NoisBackgroundWrapper>
           <div className="container">
             <div className='mx-auto text-center'>
                {/* <span className='text-white bg-midnight-normal rounded-4xl inline-block w-26 max-w-30 text-nowrap p-3 font-changa font-semibold mb-4' >{t("badge")}</span> */}
                <Badge text={t("badge")} className='inline-flex' />
                <p className='font-changa font-semibold text-gray-dark text-[40px] mt-4'> {t.rich("title", {
                    exe: (chunks)=> <span className='text-green-normal'> {chunks} </span> 
                })} </p>
                <p className='text-gray-400 text-18 font-regular font-changa mt-2 inline-block min-w-75 lg:w-204.5'> {t("description")} </p>
            </div>
            
            <WorksCategoriesTabs 
            active={active} 
            onActive={setActive}
            className='border-gray-500 text-gray-dark'
            />
            <WorksGallery items={filteredItems} />
           </div>
        </NoisBackgroundWrapper>
    </section>
  )
}
