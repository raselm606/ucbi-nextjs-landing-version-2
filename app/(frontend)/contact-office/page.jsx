import { redirect } from "next/navigation";

export const metadata = {
  title: "Contact Office",
  description:
    "Connect with UCBI Banking for professional institutional commercial partnership and business-related inquiries",
};

export default function ContactOfficePage() {
  redirect("https://ucbibanking.io/#contact");
}