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
    default: "UCBI Banking - Blockchain Private Equity Treasury Holding",
    template: "%s | UCBI",
  },
  description:
    "Exclusive private investment platform combining private equity crypto-finance and strategic treasury management to support long-term technological value creation within the UCBI Holding structure reserved for selected partners",
  keywords: ["investissement blockchain", "investissement blockchain France", "conseil blockchain", "consultant blockchain", "blockchain consulting", "stratégie blockchain", "investissement digital", "actifs numériques", "investissement privé", "private equity", "capital-investissement", "finance digitale", "innovation financière", "stratégie d’investissement", "gestion d’actifs numériques", "investissement institutionnel", "transformation financière", "technologie blockchain", "solutions blockchain", "infrastructure financière", "stratégie financière", "conseil en investissement", "finance numérique", "actifs digitaux", "Web3 finance", "blockchain finance", "investissement Web3", "conseil Web3", "stratégie d’actifs numériques"],
  
  openGraph: {
    title: "UCBI Banking - Blockchain Private Equity Treasury Holding",
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
    title: "UCBI Banking - Blockchain Private Equity Treasury Holding",
    description:
      "Exclusive private investment platform combining private equity crypto-finance and strategic treasury management to support long-term technological value creation within the UCBI Holding structure reserved for selected partners",
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
    <html lang="en">
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

        <Script
              id="chatwoot"
              strategy="afterInteractive"
          >
              {`
                  window.chatwootSettings = {
                      position: "right",
                      type: "standard",
                      launcherTitle: ""
                  };

                  (function(d,t) {
                      var BASE_URL = "https://app.chatwoot.com";
                      var g = d.createElement(t);
                      var s = d.getElementsByTagName(t)[0];

                      g.src = BASE_URL + "/packs/js/sdk.js";
                      g.async = true;

                      s.parentNode.insertBefore(g,s);

                      g.onload = function() {
                          window.chatwootSDK.run({
                              websiteToken: "jNc81Yrte1Th8H5SoUC8s5Ze",
                              baseUrl: BASE_URL
                          });
                      };
                  })(document,"script");
              `}
          </Script>

      
      </body>
    </html>
  );
}
