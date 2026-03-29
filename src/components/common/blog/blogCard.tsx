"use client"
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { IoIosArrowBack } from 'react-icons/io';

type Props = {
    item: {
        title: string;
        badge: string;
        date: string
    }
}

export default function BlogCard({item}: Props) {
    const rt = useTranslations("common")
    const {locale} = useParams()
  return (
    <div
      className="rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10"
      style={{ boxShadow: "0px 8px 25px 0px #B3B3B326" }}
    >
      {/* Header */}
      <div className="relative w-full aspect-400/220">
        <Image
          src="/home/earth.webp"
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col gap-3">
        <span className="bg-green-normal text-gray-200 rounded-full px-3 py-1 text-sm font-medium font-changa w-fit border-[1.5px] border-green-light">
          {item.badge}
        </span>

        <p className="text-gray-900 text-lg font-semibold font-changa leading-snug">
          {item.title}
        </p>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 px-5 py-4 flex justify-between items-center">
        <p className="text-gray-500 font-changa text-sm">
          {item.date}
        </p>

        <div
          className="flex items-center gap-2 group text-green-normal text-sm font-semibold font-changa"
        >
          {rt("readMore")}

          <IoIosArrowBack
            className={`transition-transform duration-300 ${
              locale === "en"
                ? "rotate-180 group-hover:translate-x-1"
                : "group-hover:-translate-x-1"
            }`}
          />
        </div>
      </div>
    </div>
  )
}
