"use client";

import { useEffect } from "react";

export default function ReviewsSection() {
  useEffect(() => {
    // Load Elfsight script
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup if needed
      const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0a0f] to-[#0f0f18]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="reviews" className="scroll-mt-24 text-center mb-12">
          <h2 className="font-teko text-4xl sm:text-5xl font-bold text-white mb-4">
            WHAT OUR CUSTOMERS SAY
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Don&apos;t just take our word for it — hear from real customers.
          </p>
        </div>

        {/* Elfsight Google Reviews Widget */}
        <div className="flex justify-center">
          <div 
            className="elfsight-app-374fc9da-0adf-47eb-858e-a50f02b3c3e8" 
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </section>
  );
}
