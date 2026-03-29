import Badge from '@/components/ui/Badge'
import { getTranslations } from 'next-intl/server'
import React from 'react'
import BlogSwiper from './BlogSwiper'
import NoisBackgroundWrapper from '@/components/ui/NoisBackgroundWrapper'

const blog = [
    {id: 1, badge: "تطوير البرمجيات", title: "أحدث الابتكارات والميزات لدعم نمو الأعمال عبر حلول برمجية متطورة", date: "7 أبريل 2025"},
    {id: 2, badge: "تطوير البرمجيات", title: "أحدث الابتكارات والميزات لدعم نمو الأعمال عبر حلول برمجية متطورة", date: "7 أبريل 2025"},
    {id: 3, badge: "تطوير البرمجيات", title: "أحدث الابتكارات والميزات لدعم نمو الأعمال عبر حلول برمجية متطورة", date: "7 أبريل 2025"},
    {id: 4, badge: "تطوير البرمجيات", title: "أحدث الابتكارات والميزات لدعم نمو الأعمال عبر حلول برمجية متطورة", date: "7 أبريل 2025"},
    {id: 5, badge: "تطوير البرمجيات", title: "أحدث الابتكارات والميزات لدعم نمو الأعمال عبر حلول برمجية متطورة", date: "7 أبريل 2025"},
    {id: 6, badge: "تطوير البرمجيات", title: "أحدث الابتكارات والميزات لدعم نمو الأعمال عبر حلول برمجية متطورة", date: "7 أبريل 2025"},
]

export default async function Blogs() {
    const t = await getTranslations("HomePage.blogs")

  return (
    <section className='blogs'>
        <NoisBackgroundWrapper>
            <div className="container">
            <div className="flex justify-center flex-col items-center relative z-20 mb-10">
                <Badge text={t('badge')} className='w-30!' />
                <p className='mt-4 mb-2 font-changa text-gray-dark font-semibold text-40'> 
                    {t.rich("title", {
                        exe: ((chunk)=> <span className='text-green-normal'> {chunk} </span>)
                    })} 
                </p>
                <p className='font-regular text-center text-gray-400 text-18'> {t("description")} </p>
            </div>

            <BlogSwiper items={blog} />
        </div>
        </NoisBackgroundWrapper>

        
    </section>
  )
}
