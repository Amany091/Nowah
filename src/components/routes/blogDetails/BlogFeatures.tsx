import { getTranslations } from 'next-intl/server'
import React from 'react'

export default async function BlogFeatures() {
    const t = await getTranslations("blogDetailsPage")

  return (
    <div >
        {[
            "smartAutomation",
            "advancedAnalytics",
            "cloudSolutions",
            "cyberSecurity",
        ].map((key, index) => (
            <div
            key={key}
            className="p-6 rounded-2xl bg-white/5 border border-white/10"
            >
            <h3 className="text-gray-dark font-semibold text-32 mb-2">
                {t(`features.${key}.title`)}
            </h3>
            <p className="text-gray-500 mb-2 font-medium text-20 font-changa">
                {t(`features.${key}.desc`)}
            </p>
            <p className="text-gray-500 text-20 font-medium font-changa">
                • {t(`features.${key}.example`)}
            </p>
            </div>
        ))}
    </div>
  )
}
