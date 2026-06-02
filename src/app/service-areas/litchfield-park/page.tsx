import { BOOKING_URL } from "@/lib/constants";
﻿import Link from "next/link";

export const metadata = {
  title: "Mobile Laser Tag & Party Games in Litchfield Park, AZ | Altered Combat",
  description: "Litchfield Park&apos;s premier mobile gaming. Tactical laser tag, VR, Nerf wars & water wars for upscale birthday parties and community events. Veteran-owned.",
  keywords: ["laser tag Litchfield Park AZ", "mobile laser tag Litchfield Park", "birthday party Litchfield Park", "party games Litchfield Park"],
};

export default function LitchfieldParkPage() {
  
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <section className="relative py-32 pt-40">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 text-emerald-400 text-sm font-medium mb-6">
            The West Valley&apos;s Hidden Gem
          </span>
          <h1 className="font-teko text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-6">
            MOBILE LASER TAG & PARTY GAMES IN <span className="text-emerald-400">LITCHFIELD PARK</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Litchfield Park&apos;s tree-lined streets and beautiful parks deserve premium entertainment. We bring tactical laser tag, VR, Nerf wars, and water battles to your upscale event.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4">
              Book Your Litchfield Park Event
            </a>
            <a href="tel:623-476-4906" className="btn-secondary text-lg px-8 py-4">
              Call (623) 476-4906
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#12121a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-12">WHY LITCHFIELD PARK CHOOSES US</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              </div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">Premium Experience</h3>
              <p className="text-gray-400">Professional-grade equipment, polished service, and attention to detail that matches Litchfield Park&apos;s standards.</p>
            </div>
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              </div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">Beautiful Backyards</h3>
              <p className="text-gray-400">Litchfield Park&apos;s spacious properties are perfect for our games. We set up, you enjoy, we clean up.</p>
            </div>
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">Hassle-Free</h3>
              <p className="text-gray-400">We handle everything — setup, games, breakdown. You focus on your guests and enjoy the party.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-4">POPULAR LITCHFIELD PARK EVENT SPOTS</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">Litchfield Park&apos;s charming parks and community spaces are ideal for our games.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {["Litchfield Park Recreation Center","Community Park","Litchfield Elementary School Fields","La Loma Park","Your Backyard","Local Schools & Churches"].map((venue) => (
              <div key={venue} className="flex items-center space-x-3 bg-[#12121a] border border-gray-800 rounded-lg p-4">
                <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
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
            {[{name:"Goodyear",slug:"goodyear"},{name:"Avondale",slug:"avondale"},{name:"Buckeye",slug:"buckeye"},{name:"Glendale",slug:"glendale"}].map((city) => (
              <Link key={city.slug} href={`/service-areas/${city.slug}`} className="bg-[#0a0a0f] border border-gray-700 hover:border-cyan-500/50 rounded-full px-4 py-2 text-gray-300 hover:text-white transition-colors">{city.name}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#12121a] to-[#0a0a0f]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-teko text-4xl sm:text-5xl font-bold text-white mb-6">READY TO PLAY IN LITCHFIELD PARK?</h2>
          <p className="text-xl text-gray-300 mb-8">Elevate your next event with games everyone will remember.</p>
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
