import { useTranslations } from "next-intl";

type Props = {
    active: string;
    onActive: (active: string)=> void;
    className: string
}

export default function WorksCategoriesTabs({active, onActive, className}: Props) {
    const t = useTranslations("HomePage.works.tabs")

    const tabs = [
        {id: 1, label: t("allWorks"), tab: "All"},
        {id: 2, label: t("apps"), tab: "Apps"},
        {id: 3, label: t("websites"), tab: "Websites"},
        {id: 4, label: t("businessManagement"), tab: "ERP"}
    ];

  return (
    <div className='flex gap-6 flex-wrap justify-center items-center my-10'>
        {tabs.map((t) => (
            <button
                key={t.id}
                type="button"
                onClick={()=> onActive(t.tab)}
                className={`py-3.25 px-4 cursor-pointer duration-300 ease-in-out border rounded-[50px] w-59 ${active === t.tab ? 'bg-green-normal border-green-normal text-white' : `hover:bg-green-normal hover:border-green-normal hover:text-white ${className}`}`}
            >
                {t.label}
            </button>
        ))}
    </div>
  )
}
