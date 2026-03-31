import Services from "@/components/routes/home/services/Services";
import Works from "@/components/routes/home/works/Works";
import Hero from "@/components/routes/home/hero/Hero";
import FAQSection from "@/components/routes/home/FAQ/FAQSection";
import Clients from "@/components/routes/home/clients/Clients";
import Blogs from "@/components/routes/home/blogs/Blogs";
import WhyUsSection from "@/components/common/whyUs/WhyUsSection";
import ServicesSliderSection from "@/components/common/ServicesSliderSection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Nowah - Your Trusted Partner for Digital Solutions',
    description: 'Discover Nowah, your trusted partner for innovative digital solutions. We specialize in web development, mobile app development, UI/UX design, and more. Our expert team is dedicated to delivering high-quality services that drive business growth and success. Explore our comprehensive range of services and let us help you achieve your digital goals with cutting-edge technology and creative solutions.'
}

export default function Home() {  
  
  return (
    <main >
      <Hero/>
      <WhyUsSection/>
      <Services/>
      <Works/>
      <FAQSection/>
      <Clients/>
      <Blogs/>
      <ServicesSliderSection/>
    </main>
  );
}
