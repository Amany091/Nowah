import Services from "@/components/routes/home/services/Services";
import Works from "@/components/routes/home/works/Works";
import Hero from "@/components/routes/home/hero/Hero";
import FAQSection from "@/components/routes/home/FAQ/FAQSection";
import Clients from "@/components/routes/home/clients/Clients";
import Blogs from "@/components/routes/home/blogs/Blogs";
import WhyUsSection from "@/components/common/whyUs/WhyUsSection";
import ServicesSliderSection from "@/components/common/ServicesSliderSection";

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
      {/* <ServicesSliderSection/> */}
    </main>
  );
}
