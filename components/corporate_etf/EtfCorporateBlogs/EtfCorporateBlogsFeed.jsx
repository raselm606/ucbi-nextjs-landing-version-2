import { getCoinDeskNews } from "@/lib/coindesk/coindesk";
import EtfCorporateBlogs from "./EtfCorporateBlogs";

export default async function EtfCorporateBlogsFeed() {
  const articles = await getCoinDeskNews();
  return <EtfCorporateBlogs articles={articles} />;
}
