import Link from "next/link";
import { BOOKING_URL, PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";


export default function CTASection() {
  return (
    <section className="py-14 bg-gradient-to-b from-[#0f0f18] to-[#0a0a0f]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-teko text-4xl sm:text-5xl font-bold text-white mb-4">
          READY TO PLAY?
        </h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Book your next birthday party, team event, or celebration today. 
          We'll bring the action to you anywhere in Arizona and beyond.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-10 py-4"
          >
            Book Your Event
          </a>
          <a href={PHONE_HREF} className="btn-secondary text-lg px-10 py-4">
            Call {PHONE_NUMBER}
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          <Link href="/games" className="text-gray-400 hover:text-cyan-400 transition-colors">
            View Games
          </Link>
          <span className="text-gray-600">•</span>
          <Link href="/parties-events" className="text-gray-400 hover:text-cyan-400 transition-colors">
            Event Types
          </Link>
          <span className="text-gray-600">•</span>
          <Link href="/service-areas" className="text-gray-400 hover:text-cyan-400 transition-colors">
            Service Areas
          </Link>
        </div>
      </div>
    </section>
  );
}
