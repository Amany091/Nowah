import WorkDetails from '@/components/routes/workDetails/WorkDetails'
import WorksHero from '@/components/routes/works/WorksHero'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Our Works',
    description: 'Explore our impressive portfolio of works, showcasing our expertise in web development, mobile app development, UI/UX design, and more. Discover how we have helped businesses across various industries achieve their digital goals with innovative solutions and exceptional results. From stunning websites to engaging mobile applications, our work reflects our commitment to quality and client satisfaction.'
}

export default function WorkDetailsPage() {
  return (
   <main>
    <WorksHero/>
    <WorkDetails/>
   </main>
  )
}
