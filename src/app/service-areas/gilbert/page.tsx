import { BOOKING_URL, PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";
﻿import Link from "next/link";

export const metadata = {
  title: "Mobile Laser Tag & Party Games in Gilbert, AZ | Altered Combat",
  description: "Gilbert's favorite mobile party games. Tactical laser tag, VR, Nerf wars & water wars for birthday parties, school events, and family fun. 5-star rated.",
  keywords: ["laser tag Gilbert AZ", "birthday party Gilbert", "kids party Gilbert", "Nerf party Gilbert", "mobile games Gilbert"],
};

export default function GilbertPage() {
  
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <section className="relative py-32 pt-40">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 text-green-400 text-sm font-medium mb-6">
            Arizona's #1 Family-Friendly Town
          </span>
          <h1 className="font-teko text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-6">
            MOBILE LASER TAG & PARTY GAMES IN <span className="text-green-400">GILBERT</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Gilbert knows how to throw a party. We bring tactical laser tag, VR adventures, Nerf wars, and water battles right to your backyard, park, or school. The kids will talk about it for years.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4">
              Book Your Gilbert Event
            </a>
            <a href={PHONE_HREF} className="btn-secondary text-lg px-8 py-4">
              Call {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#12121a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-12">
            WHY GILBERT FAMILIES BOOK WITH US
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">Birthday Party Experts</h3>
              <p className="text-gray-400">We've done hundreds of birthday parties. We know what kids love, what parents appreciate, and how to make the day stress-free.</p>
            </div>
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">All Ages Welcome</h3>
              <p className="text-gray-400">From 8-year-old birthday parties to teen hangouts to parent-vs-kids showdowns — we've got games everyone can play together.</p>
            </div>
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">Safe & Supervised</h3>
              <p className="text-gray-400">Safety briefings, age-appropriate equipment, and professional game hosts. Parents can relax while the kids have a blast.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-4">
            POPULAR GILBERT EVENT SPOTS
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Gilbert's parks and neighborhoods are perfect for our mobile games. Here's where we play most often.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Freestone Park",
              "Gilbert Regional Park",
              "Cosmo Park",
              "Discovery Park",
              "Your Backyard",
              "Gilbert Schools & Churches"
            ].map((venue) => (
              <div key={venue} className="flex items-center space-x-3 bg-[#12121a] border border-gray-800 rounded-lg p-4">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
          <p className="text-gray-400 mb-4">Also serving nearby East Valley cities:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Chandler", slug: "chandler" },
              { name: "Mesa", slug: "mesa" },
              { name: "Queen Creek", slug: "queen-creek" },
              { name: "Tempe", slug: "tempe" },
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
            READY TO PLAY IN GILBERT?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Give your kids the best birthday party ever — or treat the whole family to an epic game day. We bring everything.
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
