import '../src/app/globals.css'
import { Noto_Kufi_Arabic } from 'next/font/google'
import Providers from './providers_copy'
// import Providers from './Providers'  // We'll create this next

// ✅ Font setup
const notoKufi = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  variable: '--font-noto-kufi',
  weight: ['100', '200', '300', '400', '500', '700', '800'],
})

// ✅ Static metadata (Next.js automatically injects into <head>)
export const metadata = {
  title: '4me (فورمي) - تطبيق شامل للطلب من المطاعم والتسوق وحجز مواعيد الأطباء',
  description:
    '4me (فورمي) - تطبيق شامل للطلب من المطاعم والمتاجر، حجز مواعيد الأطباء، وانضم كسائق أو متجر. خدمة سريعة وسهلة في تطبيق واحد.',
  keywords:
    'فورمي, 4me, طلب طعام, توصيل طعام, تسوق عبر التطبيق, حجز موعد طبيب, تطبيق توصيل, انضم كسائق, متجر الكتروني, مطاعم قريبة, دليفري, خدمة التوصيل',
  metadataBase: new URL('https://4me.sa'),
  alternates: {
    canonical: 'https://4me.sa',
    languages: {
      ar: 'https://4me.sa',
      en: 'https://4me.sa/en',
    },
  },
  openGraph: {
    title: '4me (فورمي) - تطبيق شامل للطلب من المطاعم والتسوق وحجز مواعيد الأطباء',
    description:
      '4me (فورمي) - تطبيق شامل للطلب من المطاعم والمتاجر، حجز مواعيد الأطباء، وانضم كسائق أو متجر. خدمة سريعة وسهلة في تطبيق واحد.',
    url: 'https://4me.sa',
    siteName: '4me (فورمي)',
    images: [
      {
        url: 'https://4me.sa/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '4me App Preview',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '4me (فورمي)',
    description:
      'تطبيق شامل للطلب من المطاعم والمتاجر، حجز مواعيد الأطباء، وانضم كسائق أو متجر.',
    images: ['https://4me.sa/images/twitter-image.jpg'],
  },
}

// ✅ Root layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: '4me (فورمي)',
              applicationCategory: 'FoodDeliveryApplication',
              operatingSystem: 'Android, iOS',
              description:
                'تطبيق شامل للطلب من المطاعم والمتاجر، حجز مواعيد الأطباء، وانضم كسائق أو متجر.',
              keywords:
                'فورمي, 4me, طلب طعام, توصيل طعام, تسوق, حجز موعد طبيب, تطبيق توصيل',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'SAR',
              },
            }),
          }}
        />
      </head>

      <body className={`${notoKufi.variable} antialiased`}>
        <Providers>
          <div className="min-h-screen text-right">{children}</div>
        </Providers>
      </body>
    </html>
  )
}
