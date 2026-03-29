import BackgroundWrapper from '@/components/ui/BackgroundWrapper'
import { getTranslations } from 'next-intl/server'
import React from 'react'
import SubscriptionForm from './SubscriptionForm'

export default async function Subscription() {
    const t = await getTranslations("layout.footer")
    
  return (
    <div className='overflow-hidden rounded-4xl'>
        <BackgroundWrapper >
        <div className="flex justify-center items-center flex-col m-auto">
            <h1 className='text-[40px] font-semibold font-changa text-white text-center'> {t.rich("subTitle", {
                exe: ((chunks)=> <span className='text-green-normal'> {chunks} </span> )
            })} </h1>
            <p className='text-18 mt-2 max-w-204.5 font-changa font-medium text-gray-400 text-center'> {t("subDiscription")} </p>
            <SubscriptionForm/>
        </div>
    </BackgroundWrapper>
    </div>
  )
}
