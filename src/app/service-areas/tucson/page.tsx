import { BOOKING_URL, PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";
﻿import Link from "next/link";

export const metadata = {
  title: "Mobile Laser Tag & Party Games in Tucson, AZ | Altered Combat",
  description:
    "Tucson&apos;s mobile gaming experts. Tactical laser tag, VR, Nerf wars & water wars for birthday parties, U of A events, and community gatherings. Veteran-owned.",
  keywords: [
    "laser tag Tucson AZ",
    "mobile laser tag Tucson",
    "birthday party Tucson",
    "U of A party games",
    "party games Tucson",
  ],
};

export default function TucsonPage() {

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero */}
      <section className="relative py-32 pt-40">
        <div className="absolute inset-0 bg-gradient-to-b from-red-600/10 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-red-600/10 border border-red-600/30 rounded-full px-4 py-2 text-red-500 text-sm font-medium mb-6">
            The Old Pueblo
          </span>
          <h1 className="font-teko text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-6">
            MOBILE LASER TAG & PARTY GAMES IN{" "}
            <span className="text-red-500">TUCSON</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Tucson&apos;s desert landscape and vibrant community deserve epic
            entertainment. We make the trip south to bring tactical laser tag,
            VR, Nerf wars, and water battles to Arizona&apos;s second-largest city.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              Book Your Tucson Event
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

      {/* Why Tucson Chooses Altered Combat */}
      <section className="py-20 bg-[#12121a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-12">
            WHY TUCSON CHOOSES ALTERED COMBAT
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-red-500"
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
                U of A Events
              </h3>
              <p className="text-gray-400">
                Wildcat pride runs deep. Greek life, dorm events, club activities
                — we bring games that college students love.
              </p>
            </div>
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-red-500"
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
                Family Events
              </h3>
              <p className="text-gray-400">
                Tucson&apos;s neighborhoods and parks are perfect for birthday
                parties, block parties, and family gatherings.
              </p>
            </div>
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">
                We Make the Trip
              </h3>
              <p className="text-gray-400">
                Yes, we travel to Tucson! Contact us for availability and travel
                arrangements for your southern Arizona event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Serving All of Tucson */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-4">
            SERVING ALL OF TUCSON
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            From Oro Valley to South Tucson, we cover the entire metro area.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Central Tucson",
              "Oro Valley",
              "Marana",
              "Catalina Foothills",
              "South Tucson",
              "Vail",
              "Sahuarita",
              "Green Valley",
              "U of A Campus Area",
            ].map((a) => (
              <div
                key={a}
                className="flex items-center space-x-3 bg-[#12121a] border border-gray-800 rounded-lg p-4"
              >
                <svg
                  className="w-5 h-5 text-red-500 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-white">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tucson Event Spots */}
      <section className="py-20 bg-[#12121a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-4">
            POPULAR TUCSON EVENT SPOTS
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Tucson&apos;s parks and outdoor spaces are perfect for our mobile games.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Reid Park",
              "Brandi Fenton Memorial Park",
              "Udall Park",
              "Rillito Regional Park",
              "U of A Campus Areas",
              "Your Property or Venue",
            ].map((v) => (
              <div
                key={v}
                className="flex items-center space-x-3 bg-[#0a0a0f] border border-gray-800 rounded-lg p-4"
              >
                <svg
                  className="w-5 h-5 text-red-500 flex-shrink-0"
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

      {/* Southern Arizona Travel */}
      <section className="py-16 bg-[#0a0a0f]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-red-600/10 border border-red-600/30 rounded-2xl p-8">
            <h3 className="font-teko text-2xl font-bold text-white mb-4">
              SOUTHERN ARIZONA TRAVEL
            </h3>
            <p className="text-gray-300 mb-4">
              We&apos;re based in Buckeye but regularly travel to Tucson for events.
              Travel fees may apply based on your event date and package.
            </p>
            <p className="text-gray-400 text-sm">
              Call us to discuss your Tucson event and get a custom quote.
            </p>
          </div>
        </div>
      </section>

      {/* Also Serving */}
      <section className="py-16 bg-[#12121a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-4">Also serving Southern Arizona:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Casa Grande", slug: "casa-grande" },
              { name: "Maricopa", slug: "maricopa" },
              { name: "Sierra Vista", slug: "sierra-vista" },
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
            READY TO PLAY IN TUCSON?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Bear Down! Contact us to bring the action to the Old Pueblo.
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
