import Image from 'next/image'
import React from 'react'

type Props = {
    item: {
        image: string;
        title: string;
        dateOfPublish: string;
    },
    isActive?: boolean;
}

export default function WorkCard({item, isActive}: Props) {
    const activeClassName = "scale-100 opacity-100 z-20  overflow-hidden"
    const notActiveClassname = "scale-[0.7] z-10 opacity-40 overflow-hidden"
    const baseClass = "relative aspect-square transition-all duration-500 rounded-[30px] overflow-hidden mx-auto border-4 border-white/30";

    // Act a card as active in slider if the isActive prop is not provided, otherwise use as normal card
  const stateClass =
    isActive === undefined
      ? ""
      : isActive
      ? activeClassName
      : notActiveClassname;

  return (
    <div
    className={`${baseClass} ${stateClass}`}
    >
        <Image src={item.image} alt={item.title+'logo'} fill className='object-cover' />

        {/* glow border */}
        <div className="absolute inset-0 rounded-2xl border border-white/20"></div>

        <div className='absolute top-10 left-10 text-white font-semibold text-20 flex items-center gap-3.25'>
        {item.dateOfPublish}
        <hr className='w-13.5' />
        </div>

        {/* title */}
        <p className="absolute bottom-6 left-22.5 text-white text-20 font-semibold">
        {item.title}
        </p>
    </div>
  )
}
