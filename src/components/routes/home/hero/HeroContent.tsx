import { useTranslations } from 'next-intl'
import React from 'react'
import { VscSparkleFilled } from 'react-icons/vsc'

export default function HeroContent() {
  const t = useTranslations("HomePage.header")

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
        <span className="w-100 shadow-innerShadow flex gap-1 items-center justify-center text-white p-3 rounded-[30px]">
        <VscSparkleFilled className="text-green-normal" />
        {t("badge")}
        </span>

        <p className="lg:text-[56px] text-[36px] font-bold text-center bg-linear-to-l from-white to-[#999999] bg-clip-text text-transparent">
        {t("title")}
        </p>

        <p className="text-20 font-changa font-normal text-gray-400 lg:w-160 text-center">
        {t("description")}
        </p>
    </div>
  )
}
