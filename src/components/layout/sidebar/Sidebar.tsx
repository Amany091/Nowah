import Portal from '@/components/ui/Portal'
import React from 'react'
import navItems from '../navbar/navItems'
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function Sidebar({setOpen, open, currentPath}: {setOpen: (open: boolean)=> void, open: boolean, currentPath: string}) {
  const t = useTranslations("common.navbar")
  const {locale} = useParams()

  return (
    <Portal>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 w-full h-screen bg-slate-950/50 backdrop-blur-md"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 ${locale === 'ar'? 'right-0':'left-0'} z-50 h-full w-4/5 max-w-xs
          bg-white shadow-lg
          transform transition-transform duration-500 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex flex-col gap-3 p-5">
          {navItems.map((item) => {
            const isActive = currentPath === item.href;
            return (
              <Link href={`/${item.href}`} key={item.id}>
                <p
                  className={`text-18 font-semibold font-changa whitespace-nowrap ${
                    isActive ? "text-green-normal" : "text-gray-700"
                  }`}
                >
                  {t(`links.${item.type}`)}
                </p>
              </Link>
            );
          })}
        </div>
      </aside>
    </Portal>
  )
}
