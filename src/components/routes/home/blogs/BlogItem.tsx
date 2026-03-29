import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image'
import { useParams } from 'next/navigation';
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io';

type Props = {
    item: {
        title: string;
        badge: string;
        date: string
    }
}

export default function BlogItem({item}: Props) {
    const t = useTranslations("HomePage.blogs")
    const {locale} = useParams()
  return (
    <div className='rounded-[12px]'
    style={{boxShadow: '0px 8px 25px 0px #B3B3B326'}}
    >
        {/* Header */}
        <div className="bg-[url('/home/earth.webp')] w-full h-full aspect-400/220 bg-no-repeat bg-cover md:bg-contain bg-center ">
            {/* <Image width={100} height={100} alt='earth' src={'/home/earth.webp'} className='object-contain' /> */}
        </div>

        {/* Body */}
        <div className='p-4'>
            <span className='bg-green-normal text-gray-200 rounded-4xl p-2 border text-14 font-medium inline-block font-changa text-nowrap w-auto' >
                {item.badge}
            </span>
            <p className='text-gray-dark text-18 font-semibold font-changa'> {item.title} </p>
            <p></p>
        </div>

        {/* Footer */}
        <div className='border-t border-gray-100 p-4 flex justify-between items-center'>
            <p className='text-gray-dark font-changa text-14 '> {item.date} </p>
            <Link href={''} className='flex gap-2 items-center group text-green-normal text-14 font-semibold font-changa' >
                {t("readMore")}
                <IoIosArrowBack className={`${locale === "en"? "rotate-180 group-hover:translate-x-1" : "rotate-0 -translate-x-1"} duration-300 transition-transform`}/>
            </Link>
        </div>
    </div>
  )
}
