import { getCoinDeskNews } from "@/lib/coindesk/coindesk";
import CorporateBlogs from "./CorporateBlogs";

export default async function CorporateBlogsFeed() {
  const articles = await getCoinDeskNews();
  return <CorporateBlogs articles={articles} />;
}
