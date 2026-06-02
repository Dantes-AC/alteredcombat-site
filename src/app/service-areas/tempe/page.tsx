import { BOOKING_URL } from "@/lib/constants";
﻿import Link from "next/link";

export const metadata = {
  title: "Mobile Laser Tag & Party Games in Tempe, AZ | Altered Combat",
  description:
    "Tempe&apos;s top mobile gaming. Tactical laser tag, VR, Nerf wars & water wars for ASU events, college parties, and birthday celebrations. Veteran-owned, 5-star rated.",
  keywords: [
    "laser tag Tempe AZ",
    "mobile laser tag Tempe",
    "ASU party games",
    "college party Tempe",
    "birthday party Tempe",
  ],
};

export default function TempePage() {

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* HERO */}
      <section className="relative py-32 pt-40">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-600/10 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-yellow-600/10 border border-yellow-600/30 rounded-full px-4 py-2 text-yellow-500 text-sm font-medium mb-6">
            Home of the Sun Devils
          </span>
          <h1 className="font-teko text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-6">
            MOBILE LASER TAG & PARTY GAMES IN{" "}
            <span className="text-yellow-500">TEMPE</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Tempe&apos;s got the energy — college town vibes, Mill Ave nightlife, and
            Tempe Town Lake. We match that energy with tactical laser tag, VR,
            Nerf wars, and water battles for any event.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              Book Your Tempe Event
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

      {/* WHY TEMPE */}
      <section className="py-20 bg-[#12121a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-12">
            WHY TEMPE CHOOSES ALTERED COMBAT
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-yellow-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-yellow-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
              </div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">
                College-Ready Fun
              </h3>
              <p className="text-gray-400">
                Greek life events, dorm parties, club activities — we bring
                games that college students actually want to play.
              </p>
            </div>
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-yellow-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-yellow-500"
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
                Group Events
              </h3>
              <p className="text-gray-400">
                From 10 to 40+ players, we handle groups of all sizes with
                structured games and tournaments.
              </p>
            </div>
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-yellow-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-yellow-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">
                Tech-Forward
              </h3>
              <p className="text-gray-400">
                Arena-scale VR, tactical laser tag with kill streaks — games
                that impress even the most tech-savvy crowd.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PERFECT FOR TEMPE EVENTS */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-4">
            PERFECT FOR TEMPE EVENTS
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Whatever you&apos;re celebrating, we&apos;ve got the games to make it
            memorable.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Fraternity & Sorority Events",
              "ASU Club Activities",
              "Birthday Parties",
              "Corporate Team Building",
              "Apartment Complex Events",
              "Graduation Parties",
            ].map((e) => (
              <div
                key={e}
                className="flex items-center space-x-3 bg-[#12121a] border border-gray-800 rounded-lg p-4"
              >
                <svg
                  className="w-5 h-5 text-yellow-500 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-white">{e}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR TEMPE EVENT SPOTS */}
      <section className="py-20 bg-[#12121a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-4">
            POPULAR TEMPE EVENT SPOTS
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Tempe&apos;s parks and open spaces are perfect for our mobile games.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Tempe Beach Park",
              "Kiwanis Park",
              "Papago Park",
              "Tempe Town Lake Area",
              "ASU Campus Spaces",
              "Your Backyard or Venue",
            ].map((v) => (
              <div
                key={v}
                className="flex items-center space-x-3 bg-[#0a0a0f] border border-gray-800 rounded-lg p-4"
              >
                <svg
                  className="w-5 h-5 text-yellow-500 flex-shrink-0"
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

      {/* NEARBY CITIES */}
      <section className="py-16 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-4">
            Also serving nearby East Valley cities:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Scottsdale", slug: "scottsdale" },
              { name: "Mesa", slug: "mesa" },
              { name: "Chandler", slug: "chandler" },
              { name: "Phoenix", slug: "phoenix" },
            ].map((city) => (
              <Link
                key={city.slug}
                href={`/service-areas/${city.slug}`}
                className="bg-[#12121a] border border-gray-700 hover:border-cyan-500/50 rounded-full px-4 py-2 text-gray-300 hover:text-white transition-colors"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a0f] to-[#12121a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-teko text-4xl sm:text-5xl font-bold text-white mb-6">
            READY TO PLAY IN TEMPE?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Fork &apos;em up! Book your event and let&apos;s make it legendary.
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
            <Link href="/games" className="btn-secondary text-lg px-8 py-4">
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
