import { Link } from '@/i18n/navigation'
import { getTranslations } from 'next-intl/server'
import { MdPhone } from 'react-icons/md'
import { HiOutlineEnvelope } from 'react-icons/hi2'
import { GoLocation } from 'react-icons/go'

export default async function ContactCompany() {
    const t = await getTranslations('layout.footer.contactUs')
    
  return (
    <div className='text-white'>
        <p className='font-semibold mb-8'> {t("title")} </p>
        <div className="flex flex-col gap-4.75 text-white">
          <div className="flex gap-2 items-center">
            <MdPhone/>
            <Link href={`tel:+966538603467`} > +966538603467 </Link>
          </div>
          <div className="flex gap-2 items-center">
            <HiOutlineEnvelope/>
            <Link href={''}> info@company.com </Link>
          </div>
          <div className='flex gap-2 items-center'>
            <GoLocation/>
            <Link href={' https://maps.google.com/?q=21.511362,39.187351'} > {t("location")} </Link>
          </div>
        </div>
    </div>
  )
}
