import ServicesSliderSection from '@/components/common/ServicesSliderSection'
import BlogHero from '@/components/routes/blog/BlogHero'
import BlogsContainer from '@/components/routes/blog/BlogsContainer'
import React from 'react'

export default function BlogPage() {
  return (
    <main>
        <BlogHero/>
        <BlogsContainer/>
        <ServicesSliderSection/>
    </main>
  )
}
