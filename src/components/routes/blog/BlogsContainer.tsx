import React from 'react'
import blog from '@/components/common/blog/blogData'
import { getTranslations } from 'next-intl/server'
import BlogCard from '@/components/common/blog/blogCard'
import Badge from '@/components/ui/Badge'
import NoisBackgroundWrapper from '@/components/ui/NoisBackgroundWrapper'
import { Link } from '@/i18n/navigation'

export default async function BlogsContainer() {
    const bt = await getTranslations("blogPage")
    const dt = await getTranslations("common")

  return (
    <section>
       <NoisBackgroundWrapper>
         <div className="flex justify-center flex-col items-center relative z-20 mb-10">
            <Badge text={bt('badge')} className='w-30!' />
            <p className='mt-4 mb-2 font-changa text-gray-dark font-semibold text-40'> 
                {bt.rich("title", {
                    exe: ((chunk)=> <span className='text-green-normal'> {chunk} </span>)
                })} 
            </p>
            <p className='font-regular text-center text-gray-400 text-18'> {bt("description")} </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
            {blog.length === 0? <p className='text-2xl text-center'> {dt("noData")} </p> : blog.map((item, index)=>{
                const translatedItem = {title: bt(`blogs.${index}.title`), badge: bt(`blogs.${index}.badge`), date: bt(`blogs.${index}.date`)}
                return(
                    <Link href={`/blog/${item.id}`} key={item.id}>
                        <BlogCard item={translatedItem} />
                    </Link>
                )
            })}
        </div>
       </NoisBackgroundWrapper>
    </section>
  )
}
