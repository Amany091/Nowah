import WorkCard from '@/components/common/works/WorkCard';
import { useTranslations } from 'next-intl';
import React from 'react'
import { Link } from '@/i18n/navigation';

type Props = {
    items: {
        id: number;
        category: string;
        image: string;
        title: string;
        dateOfPublish: string;
    }[]
}

export default function WorksGallery({items}: Props) {
    const t = useTranslations("common")
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 auto-rows-fr z-20'>
        {items.length === 0 ? <p className='text-center text-2xl'>{t("noData")}</p> : items.map((item)=>(
            <Link 
            key={item.id}
            href={`/ourWorks/${item.id}`}>
                <WorkCard
                item={item}
            />
            </Link>
        ))}
    </div>
  )
}
