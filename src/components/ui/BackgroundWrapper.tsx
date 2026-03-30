import React from 'react'

type Props = {
    children: React.ReactNode
    gradientClass?: string
    gradientStyle?: React.CSSProperties
    gradientOpacity?: string
}

export default function BackgroundWrapper({children, gradientClass = "bg-gradient-midnight-to-green", gradientStyle, gradientOpacity = "opacity-80"}: Props) {
  return (
    <div className='relative py-20'>
       <div className={`absolute inset-0 ${gradientStyle ? '' : gradientClass} ${gradientOpacity}`} style={gradientStyle} />
        <div className="absolute inset-0 bg-[url('/common/background-noise.webp'),url('/common/dark-bg.webp')] bg-no-repeat opacity-60 bg-cover" />

        <div className='relative z-30'>
            {children}
        </div>
    </div>
  )
}
