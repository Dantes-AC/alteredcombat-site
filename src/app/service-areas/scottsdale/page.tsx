import Link from "next/link";

export const metadata = {
  title: "Mobile Laser Tag & Party Games in Scottsdale, AZ | Altered Combat",
  description:
    "Scottsdale&apos;s premium mobile gaming. Tactical laser tag, arena-scale VR, Nerf wars & water wars for corporate events, upscale parties, and private gatherings.",
  keywords: [
    "laser tag Scottsdale AZ",
    "corporate team building Scottsdale",
    "party entertainment Scottsdale",
    "VR party Scottsdale",
    "mobile games Scottsdale",
  ],
};

export default function ScottsdalePage() {
  const bookingUrl =
    "https://fareharbor.com/embeds/book/alteredcombat/?full-items=yes&flow=1501749";

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero Section */}
      <section className="relative py-32 pt-40">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 text-amber-400 text-sm font-medium mb-6">
            Premium Events, Elevated Fun
          </span>
          <h1 className="font-teko text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-6">
            MOBILE LASER TAG & PARTY GAMES IN{" "}
            <span className="text-amber-400">SCOTTSDALE</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            From North Scottsdale estates to Old Town corporate events, we
            deliver unforgettable games that match Scottsdale&apos;s standards.
            Professional-grade equipment, flawless execution.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              Book Your Scottsdale Event
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

      {/* Why Scottsdale Chooses Us */}
      <section className="py-20 bg-[#12121a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-12">
            WHY SCOTTSDALE CHOOSES ALTERED COMBAT
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Corporate Ready */}
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">
                Corporate Ready
              </h3>
              <p className="text-gray-400">
                Team building that actually builds teams. Our tactical games
                create real collaboration, communication, and (healthy)
                competition.
              </p>
            </div>

            {/* Premium Quality */}
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-amber-400"
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
                Premium Quality
              </h3>
              <p className="text-gray-400">
                Professional-grade laser taggers, cutting-edge VR, and equipment
                that looks as good as it performs. No cheap plastic toys here.
              </p>
            </div>

            {/* 5-Star Service */}
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">
                5-Star Service
              </h3>
              <p className="text-gray-400">
                Perfect Google rating for a reason. We&apos;re punctual,
                professional, and handle everything so you can focus on your
                guests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Scottsdale Events */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-4">
            PERFECT FOR SCOTTSDALE EVENTS
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Whether it&apos;s a milestone birthday at a private estate or a company
            retreat, we scale to fit.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Corporate Team Building Events",
              "Executive Retreats & Off-Sites",
              "Milestone Birthday Parties",
              "Private Estate Gatherings",
              "Resort & Hotel Events",
              "School & Youth Group Functions",
            ].map((e) => (
              <div
                key={e}
                className="flex items-center space-x-3 bg-[#12121a] border border-gray-800 rounded-lg p-4"
              >
                <svg
                  className="w-5 h-5 text-amber-400 flex-shrink-0"
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#12121a] to-[#0a0a0f]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-teko text-4xl sm:text-5xl font-bold text-white mb-6">
            READY TO ELEVATE YOUR SCOTTSDALE EVENT?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            From intimate gatherings to large-scale corporate events, we deliver
            games that exceed expectations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={bookingUrl}
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
