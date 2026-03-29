import FAQContent from './FAQContent'
import FAQAccordion from './FAQAccordion'
import { getTranslations } from 'next-intl/server'

const faqs = [
    {id: 1, question: 'ما هي طبيعة الخدمات التي تقدمونها؟', answer: "نحن نقدم حلول برمجية متكاملة تشمل تطوير المواقع والتطبيقات، أنظمة الدفع الإلكتروني، والتحول الرقمي، مع التركيز على الابتكار والجودة لضمان قيمة حقيقية لعملائنا." },
    {id: 2, question: 'ما هي طبيعة الخدمات التي تقدمونها؟', answer: "نحن نقدم حلول برمجية متكاملة تشمل تطوير المواقع والتطبيقات، أنظمة الدفع الإلكتروني، والتحول الرقمي، مع التركيز على الابتكار والجودة لضمان قيمة حقيقية لعملائنا." },
    {id: 3, question: 'ما هي طبيعة الخدمات التي تقدمونها؟', answer: "نحن نقدم حلول برمجية متكاملة تشمل تطوير المواقع والتطبيقات، أنظمة الدفع الإلكتروني، والتحول الرقمي، مع التركيز على الابتكار والجودة لضمان قيمة حقيقية لعملائنا." },
    {id: 4, question: 'ما هي طبيعة الخدمات التي تقدمونها؟', answer: "نحن نقدم حلول برمجية متكاملة تشمل تطوير المواقع والتطبيقات، أنظمة الدفع الإلكتروني، والتحول الرقمي، مع التركيز على الابتكار والجودة لضمان قيمة حقيقية لعملائنا." },
]

export default async function FAQSection() {
    const t = await getTranslations("HomePage.FAQ")
  return (
    <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 h-full w-full lg:w-1/2 z-0">
            <div className="absolute inset-0 bg-[url(/home/background-cover.webp)] bg-cover bg-center" />
        </div>
        {/* Global Bg Image */}
        <div className="absolute inset-0 bg-[url(/common/background-noise2.webp)]" /> 

        <div className="container">
            <div className="relative z-10 grid lg:grid-cols-2 grid-cols-1 gap-8">
                <FAQContent />

                <div className="flex flex-col gap-4">
                    {faqs.map((item, index) => (
                        <FAQAccordion
                        key={item.id}
                        item={{
                            question: t(`faqs.${index}.question`),
                            answer: t(`faqs.${index}.answer`),
                            id: item.id,
                        }}
                        />
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}
