import ServicesSliderSection from '@/components/common/ServicesSliderSection'
import BlogHero from '@/components/routes/blog/BlogHero'
import BlogsContainer from '@/components/routes/blogDetails/BlogConainer'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Blog Details',
    description: 'Explore our insightful blog on digital solutions, covering web development, mobile app development, UI/UX design, and more. Stay updated with the latest trends, tips, and industry news to help you navigate the ever-evolving digital landscape and achieve success in your business endeavors.'
}

export default function BlogDetailsPage() {
  return (
    <main>
        <BlogHero/>
        <BlogsContainer/>
        {/* <ServicesSliderSection/> */}
    </main>
  )
}
