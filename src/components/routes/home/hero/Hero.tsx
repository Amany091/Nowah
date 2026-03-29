"use client"
import { useTranslations } from 'next-intl'
import HeroButtons from './HeroButtons'
import HeroContent from './HeroContent'
import AnimatedLines from './AnimatedLines'

export default function Hero() {
    const t = useTranslations("HomePage.header")

    return (
      <section className="bg-midnight-dark-hover w-full pt-32 min-h-screen flex flex-col relative">
        <AnimatedLines/>
        <div className="container relative z-10 flex flex-col flex-1">
          
          {/* Top Content */}
          <div className="flex flex-col items-center justify-center mt-22.5 mb-24">
            <HeroContent/>
            <HeroButtons/>
          </div>

          {/* Image at Bottom */}
          <div className="mt-auto bg-gradient-midnight-to-sage p-1 rounded-[27px]">
            <div className="border-2 relative rounded-[27px] aspect-1138/395 overflow-hidden bg-[url(/home/Wireframe-dashboard.webp)] bg-cover" />
          </div>

        </div>
      </section>
    )
}
