import BootstrapProvider from '@/components/layouts/BootstrapProvider';
 


import tasaOrbiter from '@/lib/fonts/tasaOrbiter';
import { Inter } from "next/font/google";
import "../globals.css";

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
    default: "Submit a Request - Private Blockchain Data Banking",
    template: "%s | UCBI",
  },
  description:
    "contact us to submit a request for our private blockchain data banking services, including inquiries about investment opportunities, treasury management solutions, and partnership collaborations. Our team is here to assist you with any questions or specific requests related to our exclusive private equity crypto-finance offerings within the UCBI Holding structure.",
  keywords: ["ucbi", "ucbi banking", "private equity", "crypto finance", "crypto treasury", 
    "microstrategy", "blackrock", "treasury management", "private investors", "fidelity", 
    "coinshare", "ethereum", "bitmine", "staking", "coinmarketcap", "yahoo finance", 
    "coinbase", "jp morgan"],
  
  openGraph: {
    title: "Submit a Request - Private Blockchain Data Banking",
    description:
      "contact us to submit a request for our private blockchain data banking services, including inquiries about investment opportunities, treasury management solutions, and partnership collaborations. Our team is here to assist you with any questions or specific requests related to our exclusive private equity crypto-finance offerings within the UCBI Holding structure.",
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
    title: "Submit a Request - Private Blockchain Data Banking ",
    description:
      "contact us to submit a request for our private blockchain data banking services, including inquiries about investment opportunities, treasury management solutions, and partnership collaborations. Our team is here to assist you with any questions or specific requests related to our exclusive private equity crypto-finance offerings within the UCBI Holding structure.",
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
