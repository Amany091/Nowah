import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function BackgroundWrapper({children}: Props) {
  return (
    <div className='relative py-20'>
       <div className="absolute inset-0 bg-gradient-midnight-to-green opacity-80" />
        <div className="absolute inset-0 bg-[url('/common/background-noise.webp'),url('/common/dark-bg.webp')] bg-no-repeat opacity-60 bg-cover" />

        <div className='relative z-30'>
            {children}
        </div>
    </div>
  )
}
