import ServicesSliderSection from '@/components/common/ServicesSliderSection'
import BlogHero from '@/components/routes/blog/BlogHero'
import BlogsContainer from '@/components/routes/blog/BlogsContainer'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Our Blog",
  description: "Read our latest articles and insights on digital transformation, innovation, and technology trends."
}

export default function BlogPage() {
  return (
    <main>
        <BlogHero/>
        <BlogsContainer/>
        {/* <ServicesSliderSection/> */}
    </main>
  )
}
