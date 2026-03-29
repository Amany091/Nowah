"use client"
import React from 'react'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import { useTranslations } from 'next-intl'
import { getValidationSchema, initialValues } from './formHelper'
import Button from '@/components/common/Button'

export default function ContactForm() {
    const t = useTranslations("contactPage.form")
  return (
     <Formik
        initialValues={initialValues}
        validationSchema={getValidationSchema(t)}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({isSubmitting}) => (
          <Form className="flex flex-col gap-4">
            {/* Full Name */}
            <div>
                <label
                htmlFor="fullName"
                className="block mb-2 text-18 font-medium text-gray-dark"
              >
                {t("labels.fullName")}
              </label>
              <Field
                id="fullName"
                name="fullName"
                placeholder={t("placeholders.fullName")}
                className="w-full p-4 border-[1.5px] border-gray-300 rounded-xl placeholder:text-gray-300 outline-none"
              />
              <ErrorMessage
                name="fullName"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Email */}
            <div>
                <label
                htmlFor="email"
                className="block mb-2 text-18 font-medium text-gray-dark"
              >
                {t("labels.email")}
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder={t("placeholders.email")}
                className="w-full p-4 border-[1.5px] border-gray-300 rounded-xl placeholder:text-gray-300 outline-none"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Phone */}
            <div>
                <label
                htmlFor="phone"
                className="block mb-2 text-18 font-medium text-gray-dark"
              >
                {t("labels.phone")}
              </label>
              <Field
                id={"phone"}
                name="phone"
                placeholder={t("placeholders.phone")}
                className="w-full p-4 border-[1.5px] border-gray-300 rounded-xl placeholder:text-gray-300 outline-none"
              />
              <ErrorMessage
                name="phone"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Message */}
            <div>
                <label
                htmlFor="textarea"
                className="block mb-2 text-18 font-medium text-gray-dark"
              >
                {t("labels.message")}
              </label>
              <Field
                id="textarea"
                as="textarea"
                name="message"
                placeholder={t("placeholders.message")}
                rows={4}
                className="w-full p-4 border-[1.5px] border-gray-300 rounded-xl placeholder:text-gray-300 outline-none resize-none"
              />
              <ErrorMessage
                name="message"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <Button
            type="submit"
            className={`w-full! mx-auto md:w-48! ${isSubmitting? "cursor-default!" : 'cursor-pointer'}`}
            >
                <p> 
                    {isSubmitting ? t("submitting") : t("submit")}
                </p>
            </Button>

          </Form>
        )}
      </Formik>
  )
}
