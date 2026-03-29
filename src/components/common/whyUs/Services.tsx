"use client"
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Button from '@/components/common/Button'
import { useRouter } from '@/i18n/navigation'

const services = [
    {id: 1, service: 'نساعدك على إطلاق منتجاتك الرقمية وتحويل أفكارك إلى حلول مبتكرة تحدث فرقاً في السوق', image: '/home/digital.webp'},
    {id: 2, service: 'ندعم نمو أعمالك ونساعدك على التوسع بثقة عبر حلول برمجية مبتكرة ومرنة', image: '/home/confident-businessperson.webp'},
    {id: 3, service: 'نقود التحول الرقمي ونساعد مؤسستك على التحديث والتطور لمواكبة المستقبل', image: '/home/closeup-of-hands-pointing.webp'},
    {id: 4, service: 'ابتكار يبدأ من رؤيتك ويتحول إلى حلول رقمية عملية تصنع المستقبل', image: '/home/green-conceptual.webp'}
]

export default function Services() {
    const t = useTranslations("HomePage.whyUs")
    const commontT = useTranslations("common")
    const nums = Array.from({length: services.length}, (_,i)=> i < 10 ? `0${i+1}` : i+1 );
    const [service, setService ] = useState<{id: number; image: string; service: string}>({image: services[0].image, id: 1, service: services[0].service})
    const router = useRouter()

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-17.5 mt-10">
  
  {/* Left Side */}
  <div>
    <div className="flex flex-col gap-3">
      {services.map((item, index) => (
        <div
          className="cursor-pointer"
          onClick={() => setService(item)}
          key={item.id}
        >
          <span
            className={`${
              item.id === service.id
                ? "text-green-normal"
                : "text-gray-500"
            } font-bold text-24 font-changa mb-1`}
          >
            {nums[index]}
          </span>

          <p className="font-changa font-medium text-18 text-gray-500">
            {t(`services.${nums[index]}` as string)}
          </p>
        </div>
      ))}
    </div>

    <Button
      icon
      className="mt-10 shadow-primary backdrop-blur-[25px] w-48"
      onClick={()=> router.push("/contact")}
    >
      <p className="text-white font-changa font-semibold text-16">
        {commontT("contactUs")}
      </p>
    </Button>
  </div>

  {/* Right Side */}
  <div className="flex flex-col">
    
    <div className="relative w-full aspect-4/3">
      <div className='bg-green-normal/20 w-full translate-3 relative z-10 inset-0 h-full backdrop-blur-[32px] rounded-[34px]' style={{ maskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)", WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)" }} />

      {service.image && (
        <Image
          src={service.image}
          alt="service"
          fill
          className="object-cover rounded-[34px] transition-all duration-300"
        />
      )}
    </div>

    <p className="text-gray-500 font-changa font-medium text-20 mt-4">
      {t("imageCaption")}
    </p>
  </div>
</div>
  )
}
