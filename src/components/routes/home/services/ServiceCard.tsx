"use client"

import Image from "next/image"
import { useState } from "react"
import { Link } from "@/i18n/navigation"

type Props = {
  image: string
  title: string
  description?: string
  className?: string
  href?: string
}

export default function ServiceCard({ image, title, description, className, href }: Props) {
  const [hover, setHover] = useState(false)

  const content = (
    <>
      {/* Default state */}
      <div className={`absolute inset-0 will-change-[opacity,transform] transform-gpu transition-opacity duration-300 ease-out ${hover ? 'opacity-0' : 'opacity-100'}`}>
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gray-dark/60 z-10" />
        <p className={`absolute inset-0 text-white font-changa font-semibold mx-auto text-center text-[32px] z-20 p-6 w-66.5 will-change-[opacity,transform] transform-gpu transition-all duration-300 ${hover ? '-translate-x-1.5 opacity-0' : 'translate-x-0 opacity-100'}`}>
          {title}
        </p>
      </div>

      {/* Hover foreground — always mounted for smooth transition */}
      {description && (
        <div className={`absolute h-full overflow-y-auto inset-0 z-30 bg-black/90 flex flex-col justify-between p-6 will-change-[opacity,transform] transform-gpu transition-all duration-300 ease-out ${hover ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
          <Image src="/home/background-cover.webp" alt="cover" fill className="object-cover" />
          <p className={`relative z-10 text-[32px] font-bold font-changa mb-3 bg-clip-text bg-linear-to-r text-transparent from-white to-green-normal will-change-[opacity,transform] transform-gpu transition-all duration-500 ease-out ${hover ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}>
            {title}
          </p>
          <p className="relative z-10 text-white font-changa text-[18px]">
            {description}
          </p>
        </div>
      )}
    </>
  )

  const sharedClass = `relative overflow-hidden rounded-xl h-70.5 ${className}`

  if (href) {
    return (
      <Link
        href={href}
        className={sharedClass}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {content}
      </Link>
    )
  }

  return (
    <div
      className={sharedClass}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {content}
    </div>
  )
}
