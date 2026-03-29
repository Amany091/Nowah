import { getTranslations } from 'next-intl/server'
import ServiceGallerySection from '@/components/common/services/ServiceGallerySection'

export default async function Services() {
    const t = await getTranslations("ServicesPage")
  return (
    <section className='py-20'>
       <div className="container">
        <div className='mx-auto text-center'>
            <span className='text-white bg-midnight-normal rounded-4xl inline-block min-w-26 w-30 text-nowrap p-3 font-changa font-semibold mb-4' >{t("badge")}</span>

            <p className='font-changa font-semibold text-gray-dark text-[40px] '> {t.rich("title", {
                exe: (chunks)=> <span className='text-green-normal'> {chunks} </span> 
            })} </p>
            <p className='text-gray-400 text-18 font-regular font-changa mt-2 inline-block min-w-75 lg:w-204.5'> {t("description")} </p>
       </div>
       <ServiceGallerySection/>
       </div>
    </section>
  )
}
