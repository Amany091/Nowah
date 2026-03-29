"use client"
import Button from '@/components/common/Button'
import { useRouter } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function FAQContent() {
    const t = useTranslations("HomePage.FAQ")
    const buttonT = useTranslations("common")
    const router = useRouter()

  return (
    <div className='relative z-10'>
        <Image src={'/icons/logo.svg'} alt='logo' width={40} height={40} />
        <div className='mt-3 mb-10 space-y-4'>
            <p className='font-semibold text-40 font-changa w-126'>
                {t.rich("title", {
                    exe: ((chunks)=> <span className='text-green-normal'> {chunks} </span> )
                })}
            </p>
            <p className='text-gray-400 font-changa font-medium text-18'> {t("description")} </p>
        </div>
        <Button
        className='w-48!'
        onClick={()=> router.push("/contact")}
        icon
        >
            <p className=''> {buttonT('contactUs')} </p>
        </Button>
    </div>
  )
}
