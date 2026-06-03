import Link from "next/link";
import type { Metadata } from "next";
import { PencilRuler } from "lucide-react";
import InsuranceSection from "@/components/insurance-section";
import EventTypes from "@/components/event-types";
import { BOOKING_URL, CALENDLY_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Parties & Events | Altered Combat - Birthday Parties, Corporate Events",
  description:
    "Book mobile laser tag, Nerf Wars, or VR for birthday parties, corporate team building, school events, church gatherings, and more. Serving Arizona and beyond.",
};

export default function PartiesEventsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a0f] to-[#0f0f18]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-teko text-5xl sm:text-6xl font-bold text-white mb-4">
            PARTIES & EVENTS
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From backyard birthdays to corporate team building, we bring the
            games to nearly any event.
          </p>
        </div>
      </section>

      {/* Games Callout */}
      <section className="py-8 bg-[#0f0f18] border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            Not sure which game is right for your event?{" "}
            <Link
              href="/games"
              className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
            >
              Explore our games →
            </Link>
          </p>
        </div>
      </section>

      {/* Event Types */}
      <EventTypes variant="full" />

      {/* Insurance Section */}
      <InsuranceSection />

      {/* Custom Event Consultation */}
      <section className="py-16 bg-[#0f0f18]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#12121a] border border-cyan-500/30 rounded-2xl p-8 md:p-12 text-center">
            <PencilRuler className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
            <h2 className="font-teko text-3xl sm:text-4xl font-bold text-white mb-3">
              NEED SOMETHING CUSTOM?
            </h2>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Multi-day conventions, extended activations, or events that
              don&apos;t fit our standard packages? Schedule a free 30-minute
              consultation and let&apos;s build your perfect event.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block text-lg px-10 py-4"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Venues */}
      <section className="py-20 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-teko text-4xl font-bold text-white mb-4">
            WE COME TO YOU
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Parks • Backyards • Schools • Churches • Offices • Conventions
          </p>
          <p className="text-gray-400 mb-8">
            Serving Arizona and beyond. If you have a space, we can make it a
            battlefield.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-10 py-4"
            >
              Book Your Event
            </a>
            <Link
              href="/service-areas"
              className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
            >
              View Service Areas →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
