import { Link } from '@/i18n/navigation'
import { getTranslations } from 'next-intl/server'

export default async function CompanyPolicy() {
    const t = await getTranslations("layout.footer.policy")
  return (
    <div className='text-white'>
        <p className='font-semibold mb-8'> {t("title")} </p>
        <Link href={"/privacyPolicy"} className='text-14' >
            {t("link")}
        </Link>
    </div>
  )
}
