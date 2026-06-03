import { BOOKING_URL, PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";
﻿import Link from "next/link";

export const metadata = {
  title: "Mobile Laser Tag & Party Games in Buckeye, AZ | Altered Combat",
  description: "Buckeye&apos;s premier mobile gaming. Tactical laser tag, VR, Nerf wars & water wars delivered to your backyard, park, or event. Veteran-owned, 5-star rated.",
  keywords: ["laser tag Buckeye AZ", "mobile laser tag Buckeye", "birthday party Buckeye", "Nerf party Buckeye", "VR party Buckeye"],
};

export default function BuckeyePage() {
  
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero */}
      <section className="relative py-32 pt-40">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 text-cyan-400 text-sm font-medium mb-6">
            Our Home Base
          </span>
          <h1 className="font-teko text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-6">
            MOBILE LASER TAG & PARTY GAMES IN <span className="text-cyan-400">BUCKEYE</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            We&apos;re your neighbors. Altered Combat is proudly based right here in Buckeye — which means faster setup, no travel fees, and the best service in the West Valley.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4">
              Book Your Buckeye Event
            </a>
            <a href={PHONE_HREF} className="btn-secondary text-lg px-8 py-4">
              Call {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </section>

      {/* Why Buckeye */}
      <section className="py-20 bg-[#12121a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-12">
            WHY BUCKEYE FAMILIES CHOOSE US
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">Local & Reliable</h3>
              <p className="text-gray-400">We&apos;re based in Buckeye. No long drives, no delays — just fast, dependable service from your neighbors.</p>
            </div>
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">No Travel Fees</h3>
              <p className="text-gray-400">Buckeye is home — you get our best rates with zero travel surcharges. More budget for the fun stuff.</p>
            </div>
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">Community First</h3>
              <p className="text-gray-400">We&apos;re invested in Buckeye. When you book with us, you&apos;re supporting a local, veteran-owned business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Venues */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-4">
            POPULAR BUCKEYE EVENT SPOTS
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            We&apos;ve hosted events all over Buckeye. Here are some favorite locations.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Sundance Park",
              "Skyline Regional Park", 
              "Festival Foothills Community Park",
              "Buckeye Community Center",
              "Your Backyard",
              "Local Schools & Churches"
            ].map((venue) => (
              <div key={venue} className="flex items-center space-x-3 bg-[#12121a] border border-gray-800 rounded-lg p-4">
                <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
              { name: "Goodyear", slug: "goodyear" },
              { name: "Avondale", slug: "avondale" },
              { name: "Litchfield Park", slug: "litchfield-park" },
              { name: "Surprise", slug: "surprise" },
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
            READY TO PLAY IN BUCKEYE?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            From backyard birthday parties to community events, we bring the action to you. Book online or give us a call.
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
