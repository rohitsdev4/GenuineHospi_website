import type { Metadata } from 'next';
import { MapPin, Phone, Mail, FileText, Download } from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ContactForm } from '@/components/ContactForm';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Contact Us | Genuine Hospi Enterprises',
  description: 'Get in touch with Genuine Hospi Enterprises for hospital setup solutions, modular OTs, ICU setups, and medical gas pipeline systems. Offices in Jalandhar (Punjab) and Siwan (Bihar).',
  keywords: 'contact genuine hospi, hospital equipment supplier contact, modular OT manufacturer phone, Punjab, Bihar, India',
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1 pb-16">
        {/* Banner */}
        <div className="bg-primary text-primary-foreground py-16 text-center relative">
          <div aria-hidden="true" className="absolute inset-0 bg-background bg-dot-primary/20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-10"></div>
          <div className="container mx-auto max-w-7xl px-4 md:px-6 relative">
            <h1 className="font-headline text-4xl font-extrabold sm:text-5xl">
              Contact Our Engineering Team
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
              We operate PAN-India with primary offices in Punjab and Bihar. Reach out for consultations, layouts, and quotes.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:items-start">
              
              {/* Left Column: Contact Details */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-headline text-2xl font-bold text-foreground">genuine Hospi Offices & Details</h2>
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
                      <h3 className="font-semibold text-foreground">Head Office (Punjab)</h3>
                      <address className="not-italic mt-1 text-sm">
                        204, St 02, Sanjay Gandhi Nagar, Industrial Area,<br />
                        Jalandhar, 144004, Punjab, India
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Branch Office (Bihar)</h3>
                      <address className="not-italic mt-1 text-sm">
                        Bazaar, Pachrukhi,<br />
                        Siwan, 841241, Bihar, India
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Phone Support</h3>
                      <div className="mt-1 space-y-1 text-sm font-medium">
                        <a href="tel:6207507418" className="block hover:text-primary">
                          +91 62075 07418 (Main Helpline)
                        </a>
                        <a href="tel:9478884840" className="block hover:text-primary">
                          +91 94788 84840 (Sales & Support)
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email Communications</h3>
                      <div className="mt-1 text-sm font-medium">
                        <a href="mailto:rohitsingh8885882@gmail.com" className="hover:text-primary">
                          rohitsingh8885882@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Brochure Download CTA */}
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground text-base">Genuine Hospi Brochure</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">Explore entire product line and specifications PDF.</p>
                  </div>
                  <Button asChild size="sm" variant="outline">
                    <a href="/Genuine_Hospi_Brochure.pdf" download="Genuine_Hospi_Brochure.pdf">
                      <Download className="mr-1.5 h-4 w-4" /> Download
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="bg-card rounded-xl border border-border p-8 shadow-sm">
                <h3 className="font-headline text-2xl font-bold text-foreground mb-4">Send a Message</h3>
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
