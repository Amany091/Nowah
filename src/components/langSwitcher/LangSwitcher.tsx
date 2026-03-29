"use client"
import React, { useState } from 'react'
import languages from './languages'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import Image from 'next/image'

export default function LangSwitcher() {
    const locale = useLocale()
    const currentLocale = languages.find((lang)=> lang.locale === locale);
    const [openMenu, setOpenMenu] = useState(false)
    const router = useRouter()
    const pathname = usePathname()

    function switchLanguage(lang: string){
        router.replace({pathname}, {locale: lang})
        setOpenMenu(false)
    };

  return (
    <div className='relative'>
        <button type="button" 
        className='flex items-center gap-2 cursor-pointer'
        onClick={()=> setOpenMenu(!openMenu)}>
            <Image src={currentLocale?.flag || ''} alt={currentLocale?.lang || 'Language'} width={20} height={20} /> 
                {currentLocale?.locale.toUpperCase()}
        </button>

        {openMenu && (
            <div className='absolute top-8.75 p-4 text-gray-dark bg-white rounded-xl shadow-lg'>
                {languages.map((lang)=>
                    <span 
                        className={`block cursor-pointer ${lang.locale === locale ? 'font-bold text-green-normal' : ''}`}
                        onClick={()=> switchLanguage(lang.locale)}
                        key={lang.locale} > 
                        {lang.lang} 
                    </span>
                )}
            </div>
        )}
    </div>
  )
}
