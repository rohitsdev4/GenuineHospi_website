import type { Metadata } from 'next';
import { MapPin, Phone, Mail, FileText, Download } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ContactForm } from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { COMPANY_INFO, SITE_URL } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Genuine Hospi Enterprises for hospital setup solutions, modular OTs, ICU setups, and medical gas pipeline systems. Offices in Jalandhar (Punjab) and Siwan (Bihar).',
  keywords: [
    'contact Genuine Hospi Enterprises',
    'hospital equipment supplier contact',
    'modular OT manufacturer phone',
    'hospital setup Jalandhar Punjab',
    'hospital setup Siwan Bihar',
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | Genuine Hospi Enterprises',
    description:
      'Request a free consultation, CAD layout, or quotation for Modular OTs, ICU setups, MGPS & hospital furniture.',
    url: `${SITE_URL}/contact`,
    type: 'website',
  },
};

export default function ContactPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: `${SITE_URL}/contact` },
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
              Contact Our Engineering Team
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
              We operate PAN-India with primary offices in Punjab and Bihar. Reach out for consultations, layouts, and quotes.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:items-start">
              <div className="space-y-8">
                <div>
                  <h2 className="font-headline text-2xl font-bold text-foreground">
                    Genuine Hospi Offices &amp; Details
                  </h2>
                  <p className="text-muted-foreground mt-2">
                    Have questions about NABH layout compliance or equipment specifications? Our team is ready to assist.
                  </p>
                </div>

                <div className="space-y-6 text-muted-foreground">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {COMPANY_INFO.addresses.headOffice.label}
                      </h3>
                      <address className="not-italic mt-1 text-sm">
                        {COMPANY_INFO.addresses.headOffice.street},
                        <br />
                        {COMPANY_INFO.addresses.headOffice.city},{' '}
                        {COMPANY_INFO.addresses.headOffice.postalCode},{' '}
                        {COMPANY_INFO.addresses.headOffice.state}, India
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {COMPANY_INFO.addresses.branchOffice.label}
                      </h3>
                      <address className="not-italic mt-1 text-sm">
                        {COMPANY_INFO.addresses.branchOffice.street},
                        <br />
                        {COMPANY_INFO.addresses.branchOffice.city},{' '}
                        {COMPANY_INFO.addresses.branchOffice.postalCode},{' '}
                        {COMPANY_INFO.addresses.branchOffice.state}, India
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Phone Support</h3>
                      <div className="mt-1 space-y-1 text-sm font-medium">
                        <a href={COMPANY_INFO.phones.primaryHref} className="block hover:text-primary">
                          {COMPANY_INFO.phones.primary} (Main Helpline)
                        </a>
                        <a href={COMPANY_INFO.phones.secondaryHref} className="block hover:text-primary">
                          {COMPANY_INFO.phones.secondary} (Sales &amp; Support)
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email Communications</h3>
                      <div className="mt-1 text-sm font-medium space-y-1">
                        <a href={`mailto:${COMPANY_INFO.email}`} className="block hover:text-primary">
                          {COMPANY_INFO.email}
                        </a>
                        <a href={`mailto:${COMPANY_INFO.businessEmail}`} className="block hover:text-primary">
                          {COMPANY_INFO.businessEmail}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground text-base">
                      Genuine Hospi Brochure
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Explore entire product line and specifications PDF.
                    </p>
                  </div>
                  <Button asChild size="sm" variant="outline">
                    <a href="/Genuine_Hospi_Brochure.pdf" download="Genuine_Hospi_Brochure.pdf">
                      <Download className="mr-1.5 h-4 w-4" /> Download
                    </a>
                  </Button>
                </div>
              </div>

              <div className="bg-card rounded-xl border border-border p-8 shadow-sm">
                <h3 className="font-headline text-2xl font-bold text-foreground mb-4">
                  Send a Message
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Fill out the form below. Our engineering and compliance consultants will review your enquiry and revert within 24 business hours.
                </p>
                <ContactForm />
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
