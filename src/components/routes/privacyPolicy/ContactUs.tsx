import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import React from 'react'

export default async function ContactUs() {
    const t = await getTranslations("privacyPolicy.sections.5")
  return (
    <div>
        <p className='text-gray-dark text-32 font-semibold font-changa mb-1'>{t("title")}</p>
        <p className='text-20 font-medium text-gray-500'> {t("description")} </p>

        <div className=' flex flex-col gap-2'>
            <Link href='mailto:info@company.com' className='text-green-normal font-medium text-20'>
                info@company.com
            </Link>
            <Link href='tel:+20111816970' className='text-green-normal font-medium text-20'>
                (+20)0111816970
            </Link>
        </div>
    </div>
  )
}
