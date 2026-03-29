"use client"
import SwiperWrapper from '@/components/ui/SwiperWrapper'
import { useTranslations } from 'next-intl'
import { SwiperSlide } from 'swiper/react'

const services = [
    {id: 1, service: 'الدعم الفني'},
    {id: 2, service: 'أنظمة إدارة الأعمال'},
    {id: 3, service: 'تطوير المواقع اللإلكترونية'},
    {id: 4, service: 'تصميم UI/UX'},
    {id: 5, service: 'تطوير تطبيقات الموبايل'},
]

export default function ServicesSliderSection() {
    const t = useTranslations("common");
  return (
    <section className='services-slider py-15'>
        <SwiperWrapper
        loop={true}
        spaceBetween={16}
        autoPlay={true}
        slidesPerView={"auto"}
        speed={5000}
        delay={0}
        >
            {services.map((service, index)=>{
                const translatedService = t(`ourServices.${index}`)
                return(
                <SwiperSlide key={service.id} className='w-auto! min-w-fit'>
                    <div className='inline-flex items-center gap-2 whitespace-nowrap'>
                        <span className='inline-block w-4 h-4 rounded-full bg-green-normal'></span>
                        <p className='font-change lg:text-[32px] font-semibold bg-linear-to-r bg-clip-text from-midnight-normal to-green-normal text-transparent w-auto '> {translatedService} </p>
                    </div>
                </SwiperSlide>
            )
            })}
        </SwiperWrapper>
    </section>
  )
}
