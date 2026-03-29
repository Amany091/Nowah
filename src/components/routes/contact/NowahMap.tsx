import React from 'react'

export default function NowahMap() {
  return (
    <div className=" rounded-xl overflow-hidden">
      <iframe
        src="https://maps.google.com/?q=21.511362,39.187351&output=embed"
        className="w-full h-full border-0"
        loading="lazy"
      />
</div>
  )
}
