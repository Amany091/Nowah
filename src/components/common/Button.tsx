import { useParams, useSearchParams } from 'next/navigation';
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io';

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    icon?: boolean;
    onClick?: ()=> void;
    outline?: boolean
    type?: "button"|"submit"
}

export default  function Button({children, className, onClick, outline, icon, type="button"}: ButtonProps) {
  const {locale} = useParams()
  
  return (
    <button type={type}
    className={`${outline? 'bg-transparent' : ''} ${className} bg-gradient-midnight-to-green text-white rounded-4xl p-3 inline-flex group items-center justify-center cursor-pointer gap-2.5 shadow-[0_0_15.52px_0_rgba(34,197,94,0.6)] backdrop-blur-[25.1px] `}
    onClick={onClick}
    >
        {children}
        {icon && <IoIosArrowBack  className={`${locale === "en" ? "rotate-180 group-hover:translate-x-1" : "rotate-0 group-hover:-translate-x-1"}  duration-300 transition-transform`} />}
    </button>
  )
}
