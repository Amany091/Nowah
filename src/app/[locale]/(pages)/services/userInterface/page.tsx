import ServicesSliderSection from '@/components/common/ServicesSliderSection'
import UserInterfaceContainer from '@/components/routes/servicesFeatures/userInterface/UserInterfaceContainer'
import UserInterfaceHero from '@/components/routes/servicesFeatures/userInterface/UserInterfaceHero'

export default function UserInterfaceServicePage() {
  return (
    <main>
        <UserInterfaceHero/>
        <UserInterfaceContainer/>
        {/* <ServicesSliderSection/> */}
    </main>
  )
}
