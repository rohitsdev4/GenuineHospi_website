
'use client'

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bed, HeartPulse, Mail, MapPin, Phone, Quote, Stethoscope, Syringe, Building, FileText, Download, ChevronRight, Shield, Award, Clock, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { products, getProductIcon } from '@/lib/products';
import { ContactForm } from '@/components/ContactForm';




const galleryImages = [
    { src: '/images/modular-ot.jpg', alt: 'Modular Operation Theater by Genuine Hospi', aiHint: 'operating theater' },
    { src: '/images/icu-setup-1.jpeg', alt: 'ICU Room Setup', aiHint: 'ICU room' },
    { src: '/images/modular-ot1-1.jpeg', alt: 'Hospital Modular OT Installation', aiHint: 'hospital corridor' },
    { src: '/images/icu-setup-2.jpeg', alt: 'Intensive Care Unit Interior', aiHint: 'hospital interior' },
    { src: '/images/gas-pipeline-1.jpeg', alt: 'Medical Gas Pipeline Installation', aiHint: 'medical equipment' },
    { src: '/images/hospital-furniture-1.jpeg', alt: 'Hospital Furniture Setup', aiHint: 'hospital exterior' },
    { src: '/images/hospital-furniture-2.jpeg', alt: 'Hospital Patient Beds', aiHint: 'patient room' },
    { src: '/images/modular-ot1-6.jpeg', alt: 'Modular OT Installation', aiHint: 'modular ot' },
];

const testimonials = [
  {
    quote: "The professionalism and expertise of Genuine Hospi Enterprises were exceptional. They transformed our vision for a modern OT into reality, on time and within budget.",
    name: 'Dr. Anjali Sharma',
    title: 'Chief Surgeon, City General Hospital',
    logo: 'https://www.genuinehospi.com/images/clients/1.png',
    aiHint: 'hospital logo',
  },
  {
    quote: "Their attention to detail in our new ICU wing was remarkable. The quality of work and adherence to NABH standards is commendable. Our facility is now truly world-class.",
    name: 'Mr. Rajeev Mehta',
    title: 'Director, Sunshine Multispeciality Clinic',
    logo: 'https://www.genuinehospi.com/images/clients/2.png',
    aiHint: 'clinic logo',
  },
];

const stats = [
  { icon: <Building className="h-6 w-6" />, value: '200+', label: 'Hospitals Served' },
  { icon: <Award className="h-6 w-6" />, value: '10+', label: 'Years Experience' },
  { icon: <Shield className="h-6 w-6" />, value: '100%', label: 'NABH Compliant' },
  { icon: <Clock className="h-6 w-6" />, value: 'PAN India', label: 'Service Coverage' },
];


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <ProductsSection />
        <AboutSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}


function HeroSection() {
  return (
    <section className="relative py-20 md:py-32" aria-label="Hero">
       <div aria-hidden="true" className="absolute inset-0 top-0 h-full w-full bg-background bg-dot-primary/20 [mask-image:radial-gradient(ellipse_at_top,transparent_10%,black)]"></div>
      <div className="container mx-auto max-w-7xl px-4 text-center md:px-6 relative">
        <h1 className="font-headline text-4xl font-extrabold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up">
          India&apos;s Trusted <span className="text-primary">Hospital Setup</span> Experts
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Leading manufacturer &amp; supplier of <strong>Modular Operation Theaters</strong>, <strong>ICU Setups</strong>, <strong>Medical Gas Pipeline Systems</strong>, <strong>Hospital Beds</strong> &amp; <strong>Hospital Furniture</strong>. NABH compliant. PAN India delivery &amp; installation.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button asChild size="lg" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }} className="hover:bg-accent/90">
            <a href="#contact">Request a Free Consultation</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#products">Explore Our Products</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/brochure" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              View Brochure
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="w-full bg-primary py-10" aria-label="Company statistics">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center text-primary-foreground">
              <div className="mb-2 rounded-full bg-white/20 p-3">
                {stat.icon}
              </div>
              <span className="font-headline text-3xl font-bold">{stat.value}</span>
              <span className="mt-1 text-sm opacity-90">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  return (
    <section id="products" className="w-full bg-card py-16 md:py-24" aria-label="Our products and services">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Hospital Equipment &amp; Infrastructure Solutions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide comprehensive, NABH-compliant solutions for modern hospital infrastructure — from modular OTs and ICU setups to medical gas pipeline systems and hospital furniture.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 stagger-children">
          {products.map((product) => (
            <Card key={product.name} className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl">
              <div className="relative h-56">
                <Carousel className="w-full">
                  <CarouselContent>
                    {product.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative h-56">
                          <Image
                            src={image}
                            alt={`${product.name} - View ${index + 1}`}
                            fill
                            className="object-cover"
                            data-ai-hint={product.aiHint}
                            loading={index === 0 ? 'eager' : 'lazy'}
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>
              <CardHeader className="flex-row items-center gap-4">
                {getProductIcon(product.iconName)}
                <CardTitle className="font-headline text-xl">
                  <Link href={`/products/${product.slug}`} className="hover:text-primary hover:underline transition-colors">
                    {product.name}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
              <CardFooter className="bg-muted/50 p-4 flex items-center justify-between">
                 <Button asChild variant="ghost" size="sm" className="text-primary hover:text-primary/80 px-0">
                   <Link href={`/products/${product.slug}`}>
                     Learn More <ChevronRight className="ml-1 h-4 w-4" />
                   </Link>
                 </Button>
                 <Button asChild size="sm" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }} className="hover:opacity-90">
                   <a href="#contact">
                     Get Quote
                   </a>
                 </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-24" aria-label="About us">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">About Genuine Hospi Enterprises</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Established in 2015, <strong>Genuine Hospi Enterprises</strong> provides comprehensive hospital setup solutions across India. Our expertise encompasses designing and building ICU and modular OT units that adhere to <strong>NABH compliance</strong> standards. This includes medical gas pipeline systems, oxygen and nitrous oxide manifolds, and complete plant installations.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Our mission is to empower healthcare providers with facilities that enhance patient care, improve safety, and optimize operational efficiency.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span>NABH Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span>PAN India Service</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span>10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span>200+ Projects</span>
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              <Button asChild style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
                <a href="#contact">Contact Us</a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/brochure" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download Brochure
                </Link>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/images/modular-ot1-1.jpeg"
              alt="Modular Operation Theater Installation by Genuine Hospi Enterprises"
              width={800}
              height={600}
              className="rounded-lg shadow-xl"
              data-ai-hint="hospital interior"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function GallerySection() {
  return (
    <section id="gallery" className="w-full bg-card py-16 md:py-24" aria-label="Project gallery">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Work</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A glimpse into the state-of-the-art hospital facilities we&apos;ve built across India.
          </p>
        </div>
        <Carousel className="w-full">
          <CarouselContent>
            {galleryImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden">
                    <CardContent className="flex aspect-video items-center justify-center p-0">
                       <Image src={image.src} alt={image.alt} width={800} height={600} className="w-full h-full object-cover" data-ai-hint={image.aiHint} loading="lazy" />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full bg-background py-16 md:py-24" aria-label="Client testimonials">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We are proud to have partnered with leading healthcare providers across India.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="p-6 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-0">
                <Quote className="h-8 w-8 text-primary/50" />
                <blockquote className="mt-4 text-lg font-medium text-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </CardContent>
              <CardFooter className="mt-6 flex items-center gap-4 p-0">
                <Avatar>
                  <AvatarImage src={testimonial.logo} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-card" aria-label="Contact us">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Get in Touch</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Have a question or a project in mind? Fill out the form or use the contact details below. We&apos;re here to help build your dream hospital facility.
            </p>
             <div className="mt-8 space-y-4 text-muted-foreground">
                <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 flex-shrink-0 text-primary mt-1" />
                    <div>
                        <h3 className="font-semibold text-foreground">Head Office</h3>
                        <address className="not-italic">204, St 02, Sanjay Gandhi Nagar, Industrial Area, Jalandhar, 144004, Punjab</address>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 flex-shrink-0 text-primary mt-1" />
                    <div>
                        <h3 className="font-semibold text-foreground">Branch Office</h3>
                        <address className="not-italic">Bazaar, Pachrukhi, Siwan, Bihar 841241</address>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                    <a href="tel:6207507418" className="hover:text-primary">62075 07418 (Main)</a>
                </div>
                 <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                    <a href="tel:9478884840" className="hover:text-primary">94788 84840</a>
                </div>
                <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
                    <a href="mailto:rohitsingh8885882@gmail.com" className="hover:text-primary">rohitsingh8885882@gmail.com</a>
                </div>
             </div>

             {/* Brochure Download CTA */}
             <div className="mt-8 rounded-lg border border-primary/20 bg-primary/5 p-4">
               <div className="flex items-center gap-3">
                 <FileText className="h-8 w-8 text-primary flex-shrink-0" />
                 <div>
                   <h3 className="font-semibold text-foreground">Download Our Brochure</h3>
                   <p className="text-sm text-muted-foreground">Get our complete product catalogue</p>
                 </div>
                 <Button asChild size="sm" variant="outline" className="ml-auto">
                   <Link href="/brochure">
                     <Download className="mr-2 h-4 w-4" />
                     View
                   </Link>
                 </Button>
               </div>
             </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

