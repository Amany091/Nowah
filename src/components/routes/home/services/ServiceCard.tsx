"use client"

import Image from "next/image"
import { useState } from "react"

type Props = {
  image: string
  title: string
  description?: string
  className?: string
}

export default function ServiceCard({ image, title, description, className }: Props) {
  const [hover, setHover] = useState(false)

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`relative overflow-hidden rounded-xl h-70.5 ${className}`}
    >
      <div className={`absolute inset-0 ${hover? 'opacity-0' : 'opacity-100'} transition-opacity duration-300 ease-out`} >
        <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />

        {/* dark overlay */}
        <div className="absolute inset-0 bg-gray-dark/60 z-10" />

        <p className={`absolute inset-0 text-white font-changa font-semibold mx-auto text-center text-[32px] z-20 p-6 w-66.5 ${hover? '-translate-x-1.5 duration-500 opacity-0 transition-all' : 'opacity-100'}`}>
            {title}
        </p>
      </div>

      {/* hover foreground */}
      {hover && description && (
        <div className="absolute h-full overflow-y-auto inset-0 z-30 bg-black/90 flex flex-col justify-between p-6 transition ease-in duration-700">
            <Image src={'/home/background-cover.webp'} alt="cover" fill className="object-cover" />
          <p className="text-[32px] font-bold font-changa mb-3 bg-clip-text bg-linear-to-r text-transparent from-white to-green-normal">
            {title}
          </p>

          <p className="text-white font-changa text-[18px]">
            {description}
          </p>
        </div>
      )}
    </div>
  )
}