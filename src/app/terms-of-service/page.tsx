import React from "react";
import TosContent from "../../components/tos-content";

export default function TermsOfServicePage() {
  return (
    <div className="pt-12">
      {/* Hero */}
      <section className="py-12 bg-gradient-to-b from-[#0a0a0f] to-[#0f0f18]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-teko text-5xl sm:text-6xl font-bold text-white mb-4">
            TERMS OF SERVICE
          </h1>
          <p className="text-gray-400">
            Effective Date: April 2026
          </p>
        </div>
      </section>

      <section className="py-10 bg-[#0f0f18]">
        <TosContent />
      </section>
    </div>
  );
}
