import type { Metadata, Viewport } from 'next';
import { PT_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { GoogleServices } from '@/components/GoogleServices';
import { COMPANY_INFO, SITE_URL } from '@/lib/site-config';

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '800', '900'],
  variable: '--font-playfair-display',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0284c7',
  width: 'device-width',
  initialScale: 1,
};

const googleVerificationCode =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'd92703a42ec0210f';
const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      'Genuine Hospi Enterprises | Modular OT, ICU Setup, Medical Gas Pipeline & Hospital Equipment Manufacturer India',
    template: '%s | Genuine Hospi Enterprises',
  },
  description:
    'Leading manufacturer and supplier of Modular Operation Theaters, ICU Setup, Medical Gas Pipeline Systems (MGPS), Hospital Beds, Hospital Furniture, Oxygen Generation Plants & Hospital HVAC across India. NABH compliant. PAN India service.',
  keywords: [
    'modular OT',
    'modular operation theater',
    'modular operation theatre',
    'modular OT manufacturer India',
    'modular OT supplier',
    'ICU setup',
    'ICU setup India',
    'ICU equipment supplier',
    'medical gas pipeline',
    'medical gas pipeline system',
    'MGPS installation',
    'medical gas pipeline system manufacturer',
    'medical gas pipeline India',
    'hospital beds',
    'hospital bed manufacturer India',
    'hospital bed supplier',
    'hospital furniture',
    'hospital furniture manufacturer India',
    'hospital equipment',
    'hospital equipment supplier India',
    'hospital setup solutions',
    'hospital infrastructure',
    'NABH compliant hospital equipment',
    'NABH compliant modular OT',
    'oxygen generation plant',
    'oxygen plant hospital',
    'PSA oxygen plant India',
    'hospital HVAC system',
    'operation theater air conditioning',
    'hospital setup company India',
    'hospital construction India',
    'Genuine Hospi Enterprises',
    'hospital equipment Jalandhar',
    'hospital equipment Punjab',
    'hospital equipment Bihar',
  ],
  authors: [{ name: COMPANY_INFO.name, url: SITE_URL }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48', type: 'image/x-icon' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: COMPANY_INFO.name,
    title:
      'Genuine Hospi Enterprises | Modular OT, ICU, Medical Gas Pipeline & Hospital Equipment',
    description:
      'Leading manufacturer of Modular OTs, ICU Setups, Medical Gas Pipelines, Hospital Furniture & PSA Oxygen Plants across India. NABH compliant.',
    images: [
      {
        url: '/images/modular-ot.jpg',
        width: 1200,
        height: 630,
        alt: 'Genuine Hospi Enterprises - Modular Operation Theater',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Genuine Hospi Enterprises | Hospital Equipment Manufacturer India',
    description:
      'Leading manufacturer of Modular OTs, ICU Setups, Medical Gas Pipelines & Hospital Equipment across India.',
    images: ['/images/modular-ot.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: googleVerificationCode,
  },
  category: 'healthcare',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': `${SITE_URL}/#organization`,
    name: COMPANY_INFO.name,
    alternateName: COMPANY_INFO.shortName,
    description:
      'Leading manufacturer and supplier of Modular Operation Theaters, ICU Setup, Medical Gas Pipeline Systems (MGPS), Hospital Beds, Hospital Furniture, Oxygen Generation Plants & Hospital HVAC across India.',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/logo.png`,
      width: 512,
      height: 512,
    },
    image: `${SITE_URL}/images/modular-ot.jpg`,
    foundingDate: '2015',
    telephone: [COMPANY_INFO.phones.primary, COMPANY_INFO.phones.secondary],
    email: COMPANY_INFO.email,
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: COMPANY_INFO.addresses.headOffice.street,
        addressLocality: COMPANY_INFO.addresses.headOffice.city,
        addressRegion: COMPANY_INFO.addresses.headOffice.state,
        postalCode: COMPANY_INFO.addresses.headOffice.postalCode,
        addressCountry: COMPANY_INFO.addresses.headOffice.country,
      },
      {
        '@type': 'PostalAddress',
        streetAddress: COMPANY_INFO.addresses.branchOffice.street,
        addressLocality: COMPANY_INFO.addresses.branchOffice.city,
        addressRegion: COMPANY_INFO.addresses.branchOffice.state,
        postalCode: COMPANY_INFO.addresses.branchOffice.postalCode,
        addressCountry: COMPANY_INFO.addresses.branchOffice.country,
      },
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '31.3260',
      longitude: '75.5762',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: COMPANY_INFO.phones.primary,
        contactType: 'sales',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi', 'Punjabi'],
      },
      {
        '@type': 'ContactPoint',
        telephone: COMPANY_INFO.phones.secondary,
        contactType: 'customer support',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi', 'Punjabi'],
      },
    ],
    areaServed: [
      { '@type': 'Country', name: 'India' },
      ...COMPANY_INFO.serviceStates.map((state) => ({
        '@type': 'State',
        name: state,
      })),
    ],
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '09:00',
      closes: '18:00',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Hospital Equipment & Infrastructure Solutions',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Modular Operation Theaters',
          description:
            'NABH compliant SS 304 Modular Operation Theaters with PAN India service',
        },
        {
          '@type': 'OfferCatalog',
          name: 'Intensive Care Units (ICU)',
          description:
            'Custom-designed ICU setups with advanced patient monitoring and life support systems',
        },
        {
          '@type': 'OfferCatalog',
          name: 'Medical Gas Pipeline Systems',
          description:
            'End-to-end MGPS installations adhering to HTM 02-01 and ISO 7396-1 safety standards',
        },
        {
          '@type': 'OfferCatalog',
          name: 'Hospital Furniture',
          description:
            'Complete range of ICU beds, Fowler beds, examination tables, trolleys, and crash carts',
        },
        {
          '@type': 'OfferCatalog',
          name: 'Oxygen Generation Plant',
          description:
            'On-site PSA oxygen generation plants for continuous medical-grade oxygen supply',
        },
        {
          '@type': 'OfferCatalog',
          name: 'Air Conditioning System (Hospital HVAC)',
          description:
            'ASHRAE 170 and NABH compliant laminar airflow HVAC systems for OTs and ICUs',
        },
      ],
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${ptSans.variable} ${playfairDisplay.variable} font-body antialiased`}
      >
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        {children}
        <Toaster />
        <GoogleServices />
      </body>
    </html>
  );
}
