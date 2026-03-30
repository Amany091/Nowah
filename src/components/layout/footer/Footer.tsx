import React from 'react'
import Subscription from './Subscription'
import FooterCompany from './FooterCompany'
import FooterLinks from './FooterLinks'
import CompanyPolicy from './CompanyPolicy'
import ContactCompany from './ContactCompany'
import { getTranslations } from 'next-intl/server'

export default async function Footer() {
  const t = await getTranslations("layout.footer")
  return (
    <footer className='bg-midnight-dark-active pt-10'>
      <div className="container">
        <Subscription/>
        <div className='mt-20 mb-10 grid md:grid-cols-[2fr_1fr_1fr_1fr] grid-cols-1 gap-21'>
          <FooterCompany/>
          <FooterLinks/>
          <CompanyPolicy/>
          <ContactCompany/>
        </div>
        <hr className='mt-10 text-gray-300 w-full inline-block' />
        <p className='text-14 font-medium text-white text-center my-4'> {t("rights")} </p>
      </div>
    </footer>
  )
}
