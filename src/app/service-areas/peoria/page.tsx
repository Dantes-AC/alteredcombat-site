import Link from "next/link";

export const metadata = {
  title: "Mobile Laser Tag & Party Games in Peoria, AZ | Altered Combat",
  description: "Peoria&apos;s premier mobile gaming. Tactical laser tag, VR, Nerf wars & water wars for birthday parties, sports teams, and community events. Veteran-owned, 5-star rated.",
  keywords: ["laser tag Peoria AZ", "mobile laser tag Peoria", "birthday party Peoria", "Nerf party Peoria", "kids party Peoria"],
};

export default function PeoriaPage() {
  const bookingUrl = "https://fareharbor.com/embeds/book/alteredcombat/?full-items=yes&flow=1501749";

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero */}
      <section className="relative py-32 pt-40">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-teal-500/10 border border-teal-500/30 rounded-full px-4 py-2 text-teal-400 text-sm font-medium mb-6">
            Where Sports & Fun Collide
          </span>
          <h1 className="font-teko text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-6">
            MOBILE LASER TAG & PARTY GAMES IN <span className="text-teal-400">PEORIA</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Peoria&apos;s got the sports spirit — and we&apos;ve got the games to match. From Lake Pleasant to your backyard, we bring tactical laser tag, VR, Nerf wars, and water battles to your next event.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4">
              Book Your Peoria Event
            </a>
            <a href="tel:623-476-4906" className="btn-secondary text-lg px-8 py-4">
              Call (623) 476-4906
            </a>
          </div>
        </div>
      </section>

      {/* Why Peoria */}
      <section className="py-20 bg-[#12121a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-12">
            WHY PEORIA CHOOSES ALTERED COMBAT
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">Competitive Spirit</h3>
              <p className="text-gray-400">Peoria loves competition. Our tactical laser tag brings real FPS gameplay with kill streaks, team modes, and leaderboards.</p>
            </div>
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">Team Events</h3>
              <p className="text-gray-400">Sports teams, youth groups, and corporate outings. We handle groups of all sizes with structured games and tournaments.</p>
            </div>
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">Nearly Any Venue Works</h3>
              <p className="text-gray-400">Parks, backyards, sports complexes — we set up nearly anywhere. You pick the spot, we bring the action.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Venues */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-4">
            POPULAR PEORIA EVENT SPOTS
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Peoria has incredible parks and outdoor spaces. Here&apos;s where we set up most often.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Peoria Sports Complex",
              "Pioneer Community Park",
              "Sunrise Mountain Park",
              "Rio Vista Community Park",
              "Your Backyard",
              "Local Schools & Churches",
            ].map((venue) => (
              <div key={venue} className="flex items-center space-x-3 bg-[#12121a] border border-gray-800 rounded-lg p-4">
                <svg className="w-5 h-5 text-teal-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
          <p className="text-gray-400 mb-4">Also serving nearby West Valley cities:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Surprise", slug: "surprise" },
              { name: "Glendale", slug: "glendale" },
              { name: "Phoenix", slug: "phoenix" },
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
            READY TO PLAY IN PEORIA?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Whether it&apos;s a team celebration or a birthday party, we bring the games to you.
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
