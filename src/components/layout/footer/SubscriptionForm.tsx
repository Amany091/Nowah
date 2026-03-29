"use client"
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { FaRegEnvelope } from 'react-icons/fa'

export default function SubscriptionForm() {
    const t = useTranslations("layout.footer")
    const [email, setEmail] = useState('')
    
  return (
    <form action="" className='mt-10 flex' dir='rtl' >
        <label htmlFor="sub-email" className='relative'>
            <FaRegEnvelope className='text-gray-500 absolute top-1/2! right-2.5 -translate-y-1/2!'/>
            <input 
            type="email" 
            name="email" 
            id="sub-email" 
            placeholder={t('inputPlaceholder')}
            required
            onChange={(e)=> setEmail(e.target.value)}
            className='border border-gray-200 p-3 w-100 placeholder:text-gray-500 focus:outline-none rounded-tr-xl rounded-br-xl pr-8.75 bg-white'
            />
        </label>
        <button type="submit"
        className='rounded-tl-xl rounded-bl-xl bg-green-normal text-white py-3 w-34 cursor-pointer outline-none'
        >
            {t("subButton")}
        </button>
    </form>
  )
}
