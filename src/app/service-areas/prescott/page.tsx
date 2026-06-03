import { BOOKING_URL, PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";
﻿import Link from "next/link";

export const metadata = {
  title: "Mobile Laser Tag & Party Games in Prescott, AZ | Altered Combat",
  description:
    "Prescott&apos;s mobile gaming experts. Tactical laser tag, VR, Nerf wars & water wars for birthday parties, community events, and outdoor fun. Veteran-owned.",
  keywords: [
    "laser tag Prescott AZ",
    "mobile laser tag Prescott",
    "birthday party Prescott",
    "party games Prescott",
    "outdoor games Prescott",
  ],
};

export default function PrescottPage() {

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero */}
      <section className="relative py-32 pt-40">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-500/10 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-stone-500/10 border border-stone-500/30 rounded-full px-4 py-2 text-stone-400 text-sm font-medium mb-6">
            Everybody&apos;s Hometown
          </span>
          <h1 className="font-teko text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-6">
            MOBILE LASER TAG & PARTY GAMES IN{" "}
            <span className="text-stone-400">PRESCOTT</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Prescott&apos;s historic charm and outdoor spirit make it perfect for our
            games. We travel to Arizona&apos;s original capital to bring tactical
            laser tag, VR, Nerf wars, and water battles to your event.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              Book Your Prescott Event
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

      {/* Why Prescott Chooses Altered Combat */}
      <section className="py-20 bg-[#12121a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-12">
            WHY PRESCOTT CHOOSES ALTERED COMBAT
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-stone-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-stone-400"
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
                Historic Fun
              </h3>
              <p className="text-gray-400">
                Prescott&apos;s Wild West heritage meets modern tactical gaming. A
                unique experience in Arizona&apos;s original capital.
              </p>
            </div>
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-stone-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-stone-400"
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
                Perfect Weather
              </h3>
              <p className="text-gray-400">
                Prescott&apos;s mild climate means great outdoor gaming year-round. No
                extreme heat, no snow delays.
              </p>
            </div>
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-stone-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-stone-400"
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
                From Courthouse Square gatherings to backyard birthdays, we bring
                the fun to Prescott&apos;s tight-knit community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Event Spots */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-4">
            POPULAR PRESCOTT EVENT SPOTS
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Prescott&apos;s parks and open spaces are ideal for our mobile games.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Watson Lake Park",
              "Granite Creek Park",
              "Mile High Middle School Fields",
              "Prescott Gateway Mall Area",
              "Embry-Riddle Campus",
              "Your Property or Venue",
            ].map((v) => (
              <div
                key={v}
                className="flex items-center space-x-3 bg-[#12121a] border border-gray-800 rounded-lg p-4"
              >
                <svg
                  className="w-5 h-5 text-stone-400 flex-shrink-0"
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

      {/* Northern Arizona Travel */}
      <section className="py-16 bg-[#12121a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-stone-500/10 border border-stone-500/30 rounded-2xl p-8">
            <h3 className="font-teko text-2xl font-bold text-white mb-4">
              NORTHERN ARIZONA TRAVEL
            </h3>
            <p className="text-gray-300 mb-4">
              We&apos;re based in Buckeye but regularly travel to Prescott for events.
              Travel fees may apply based on your event date and package.
            </p>
            <p className="text-gray-400 text-sm">
              Call us to discuss your Prescott event and get a custom quote.
            </p>
          </div>
        </div>
      </section>

      {/* Also Serving */}
      <section className="py-16 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-4">Also serving Northern Arizona:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Prescott Valley", slug: "prescott" },
              { name: "Sedona", slug: "sedona" },
              { name: "Flagstaff", slug: "flagstaff" },
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
            READY TO PLAY IN PRESCOTT?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Bring the action to Everybody&apos;s Hometown. Contact us to plan your
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
