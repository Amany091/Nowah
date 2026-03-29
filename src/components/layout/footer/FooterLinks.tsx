import { getTranslations } from 'next-intl/server'
import React from 'react'
import navItems from '../navbar/navItems'
import { Link } from '@/i18n/navigation'

export default async function FooterLinks() {
    const nt = await getTranslations("common.navbar.links")
    const ft = await getTranslations("layout.footer")

  return (
    <div>
        <p className='font-medium font-changa text-white mb-8'> {ft("linksTitle")} </p>
        <div className='flex flex-col gap-4 text-14 text-white'>
        {navItems.map((item)=>(
            <Link href={item.href} key={item.id}>
                {nt(`${item.type}`)}
            </Link>
        ))}

    </div>
    </div>
  )
}
