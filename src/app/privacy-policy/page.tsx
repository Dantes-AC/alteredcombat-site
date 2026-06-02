"use client";

import React from "react";
import PrivacyContent from "@/components/privacy-content-1";
import PrivacyContent2 from "@/components/privacy-content-2";

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a0f] to-[#0f0f18]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-teko text-5xl sm:text-6xl font-bold text-white mb-4">
            PRIVACY POLICY
          </h1>
          <p className="text-gray-400">
            Last updated: March 2026
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#0f0f18]">
        <PrivacyContent />
        <PrivacyContent2 />
      </section>
    </div>
  );
}
