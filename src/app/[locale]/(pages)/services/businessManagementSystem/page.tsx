import ServicesSliderSection from '@/components/common/ServicesSliderSection'
import BusinessManagementContainer from '@/components/routes/servicesFeatures/businessManagement/BusinessManagementContainer'
import BusinessManagementHero from '@/components/routes/servicesFeatures/businessManagement/BusinessManagementHero'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Business Management System',
    description: 'Discover our comprehensive Business Management System designed to streamline operations, enhance productivity, and drive growth. Our solution offers a range of features including inventory management, customer relationship management, financial tracking, and more. Experience seamless integration and user-friendly interfaces to optimize your business processes and achieve success.'
}

export default function BusinessManagementSystemPage() {
  return (
    <main>
        <BusinessManagementHero/>
        <BusinessManagementContainer/>
        {/* <ServicesSliderSection/> */}
    </main>
  )
}
