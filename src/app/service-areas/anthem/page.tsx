import { BOOKING_URL, PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";
﻿import Link from "next/link";

export const metadata = {
  title: "Mobile Laser Tag & Party Games in Anthem, AZ | Altered Combat",
  description: "Anthem&apos;s mobile gaming experts. Tactical laser tag, VR, Nerf wars & water wars for birthday parties, community events, and family fun. We recommend Anthem Community Park. Veteran-owned.",
  keywords: ["laser tag Anthem AZ","mobile laser tag Anthem","birthday party Anthem","party games Anthem","Anthem Community Park laser tag","kids party Anthem AZ"],
};

export default function AnthemPage() {

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* HERO */}
      <section className="relative py-32 pt-40">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 text-orange-400 text-sm font-medium mb-6">North Phoenix&apos;s Premier Community</span>
          <h1 className="font-teko text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-6">
            MOBILE LASER TAG & PARTY GAMES IN <span className="text-orange-400">ANTHEM</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Anthem&apos;s wide-open parks and active community make it one of our favorite places to set up. We bring tactical laser tag, VR, Nerf wars, and water battles to your neighborhood — and we highly recommend Anthem Community Park as the perfect venue.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4">Book Your Anthem Event</a>
            <a href={PHONE_HREF} className="btn-secondary text-lg px-8 py-4">Call {PHONE_NUMBER}</a>
          </div>
        </div>
      </section>

      {/* WHY ANTHEM FAMILIES CHOOSE US */}
      <section className="py-20 bg-[#12121a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-12">WHY ANTHEM FAMILIES CHOOSE US</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              </div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">Community-Built for Fun</h3>
              <p className="text-gray-400">Anthem&apos;s master-planned community has some of the best parks in the North Valley — wide open, well-maintained, and perfect for our games.</p>
            </div>
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">Active Families</h3>
              <p className="text-gray-400">Anthem&apos;s tight-knit community loves outdoor events. Birthday parties, HOA gatherings, and youth group activities are our bread and butter here.</p>
            </div>
            <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">Proven &amp; Trusted</h3>
              <p className="text-gray-400">We&apos;ve worked with Anthem venues and know the area well. Professional setup, on-time arrivals, and 5-star service every time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ANTHEM COMMUNITY PARK — TOP RECOMMENDATION */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#12121a] border border-orange-500/30 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <span className="inline-block bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 text-orange-400 text-sm font-medium mb-4">Our Top Recommendation</span>
              <h2 className="font-teko text-4xl font-bold text-white mb-4">
                <a href="https://www.anthemcouncil.com/345/ACC-Parks" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors underline decoration-orange-500/50">ANTHEM COMMUNITY PARK</a>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">We&apos;ve worked with Anthem Community Park and can confidently say it&apos;s one of the best venues in the North Valley for our games. Spacious grass fields, great facilities, and easy access make it our go-to recommendation for Anthem events.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {["Massive open grass fields — perfect for laser tag arenas","Plenty of parking and easy load-in access","Covered ramadas nearby for your party setup","Clean, well-maintained grounds year-round","Restrooms and amenities on-site","Great for groups of all sizes"].map((item) => (
                <div key={item} className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm text-center">
              Note: Park permits may be required for events. Contact park staff at{" "}
              <a href="tel:623-879-3011" className="text-cyan-400 hover:text-cyan-300">(623) 879-3011</a>{" "}
              to be guided through the process.
            </p>
          </div>
        </div>
      </section>

      {/* OTHER ANTHEM EVENT SPOTS */}
      <section className="py-20 bg-[#12121a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-4">OTHER ANTHEM EVENT SPOTS</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">Beyond Anthem Community Park, there are plenty of great options in the area.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {["Anthem Civic Building","Opportunity Way Park","Liberty Bell Park","Gavilan Peak Parkway area parks","Your backyard or HOA common area","Local schools & churches"].map((venue) => (
              <div key={venue} className="flex items-center space-x-3 bg-[#0a0a0f] border border-gray-800 rounded-lg p-4">
                <svg className="w-5 h-5 text-orange-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span className="text-white">{venue}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEARBY AREAS */}
      <section className="py-16 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-4">Also serving nearby North Valley areas:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[{name:"Phoenix",slug:"phoenix"},{name:"Scottsdale",slug:"scottsdale"},{name:"Paradise Valley",slug:"paradise-valley"}].map((city) => (
              <Link key={city.slug} href={`/service-areas/${city.slug}`} className="bg-[#12121a] border border-gray-700 hover:border-cyan-500/50 rounded-full px-4 py-2 text-gray-300 hover:text-white transition-colors">{city.name}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-[#12121a] to-[#0a0a0f]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-teko text-4xl sm:text-5xl font-bold text-white mb-6">READY TO PLAY IN ANTHEM?</h2>
          <p className="text-xl text-gray-300 mb-8">We&apos;ll bring the action to your park, backyard, or venue — and we&apos;ll handle everything.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4">Book Now</a>
            <Link href="/games" className="btn-secondary text-lg px-8 py-4">View Our Games</Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <Link href="/parties-events" className="text-gray-400 hover:text-cyan-400 transition-colors">Event Types</Link>
            <span className="text-gray-600">·</span>
            <Link href="/service-areas" className="text-gray-400 hover:text-cyan-400 transition-colors">All Service Areas</Link>
            <span className="text-gray-600">·</span>
            <Link href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
