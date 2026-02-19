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
    default: "UCBI Banking - Private Blockchain Data Banking",
    template: "%s | UCBI",
  },
  description:
    "Exclusive private investment platform combining private equity crypto-finance and strategic treasury management to support long-term technological value creation within the UCBI Holding structure reserved for selected partners",
  keywords: [
    "UCBI",
    "Blockchain",
    "Blockchain Banking",
    "Finance",
    "Crypto",
    "defi",
    "UCBI Banking",
    "Blockchain data banking",
    "blackrock",
    "strategic investment",
    "usdt",
    "usdc",
  ],
  
  openGraph: {
    title: "UCBI Banking - Private Blockchain Data Banking",
    description:
      "Exclusive private investment platform combining private equity crypto-finance and strategic treasury management to support long-term technological value creation within the UCBI Holding structure reserved for selected partners",
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
    title: "UCBI Banking - Private Blockchain Data Banking ",
    description:
      "Exclusive private investment platform combining private equity crypto-finance and strategic treasury management to support long-term technological value creation within the UCBI Holding structure reserved for selected partners",
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
