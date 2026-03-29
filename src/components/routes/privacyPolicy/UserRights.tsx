import { getTranslations } from 'next-intl/server'

export default async function UserRights() {
    const t = await getTranslations("privacyPolicy.sections.4")
    const items = t.raw("items") as string[]

  return (
    <div>
        <p className='text-gray-dark text-32 font-semibold font-changa mb-1'>{t("title")}</p>
        <div className='space-y-2'>
            {items.map((item, index)=>(
                <p key={index} className='text-20 font-medium text-gray-500'> {item} </p>
            ))}
        </div>
    </div>
  )
}
