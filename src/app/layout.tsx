import type { Metadata } from 'next';
import { PT_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '800', '900'],
  variable: '--font-playfair-display',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://genuinehospi.com'),
  title: {
    default: 'Genuine Hospi Enterprises | Modular OT, ICU Setup, Medical Gas Pipeline & Hospital Equipment Manufacturer India',
    template: '%s | Genuine Hospi Enterprises',
  },
  description: 'Leading manufacturer and supplier of Modular Operation Theaters, ICU Setup, Medical Gas Pipeline Systems (MGPS), Hospital Beds, Hospital Furniture & complete hospital infrastructure solutions across India. NABH compliant. PAN India service.',
  keywords: [
    'modular OT', 'modular operation theater', 'modular operation theatre',
    'modular OT manufacturer India', 'modular OT supplier',
    'ICU setup', 'ICU setup India', 'ICU equipment supplier',
    'medical gas pipeline', 'medical gas pipeline system', 'MGPS installation',
    'medical gas pipeline system manufacturer', 'medical gas pipeline India',
    'hospital beds', 'hospital bed manufacturer India', 'hospital bed supplier',
    'hospital furniture', 'hospital furniture manufacturer India',
    'hospital equipment', 'hospital equipment supplier India',
    'hospital setup solutions', 'hospital infrastructure',
    'NABH compliant hospital equipment', 'NABH compliant modular OT',
    'oxygen generation plant', 'oxygen plant hospital',
    'hospital HVAC system', 'operation theater air conditioning',
    'hospital setup company India', 'hospital construction India',
    'Genuine Hospi Enterprises', 'hospital equipment Jalandhar',
    'hospital equipment Punjab', 'hospital equipment Bihar',
  ],
  authors: [{ name: 'Genuine Hospi Enterprises' }],
  creator: 'Genuine Hospi Enterprises',
  publisher: 'Genuine Hospi Enterprises',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://genuinehospi.com',
    siteName: 'Genuine Hospi Enterprises',
    title: 'Genuine Hospi Enterprises | Modular OT, ICU, Medical Gas Pipeline & Hospital Equipment',
    description: 'Leading manufacturer of Modular OTs, ICU Setups, Medical Gas Pipelines, Hospital Furniture across India. NABH compliant.',
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
    description: 'Leading manufacturer of Modular OTs, ICU Setups, Medical Gas Pipelines & Hospital Equipment across India.',
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
  // verification: {
  //   google: 'your-google-verification-code',
  // },
  alternates: {
    canonical: 'https://genuinehospi.com',
  },
  category: 'healthcare',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalBusiness',
              name: 'Genuine Hospi Enterprises',
              description: 'Leading manufacturer and supplier of Modular Operation Theaters, ICU Setup, Medical Gas Pipeline Systems, Hospital Beds, Hospital Furniture & complete hospital infrastructure solutions across India.',
              url: 'https://genuinehospi.com',
              logo: 'https://genuinehospi.com/logo.svg',
              image: 'https://genuinehospi.com/images/modular-ot.jpg',
              telephone: ['+916207507418', '+919478884840'],
              email: 'rohitsingh8885882@gmail.com',
              address: [
                {
                  '@type': 'PostalAddress',
                  streetAddress: '204, St 02, Sanjay Gandhi Nagar, Industrial Area',
                  addressLocality: 'Jalandhar',
                  addressRegion: 'Punjab',
                  postalCode: '144004',
                  addressCountry: 'IN',
                },
                {
                  '@type': 'PostalAddress',
                  streetAddress: 'Bazaar, Pachrukhi',
                  addressLocality: 'Siwan',
                  addressRegion: 'Bihar',
                  postalCode: '841241',
                  addressCountry: 'IN',
                },
              ],
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '31.3260',
                longitude: '75.5762',
              },
              areaServed: {
                '@type': 'Country',
                name: 'India',
              },
              priceRange: '$$',
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '09:00',
                closes: '18:00',
              },
              sameAs: [],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Hospital Equipment & Infrastructure Solutions',
                itemListElement: [
                  {
                    '@type': 'OfferCatalog',
                    name: 'Modular Operation Theaters',
                    description: 'NABH compliant SS 304 Modular Operation Theaters with PAN India service',
                  },
                  {
                    '@type': 'OfferCatalog',
                    name: 'Intensive Care Units (ICU)',
                    description: 'Custom-designed ICU setups with advanced patient monitoring and life support systems',
                  },
                  {
                    '@type': 'OfferCatalog',
                    name: 'Medical Gas Pipeline Systems',
                    description: 'End-to-end MGPS installations adhering to HTM 2022 safety standards',
                  },
                  {
                    '@type': 'OfferCatalog',
                    name: 'Hospital Furniture',
                    description: 'Complete range of hospital beds, examination tables, trolleys, and chairs',
                  },
                  {
                    '@type': 'OfferCatalog',
                    name: 'Oxygen Generation Plant',
                    description: 'On-site oxygen generation plants for continuous medical-grade oxygen supply',
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`${ptSans.variable} ${playfairDisplay.variable} font-body antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
