export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // disallow: "/admin", // চাইলে sensitive route block করতে পারো
      },
    ],
    sitemap: "https://ucbibanking.io/sitemap.xml",
  };
}