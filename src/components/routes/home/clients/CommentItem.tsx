import Image from 'next/image';
import React from 'react'
import { IoMdQuote } from 'react-icons/io';

type Props = {
    item: {
        publisher: string;
        comment: string
    }
}

export default function CommentItem({item}: Props) {
  return (
    <div>
        <Image src={'/logos/nowah-logo.svg'} alt='logo' height={100} width={100} />
        <p className='mt-6 mb-4 font-changa font-medium text-gray-200' > {item.comment} </p>
        <IoMdQuote className='text-white' size={30}/>
        <p className='mt-10 font-changa font-medium text-12 text-gray-200'> {item.publisher} </p>
    </div>
  )
}
