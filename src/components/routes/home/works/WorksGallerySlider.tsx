"use client"

import WorkCard from '@/components/common/works/WorkCard';
import SwiperWrapper from '@/components/ui/SwiperWrapper';
import { useEffect, useRef } from 'react';
import { SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

type Props = {
  FilteredItems: {id: number, category: string; image: string; title: string, dateOfPublish: string}[]
}

export default function WorksGallerySlider({FilteredItems}: Props) {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      swiperRef.current?.update();
    }, 50);
    return () => clearTimeout(timer);
  }, [FilteredItems]);

  return (
    <SwiperWrapper
    effect='coverflow'
    slidesPerView={'auto'}
    spaceBetween={0}
    centeredSlides={true}
    loop={true}
    grapCursor={true}
    stretch={-60}
    onSwiper={(swiper) => { swiperRef.current = swiper }}
    >
      {FilteredItems.map((item)=>(
        <SwiperSlide key={item.id} className="m-0! md:h-152! md:w-152! w-102! h-102! flex items-center justify-center">
          {({isActive})=>(
            <WorkCard
              item={item}
              isActive={isActive}
            />
          )}
        </SwiperSlide>
      ))}
    </SwiperWrapper>
  )
}
