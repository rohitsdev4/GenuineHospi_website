import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/site-config';

export function Footer() {
  return (
    <footer className="w-full bg-muted py-12" role="contentinfo">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-4 md:px-6">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo.svg"
              alt={`${COMPANY_INFO.name} Logo`}
              width={32}
              height={32}
            />
            <span className="font-headline text-2xl font-bold text-foreground">
              {COMPANY_INFO.shortName}
            </span>
          </Link>
          <p className="mt-2 text-muted-foreground text-sm">
            Your trusted partner in building world-class, NABH-compliant hospital infrastructure across India since {COMPANY_INFO.foundedYear}.
          </p>
        </div>

        <div>
          <h3 className="font-headline text-lg font-semibold text-foreground">Quick Links</h3>
          <nav className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground" aria-label="Footer navigation">
            <Link href="/products" className="hover:text-primary transition-colors">
              All Products
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/gallery" className="hover:text-primary transition-colors">
              Project Gallery
            </Link>
            <Link href="/#testimonials" className="hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link href="/brochure" className="hover:text-primary transition-colors">
              Brochure PDF
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact Us
            </Link>
          </nav>
        </div>

        <div>
          <h3 className="font-headline text-lg font-semibold text-foreground">Our Products</h3>
          <nav className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground" aria-label="Products navigation">
            <Link href="/products/modular-operation-theaters" className="hover:text-primary transition-colors">
              Modular Operation Theaters
            </Link>
            <Link href="/products/intensive-care-units" className="hover:text-primary transition-colors">
              ICU Setup
            </Link>
            <Link href="/products/medical-gas-pipelines" className="hover:text-primary transition-colors">
              Medical Gas Pipelines (MGPS)
            </Link>
            <Link href="/products/hospital-furniture" className="hover:text-primary transition-colors">
              Hospital Furniture &amp; Beds
            </Link>
            <Link href="/products/oxygen-generation-plant" className="hover:text-primary transition-colors">
              PSA Oxygen Generation Plant
            </Link>
            <Link href="/products/air-conditioning-system" className="hover:text-primary transition-colors">
              Hospital HVAC Systems
            </Link>
          </nav>
        </div>

        <div>
          <h3 className="font-headline text-lg font-semibold text-foreground">Contact Information</h3>
          <div className="mt-4 space-y-3 text-sm text-muted-foreground">
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 flex-shrink-0 text-primary mt-0.5" />
              <div>
                <span className="font-semibold text-foreground">Head Office</span>
                <br />
                <address className="not-italic">
                  {COMPANY_INFO.addresses.headOffice.full}
                </address>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 flex-shrink-0 text-primary mt-0.5" />
              <div>
                <span className="font-semibold text-foreground">Branch Office</span>
                <br />
                <address className="not-italic">
                  {COMPANY_INFO.addresses.branchOffice.full}
                </address>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
              <a href={COMPANY_INFO.phones.primaryHref} className="hover:text-primary">
                {COMPANY_INFO.phones.primary}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
              <a href={COMPANY_INFO.phones.secondaryHref} className="hover:text-primary">
                {COMPANY_INFO.phones.secondary}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
              <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-primary break-all">
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 max-w-7xl border-t px-4 pt-6 text-center text-sm text-muted-foreground md:px-6">
        <p>
          &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved. | Leading Hospital Equipment Manufacturer in India
        </p>
      </div>
    </footer>
  );
}
