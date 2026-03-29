import { getTranslations } from 'next-intl/server'
import React from 'react'

export default async function BlogValues() {
    const t = await getTranslations("blogDetailsPage")

  return (
    <div>
        <h2 className="text-2xl md:text-[40px] text-gray-dark font-semibold mb-4">
            {t("valueTitle")}
        </h2>

        <ul className="space-y-2">
            {t.raw("valuePoints").map((point: string, i: number) => (
            <li
                key={i}
                className="flex items-start gap-3 font-medium text-20 text-gray-500"
            >
                • {point}
            </li>
            ))}
        </ul>
    </div>
  )
}
