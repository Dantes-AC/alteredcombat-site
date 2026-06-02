import { BOOKING_URL } from "@/lib/constants";
﻿import Link from "next/link";

export const metadata = {
  title: "Mobile Laser Tag & Party Games in Queen Creek, AZ | Altered Combat",
  description:
    "Queen Creek&apos;s favorite mobile gaming. Tactical laser tag, VR, Nerf wars & water wars for birthday parties, farm events, and family celebrations. Veteran-owned.",
  keywords: [
    "laser tag Queen Creek AZ",
    "mobile laser tag Queen Creek",
    "birthday party Queen Creek",
    "party games Queen Creek",
    "kids party Queen Creek",
  ],
};

export default function QueenCreekPage() {

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero */}
      <section className="relative py-32 pt-40">
        <div className="absolute inset-0 bg-gradient-to-b from-lime-500/10 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-lime-500/10 border border-lime-500/30 rounded-full px-4 py-2 text-lime-400 text-sm font-medium mb-6">
            Arizona&apos;s Fastest Growing Town
          </span>
          <h1 className="font-teko text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-6">
            MOBILE LASER TAG & PARTY GAMES IN{" "}
            <span className="text-lime-400">QUEEN CREEK</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Queen Creek&apos;s growing fast — and so are the birthday parties. From
            Schnepf Farms to your backyard, we bring tactical laser tag, VR, Nerf
            wars, and water battles to your event.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              Book Your Queen Creek Event
            </a>
            <a
              href="tel:623-476-4906"
              className="btn-secondary text-lg px-8 py-4"
            >
              Call (623) 476-4906
            </a>
          </div>
        </div>
      </section>

      {/* Why Queen Creek Families Love Us */}
      <section className="py-20 bg-[#12121a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-12">
            WHY QUEEN CREEK FAMILIES LOVE US
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Big Backyards */}
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-lime-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-lime-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">
                Big Backyards
              </h3>
              <p className="text-gray-400">
                Queen Creek&apos;s spacious properties are perfect for our games. We
                set up an epic battlefield right at your home.
              </p>
            </div>

            {/* Family-First */}
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-lime-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-lime-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">
                Family-First
              </h3>
              <p className="text-gray-400">
                Queen Creek is all about families, and so are we. Safe, supervised
                games that kids and parents both love.
              </p>
            </div>

            {/* Community Events */}
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-lime-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-lime-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">
                Community Events
              </h3>
              <p className="text-gray-400">
                HOA events, school functions, church gatherings — we bring the fun
                to Queen Creek&apos;s growing community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Queen Creek Event Spots */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-4">
            POPULAR QUEEN CREEK EVENT SPOTS
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Queen Creek&apos;s parks and open spaces are ideal for our mobile games.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Founders' Park",
              "Desert Mountain Park",
              "Mansel Carter Oasis Park",
              "Frontier Family Park",
              "Your Backyard",
              "Local Schools & Churches",
            ].map((v) => (
              <div
                key={v}
                className="flex items-center space-x-3 bg-[#12121a] border border-gray-800 rounded-lg p-4"
              >
                <svg
                  className="w-5 h-5 text-lime-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-white">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-16 bg-[#12121a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-4">
            Also serving nearby East Valley cities:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Gilbert", slug: "gilbert" },
              { name: "Chandler", slug: "chandler" },
              { name: "Mesa", slug: "mesa" },
              { name: "Apache Junction", slug: "apache-junction" },
            ].map((city) => (
              <Link
                key={city.slug}
                href={`/service-areas/${city.slug}`}
                className="bg-[#0a0a0f] border border-gray-700 hover:border-cyan-500/50 rounded-full px-4 py-2 text-gray-300 hover:text-white transition-colors"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-[#12121a] to-[#0a0a0f]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-teko text-4xl sm:text-5xl font-bold text-white mb-6">
            READY TO PLAY IN QUEEN CREEK?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Make your next party the talk of the neighborhood.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              Book Now
            </a>
            <Link
              href="/games"
              className="btn-secondary text-lg px-8 py-4"
            >
              View Our Games
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <Link
              href="/parties-events"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Event Types
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/service-areas"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              All Service Areas
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/contact"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
