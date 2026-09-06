import BootstrapProvider from '@/components/layouts/BootstrapProvider';
import Script from "next/script";

import tasaOrbiter from '@/lib/fonts/tasaOrbiter';
import { Inter } from "next/font/google";
import "./globals.css";

// Bootstrap CSS & JS import
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//custom css
import '@/app/assets/style.css';
//responsive css
import '@/app/assets/responsive.css';

const InterSans = Inter({
  variable: "--font-geist-sans",
  weight: ['400', '500', '600', '700'], 
  subsets: ["latin"],
  display: 'swap',
});


const siteUrl = "https://ucbibanking.io";
const ogImage = "/bg_fav.jpg";

 export const metadata = {
  // base URL 
  metadataBase: new URL(siteUrl),
  title: {
    default: "UCBI Banking — Private Equity Blockchain & Finance",
    template: "%s | UCBI",
  },
  description:
    "UCBI Banking est une structure privée dédiée au Private Equity à la gestion stratégique de trésorerie blockchain et aux investissements réservés à un cercle sélectionné de partenaires et actionnaires",
  keywords: ["ucbi", "ucbi banking", "private equity", "crypto finance", "crypto treasury", 
    "microstrategy", "blackrock", "treasury management", "private investors", "fidelity", 
    "coinshare", "ethereum", "bitmine", "staking", "coinmarketcap", "yahoo finance", 
    "coinbase", "jp morgan"],
  
  openGraph: {
    title: "fr UCBI Banking - Holding de Private Equity Blockchain",
    description:
      "UCBI Banking est une structure privée dédiée au Private Equity à la gestion stratégique de trésorerie blockchain et aux investissements réservés à un cercle sélectionné de partenaires et actionnaires",
    url: siteUrl,
    siteName: "ucbibanking.io",
    type: "website",
    images: [
      {
        url: ogImage, // absolute URL
        //width: 1200,
        //height: 630,
        alt: "ucbibanking.io",
        type: "image/jpeg",
      },
    ],
  },
  
  twitter: {
    card: "summary",
    title: "UCBI Banking — Private Equity Blockchain & Finance",
    description:
      "UCBI Banking est une structure privée dédiée au Private Equity à la gestion stratégique de trésorerie blockchain et aux investissements réservés à un cercle sélectionné de partenaires et actionnaires",
    images: ["/bg_fav.jpg"],
    creator: "@ucbi_banking",
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default async function RootLayout({ children } ) {
  return (
    <html lang="fr">
    <head>
       
    </head>
      <body className={`${InterSans.variable} ${tasaOrbiter.variable}`}>
         
         {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2916M50RJ0"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-2916M50RJ0');
          `}
        </Script>
        
        <BootstrapProvider> 
          {children} 
        </BootstrapProvider>

      
      </body>
    </html>
  );
}
