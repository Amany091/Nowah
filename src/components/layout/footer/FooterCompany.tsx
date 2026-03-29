import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'

function SocialIcon({icon, href}: {icon: IconType, href: string}){
    const Icon = icon
    return(
        <Link href={href} className='text-green-normal border border-green-normal w-8.5 h-8.5 rounded-full bg-white flex items-center justify-center'>
            <Icon size={20} />
        </Link>
    )
}

export default async function FooterCompany() {
    const t = await getTranslations("layout.footer")
  return (
    <div>
        <Image src={'/logos/nowah-logo.svg'} alt='logo' width={138} height={100} />
        <p className='mt-6 mb-10 text-14 text-gray-200'> {t("content")} </p>

        <div className='flex items-center gap-3'>
            <SocialIcon icon={FaFacebookF} href='https://www.facebook.com/nowah.softwarehouse' />
            <SocialIcon icon={FaInstagram} href='https://www.instagram.com/nowah.softwarehouse' />
            <SocialIcon icon={FaTwitter} href='https://twitter.com/nowah_softwarehouse' />
            <SocialIcon icon={FaLinkedin} href='https://www.linkedin.com/company/nowah-softwarehouse' />
        </div>
    </div>
  )
}
