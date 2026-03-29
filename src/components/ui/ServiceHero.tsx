import HeroBackgroundWrapper from '@/components/ui/HeroBackgroundWrapper'
import React from 'react'

type Props = {
    image: string;
    title: string;
    description: string;
}

export default function ServiceHero({description, image, title}: Props) {
  return (
    <HeroBackgroundWrapper image={image}>
        <div className='flex flex-col justify-center'>
                <p className='text-[48px] font-bold font-changa bg-clip-text bg-linear-to-r from-white to-green-normal text-transparent'> {title} </p>
                <p className='font-medium font-changa text-20 text-white mt-4 lg:w-177.75'> {description} </p>
            </div>
    </HeroBackgroundWrapper>
  )
}
