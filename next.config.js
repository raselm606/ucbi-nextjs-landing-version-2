/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  
  reactCompiler: true,
  output: "export",
  images: {
     unoptimized: true ,
    remotePatterns: [
      { protocol: "https", hostname: "**" },
       { protocol: "https", hostname: "data-api.coindesk.com" },
       { protocol: "https", hostname: "coindesk.com" },
       { protocol: "https", hostname: "bitcoin.com" },
       { protocol: "https", hostname: "ethereum.com" },
       { protocol: "https", hostname: "resources.cryptocompare.com" },
       { protocol: "https", hostname: "cryptocompare.com" },
       { protocol: "https", hostname: "coinpaper.com" },
       { protocol: "https", hostname: "cryptopolitan.com" },
      ],
  },
   
};

export default nextConfig;

