import { BOOKING_URL } from "@/lib/constants";
﻿import Link from "next/link";

export const metadata = {
  title: "Mobile Laser Tag & Party Games in Goodyear, AZ | Altered Combat",
  description: "Goodyear&apos;s top-rated mobile gaming. Tactical laser tag, VR, Nerf wars & water wars for birthday parties, schools, and events. 5-star rated, veteran-owned.",
  keywords: ["laser tag Goodyear AZ", "mobile laser tag Goodyear", "birthday party Goodyear", "Nerf party Goodyear", "kids party Goodyear"],
};

export default function GoodyearPage() {
  
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <section className="relative py-32 pt-40">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 text-purple-400 text-sm font-medium mb-6">
            West Valley&apos;s Fastest Growing City
          </span>
          <h1 className="font-teko text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-6">
            MOBILE LASER TAG & PARTY GAMES IN <span className="text-purple-400">GOODYEAR</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Goodyear is booming — and so are the birthday parties. We bring tactical laser tag, VR, Nerf wars, and water wars right to your neighborhood. No driving across the valley required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4">
              Book Your Goodyear Event
            </a>
            <a href="tel:623-476-4906" className="btn-secondary text-lg px-8 py-4">
              Call (623) 476-4906
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#12121a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-12">
            WHY GOODYEAR FAMILIES LOVE US
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">Fast & Reliable</h3>
              <p className="text-gray-400">Quick booking confirmations, on-time arrivals, and seamless setup. We respect your time and deliver every time.</p>
            </div>
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">Built for Groups</h3>
              <p className="text-gray-400">Goodyear&apos;s growing communities have amazing parks — perfect for our games with up to 40 players.</p>
            </div>
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">Beat the Heat</h3>
              <p className="text-gray-400">Water Wars is a Goodyear favorite. Epic water blaster battles that keep everyone cool and entertained.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-4">
            POPULAR GOODYEAR EVENT SPOTS
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            From Estrella to PebbleCreek, we&apos;ve brought the action to neighborhoods across Goodyear.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Goodyear Community Park",
              "Estrella Mountain Regional Park",
              "PebbleCreek Recreation Centers",
              "Goodyear Ballpark Area",
              "Your Backyard or HOA Common Area",
              "Local Schools & Churches"
            ].map((venue) => (
              <div key={venue} className="flex items-center space-x-3 bg-[#12121a] border border-gray-800 rounded-lg p-4">
                <svg className="w-5 h-5 text-purple-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white">{venue}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#12121a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-4">Also serving nearby West Valley cities:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Buckeye", slug: "buckeye" },
              { name: "Avondale", slug: "avondale" },
              { name: "Litchfield Park", slug: "litchfield-park" },
              { name: "Glendale", slug: "glendale" },
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

      <section className="py-20 bg-gradient-to-b from-[#12121a] to-[#0a0a0f]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-teko text-4xl sm:text-5xl font-bold text-white mb-6">
            READY TO PLAY IN GOODYEAR?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Make your next birthday party, block party, or family gathering unforgettable. We handle everything.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4">
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
