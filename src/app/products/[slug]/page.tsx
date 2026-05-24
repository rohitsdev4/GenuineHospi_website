import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ChevronRight, FileText, Download, CheckCircle2, ShieldCheck, ArrowLeft } from 'lucide-react';
import { products, getProductIcon } from '@/lib/products';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ProductQuoteForm } from '@/components/ProductQuoteForm';
import { Button } from '@/components/ui/button';

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

  // Optimize title and description for search query keywords like "modular ot manufacturer", "medical gas pipeline installation", etc.
  const keywordTitle = `${product.name} Manufacturer & Setup | Genuine Hospi`;
  const metaDesc = `NABH compliant ${product.name} setup by Genuine Hospi Enterprises. ${product.description.slice(0, 120)}... High-quality medical-grade installation. PAN India.`;

  return {
    title: keywordTitle,
    description: metaDesc,
    keywords: [
      product.name.toLowerCase(),
      `${product.name.toLowerCase()} manufacturer`,
      `${product.name.toLowerCase()} supplier`,
      `${product.name.toLowerCase()} setup`,
      `${product.name.toLowerCase()} installation`,
      'genuine hospi enterprises',
      'NABH compliant hospital equipment',
      'hospital equipment India',
      ...product.features.map(f => f.split(' ').slice(0, 3).join(' ').toLowerCase())
    ].filter(Boolean),
    openGraph: {
      title: keywordTitle,
      description: metaDesc,
      type: 'website',
      url: `https://genuinehospi.com/products/${product.slug}`,
      images: [
        {
          url: product.images[0] || '/images/modular-ot.jpg',
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailsPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1 pb-16">
        {/* Breadcrumbs Banner */}
        <div className="bg-muted/50 border-b border-border/20 py-4">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/#products" className="hover:text-primary transition-colors">
                Products
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground font-semibold">{product.name}</span>
            </div>
          </div>
        </div>

        {/* Product Hero */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-12 items-start">
              
              {/* Left Column: Visuals + Details */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <Link 
                    href="/#products" 
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline mb-4"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to all products
                  </Link>
                  <div className="flex items-center gap-3 mb-3">
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

                {/* Primary Image Viewer */}
                <div className="overflow-hidden rounded-xl border border-border shadow-xl bg-card">
                  <div className="relative aspect-video w-full">
                    <Image
                      src={product.images[0] || '/images/modular-ot.jpg'}
                      alt={`${product.name} setup by Genuine Hospi Enterprises`}
                      fill
                      className="object-cover"
                      priority
                      data-ai-hint={product.aiHint}
                    />
                  </div>
                  {product.images.length > 1 && (
                    <div className="grid grid-cols-3 gap-2 p-2 bg-muted/30 border-t border-border">
                      {product.images.map((img, index) => (
                        <div key={index} className="relative aspect-video rounded overflow-hidden border border-border bg-black/5 hover:opacity-85 transition-opacity cursor-pointer">
                          <Image
                            src={img}
                            alt={`${product.name} alternate view ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Detailed Narrative */}
                <div className="prose prose-slate max-w-none dark:prose-invert">
                  <h2 className="font-headline text-2xl font-bold text-foreground border-b pb-2">
                    Overview & Solution Blueprint
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                    {product.longDescription}
                  </p>
                </div>

                {/* Features Checklist */}
                <div className="rounded-xl border border-border/60 bg-muted/20 p-6 space-y-4">
                  <h3 className="font-headline text-xl font-bold text-foreground">
                    Key Features & Technical Capabilities
                  </h3>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Specifications Table */}
                <div className="space-y-4">
                  <h3 className="font-headline text-xl font-bold text-foreground">
                    Technical Specifications
                  </h3>
                  <div className="overflow-hidden rounded-lg border border-border">
                    <table className="min-w-full divide-y divide-border">
                      <thead className="bg-muted/50">
                        <tr>
                          <th scope="col" className="px-6 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-foreground">
                            Parameter
                          </th>
                          <th scope="col" className="px-6 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-foreground">
                            Specification Value / Compliance Standard
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border bg-background">
                        {Object.entries(product.specifications).map(([key, val], idx) => (
                          <tr key={idx} className={idx % 2 === 1 ? 'bg-muted/10' : undefined}>
                            <td className="whitespace-nowrap px-6 py-4 text-sm font-semibold text-foreground">
                              {key}
                            </td>
                            <td className="px-6 py-4 text-sm text-muted-foreground">
                              {val}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Right Column: Sticky Quote Form + Actions */}
              <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
                
                {/* Product Quote Form */}
                <ProductQuoteForm productName={product.name} />

                {/* Brochure Download Card */}
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 space-y-4 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-headline text-lg font-bold text-foreground">Product Brochure & Catalogue</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Download our full technical documentation, including schematics and equipment specifications.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 pt-2 justify-center">
                    <Button asChild variant="outline" size="sm" className="w-full sm:w-auto">
                      <Link href="/brochure">
                        View Catalogue
                      </Link>
                    </Button>
                    <Button asChild size="sm" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/95">
                      <a href="/Genuine_Hospi_Brochure.pdf" download="Genuine_Hospi_Brochure.pdf">
                        <Download className="mr-2 h-4 w-4" /> Download PDF
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Quick Consultation Call CTA */}
                <div className="rounded-xl border border-border p-6 bg-card space-y-3">
                  <h4 className="font-semibold text-foreground">Need Urgent Technical Consultation?</h4>
                  <p className="text-sm text-muted-foreground">
                    Call our head of engineering directly to discuss compliance and layout custom drawings.
                  </p>
                  <div className="pt-2 space-y-2">
                    <a 
                      href="tel:6207507418" 
                      className="flex items-center justify-center gap-2 rounded-lg border border-border p-2.5 text-sm font-semibold hover:bg-muted transition-colors text-foreground"
                    >
                      📞 +91 62075 07418
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
