import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppWidget from '@/components/layout/WhatsAppWidget';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: 'BRC Brake Chambers | Professional Factory Sales',
  description: 'Premium quality commercial brake chambers, spring brakes, service brakes, and parts. OEM Cross-Reference available.',
  openGraph: {
    title: 'BRC Brake Chambers | Professional Factory Sales',
    description: 'Premium quality commercial brake chambers, spring brakes, service brakes, and parts. OEM Cross-Reference available.',
    url: 'https://www.brcbrakechambers.com',
    siteName: 'BRC Brake Chambers',
    images: [
      {
        url: 'https://www.brcbrakechambers.com/og-image.jpg', // Placeholder for actual OG image
        width: 1200,
        height: 630,
        alt: 'BRC Brake Chambers - Heavy Duty Truck Parts',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BRC Brake Chambers | Professional Factory Sales',
    description: 'Premium quality commercial brake chambers, spring brakes, service brakes, and parts.',
    images: ['https://www.brcbrakechambers.com/og-image.jpg'], // Placeholder for actual OG image
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://translate.googleapis.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-[#F8FAFC] text-navy-900 flex flex-col min-h-screen`}>
        {/* Hidden Google Translate Element */}
        <div id="google_translate_element" style={{ display: 'none' }}></div>
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({pageLanguage: 'en', autoDisplay: false}, 'google_translate_element');
            }
          `}
        </Script>
        <Script src="https://translate.googleapis.com/translate_a/element.js?cb=googleTranslateElementInit" strategy="afterInteractive" />
        
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <WhatsAppWidget />
        <Footer />
      </body>
    </html>
  );
}
