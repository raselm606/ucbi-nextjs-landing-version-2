import BootstrapProvider from '@/components/layouts/BootstrapProvider';
import Script from "next/script";

const GTM_ID = "GTM-K6G7W6MT";


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
  keywords: ["ucbi", "ucbi banking", "private equity", "crypto finance", "crypto treasury", 
    "microstrategy", "blackrock", "treasury management", "private investors", "fidelity", 
    "coinshare", "ethereum", "bitmine", "staking", "coinmarketcap", "yahoo finance", 
    "coinbase", "jp morgan"],
  
  openGraph: {
    title: "UCBI Banking - Private Blockchain Data Banking",
    description:
      "Exclusive private investment platform combining private equity crypto-finance and strategic treasury management to support long-term technological value creation within the UCBI Holding structure reserved for selected partners",
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
    <head>
      {/* GTM script */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
    </head>
      <body className={`${InterSans.variable} ${tasaOrbiter.variable}`}>
        {/* GTM noscript */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        
        <BootstrapProvider> 
          {children} 
        </BootstrapProvider>

      
      </body>
    </html>
  );
}
