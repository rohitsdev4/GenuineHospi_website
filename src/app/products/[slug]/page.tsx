import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ChevronRight,
  FileText,
  Download,
  CheckCircle2,
  ShieldCheck,
  ArrowLeft,
  MapPin,
  Phone,
} from 'lucide-react';
import { products } from '@/lib/products';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ProductQuoteForm } from '@/components/ProductQuoteForm';
import { ProductImageGallery } from '@/components/ProductImageGallery';
import { Button } from '@/components/ui/button';
import { COMPANY_INFO, SITE_URL } from '@/lib/site-config';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: product.seoTitle,
    description: product.seoDescription,
    keywords: [
      ...product.keywords,
      product.name.toLowerCase(),
      'Genuine Hospi Enterprises',
      'NABH compliant hospital equipment',
      'hospital equipment India',
    ],
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title: product.seoTitle,
      description: product.seoDescription,
      type: 'website',
      url: `${SITE_URL}/products/${product.slug}`,
      images: [
        {
          url: product.images[0] || '/images/modular-ot.jpg',
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: product.seoTitle,
      description: product.seoDescription,
      images: [product.images[0] || '/images/modular-ot.jpg'],
    },
  };
}

export default async function ProductDetailsPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.longDescription,
    image: product.images.map((img) => `${SITE_URL}${img}`),
    brand: {
      '@type': 'Brand',
      name: COMPANY_INFO.name,
    },
    manufacturer: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      url: SITE_URL,
    },
    offers: {
      '@type': 'Offer',
      url: `${SITE_URL}/products/${product.slug}`,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      areaServed: {
        '@type': 'Country',
        name: 'India',
      },
      seller: {
        '@type': 'Organization',
        name: COMPANY_INFO.name,
      },
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE_URL}/products` },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.name,
        item: `${SITE_URL}/products/${product.slug}`,
      },
    ],
  };

  const faqSchema =
    product.faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: product.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <Header />

      <main className="flex-1 pb-16">
        <div className="bg-muted/50 border-b border-border/20 py-4">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/products" className="hover:text-primary transition-colors">
                Products
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground font-semibold">{product.name}</span>
            </nav>
          </div>
        </div>

        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-12 items-start">
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline mb-4"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to all products
                  </Link>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Genuine Hospi Solutions
                    </span>
                    <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                      <ShieldCheck className="h-4 w-4" /> NABH Compliant
                    </span>
                  </div>
                  <h1 className="font-headline text-3xl font-extrabold text-foreground sm:text-4xl md:text-5xl tracking-tight">
                    {product.name}
                  </h1>
                </div>

                <ProductImageGallery
                  images={product.images}
                  productName={product.name}
                  aiHint={product.aiHint}
                />

                <div className="prose prose-slate max-w-none dark:prose-invert">
                  <h2 className="font-headline text-2xl font-bold text-foreground border-b pb-2">
                    Overview &amp; Solution Blueprint
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                    {product.longDescription}
                  </p>
                </div>

                {/* Features Checklist */}
                <div className="rounded-xl border border-border/60 bg-muted/20 p-6 space-y-4">
                  <h2 className="font-headline text-xl font-bold text-foreground">
                    Key Features &amp; Technical Capabilities
                  </h2>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Applications */}
                <div className="rounded-xl border border-border/60 bg-card p-6 space-y-3">
                  <h2 className="font-headline text-xl font-bold text-foreground">
                    Clinical Applications
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app) => (
                      <span
                        key={app}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technical Specifications Table */}
                <div className="space-y-4">
                  <h2 className="font-headline text-xl font-bold text-foreground">
                    Technical Specifications
                  </h2>
                  <div className="overflow-x-auto rounded-lg border border-border">
                    <table className="min-w-full divide-y divide-border">
                      <thead className="bg-muted/50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-foreground"
                          >
                            Parameter
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-foreground"
                          >
                            Specification Value / Compliance Standard
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border bg-background">
                        {Object.entries(product.specifications).map(([key, val], idx) => (
                          <tr key={key} className={idx % 2 === 1 ? 'bg-muted/10' : undefined}>
                            <td className="whitespace-nowrap px-6 py-4 text-sm font-semibold text-foreground">
                              {key}
                            </td>
                            <td className="px-6 py-4 text-sm text-muted-foreground">{val}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Product FAQs */}
                {product.faqs.length > 0 && (
                  <div className="space-y-4">
                    <h2 className="font-headline text-xl font-bold text-foreground">
                      Frequently Asked Questions — {product.name}
                    </h2>
                    <div className="space-y-3">
                      {product.faqs.map((faq) => (
                        <div
                          key={faq.question}
                          className="rounded-xl border border-border bg-card p-5"
                        >
                          <h3 className="font-semibold text-foreground">{faq.question}</h3>
                          <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* PAN India Service */}
                <div className="rounded-xl border border-border bg-muted/20 p-5 flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">PAN-India Installation &amp; Support:</strong>{' '}
                    Available across {COMPANY_INFO.serviceStates.join(', ')} and all Indian states from our Jalandhar (Punjab) and Siwan (Bihar) hubs.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div id="quote" className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
                <ProductQuoteForm productName={product.name} />

                <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 space-y-4 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-headline text-lg font-bold text-foreground">
                      Product Brochure &amp; Catalogue
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Download our full technical documentation, including schematics and equipment specifications.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 pt-2 justify-center">
                    <Button asChild variant="outline" size="sm" className="w-full sm:w-auto">
                      <Link href="/brochure">View Catalogue</Link>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/95"
                    >
                      <a href="/Genuine_Hospi_Brochure.pdf" download="Genuine_Hospi_Brochure.pdf">
                        <Download className="mr-2 h-4 w-4" /> Download PDF
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="rounded-xl border border-border p-6 bg-card space-y-3">
                  <h4 className="font-semibold text-foreground">Need Urgent Technical Consultation?</h4>
                  <p className="text-sm text-muted-foreground">
                    Call our head of engineering directly to discuss compliance and layout custom drawings.
                  </p>
                  <div className="pt-2 space-y-2">
                    <a
                      href={COMPANY_INFO.phones.primaryHref}
                      className="flex items-center justify-center gap-2 rounded-lg border border-border p-2.5 text-sm font-semibold hover:bg-muted transition-colors text-foreground"
                    >
                      <Phone className="h-4 w-4 text-primary" />
                      {COMPANY_INFO.phones.primary}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
