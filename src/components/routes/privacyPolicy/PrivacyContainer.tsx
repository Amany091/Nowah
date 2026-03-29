import NoisBackgroundWrapper from '@/components/ui/NoisBackgroundWrapper'
import { getTranslations } from 'next-intl/server'
import React from 'react'
import PrivacyInformation from './PrivacyInformation'
import DataSecurity from './DataSecurity'
import ShareInformationPrivacy from './ShareInformationPrivacy'
import HowUseDataPrivacy from './HowUseDataPrivacy'
import UserRights from './UserRights'
import ContactUs from './ContactUs'

export default async function PrivacyContainer() {
    const t = await getTranslations("privacyPolicy")
  return (
    <section>
        <NoisBackgroundWrapper>
            <div className="container">
               <p className='text-20 text-gray-500 font-medium'>{t("intro")}</p>
            <div className='flex flex-col gap-10 mt-10'>
                <PrivacyInformation/>
                <HowUseDataPrivacy/>
                <DataSecurity/>
                <ShareInformationPrivacy/>
                <UserRights/>
                <ContactUs/>
            </div> 
            </div>
        </NoisBackgroundWrapper>
    </section>
  )
}
