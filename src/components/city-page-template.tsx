"use client";

import Link from "next/link";
import {
  Sparkles,
  Users,
  ShieldCheck,
  Zap,
  MapPin,
  Smile,
  Monitor,
  Briefcase,
  Home,
  DollarSign,
  Star,
  Building2,
  Clock,
  GraduationCap,
  ArrowLeftRight,
  Sun,
  BadgeCheck,
  Image,
  type LucideIcon,
} from "lucide-react";
import { BOOKING_URL, PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";
import type { CityConfig } from "@/lib/city-configs";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Users,
  ShieldCheck,
  Zap,
  MapPin,
  Smile,
  Monitor,
  Briefcase,
  Home,
  DollarSign,
  Star,
  Building2,
  Clock,
  GraduationCap,
  ArrowLeftRight,
  Sun,
  BadgeCheck,
  Image,
};

type ColorClasses = {
  text: string;
  bg: string;
  border: string;
  gradient: string;
};

const colorMap: Record<string, ColorClasses> = {
  "orange-500": {
    text: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    gradient: "from-orange-500/10",
  },
  "amber-600": {
    text: "text-amber-500",
    bg: "bg-amber-600/10",
    border: "border-amber-600/30",
    gradient: "from-amber-600/10",
  },
  "cyan-500": {
    text: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    gradient: "from-cyan-500/10",
  },
  "amber-500": {
    text: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    gradient: "from-amber-500/10",
  },
  "blue-500": {
    text: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    gradient: "from-blue-500/10",
  },
  "sky-500": {
    text: "text-sky-400",
    bg: "bg-sky-500/10",
    border: "border-sky-500/30",
    gradient: "from-sky-500/10",
  },
  "green-500": {
    text: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    gradient: "from-green-500/10",
  },
  "red-500": {
    text: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/30",
    gradient: "from-red-500/10",
  },
  "purple-500": {
    text: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    gradient: "from-purple-500/10",
  },
  "emerald-500": {
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    gradient: "from-emerald-500/10",
  },
  "indigo-500": {
    text: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/30",
    gradient: "from-indigo-500/10",
  },
  "violet-500": {
    text: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/30",
    gradient: "from-violet-500/10",
  },
  "teal-500": {
    text: "text-teal-400",
    bg: "bg-teal-500/10",
    border: "border-teal-500/30",
    gradient: "from-teal-500/10",
  },
  "stone-500": {
    text: "text-stone-400",
    bg: "bg-stone-500/10",
    border: "border-stone-500/30",
    gradient: "from-stone-500/10",
  },
  "lime-500": {
    text: "text-lime-400",
    bg: "bg-lime-500/10",
    border: "border-lime-500/30",
    gradient: "from-lime-500/10",
  },
  "rose-500": {
    text: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/30",
    gradient: "from-rose-500/10",
  },
  "yellow-500": {
    text: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/30",
    gradient: "from-yellow-500/10",
  },
  "yellow-600": {
    text: "text-yellow-500",
    bg: "bg-yellow-600/10",
    border: "border-yellow-600/30",
    gradient: "from-yellow-600/10",
  },
  "red-600": {
    text: "text-red-500",
    bg: "bg-red-600/10",
    border: "border-red-600/30",
    gradient: "from-red-600/10",
  },
};

export default function CityPageTemplate({ config }: { config: CityConfig }) {
  const c = colorMap[config.accentColor] ?? colorMap["cyan-500"];
  const nameUpper = config.name.toUpperCase();

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero */}
      <section className="relative py-16 pt-20">
        <div className={`absolute inset-0 bg-gradient-to-b ${c.gradient} to-transparent`} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className={`inline-block ${c.bg} border ${c.border} rounded-full px-4 py-2 ${c.text} text-sm font-medium mb-6`}>
            {config.nickname}
          </span>
          <h1 className="font-teko text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-6">
            MOBILE LASER TAG & PARTY GAMES IN{" "}
            <span className={c.text}>{nameUpper}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            {config.heroTagline}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              Book Your {config.name} Event
            </a>
            <a href={PHONE_HREF} className="btn-secondary text-lg px-8 py-4">
              Call {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </section>

      {/* Why Cards */}
      <section className="py-12 bg-[#12121a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-6">
            WHY {nameUpper} CHOOSES ALTERED COMBAT
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {config.whyCards.map((card) => {
              const Icon = iconMap[card.icon] ?? Sparkles;
              return (
                <div
                  key={card.title}
                  className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 text-center"
                >
                  <div className={`w-14 h-14 ${c.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`w-7 h-7 ${c.text}`} />
                  </div>
                  <h3 className="font-teko text-2xl font-semibold text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-400">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Neighborhoods (optional) */}
      {config.neighborhoods && config.neighborhoods.length > 0 && (
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-teko text-4xl font-bold text-white text-center mb-4">
              SERVING ALL OF {nameUpper}
            </h2>
            <p className="text-gray-400 text-center mb-6 max-w-2xl mx-auto">
              No matter which part of {config.name} you're in, we'll bring the
              games to you.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {config.neighborhoods.map((area) => (
                <div
                  key={area}
                  className="flex items-center space-x-3 bg-[#12121a] border border-gray-800 rounded-lg p-4"
                >
                  <svg
                    className={`w-5 h-5 ${c.text} flex-shrink-0`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Venues / Event Spots */}
      <section className={`py-12 ${config.neighborhoods ? "bg-[#12121a]" : ""}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-4">
            POPULAR {nameUpper} EVENT SPOTS
          </h2>
          <p className="text-gray-400 text-center mb-6 max-w-2xl mx-auto">
            {config.name}'s parks and venues are perfect for our mobile games.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {config.venues.map((venue) => (
              <div
                key={venue}
                className={`flex items-center space-x-3 ${config.neighborhoods ? "bg-[#0a0a0f]" : "bg-[#12121a]"} border border-gray-800 rounded-lg p-4`}
              >
                <svg
                  className={`w-5 h-5 ${c.text} flex-shrink-0`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-white">{venue}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Note (optional) */}
      {config.travelNote && (
        <section className="py-10 bg-[#12121a]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className={`${c.bg} border ${c.border} rounded-2xl p-8`}>
              <h3 className="font-teko text-2xl font-bold text-white mb-4">
                {config.travelNote.title}
              </h3>
              <p className="text-gray-300 mb-4">{config.travelNote.body}</p>
              <p className="text-gray-400 text-sm">{config.travelNote.footnote}</p>
            </div>
          </div>
        </section>
      )}

      {/* Nearby Cities */}
      {config.nearbyCities.length > 0 && (
        <section className="py-10 bg-[#0a0a0f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400 mb-4">Also serving nearby cities:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {config.nearbyCities.map((city) => (
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
      )}

      {/* CTA */}
      <section className="py-12 bg-gradient-to-b from-[#12121a] to-[#0a0a0f]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-teko text-4xl sm:text-5xl font-bold text-white mb-6">
            READY TO PLAY IN {nameUpper}?
          </h2>
          <p className="text-xl text-gray-300 mb-8">{config.ctaTagline}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              Book Now
            </a>
            <Link href="/games" className="btn-secondary text-lg px-8 py-4">
              View Our Games
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <Link
              href="/parties-events"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Event Types
            </Link>
            <span className="text-gray-600">·</span>
            <Link
              href="/service-areas"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              All Service Areas
            </Link>
            <span className="text-gray-600">·</span>
            <Link
              href="/contact"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
