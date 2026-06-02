import type { Metadata } from "next";
import MileageCalculatorClient from "./MileageCalculatorClient";

export const metadata: Metadata = {
  title: "Mileage Calculator | Altered Combat",
  description: "Calculate the travel distance for your Altered Combat event anywhere in Arizona.",
};

export default function MileageCalculatorPage() {
  return <MileageCalculatorClient />;
}
