"use client"
import { useTranslations } from 'next-intl'
import React, { useId } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import BlogItem from './BlogItem'
import SwiperWrapper from '@/components/ui/SwiperWrapper'

type Props = {
    items: {
        id: number;
        title: string;
        badge: string;
        date: string
    }[]
}

export default function BlogSwiper({items}: Props) {
    const t = useTranslations("HomePage.blogs")

  return (
    <SwiperWrapper 
    spaceBetween={16}
    pagination={true} 
    navigation={true}
    sm={1} md={2} lg={3}
    loop={true}
    className='pb-10!'
    navigationClassName='border-white/73 bg-white/74'
    >
        {items.map((blog, index) =>{
            const item = {title: t(`blogs.${index}.title`), badge: t(`blogs.${index}.badge`), date: t(`blogs.${index}.date`)}
            return(
                <SwiperSlide
                    key={blog.id}
                    className="border border-white/40 rounded-xl"
                >
                    <BlogItem item={item} />
                </SwiperSlide>
            )
        })}
    </SwiperWrapper>
  )
}
