import Navbar from "@/components/layout/navbar/Navbar";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "@/components/layout/footer/Footer";
import { Changa } from "next/font/google";

const changa = Changa({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-changa",
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html
      lang={locale}
      dir={locale === "ar"? 'rtl':'ltr'}
      suppressHydrationWarning
    >
      <body className={`${changa.variable} font-changa scroll-smooth h-screen`}>
        <NextIntlClientProvider>
          <Navbar/>
          {children}
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}