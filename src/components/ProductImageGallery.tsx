'use client';

import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type ProductImageGalleryProps = {
  images: string[];
  productName: string;
  aiHint?: string;
};

export function ProductImageGallery({
  images,
  productName,
  aiHint,
}: ProductImageGalleryProps) {
  const safeImages = images.length > 0 ? images : ['/images/modular-ot.jpg'];
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className="overflow-hidden rounded-xl border border-border shadow-xl bg-card">
      <div className="relative aspect-video w-full">
        <Image
          src={safeImages[activeIndex]}
          alt={`${productName} setup by Genuine Hospi Enterprises - View ${activeIndex + 1}`}
          fill
          className="object-cover"
          priority
          data-ai-hint={aiHint}
        />
      </div>
      {safeImages.length > 1 && (
        <div className="grid grid-cols-4 gap-2 p-2 bg-muted/30 border-t border-border">
          {safeImages.map((img, index) => (
            <button
              key={img + index}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`View ${productName} image ${index + 1}`}
              className={cn(
                'relative aspect-video rounded overflow-hidden border bg-black/5 transition-all cursor-pointer',
                activeIndex === index
                  ? 'border-primary ring-2 ring-primary/40'
                  : 'border-border opacity-75 hover:opacity-100'
              )}
            >
              <Image
                src={img}
                alt={`${productName} thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
