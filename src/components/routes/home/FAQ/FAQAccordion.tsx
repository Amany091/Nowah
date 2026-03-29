"use client"
import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6'

type Props = {
    item: {
        question: string;
        answer: string;
        id: number
    }
}

export default function FAQAccordion({item}: Props) {
    const [openIndex, setOpenIndex] = useState<number|null>(null)

    function toggleAccordion(index: number){
        setOpenIndex(openIndex === item.id? null : index)
    }

  return (
    <div 
    className='border-2 border-gray-200 rounded-4xl backdrop-blur-[32px] p-4'
    >
        {/* Header */}
        <button
        role='group'
        type='button'
        className='flex gap-x-2 items-center cursor-pointer'
        onClick={()=> toggleAccordion(item.id)}
        >
            <span className='transition duration-300 ease-in-out text-green-normal'>
                {openIndex? <FaMinus/> : <FaPlus/>}
            </span>
            <p className='font-changa font-semibold text-20 text-gray-dark'>
                {item.question}
            </p>
        </button>

        {/*  */}
        <div className={`${openIndex? 'opacity-100 block': 'opacity-0 hidden'} text-gray-400 mt-2 text-16 font-changa font-medium transition-all duration-300 ease-in-out`}>
            {item.answer}
        </div>
    </div>
  )
}
