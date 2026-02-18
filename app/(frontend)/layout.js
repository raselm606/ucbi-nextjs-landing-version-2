import BootstrapProvider from '@/components/layouts/BootstrapProvider';
 


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
const ogImage = "/logo_ucbi.jpg";

 export const metadata = {
  // base URL 
  metadataBase: new URL(siteUrl),
  title: {
    default: "UCBI Banking - Blockchain Data Banking",
    template: "%s | UCBI",
  },
  description:
    "UCBI’s mission is to support the responsible structured and sustainable development of digital financial infrastructure through a long-term approach grounded in strong governance principles operating as a strategic holding company UCBI focuses on the integration of blockchain-based and the distributed technologies ",
  keywords: [
    "UCBI",
    "Blockchain",
    "Blockchain Banking",
    "Finance",
    "Crypto",
    "defi",
    "UCBI Banking",
    "Blockchain data banking",
    "ethereum",
    "bitcoin",
    "usdt",
    "usdc",
  ],
  
  openGraph: {
    title: "UCBI Banking - Blockchain Data Banking",
    description:
      "UCBI’s mission is to support the responsible structured and sustainable development of digital financial infrastructure through a long-term approach grounded in strong governance principles operating as a strategic holding company UCBI focuses on the integration of blockchain-based and the distributed technologies ",
    url: siteUrl,
    siteName: "ucbibanking.io",
    type: "website",
    images: [
      {
        url: ogImage,          // absolute URL
        //width: 1200,
        //height: 630,
        alt: "ucbibanking.io",
        type: "image/jpeg",
      },
    ],
  },
  
  twitter: {
    card: "summary",
    title: "UCBI Banking - Blockchain Data Banking ",
    description:
      "UCBI’s mission is to support the responsible structured and sustainable development of digital financial infrastructure through a long-term approach grounded in strong governance principles operating as a strategic holding company UCBI focuses on the integration of blockchain-based and the distributed technologies ",
    images: ["/logo_ucbi.jpg"],
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
    <html lang="en">
      <body className={`${InterSans.variable} ${tasaOrbiter.variable}`}>
        <BootstrapProvider> 
          {children} 
        </BootstrapProvider>

      
      </body>
    </html>
  );
}
