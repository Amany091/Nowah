"use client"
import Image from 'next/image'
import navItems from './navItems'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { IoIosArrowDown, IoMdMenu } from 'react-icons/io'
import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import { useParams, usePathname } from 'next/navigation'
import Button from '@/components/common/Button'
import { MdOutlinePhone } from 'react-icons/md'
import LangSwitcher from '@/components/langSwitcher/LangSwitcher'

export default function Navbar() {
    const t = useTranslations("common.navbar")
    const [open, setOpen] = useState(false)
    const {locale} = useParams()
    const pathname = usePathname()
    const currentPath = pathname.replace(`/${locale}`, '') || '/';
    const [active, setActive] = useState("")
    console.log(active)
    
  return (
    <>
    {/* Large */}
    <header className='container fixed top-10 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-308 rounded-4xl backdrop-blur-[16.8px] border p-3 border-white/16 bg-slate-900/85'>
        <nav className="flex justify-between items-center text-white">
            <div className="flex gap-1 items-center">
                <IoMdMenu className='max-md:block hidden cursor-pointer' size={30} onClick={()=> setOpen(!open)} />
                <Image src={'/logos/nowah-logo.svg'} alt='nowah_logo' width={81} height={100} priority />
            </div>
            <div className="hidden gap-8 items-center md:flex">
                {navItems.map((item) => {
                    const isActive = currentPath === item.href;

                    return (
                    <div key={item.id} className="relative group">
                        
                        {/* Link */}
                        <Link
                        href={`/${item.href}`}
                        className="flex items-center gap-2"
                        >
                        <p
                            className={`text-18 font-semibold font-changa ${
                            isActive ? "text-green-normal" : ""
                            }`}
                        >
                            {t(`links.${item.type}`)}
                        </p>

                        {item.options && (
                            <IoIosArrowDown
                            className="transition-transform duration-300 group-hover:rotate-180"
                            />
                        )}
                        </Link>

                        {/* Dropdown */}
                        {item.options && (
                        <div
                            className="absolute top-full left-1/2 -translate-x-1/2
                                    flex flex-col gap-2 rounded-xl bg-white py-5 px-4
                                    opacity-0 invisible translate-y-2
                                    group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                                    transition-all duration-300 text-gray-dark"
                        >
                            {item.options.map((option, index) => (
                            <Link
                                href={option.link}
                                key={`${item.id}-${index}`}
                                className={`text-nowrap ${active === option.option ? "border-e-2 px-2 transition border-green-normal" : ""}`}
                                onClick={()=> setActive(option.option)}
                            >
                                {option.option}
                            </Link>
                            ))}
                        </div>
                        )}

                    </div>
                    );
                })}
            </div>
            
            <div className='flex gap-2 items-center'>
                <Button > 
                <a href="tel:" className='flex gap-2 items-center'>
                    <p> {t("links.contactus")} </p>
                    <MdOutlinePhone/>
                </a> 
            </Button>
            <LangSwitcher/>
            </div>
    </nav>
    </header>

    {open && (
        <Sidebar setOpen={setOpen} open={open} currentPath={currentPath} />
    )}
    </>
  )
}
