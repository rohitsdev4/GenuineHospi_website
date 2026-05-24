import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Genuine Hospi Enterprises - Hospital Setup Solutions India',
    short_name: 'Genuine Hospi',
    description: 'Leading manufacturer and supplier of Modular Operation Theaters, ICU Setup, Medical Gas Pipeline Systems, Hospital Furniture & Equipment across India. NABH compliant.',
    start_url: '/',
    display: 'standalone',
    background_color: '#e8f4f8',
    theme_color: '#5DADE2',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
