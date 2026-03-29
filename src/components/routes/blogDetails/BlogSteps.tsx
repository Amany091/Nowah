import { getTranslations } from 'next-intl/server'
import React from 'react'

export default async function BlogSteps() {
    const t = await getTranslations("blogDetailsPage")
  return (
    <div>
        <h2 className="text-2xl md:text-40 text-gray-dark font-semibold mb-4">
            {t("stepsTitle")}
        </h2>

        <ol className="space-y-2">
            {t.raw("steps").map((step: string, i: number) => (
            <li
                key={i}
                className="flex gap-4 text-gray-500 font-medium text-20"
            >
                • {step}
            </li>
            ))}
        </ol>
    </div>
  )
}
