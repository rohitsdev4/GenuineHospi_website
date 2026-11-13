'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, FileText, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { COMPANY_INFO } from '@/lib/site-config';
import { trackPhoneClick } from '@/lib/analytics';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo.svg"
            alt={`${COMPANY_INFO.name} Logo`}
            width={34}
            height={34}
            priority
          />
          <span className="font-headline text-xl sm:text-2xl font-bold text-foreground">
            {COMPANY_INFO.shortName}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex" aria-label="Main navigation">
          <Link href="/products" className="transition-colors hover:text-primary">
            Products
          </Link>
          <Link href="/about" className="transition-colors hover:text-primary">
            About Us
          </Link>
          <Link href="/gallery" className="transition-colors hover:text-primary">
            Gallery
          </Link>
          <Link href="/brochure" className="flex items-center gap-1.5 transition-colors hover:text-primary">
            <FileText className="h-4 w-4" />
            Brochure
          </Link>
          <Link href="/contact" className="transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={COMPANY_INFO.phones.primaryHref}
            onClick={() => trackPhoneClick(COMPANY_INFO.phones.primary)}
            className="hidden xl:inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4 text-primary" />
            {COMPANY_INFO.phones.primary}
          </a>
          <Button
            asChild
            className="hidden sm:inline-flex"
            style={{
              backgroundColor: 'hsl(var(--accent))',
              color: 'hsl(var(--accent-foreground))',
            }}
          >
            <Link href="/contact">Request a Consultation</Link>
          </Button>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border/40 bg-background animate-fade-in">
          <nav className="container mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3" aria-label="Mobile navigation">
            <Link
              href="/products"
              className="py-2 text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/about"
              className="py-2 text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/gallery"
              className="py-2 text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/brochure"
              className="py-2 text-sm font-medium flex items-center gap-1.5 transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FileText className="h-4 w-4" />
              Brochure
            </Link>
            <Link
              href="/contact"
              className="py-2 text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button
              asChild
              className="mt-2 w-full sm:hidden"
              style={{
                backgroundColor: 'hsl(var(--accent))',
                color: 'hsl(var(--accent-foreground))',
              }}
            >
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Request a Consultation
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
