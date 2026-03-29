import Button from '@/components/common/Button'
import { useRouter } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

export default function HeroButtons() {
    const t = useTranslations("HomePage.header")
    const router = useRouter() 

  return (
    <div className="flex justify-center items-center gap-4 mt-12">
        <Button icon 
        onClick={()=> router.push("/services")}
        className="max-w-56 min-w-48 inline-flex shadow-primary text-center">
        <p className="font-changa font-semibold text-16">
            {t("buttons.services")}
        </p>
        </Button>

        <Button className="w-48 shadow-primary">
        <p className="font-changa font-semibold text-16">
            {t("buttons.more")}
        </p>
        </Button>
        </div>
  )
}
