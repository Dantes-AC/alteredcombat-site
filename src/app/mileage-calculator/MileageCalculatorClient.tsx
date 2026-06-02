"use client";

import { useEffect } from "react";

export default function MileageCalculatorClient() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.interactivecalculator.com/embed.js";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("data-type", "iframe");
    script.setAttribute("data-calculator-id", "Y85nAdLJPW6rDo47pEba");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-teko text-4xl sm:text-5xl font-bold text-white mb-4">
            MILEAGE CALCULATOR
          </h1>
          <p className="text-xl text-gray-400">
            Enter your location to calculate the billable travel distance for your event.
          </p>
        </div>

        <div className="bg-[#12121a] border border-gray-800 rounded-2xl p-6 sm:p-8">
          <span data-calculator-id="Y85nAdLJPW6rDo47pEba"></span>
        </div>
      </div>
    </div>
  );
}
