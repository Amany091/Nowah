"use client"

import React, { useId, useRef } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper } from 'swiper/react'
import type {  Swiper as SwiperType } from "swiper";

type Props = {
    children: React.ReactNode
    navigation?: boolean;
    pagination?: boolean;
    effect?: "coverflow";
    breakpoints?: object;
    spaceBetween?: number;
    slidesPerView?: number|"auto";
    centeredSlides?: boolean;
    loop?: boolean;
    grapCursor?: boolean;
    className?: string;
    navigationClassName?: string;
    stretch?: number;
    autoPlay?: boolean;
    delay?: number;
    speed?: number;
    // Breakpoints
    sm?: number; md?: number; lg?: number; xl?: number;
}

export default function SwiperWrapper({slidesPerView = "auto", navigationClassName, speed=0, autoPlay=false, delay=2000, centeredSlides= false, className, effect, grapCursor=false, loop=false, navigation=false, pagination=false, spaceBetween=0, stretch = 0, lg, md, sm, xl, children}: Props) {
    let modules = []
    if(pagination) modules.push(Pagination);
    if(navigation) modules.push(Navigation);
    if(effect === "coverflow") modules.push(EffectCoverflow);
    if(autoPlay) modules.push(Autoplay)

    const swiperRef = useRef<SwiperType>(null);
    const uniqueId = useId()

    const breakpoints: any = {};
    if (sm) breakpoints[640] = { slidesPerView: sm };
    if (md) breakpoints[768] = { slidesPerView: md };
    if (lg) breakpoints[1024] = { slidesPerView: lg };
    if (xl) breakpoints[1280] = { slidesPerView: xl };

  return (
    <div className='relative'>
        <Swiper
        modules={modules}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        breakpoints={breakpoints}
        pagination={pagination ? {clickable: true, el: `#custom-pagination-${uniqueId}`} : false}
        navigation={navigation? {}: false}
        onBeforeInit={(swiper: SwiperType) => {
    if (navigation && swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
      swiper.params.navigation.prevEl = `#prev-${uniqueId}`;
      swiper.params.navigation.nextEl = `#next-${uniqueId}`;
    }

    if (pagination && swiper.params.pagination && typeof swiper.params.pagination !== "boolean") {
      swiper.params.pagination.el = `#custom-pagination-${uniqueId}`;
    }
  }}
        centeredSlides={centeredSlides}
        grabCursor={grapCursor}
        loop={loop}
        coverflowEffect={effect === "coverflow" ? {
            rotate: 0, stretch: stretch, depth: 150, modifier: 1, slideShadows: false
        } : {}}
        className={`w-full mx-auto ${className}`}
        onSwiper={(swiper: SwiperType)=> swiperRef.current = swiper}
        autoplay={autoPlay? { delay: delay, pauseOnMouseEnter: true, disableOnInteraction: false }: false}
        speed={speed}

        >
            {children}
        </Swiper>

        {pagination && navigation &&
            <div className="absolute left-1/2 -translate-x-1/2 gap-3 flex items-center justify-between z-20">
                <div id={`prev-${uniqueId}`} className={` ${navigationClassName} cursor-pointer rounded-full border  flex justify-center items-center text-green-normal w-11 h-11`}>
                    <IoIosArrowBack/>
                </div>

                <div className={'flex items-center w-fit!'} id={`custom-pagination-${uniqueId}`} />

                <div id={`next-${uniqueId}`} className={`rounded-full cursor-pointer border flex justify-center items-center text-green-normal w-11 h-11 ${navigationClassName} `}>
                    <IoIosArrowForward/>
                </div>
            </div>
        }
    </div>
  )
}
