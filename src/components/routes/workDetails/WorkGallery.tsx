import Image from 'next/image'
import React from 'react'

const images = ['dribbble-shot2', 'dribbble-shot', 'nowah-mokeup']

export default function WorkGallery() {
  return (
    <div className="grid grid-cols-1 gap-4 mt-10 rounded-xl backdrop-blur-[134px]">
      {images.map((image, index) => (
        <div key={image + index} className="relative aspect-608/443">
          <Image
            src={`/home/${image}.webp`}
            alt={image}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  )
}
