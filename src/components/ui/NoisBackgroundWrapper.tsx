import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function NoisBackgroundWrapper({children}: Props) {
  return (
    <div className='relative py-20'>
        <div className="absolute inset-0 bg-[url('/common/background-noise2.webp')] bg-no-repeat opacity-60 bg-cover z-0" />

        <div className='relative z-30'>
            {children}
        </div>
    </div>
  )
}
