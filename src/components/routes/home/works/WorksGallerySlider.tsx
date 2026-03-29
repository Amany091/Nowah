
import WorkCard from '@/components/common/works/WorkCard';
import SwiperWrapper from '@/components/ui/SwiperWrapper';
import Image from 'next/image';
import { EffectCoverflow } from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'

type Props = {
  FilteredItems: {id: number, category: string; image: string; title: string, dateOfPublish: string}[]
}

export default function WorksGallerySlider({FilteredItems}: Props) {
  return (
    <SwiperWrapper
    effect='coverflow'
    slidesPerView={'auto'}
    spaceBetween={0}
    centeredSlides={true}
    loop={true}
    grapCursor={true}
    stretch={-60}
    >
      {FilteredItems.map((item)=>(
        <SwiperSlide key={item.id} className=" m-0!  md:h-152! md:w-152! w-102! h-102! flex items-center justify-center">
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
