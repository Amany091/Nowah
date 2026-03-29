import ServicesSliderSection from '@/components/common/ServicesSliderSection'
import BusinessManagementContainer from '@/components/routes/servicesFeatures/businessManagement/BusinessManagementContainer'
import BusinessManagementHero from '@/components/routes/servicesFeatures/businessManagement/BusinessManagementHero'

export default function BusinessManagementSystemPage() {
  return (
    <main>
        <BusinessManagementHero/>
        <BusinessManagementContainer/>
        <ServicesSliderSection/>
    </main>
  )
}
