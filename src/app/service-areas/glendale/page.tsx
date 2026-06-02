import Link from "next/link";

export const metadata = {
  title: "Mobile Laser Tag & Party Games in Glendale, AZ | Altered Combat",
  description: "Glendale&apos;s top mobile gaming. Tactical laser tag, VR, Nerf wars & water wars for birthday parties, tailgates, and events near State Farm Stadium. Veteran-owned.",
  keywords: ["laser tag Glendale AZ", "mobile laser tag Glendale", "birthday party Glendale", "tailgate games Glendale", "party games Glendale"],
};

export default function GlendalePage() {
  const bookingUrl = "https://fareharbor.com/embeds/book/alteredcombat/?full-items=yes&flow=1501749";
  
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero */}
      <section className="relative py-32 pt-40">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2 text-red-400 text-sm font-medium mb-6">
            Arizona&apos;s Sports & Entertainment Capital
          </span>
          <h1 className="font-teko text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-6">
            MOBILE LASER TAG & PARTY GAMES IN <span className="text-red-400">GLENDALE</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Home of the Super Bowl, Cardinals, and Coyotes — Glendale knows big events. We bring that same energy to your backyard, tailgate, or party with tactical laser tag, VR, and more.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4">
              Book Your Glendale Event
            </a>
            <a href="tel:623-476-4906" className="btn-secondary text-lg px-8 py-4">
              Call (623) 476-4906
            </a>
          </div>
        </div>
      </section>

      {/* Why Glendale */}
      <section className="py-20 bg-[#12121a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-12">
            WHY GLENDALE CHOOSES ALTERED COMBAT
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">Game Day Energy</h3>
              <p className="text-gray-400">Tailgates, watch parties, pre-game events — we bring competitive fun that matches Glendale&apos;s sports culture.</p>
            </div>
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">Historic Downtown</h3>
              <p className="text-gray-400">From Westgate to Historic Downtown, we set up at parks, venues, and backyards throughout Glendale.</p>
            </div>
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">Reliable & On-Time</h3>
              <p className="text-gray-400">We arrive early, set up fast, and have everything ready before your guests arrive. Zero stress for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Venues */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-4">
            POPULAR GLENDALE EVENT SPOTS
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Glendale has great parks and venues for our mobile games.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Westgate Entertainment District",
              "Thunderbird Conservation Park",
              "Sahuaro Ranch Park",
              "Glendale Heroes Regional Park",
              "Your Backyard",
              "Local Schools & Churches"
            ].map((venue) => (
              <div key={venue} className="flex items-center space-x-3 bg-[#12121a] border border-gray-800 rounded-lg p-4">
                <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
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
          <p className="text-gray-400 mb-4">Also serving nearby cities:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Peoria", slug: "peoria" },
              { name: "Phoenix", slug: "phoenix" },
              { name: "Avondale", slug: "avondale" },
              { name: "Goodyear", slug: "goodyear" },
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
            READY TO PLAY IN GLENDALE?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Bring the action to your next event. Book online or give us a call.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4">
              Book Now
            </a>
            <Link href="/games" className="btn-secondary text-lg px-8 py-4">
              View Our Games
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <Link href="/parties-events" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Event Types
            </Link>
            <span className="text-gray-600">•</span>
            <Link href="/service-areas" className="text-gray-400 hover:text-cyan-400 transition-colors">
              All Service Areas
            </Link>
            <span className="text-gray-600">•</span>
            <Link href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
