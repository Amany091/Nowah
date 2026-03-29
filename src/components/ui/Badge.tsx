import React from 'react'

type Props = {
    text: string;
    className?: string
}

export default function Badge({text, className}: Props) {
  return (
    <span className={`flex justify-center items-center text-nowrap rounded-4xl bg-midnight-normal w-auto p-3 text-white ${className}`}>
        {text}
    </span>
  )
}
