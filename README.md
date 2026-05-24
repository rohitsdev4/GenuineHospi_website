# Genuine Hospi Enterprises — Hospital Setup Solutions

> Leading manufacturer & supplier of **Modular Operation Theaters**, **ICU Setups**, **Medical Gas Pipeline Systems**, **Hospital Beds** & **Hospital Furniture** across India. NABH compliant. PAN India service.

## 🏥 About

**Genuine Hospi Enterprises** provides comprehensive hospital setup solutions. Our expertise encompasses designing and building ICU and modular OT units that adhere to NABH compliance standards, including medical gas pipeline systems, oxygen manifolds, and complete plant installations.

- **Website**: [genuinehospi.vercel.app](https://genuinehospi.vercel.app)
- **Phone**: +91 62075 07418 | +91 94788 84840
- **Email**: rohitsingh8885882@gmail.com
- **Head Office**: 204, St 02, Sanjay Gandhi Nagar, Industrial Area, Jalandhar, 144004, Punjab
- **Branch Office**: Bazaar, Pachrukhi, Siwan, Bihar 841241

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org) (App Router) with TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com) + CSS Variables (HSL design tokens)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com) (Radix UI primitives)
- **AI Backend**: [Firebase Genkit](https://firebase.google.com/docs/genkit) + Google AI
- **Forms**: React Hook Form + Zod validation
- **Hosting**: Firebase App Hosting
- **Fonts**: PT Sans (body) + Playfair Display (headline)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Setup

```bash
# Clone the repository
git clone https://github.com/rohitsdev4/studio.git
cd studio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your API keys

# Start the development server
npm run dev
```

The app will be available at [http://localhost:9002](http://localhost:9002).

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server with Turbopack on port 9002 |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run genkit:dev` | Start Genkit AI dev server |

## 📁 Project Structure

```
src/
├── ai/                    # AI/Genkit flows and schemas
│   ├── flows/             # Genkit flow definitions
│   ├── schemas/           # Zod schemas for AI inputs/outputs
│   └── genkit.ts          # Genkit configuration
├── app/                   # Next.js App Router pages
│   ├── brochure/          # Brochure viewer page
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles + animations
│   ├── robots.ts          # SEO robots.txt
│   ├── sitemap.ts         # Dynamic sitemap.xml
│   └── manifest.ts        # PWA manifest
├── components/ui/         # shadcn/ui components
├── hooks/                 # Custom React hooks
└── lib/                   # Utility functions
```

## 📋 Environment Variables

Create a `.env.local` file:

```env
GOOGLE_GENAI_API_KEY=your_google_ai_api_key_here
```

## 🌟 Features

- ✅ Responsive design with mobile navigation
- ✅ Product showcase with image carousels
- ✅ Contact form with email integration
- ✅ PDF brochure viewer and download
- ✅ WhatsApp floating button for instant contact
- ✅ SEO optimized with structured data (JSON-LD)
- ✅ Dynamic sitemap and robots.txt
- ✅ Dark mode support
- ✅ Scroll animations
- ✅ NABH compliance focus

## 📄 License

Private — All rights reserved © Genuine Hospi Enterprises
