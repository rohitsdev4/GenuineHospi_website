import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Bed } from 'lucide-react';
import { products, getProductIcon } from '@/lib/products';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export const metadata: Metadata = {
  title: 'Hospital Equipment & Infrastructure Solutions | Genuine Hospi',
  description: 'Explore our range of hospital setup solutions including Modular Operation Theaters, ICU Setups, Medical Gas Pipeline Systems, Hospital Furniture, Oxygen Plants, and HVAC Systems.',
  keywords: 'hospital equipment catalog, modular operation theater, ICU setup, medical gas pipeline, hospital beds, hospital furniture, oxygen plant hospital, India',
};

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1 pb-16">
        {/* Banner */}
        <div className="bg-primary text-primary-foreground py-16 text-center relative">
          <div aria-hidden="true" className="absolute inset-0 bg-background bg-dot-primary/20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-10"></div>
          <div className="container mx-auto max-w-7xl px-4 md:px-6 relative">
            <h1 className="font-headline text-4xl font-extrabold sm:text-5xl">
              Hospital Equipment & Setup Solutions
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
              NABH-compliant equipment and turkey infrastructure setups for modern healthcare facilities across India.
            </p>
          </div>
        </div>

        {/* Grid Section */}
        <section className="py-16">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <Card key={product.slug} className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
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
                                loading="lazy"
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
                    <p className="text-muted-foreground line-clamp-3">{product.description}</p>
                  </CardContent>
                  <CardFooter className="bg-muted/50 p-4 flex items-center justify-between">
                     <Button asChild variant="ghost" size="sm" className="text-primary hover:text-primary/80 px-0">
                       <Link href={`/products/${product.slug}`}>
                         Learn More <ChevronRight className="ml-1 h-4 w-4" />
                       </Link>
                     </Button>
                     <Button asChild size="sm" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }} className="hover:opacity-90">
                       <Link href="/#contact">
                         Get Quote
                       </Link>
                     </Button>
                  </CardFooter>
                </Card>
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
