import type { Metadata } from 'next'
import { Syne, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ronnelbesagre.com'),
  title: {
    default: 'Ronnel Besagre | SEO/GEO Consultant & AI Automation Specialist',
    template: '%s | Ronnel Besagre',
  },
  description:
    'Ronnel Besagre — SEO/GEO Consultant, AI Automation Specialist, and AIDC Expert with 24+ years of APAC experience. Get found in Google AND AI search engines like ChatGPT, Perplexity, and Gemini.',
  keywords: [
    'GEO consultant',
    'SEO consultant Malaysia',
    'AI visibility specialist',
    'generative engine optimization',
    'AI automation specialist',
    'AIDC expert APAC',
    'NLP practitioner',
    'Ronnel Besagre',
    'ronnelbesagre.com',
  ],
  authors: [{ name: 'Ronnel Besagre', url: 'https://ronnelbesagre.com' }],
  creator: 'Ronnel Besagre',
  openGraph: {
    type: 'website',
    locale: 'en_MY',
    url: 'https://ronnelbesagre.com',
    siteName: 'Ronnel Besagre',
    title: 'Ronnel Besagre | SEO/GEO Consultant & AI Automation Specialist',
    description:
      'Get found in Google AND AI search. 24+ years APAC expertise in SEO, GEO, AI Automation, AIDC, and NLP.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ronnel Besagre — SEO/GEO Consultant & AI Automation Specialist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ronnel Besagre | SEO/GEO Consultant & AI Automation Specialist',
    description:
      'Get found in Google AND AI search. 24+ years APAC expertise in SEO, GEO, AI Automation, AIDC, and NLP.',
    images: ['/og-image.jpg'],
    creator: '@ronnelbesagre',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://ronnelbesagre.com',
  },
  verification: {
    google: 'WHLfB3Y-aOh6wwumBf-YPhw6pJqQFQfMuYuCRoF6BY4',
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://ronnelbesagre.com/#ronnel',
  name: 'Ronnel Besagre',
  url: 'https://ronnelbesagre.com',
  image: 'https://ronnelbesagre.com/ronnel-besagre.jpg',
  jobTitle: 'SEO/GEO Consultant & AI Automation Specialist',
  description:
    'Ronnel Besagre is a GEO pioneer and AI Automation Specialist with 24+ years of APAC technology expertise, specializing in SEO, Generative Engine Optimization, AI Automation, AIDC systems, and NLP coaching.',
  email: 'rbesagre@gmail.com',
  telephone: '+60174980981',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Johor Bahru',
    addressRegion: 'Johor',
    addressCountry: 'MY',
  },
  areaServed: [
    { '@type': 'Country', name: 'Malaysia' },
    { '@type': 'Country', name: 'Singapore' },
    { '@type': 'Country', name: 'Philippines' },
  ],
  knowsAbout: [
    'Generative Engine Optimization',
    'SEO Strategy',
    'AI Automation',
    'n8n workflows',
    'AIDC Technology',
    'RFID Systems',
    'ID Card Personalization',
    'NLP Coaching',
    'JSON-LD Schema',
    'E-E-A-T',
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'ABNLP Master Coach Certification',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'ABNLP Master NLP Practitioner Certification',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'ABNLP NLP Practitioner Certification',
    },
  ],
  sameAs: [
    'https://www.linkedin.com/in/ronnelbesagredotcom',
    'https://getoutloop.com',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://ronnelbesagre.com/#website',
  name: 'Ronnel Besagre',
  url: 'https://ronnelbesagre.com',
  description:
    'SEO/GEO Consultant & AI Automation Specialist serving APAC — helping businesses rank in Google and get cited in AI search.',
  author: { '@id': 'https://ronnelbesagre.com/#ronnel' },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://ronnelbesagre.com/#business',
  name: 'Ronnel Besagre Consulting',
  url: 'https://ronnelbesagre.com',
  image: 'https://ronnelbesagre.com/ronnel-besagre.png',
  description:
    'SEO/GEO consulting and AI Automation services for APAC businesses. Helping brands get found in Google and cited in AI search engines like ChatGPT, Perplexity, and Gemini.',
  founder: { '@id': 'https://ronnelbesagre.com/#ronnel' },
  telephone: '+60174980981',
  email: 'rbesagre@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Johor Bahru',
    addressRegion: 'Johor',
    addressCountry: 'MY',
    postalCode: '80000',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 1.4927,
    longitude: 103.7414,
  },
  areaServed: [
    { '@type': 'Country', name: 'Malaysia' },
    { '@type': 'Country', name: 'Singapore' },
    { '@type': 'Country', name: 'Philippines' },
    { '@type': 'AdministrativeArea', name: 'APAC' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'SEO/GEO & AI Automation Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO/GEO Consulting', url: 'https://ronnelbesagre.com/services/seo-geo-consulting' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Automation', url: 'https://ronnelbesagre.com/services/ai-automation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AIDC Expert Advisory', url: 'https://ronnelbesagre.com/services/aidc-expert' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'NLP Coaching', url: 'https://ronnelbesagre.com/services/nlp-coaching' } },
    ],
  },
  priceRange: '$$',
  openingHours: 'Mo-Fr 09:00-18:00',
  sameAs: [
    'https://www.linkedin.com/in/ronnelbesagredotcom',
    'https://getoutloop.com',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="bg-[#0A0E27] text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
