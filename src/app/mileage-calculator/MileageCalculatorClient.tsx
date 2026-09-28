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
    <div className="pt-12 min-h-screen bg-[#0a0a0f]">
      {/* Hero */}
      <section className="py-12 bg-gradient-to-b from-[#0a0a0f] to-[#0f0f18]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-teko text-5xl sm:text-6xl font-bold text-white mb-4">
            MILEAGE CALCULATOR
          </h1>
          <p className="text-xl text-gray-400">
            Enter your location to calculate the billable travel distance for your event.
          </p>
        </div>
      </section>

      <section className="pb-10 bg-[#0f0f18]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#12121a] border border-gray-800 rounded-2xl p-6 sm:p-8">
            <span data-calculator-id="Y85nAdLJPW6rDo47pEba"></span>
          </div>
        </div>
      </section>
    </div>
  );
}
