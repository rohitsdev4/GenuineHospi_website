import type { Metadata } from 'next';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SITE_URL } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Project Gallery & Portfolio',
  description:
    'View photos of our completed projects across India including Modular Operation Theaters, ICU units, medical gas pipelines, and hospital furniture installations. NABH compliant work.',
  keywords: [
    'hospital setup gallery',
    'modular OT photos India',
    'ICU setup portfolio',
    'medical gas pipeline images',
    'Genuine Hospi projects',
    'Jalandhar Punjab Bihar hospital setup',
  ],
  alternates: {
    canonical: '/gallery',
  },
  openGraph: {
    title: 'Project Gallery & Portfolio | Genuine Hospi Enterprises',
    description:
      'Actual installation photographs showcasing our NABH-compliant Modular OTs, ICUs, MGPS, and hospital furniture across India.',
    url: `${SITE_URL}/gallery`,
    type: 'website',
  },
};

const galleryItems = [
  {
    src: '/images/modular-ot.jpg',
    alt: 'Modular Operation Theater by Genuine Hospi Enterprises',
    category: 'Modular OT',
    title: 'Super Speciality Modular OT',
    location: 'Jalandhar, Punjab',
  },
  {
    src: '/images/icu-setup-1.jpeg',
    alt: 'ICU Room Setup',
    category: 'ICU Setup',
    title: '6-Bed Intensive Care Unit (ICU)',
    location: 'Patna, Bihar',
  },
  {
    src: '/images/modular-ot1-1.jpeg',
    alt: 'Hospital Modular OT Installation',
    category: 'Modular OT',
    title: 'SS 304 Operating Theatre Setup',
    location: 'Ludhiana, Punjab',
  },
  {
    src: '/images/icu-setup-2.jpeg',
    alt: 'Intensive Care Unit Interior',
    category: 'ICU Setup',
    title: 'Neonatal ICU (NICU) Setup',
    location: 'Siwan, Bihar',
  },
  {
    src: '/images/gas-pipeline-1.jpeg',
    alt: 'Medical Gas Pipeline Installation',
    category: 'Gas Pipelines',
    title: 'Hospital Medical Gas Pipeline System (MGPS)',
    location: 'Amritsar, Punjab',
  },
  {
    src: '/images/hospital-furniture-1.jpeg',
    alt: 'Hospital Furniture Setup',
    category: 'Furniture',
    title: '5-Function Motorized ICU Beds',
    location: 'Gaya, Bihar',
  },
  {
    src: '/images/hospital-furniture-2.jpeg',
    alt: 'Hospital Patient Beds',
    category: 'Furniture',
    title: 'Fowler Patient Beds Installation',
    location: 'Bathinda, Punjab',
  },
  {
    src: '/images/modular-ot1-6.jpeg',
    alt: 'Modular OT Installation',
    category: 'Modular OT',
    title: 'Microprocessor Surgeons Panel Setup',
    location: 'Jalandhar, Punjab',
  },
  {
    src: '/images/gas-pipeline-2.jpeg',
    alt: 'Medical Gas Manifold Room',
    category: 'Gas Pipelines',
    title: 'Oxygen Manifold and Changeover System',
    location: 'Muzaffarpur, Bihar',
  },
  {
    src: '/images/hospital-furniture-3.jpeg',
    alt: 'Bedside Lockers & Overbed Tables',
    category: 'Furniture',
    title: 'Patient Ward Furniture Supply',
    location: 'Siwan, Bihar',
  },
];

export default function GalleryPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Gallery', item: `${SITE_URL}/gallery` },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />

      <main className="flex-1 pb-16">
        <div className="bg-primary text-primary-foreground py-16 text-center relative">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-background bg-dot-primary/20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-10"
          />
          <div className="container mx-auto max-w-7xl px-4 md:px-6 relative">
            <h1 className="font-headline text-4xl font-extrabold sm:text-5xl">
              Our Completed Projects
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
              Explore actual installation photographs showcasing our NABH-compliant craftsmanship in OTs, ICUs, and pipeline networks.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {galleryItems.map((item, index) => (
                <div
                  key={item.src + index}
                  className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/5">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute top-4 left-4 z-10 rounded-full bg-primary/90 text-primary-foreground text-xs font-bold px-3 py-1 uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="font-headline text-lg font-bold text-foreground">
                        {item.title}
                      </h2>
                      <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
                        📍 {item.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
