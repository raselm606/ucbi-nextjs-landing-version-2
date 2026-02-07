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




export const metadata = {
  title: "UCBI Banking",
  description: "UCBI Banking Landing Page",
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
