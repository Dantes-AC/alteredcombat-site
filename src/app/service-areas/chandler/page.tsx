import Link from "next/link";

export const metadata = {
  title: "Mobile Laser Tag & Party Games in Chandler, AZ | Altered Combat",
  description: "Chandler's premier mobile gaming. Tactical laser tag, VR, Nerf wars & water wars for corporate events, birthday parties, and gatherings. 5-star rated.",
  keywords: ["laser tag Chandler AZ", "corporate team building Chandler", "birthday party Chandler", "mobile games Chandler", "tech company events Chandler"],
};

export default function ChandlerPage() {
  const bookingUrl = "https://fareharbor.com/embeds/book/alteredcombat/?full-items=yes&flow=1501749";
  
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero */}
      <section className="relative py-32 pt-40">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 text-blue-400 text-sm font-medium mb-6">
            Innovation Meets Entertainment
          </span>
          <h1 className="font-teko text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-6">
            MOBILE LASER TAG & PARTY GAMES IN <span className="text-blue-400">CHANDLER</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Chandler's tech corridor knows innovation — and we deliver it. From Intel campus team builders to Ocotillo backyard birthdays, we bring cutting-edge games that match Chandler's forward-thinking vibe.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4">
              Book Your Chandler Event
            </a>
            <a href="tel:623-476-4906" className="btn-secondary text-lg px-8 py-4">
              Call (623) 476-4906
            </a>
          </div>
        </div>
      </section>

      {/* Why Chandler */}
      <section className="py-20 bg-[#12121a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-12">
            WHY CHANDLER CHOOSES ALTERED COMBAT
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">Tech-Forward Fun</h3>
              <p className="text-gray-400">Arena-scale VR, professional laser tag systems, live scoring — our tech impresses even Chandler's most discerning engineers.</p>
            </div>
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">Corporate Events</h3>
              <p className="text-gray-400">Team building that doesn't feel like team building. Get your department out of the conference room and into the action.</p>
            </div>
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">Family-Friendly</h3>
              <p className="text-gray-400">Chandler's master-planned communities have the perfect backyards for our games. We set up, you enjoy, we clean up.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-4">
            PERFECT FOR CHANDLER EVENTS
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            From Price Corridor office parks to Ocotillo neighborhoods, we've got Chandler covered.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Tech Company Team Building",
              "Startup Launch Parties",
              "Backyard Birthday Parties",
              "HOA & Community Events",
              "School Field Days & Carnivals",
              "Church Youth Groups"
            ].map((event) => (
              <div key={event} className="flex items-center space-x-3 bg-[#12121a] border border-gray-800 rounded-lg p-4">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white">{event}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Venues */}
      <section className="py-20 bg-[#12121a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-4">
            POPULAR CHANDLER LOCATIONS
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Chandler's parks and neighborhoods are ideal for mobile gaming. Here's where we play.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Tumbleweed Park",
              "Veterans Oasis Park",
              "Desert Breeze Park",
              "Snedigar Sportsplex",
              "Ocotillo Community Spaces",
              "Your Backyard"
            ].map((venue) => (
              <div key={venue} className="flex items-center space-x-3 bg-[#0a0a0f] border border-gray-800 rounded-lg p-4">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white">{venue}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-16 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-4">Also serving nearby East Valley cities:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Gilbert", slug: "gilbert" },
              { name: "Mesa", slug: "mesa" },
              { name: "Tempe", slug: "tempe" },
              { name: "Queen Creek", slug: "queen-creek" },
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
            READY TO PLAY IN CHANDLER?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Whether it's a corporate team builder or your kid's birthday, we deliver unforgettable games.
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
