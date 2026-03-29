import NoisBackgroundWrapper from '@/components/ui/NoisBackgroundWrapper'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import BlogSteps from './BlogSteps'
import BlogValues from './BlogValues'
import BlogFeatures from './BlogFeatures'
import BlogFAQ from './BlogFAQ'

export default async function BlogConainer() {
    const t = await getTranslations("blogDetailsPage")

  return (
    <section>
        <NoisBackgroundWrapper>
            <div className="container space-y-10">
                <div className="relative aspect-video rounded-xl overflow-hidden">
                    <Image src={'/home/earth.webp'} alt='blog' fill className='object-cover' />
                </div>

                <div>
                    {/* 🔹 Hero */}
                    <div className=" max-w-273.25">
                        <h1 className="text-3xl md:text-[48px] font-bold text-black mb-4">
                            {t("title")}
                        </h1>
                        <p className="text-gray-500 mt-4 text-base md:text-20">
                            {t("intro")}
                        </p>
                    </div>
                </div>

                {/* 🔹 Why Section */}
                <BlogFAQ/>

                {/* 🔹 Features */}
                <BlogFeatures/>

                {/* 🔹 Value Section */}
                <BlogValues/>
                
                {/* 🔹 Steps */}
                <BlogSteps/>
            </div>
        </NoisBackgroundWrapper>
    </section>
  )
}
