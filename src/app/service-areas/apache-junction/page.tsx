import Link from "next/link";

export const metadata = {
  title: "Mobile Laser Tag & Party Games in Apache Junction, AZ | Altered Combat",
  description:
    "Apache Junction's mobile gaming experts. Tactical laser tag, VR, Nerf wars & water wars for birthday parties, outdoor events, and desert adventures. Veteran-owned.",
  keywords: [
    "laser tag Apache Junction AZ",
    "mobile laser tag Apache Junction",
    "birthday party Apache Junction",
    "party games Apache Junction",
  ],
};

export default function ApacheJunctionPage() {
  const bookingUrl =
    "https://fareharbor.com/embeds/book/alteredcombat/?full-items=yes&flow=1501749";

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero */}
      <section className="relative py-32 pt-40">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-600/10 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-amber-600/10 border border-amber-600/30 rounded-full px-4 py-2 text-amber-500 text-sm font-medium mb-6">
            Gateway to the Superstitions
          </span>
          <h1 className="font-teko text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-6">
            MOBILE LASER TAG & PARTY GAMES IN{" "}
            <span className="text-amber-500">APACHE JUNCTION</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            With the Superstition Mountains as your backdrop, Apache Junction is
            perfect for outdoor adventures. We bring tactical laser tag, VR, Nerf
            wars, and water battles to your desert event.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              Book Your AJ Event
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

      {/* Why Apache Junction */}
      <section className="py-20 bg-[#12121a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-12">
            WHY APACHE JUNCTION CHOOSES US
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Desert Adventure */}
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-amber-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-amber-500"
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
                Desert Adventure
              </h3>
              <p className="text-gray-400">
                AJ's rugged outdoor spirit matches our tactical games perfectly.
                Battle it out with the Superstitions in view.
              </p>
            </div>

            {/* Big Properties */}
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-amber-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-amber-500"
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
                Big Properties
              </h3>
              <p className="text-gray-400">
                Apache Junction's spacious lots and rural properties give us room
                to create epic battlefields.
              </p>
            </div>

            {/* Community Events */}
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-amber-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-amber-500"
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
                From Lost Dutchman Days to backyard birthdays, we bring the fun
                to AJ's tight-knit community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Venues */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-4">
            POPULAR AJ EVENT SPOTS
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Apache Junction's parks and open spaces are perfect for our games.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Painted Sky Park",
              "Prospector Park",
              "Flatiron Community Park",
              "Superstition Shadows Park",
              "Your Property",
              "Local Schools & Churches",
            ].map((venue) => (
              <div
                key={venue}
                className="flex items-center space-x-3 bg-[#12121a] border border-gray-800 rounded-lg p-4"
              >
                <svg
                  className="w-5 h-5 text-amber-500 flex-shrink-0"
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

      {/* Nearby Areas */}
      <section className="py-16 bg-[#12121a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-4">
            Also serving nearby East Valley cities:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Mesa", slug: "mesa" },
              { name: "Gilbert", slug: "gilbert" },
              { name: "Queen Creek", slug: "queen-creek" },
              { name: "Chandler", slug: "chandler" },
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
            READY TO PLAY IN APACHE JUNCTION?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Adventure awaits. Book your desert battle today.
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
