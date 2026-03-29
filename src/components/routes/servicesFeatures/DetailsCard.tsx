import Image from 'next/image';
import React from 'react'

type Props = {
    
    isLeft: boolean;
    step: {
        image: string;
        title: React.ReactNode;
        description: string;
    }
}

export default function DetailsCard({step, isLeft}: Props) {
  return (
    <div
        className={`relative flex items-center ${
            isLeft ? "justify-start" : "justify-end"
        }`}
        >
        
        {/* Dot */}
        <span className="absolute left-1/2 -translate-x-1/2 top-[30%] bottom-[30%] w-4 h-4 bg-midnight-normal rounded-full z-20" />
        <div
            className={`w-full md:w-[45%] rounded-2xl flex flex-col gap-4 ${
                isLeft ? "mr-auto text-right" : "ml-auto text-left"
            }`}
            >
            
            {/* Image */}
            <div className="relative w-full aspect-[577/319] rounded-xl overflow-hidden ">
                <Image
                src={step.image}
                alt={'not-exist!'}
                fill
                className="object-cover"
                />
                <div className='absolute inset-0 z-10 bg-[#6CF46C33]' />
            </div>

            {/* Title */}
            <h3 className="text-gray-dark font-semibold text-32">
                {step.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-20">
                {step.description}
            </p>
        </div>

    </div>
  )
}
