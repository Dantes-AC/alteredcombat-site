import { BOOKING_URL, PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";
﻿import Link from "next/link";

export const metadata = {
  title: "Mobile Laser Tag & Party Games in Paradise Valley, AZ | Altered Combat",
  description:
    "Paradise Valley&apos;s premium mobile gaming. Tactical laser tag, VR, Nerf wars & water wars for upscale birthday parties, estate events, and private gatherings. Veteran-owned.",
  keywords: [
    "laser tag Paradise Valley AZ",
    "mobile laser tag Paradise Valley",
    "birthday party Paradise Valley",
    "estate party Paradise Valley",
    "luxury party games",
  ],
};

export default function ParadiseValleyPage() {

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero */}
      <section className="relative py-32 pt-40">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-violet-500/10 border border-violet-500/30 rounded-full px-4 py-2 text-violet-400 text-sm font-medium mb-6">
            Arizona&apos;s Most Exclusive Address
          </span>
          <h1 className="font-teko text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-6">
            MOBILE LASER TAG & PARTY GAMES IN{" "}
            <span className="text-violet-400">PARADISE VALLEY</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Paradise Valley&apos;s stunning estates and mountain views deserve premium
            entertainment. We bring world-class tactical laser tag, VR, and party
            games to your private event.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              Book Your Paradise Valley Event
            </a>
            <a
              href={PHONE_HREF}
              className="btn-secondary text-lg px-8 py-4"
            >
              Call {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </section>

      {/* Why Paradise Valley Chooses Us */}
      <section className="py-20 bg-[#12121a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-12">
            WHY PARADISE VALLEY CHOOSES US
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* White-Glove Service */}
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-violet-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-violet-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">
                White-Glove Service
              </h3>
              <p className="text-gray-400">
                Professional-grade equipment, impeccable setup, and attention to
                detail that matches Paradise Valley&apos;s standards.
              </p>
            </div>

            {/* Estate-Ready */}
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-violet-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-violet-400"
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
                Estate-Ready
              </h3>
              <p className="text-gray-400">
                Paradise Valley&apos;s expansive properties are perfect for our games.
                We create epic battlefields on your grounds.
              </p>
            </div>

            {/* Discreet & Professional */}
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-violet-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-violet-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">
                Discreet & Professional
              </h3>
              <p className="text-gray-400">
                We understand privacy. Our team arrives on time, delivers
                exceptional service, and leaves your property pristine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Paradise Valley Events */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-4">
            PERFECT FOR PARADISE VALLEY EVENTS
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            From milestone birthdays to private gatherings, we deliver
            unforgettable entertainment.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Milestone Birthday Parties",
              "Private Estate Gatherings",
              "Bar/Bat Mitzvahs",
              "Resort Events",
              "Executive Retreats",
              "Family Reunions",
            ].map((event) => (
              <div
                key={event}
                className="flex items-center space-x-3 bg-[#12121a] border border-gray-800 rounded-lg p-4"
              >
                <svg
                  className="w-5 h-5 text-violet-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-white">{event}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-16 bg-[#12121a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-4">
            Also serving nearby cities:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Scottsdale", slug: "scottsdale" },
              { name: "Phoenix", slug: "phoenix" },
              { name: "Tempe", slug: "tempe" },
            ].map((city) => (
              <Link
                key={city.name}
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
            READY TO PLAY IN PARADISE VALLEY?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Elevate your next event with games that match your standards.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
        </div>
      </section>
    </div>
  );
}
