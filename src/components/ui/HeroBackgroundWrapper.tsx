import Image from 'next/image'
import React from 'react'

type Props = {
    children: React.ReactNode;
    image: string;
}

export default function HeroBackgroundWrapper({children, image}: Props) {
  return (
     <div className=' pt-32 min-h-screen flex-col relative flex justify-center'
        >
            <Image src={image} alt='hero-works' fill className='object-cover' priority/>
    
            <div
            className='absolute inset-0'
             style={{background: 'linear-gradient(270.02deg, #232E44 32.04%, rgba(35, 46, 68, 0.71) 93.38%, rgba(35, 46, 68, 0.88) 107.16%, #232E44 125.36%, #232E44 125.36%)', zIndex: 1}}
            />
            
            <div className="container relative z-10 ">
                {children}
            </div>
        </div>
  )
}
