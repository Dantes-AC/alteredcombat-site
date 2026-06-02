import { BOOKING_URL } from "@/lib/constants";
﻿import Link from "next/link";

export const metadata = {
  title: "Mobile Laser Tag & Party Games in Mesa, AZ | Altered Combat",
  description: "Mesa&apos;s top mobile gaming. Tactical laser tag, arena-scale VR, Nerf wars & water wars for parties, schools, churches, and community events. Veteran-owned.",
  keywords: ["laser tag Mesa AZ", "mobile laser tag Mesa", "birthday party Mesa", "Nerf party Mesa", "school event Mesa"],
};

export default function MesaPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <section className="relative py-32 pt-40">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2 text-red-400 text-sm font-medium mb-6">Arizona&apos;s Third Largest City</span>
          <h1 className="font-teko text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-6">MOBILE LASER TAG & PARTY GAMES IN <span className="text-red-400">MESA</span></h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">Big city, big events. From East Mesa to Downtown, we bring tactical laser tag, VR, Nerf wars, and water battles to Mesa&apos;s diverse neighborhoods, schools, and community centers.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4">Book Your Mesa Event</a>
            <a href="tel:623-476-4906" className="btn-secondary text-lg px-8 py-4">Call (623) 476-4906</a>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#12121a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-12">WHY MESA BOOKS ALTERED COMBAT</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4"><svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg></div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">Schools & Churches</h3>
              <p className="text-gray-400">Mesa&apos;s schools and churches love us for field days, youth group events, and fundraisers. We handle groups of all sizes.</p>
            </div>
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4"><svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">We Come to You</h3>
              <p className="text-gray-400">East Mesa, West Mesa, Downtown — doesn&apos;t matter. We bring everything and set up wherever you need us.</p>
            </div>
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4"><svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg></div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">Community Events</h3>
              <p className="text-gray-400">HOA block parties, neighborhood gatherings, community center events — we&apos;re the entertainment that brings people together.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-4">POPULAR MESA EVENT SPOTS</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">Mesa has no shortage of great parks and venues. Here&apos;s where we set up most often.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {["Red Mountain Park","Riverview Park","Pioneer Park","Eastmark Great Park","Mesa Community Centers","Your Backyard or Church"].map((venue) => (
              <div key={venue} className="flex items-center space-x-3 bg-[#12121a] border border-gray-800 rounded-lg p-4">
                <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
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
            {[{name:"Gilbert",slug:"gilbert"},{name:"Chandler",slug:"chandler"},{name:"Tempe",slug:"tempe"},{name:"Apache Junction",slug:"apache-junction"}].map((city) => (
              <Link key={city.slug} href={`/service-areas/${city.slug}`} className="bg-[#0a0a0f] border border-gray-700 hover:border-cyan-500/50 rounded-full px-4 py-2 text-gray-300 hover:text-white transition-colors">{city.name}</Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-[#12121a] to-[#0a0a0f]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-teko text-4xl sm:text-5xl font-bold text-white mb-6">READY TO PLAY IN MESA?</h2>
          <p className="text-xl text-gray-300 mb-8">Whether it&apos;s a backyard birthday, a school field day, or a church youth event — we&apos;ve got you covered.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4">Book Now</a>
            <Link href="/games" className="btn-secondary text-lg px-8 py-4">View Our Games</Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <Link href="/parties-events" className="text-gray-400 hover:text-cyan-400 transition-colors">Event Types</Link>
            <span className="text-gray-600">•</span>
            <Link href="/service-areas" className="text-gray-400 hover:text-cyan-400 transition-colors">All Service Areas</Link>
            <span className="text-gray-600">•</span>
            <Link href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
