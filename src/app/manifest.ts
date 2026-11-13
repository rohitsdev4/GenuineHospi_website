import type { MetadataRoute } from 'next';
import { COMPANY_INFO } from '@/lib/site-config';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${COMPANY_INFO.name} - Hospital Setup Solutions India`,
    short_name: COMPANY_INFO.shortName,
    description:
      'Leading manufacturer and supplier of Modular Operation Theaters, ICU Setup, Medical Gas Pipeline Systems, Hospital Furniture & Equipment across India. NABH compliant.',
    start_url: '/',
    display: 'standalone',
    background_color: '#e8f4f8',
    theme_color: '#0284c7',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '16x16 32x32 48x48',
        type: 'image/x-icon',
      },
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
