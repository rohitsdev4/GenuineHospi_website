import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Download, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Product Brochure & Catalogue | Genuine Hospi Enterprises',
  description: 'Download our comprehensive product brochure featuring Modular Operation Theaters, ICU setups, Medical Gas Pipeline Systems, Hospital Furniture, and complete hospital infrastructure solutions. NABH compliant equipment catalogue.',
  keywords: 'hospital equipment brochure, modular OT catalogue, ICU setup brochure, medical gas pipeline catalogue, hospital furniture catalogue, NABH compliant equipment, hospital equipment PDF, medical equipment catalogue India',
  openGraph: {
    title: 'Product Brochure | Genuine Hospi Enterprises',
    description: 'Download our product catalogue featuring complete hospital infrastructure solutions.',
    type: 'website',
  },
}

export default function BrochurePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/40 bg-background/95 backdrop-blur">
        <div className="container mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          <div className="flex gap-3">
            <Button asChild variant="outline" size="sm">
              <a href="/Genuine_Hospi_Brochure.pdf" download="Genuine_Hospi_Brochure.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Brochure Content */}
      <div className="container mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <FileText className="h-8 w-8 text-primary" />
          </div>
          <h1 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
            Product Brochure & Catalogue
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
            Explore our complete range of hospital infrastructure solutions including Modular OTs, ICU setups, Medical Gas Pipelines, and Hospital Furniture.
          </p>
        </div>

        {/* PDF Embed */}
        <div className="mx-auto max-w-5xl overflow-hidden rounded-xl border border-border shadow-2xl">
          <iframe
            src="/Genuine_Hospi_Brochure.pdf"
            className="h-[80vh] w-full"
            title="Genuine Hospi Enterprises - Product Brochure"
          />
        </div>

        {/* Fallback for mobile */}
        <div className="mx-auto mt-6 max-w-5xl text-center">
          <p className="text-sm text-muted-foreground">
            Having trouble viewing? {' '}
            <a
              href="/Genuine_Hospi_Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              Open in a new tab
            </a>
            {' '} or {' '}
            <a
              href="/Genuine_Hospi_Brochure.pdf"
              download="Genuine_Hospi_Brochure.pdf"
              className="font-medium text-primary hover:underline"
            >
              download the PDF
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
