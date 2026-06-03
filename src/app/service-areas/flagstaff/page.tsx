import { BOOKING_URL, PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";
﻿import Link from "next/link";

export const metadata = {
  title: "Mobile Laser Tag & Party Games in Flagstaff, AZ | Altered Combat",
  description:
    "Flagstaff&apos;s mobile gaming experts. Tactical laser tag, VR, Nerf wars & water wars for mountain town birthday parties, NAU events, and outdoor adventures. Veteran-owned.",
  keywords: [
    "laser tag Flagstaff AZ",
    "mobile laser tag Flagstaff",
    "birthday party Flagstaff",
    "NAU party games",
    "party games Flagstaff",
  ],
};

export default function FlagstaffPage() {

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero */}
      <section className="relative py-32 pt-40">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-500/10 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-sky-500/10 border border-sky-500/30 rounded-full px-4 py-2 text-sky-400 text-sm font-medium mb-6">
            Arizona&apos;s Mountain Playground
          </span>
          <h1 className="font-teko text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-6">
            MOBILE LASER TAG & PARTY GAMES IN{" "}
            <span className="text-sky-400">FLAGSTAFF</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Flagstaff&apos;s pine forests and mountain air make the perfect backdrop
            for outdoor battles. We make the drive up north to bring tactical
            laser tag, VR, Nerf wars, and water battles to your event.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              Book Your Flagstaff Event
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

      {/* Why Flagstaff */}
      <section className="py-20 bg-[#12121a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-12">
            WHY FLAGSTAFF CHOOSES ALTERED COMBAT
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mountain Adventure */}
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-sky-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-sky-400"
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
                Mountain Adventure
              </h3>
              <p className="text-gray-400">
                Flagstaff&apos;s outdoor culture meets tactical gaming. Battle it out
                among the pines for an unforgettable experience.
              </p>
            </div>

            {/* NAU Events */}
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-sky-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-sky-400"
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
                NAU Events
              </h3>
              <p className="text-gray-400">
                Greek life, dorm events, club activities — we bring games that
                college students actually want to play.
              </p>
            </div>

            {/* We Make the Trip */}
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-sky-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-sky-400"
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
                Yes, we travel to Flagstaff! Contact us for availability and
                travel arrangements for your northern Arizona event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Venues */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-4">
            POPULAR FLAGSTAFF EVENT SPOTS
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Flagstaff&apos;s parks and outdoor spaces are perfect for our games.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Buffalo Park",
              "Thorpe Park",
              "Wheeler Park",
              "Fort Tuthill County Park",
              "NAU Campus Areas",
              "Your Property or Venue",
            ].map((venue) => (
              <div
                key={venue}
                className="flex items-center space-x-3 bg-[#12121a] border border-gray-800 rounded-lg p-4"
              >
                <svg
                  className="w-5 h-5 text-sky-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-white">{venue}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Note */}
      <section className="py-16 bg-[#12121a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-sky-500/10 border border-sky-500/30 rounded-2xl p-8">
            <h3 className="font-teko text-2xl font-bold text-white mb-4">
              NORTHERN ARIZONA TRAVEL
            </h3>
            <p className="text-gray-300 mb-4">
              We&apos;re based in Buckeye but regularly travel to Flagstaff for
              events. Travel fees may apply based on your event date and package.
            </p>
            <p className="text-gray-400 text-sm">
              Call us to discuss your Flagstaff event and get a custom quote.
            </p>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-16 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-4">
            Also serving Northern Arizona:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Sedona", slug: "sedona" },
              { name: "Prescott", slug: "prescott" },
              { name: "Williams", slug: "williams" },
            ].map((city) => (
              <Link
                key={city.name}
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
            READY TO PLAY IN FLAGSTAFF?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Bring the action to the mountains. Contact us to plan your Flagstaff
            event.
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
