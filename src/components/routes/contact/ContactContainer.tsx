import Badge from '@/components/ui/Badge'
import NoisBackgroundWrapper from '@/components/ui/NoisBackgroundWrapper'
import { getTranslations } from 'next-intl/server'
import React from 'react'
import ContactForm from './contactForm/ContactForm'
import NowahMap from './NowahMap'

export default async function ContactContainer() {
    const t = await getTranslations("contactPage")
  return (
    <section>
        <NoisBackgroundWrapper>
           <div className="container">
             <div className="flex justify-center flex-col items-center relative z-20 mb-10">
                <Badge text={t('badge')} className='w-30!' />
                <p className='mt-4 mb-2 font-changa text-gray-dark font-semibold text-40'> 
                    {t.rich("title", {
                        exe: ((chunk)=> <span className='text-green-normal'> {chunk} </span>)
                    })} 
                </p>
                <p className='font-regular text-center text-gray-400 text-18'> {t("description")} </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <ContactForm/>
                <NowahMap/>
            </div>
           </div>
        </NoisBackgroundWrapper>
    </section>
  )
}
