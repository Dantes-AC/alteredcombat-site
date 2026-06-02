import Link from "next/link";

export const metadata = {
  title: "Mobile Laser Tag & Party Games in Sedona, AZ | Altered Combat",
  description:
    "Sedona's mobile gaming experts. Tactical laser tag, VR, Nerf wars & water wars for resort events, destination parties, and red rock adventures. Veteran-owned.",
  keywords: [
    "laser tag Sedona AZ",
    "mobile laser tag Sedona",
    "party games Sedona",
    "resort events Sedona",
    "destination party Sedona",
  ],
};

export default function SedonaPage() {
  const bookingUrl =
    "https://fareharbor.com/embeds/book/alteredcombat/?full-items=yes&flow=1501749";

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero */}
      <section className="relative py-32 pt-40">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-500/10 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-rose-500/10 border border-rose-500/30 rounded-full px-4 py-2 text-rose-400 text-sm font-medium mb-6">
            Red Rock Country
          </span>
          <h1 className="font-teko text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-6">
            MOBILE LASER TAG & PARTY GAMES IN{" "}
            <span className="text-rose-400">SEDONA</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Sedona's stunning red rocks and resort atmosphere create an
            unforgettable backdrop for our games. We travel to bring tactical
            laser tag, VR, Nerf wars, and water battles to your destination
            event.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              Book Your Sedona Event
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

      {/* Why Sedona Chooses Altered Combat */}
      <section className="py-20 bg-[#12121a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-12">
            WHY SEDONA CHOOSES ALTERED COMBAT
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-rose-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-rose-400"
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
                Destination Events
              </h3>
              <p className="text-gray-400">
                Sedona weddings, corporate retreats, family reunions — we add
                unforgettable entertainment to your destination event.
              </p>
            </div>
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-rose-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-rose-400"
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
                Resort-Ready
              </h3>
              <p className="text-gray-400">
                We work with Sedona's resorts and venues to deliver seamless
                entertainment that matches the location's quality.
              </p>
            </div>
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-rose-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-rose-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">
                Scenic Battles
              </h3>
              <p className="text-gray-400">
                Imagine tactical laser tag with Cathedral Rock in the background.
                Sedona's scenery makes every event Instagram-worthy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Sedona Events */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-4">
            PERFECT FOR SEDONA EVENTS
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Sedona's unique setting makes every event special. We add the fun.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Corporate Retreats",
              "Destination Birthdays",
              "Family Reunions",
              "Resort Guest Activities",
              "Wedding Party Events",
              "Team Building Getaways",
            ].map((e) => (
              <div
                key={e}
                className="flex items-center space-x-3 bg-[#12121a] border border-gray-800 rounded-lg p-4"
              >
                <svg
                  className="w-5 h-5 text-rose-400 flex-shrink-0"
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

      {/* Northern Arizona Travel */}
      <section className="py-16 bg-[#12121a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-rose-500/10 border border-rose-500/30 rounded-2xl p-8">
            <h3 className="font-teko text-2xl font-bold text-white mb-4">
              NORTHERN ARIZONA TRAVEL
            </h3>
            <p className="text-gray-300 mb-4">
              We're based in Buckeye but love traveling to Sedona for events.
              Travel fees may apply based on your event date and package.
            </p>
            <p className="text-gray-400 text-sm">
              Call us to discuss your Sedona event and get a custom quote.
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
              { name: "Flagstaff", slug: "flagstaff" },
              { name: "Prescott", slug: "prescott" },
              { name: "Cottonwood", slug: "sedona" },
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
            READY TO PLAY IN SEDONA?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Make your red rock adventure unforgettable. Contact us to plan your
            event.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
        </div>
      </section>
    </div>
  );
}
