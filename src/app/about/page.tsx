import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Award, Users, ThumbsUp, ShieldCheck } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'About Us | Genuine Hospi Enterprises',
  description: 'Learn about Genuine Hospi Enterprises, leading manufacturer and supplier of hospital setup solutions across India. Specializing in Modular Operation Theaters, ICU setups, and Medical Gas Pipeline installations since 2015.',
  keywords: 'about genuine hospi enterprises, hospital setup company, modular OT manufacturer, medical gas pipeline installer, India, hospital construction',
};

const values = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'NABH Compliance',
    description: 'We adhere strictly to NABH and international quality standards, ensuring maximum safety, infection control, and operational hygiene.',
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'Precision Engineering',
    description: 'Our hospital setups (like SS 304 OTs and copper gas lines) are built using superior grade materials for lifetime reliability.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'PAN-India Service',
    description: 'From Jalandhar to Siwan and across the nation, we offer rapid deployment, testing, commissioning, and on-site support.',
  },
  {
    icon: <ThumbsUp className="h-8 w-8 text-primary" />,
    title: 'Customer-First Focus',
    description: 'We work closely with hospital administrators and medical staff to deliver customized solutions fitting their layout and budget.',
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1 pb-16">
        {/* Page Title Banner */}
        <div className="bg-primary text-primary-foreground py-16 text-center relative">
          <div aria-hidden="true" className="absolute inset-0 bg-background bg-dot-primary/20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-10"></div>
          <div className="container mx-auto max-w-7xl px-4 md:px-6 relative">
            <h1 className="font-headline text-4xl font-extrabold sm:text-5xl">
              About Genuine Hospi Enterprises
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
              Your trusted manufacturing and setup partner in building state-of-the-art healthcare facilities.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Our Story
                </span>
                <h2 className="font-headline text-3xl font-bold text-foreground mt-4 sm:text-4xl">
                  Providing Comprehensive Hospital Setup Solutions Since 2015
                </h2>
                <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                  Established in 2015, <strong>Genuine Hospi Enterprises</strong> was founded with a clear vision: to elevate India&apos;s healthcare infrastructure. We began as a specialist supplier and installer of medical gas pipelines, and rapidly expanded into design and build engineering for turnkey ICU setups, Modular Operation Theaters, Oxygen Plants, and cleanroom air conditioning.
                </p>
                <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                  Today, with key operations based in <strong>Jalandhar (Punjab)</strong> and <strong>Siwan (Bihar)</strong>, we serve medical centers, nursing homes, and multispeciality hospitals PAN-India. Our services cover everything from design layout drawings and standard compliance checking to manufacturing, installation, testing, and annual maintenance.
                </p>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground font-semibold">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>NABH Standards</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground font-semibold">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>PAN India Delivery</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground font-semibold">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>10+ Years Experience</span>
                  </div>
                </div>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-border">
                <Image
                  src="/images/modular-ot1-1.jpeg"
                  alt="Modular Operation Theater setup by Genuine Hospi Enterprises"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="bg-muted/30 py-16 border-y border-border/40">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Core Strengths & Values
              </h2>
              <p className="mt-4 text-muted-foreground">
                We believe that premium healthcare begins with flawless infrastructure. Here is how we ensure project success:
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((val, i) => (
                <div key={i} className="bg-card rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    {val.icon}
                  </div>
                  <h3 className="font-headline text-lg font-bold text-foreground mb-2">
                    {val.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 className="font-headline text-3xl font-bold text-foreground">
              Ready to Upgrade Your Hospital Setup?
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Contact our engineering consultants today to request design templates, site surveys, and estimates.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }} className="hover:opacity-90">
                <Link href="/#contact">
                  Consult an Expert
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/brochure">
                  Download Catalog
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
