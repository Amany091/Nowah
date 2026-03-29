import { getTranslations } from 'next-intl/server'
import React from 'react'

export default async function BlogFAQ() {
    const t = await getTranslations("blogDetailsPage")

  return (
    <div>
        <h2 className="text-2xl md:text-[40px] font-semibold text-gray-dark mb-4">
            {t("whyTitle")}
        </h2>
        <p className="text-gray-500 text-20 font-medium">
            {t("whyDescription")}
        </p>
    </div>
  )
}
