// app/sitemap.js

export default function sitemap() {
  const baseUrl = "https://ucbibanking.io";  

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    
    {
      url: `${baseUrl}/become-member`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },

    {
      url: "https://doc.ucbibanking.io/ucbi_terms_condition",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: "https://doc.ucbibanking.io/ucbi_whitepaper",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: "https://doc.ucbibanking.io/ucbi_coinmarketcap",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
  ];
}