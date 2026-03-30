import ServicesSliderSection from '@/components/common/ServicesSliderSection'
import BlogHero from '@/components/routes/blog/BlogHero'
import BlogsContainer from '@/components/routes/blogDetails/BlogConainer'
import React from 'react'

export default function BlogDetailsPage() {
  return (
    <main>
        <BlogHero/>
        <BlogsContainer/>
        {/* <ServicesSliderSection/> */}
    </main>
  )
}
