import type { Metadata } from "next";
import ReferralProgramPage from "@/components/referral-program-page";

export const metadata: Metadata = {
  title: "Referral Program | Altered Combat - Earn Booking Credit",
  description:
    "Know someone who'd love Altered Combat? Refer a friend and earn ~7% of their booking value as credit toward your next event. No codes needed — just your name.",
};

export default function Page() {
  return <ReferralProgramPage />;
}
