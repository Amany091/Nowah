"use client"
import { SwiperSlide } from 'swiper/react'
import CommentItem from './CommentItem'
import { useTranslations } from 'next-intl'
import { useId } from 'react'
import SwiperWrapper from '@/components/ui/SwiperWrapper'

type Props = {
    items: {
        comment: string;
        publisher: string
    }[]
}

export default function ClientsSlider({items}: Props) {
    const t = useTranslations("HomePage.clients")
    const uniqueId = useId();
    console.log("clients", uniqueId)

  return (
    <SwiperWrapper
    effect='coverflow'
    pagination={true}
    navigation={true}
    stretch={60}
    spaceBetween={20}
    slidesPerView={'auto'}
    centeredSlides={true}
    loop={true}
    grapCursor={true}
    className='pb-10!'
    navigationClassName='border-white/73 bg-white/41 backdrop-blur-[0px]'
    >
        {items.map((comment, index) =>{
            const item = {comment: t(`comments.${index}.comment`), publisher: t(`comments.${index}.publisher`)}
                return(
                <SwiperSlide
                    key={index}
                    className="border border-white/40 rounded-xl backdrop-blur-[53.4px] md:w-5xl! w-170 my-auto! "
                >
                    {({ isActive }) => (
                    <div
                        className={`transition-all duration-300 ${
                        isActive
                            ? "opacity-100 p-5 py-6"
                            : "scale-[0.5] opacity-40 h-61.75 my-auto!"
                        }`}
                    >
                        <CommentItem item={item} />
                    </div>
                    )}
                </SwiperSlide>
            )
        })}
    </SwiperWrapper>
  )
}
