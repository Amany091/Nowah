"use client"
import { useState } from 'react'
import { useTranslations } from 'next-intl';
import WorksGallerySlider from './WorksGallerySlider';
import BackgroundWrapper from '@/components/ui/BackgroundWrapper';
import works from '@/components/common/works/worksTabsData';
import WorksCategoriesTabs from '@/components/common/works/WorksCategoriesTabs';

export default function Works() {
    const t = useTranslations("HomePage.works");
    const [activeTab, setActiveTab] = useState("All")

    const filteredItems = activeTab === "All"? works : works.filter((item)=> item.category === activeTab);

  return (
    <section>
       <BackgroundWrapper>
         <div className='mx-auto text-center'>
            <span className='text-white bg-midnight-normal rounded-4xl inline-block w-26 max-w-30 text-nowrap p-3 font-changa font-semibold mb-4' >{t("badge")}</span>

            <p className='font-changa font-semibold text-white text-[40px] '> {t.rich("title", {
                exe: (chunks)=> <span className='text-green-normal'> {chunks} </span> 
            })} </p>
            <p className='text-gray-400 text-18 font-regular font-changa mt-2 inline-block min-w-75 lg:w-204.5'> {t("description")} </p>
          </div>

          <WorksCategoriesTabs active={activeTab} onActive={setActiveTab} className='border-white text-white' />
          <WorksGallerySlider key={activeTab} FilteredItems={filteredItems} />
       </BackgroundWrapper>
    </section>
  )
}
