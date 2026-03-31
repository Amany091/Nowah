import ServicesSliderSection from '@/components/common/ServicesSliderSection'
import UserInterfaceContainer from '@/components/routes/servicesFeatures/userInterface/UserInterfaceContainer'
import UserInterfaceHero from '@/components/routes/servicesFeatures/userInterface/UserInterfaceHero'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'UI/UX Design',
    description: 'Discover our expert User Interface Design services aimed at creating visually stunning and user-friendly interfaces for your digital products. Our team of skilled designers specializes in crafting intuitive and engaging user experiences that enhance usability and drive user satisfaction. From wireframing to prototyping, we provide end-to-end UI design solutions tailored to meet your specific business needs.'
}

export default function UserInterfaceServicePage() {
  return (
    <main>
        <UserInterfaceHero/>
        <UserInterfaceContainer/>
        {/* <ServicesSliderSection/> */}
    </main>
  )
}
