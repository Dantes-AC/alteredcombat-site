import type { Metadata } from "next";
import FAQPage from "@/components/faq-page";

export const metadata: Metadata = {
  title: "FAQ | Altered Combat - Frequently Asked Questions",
  description:
    "Answers to the most common questions about booking Altered Combat for your event — pricing, travel, age requirements, weather, insurance, and more.",
};

export default function Page() {
  return <FAQPage />;
}
