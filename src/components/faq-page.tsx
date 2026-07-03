"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Calendar, DollarSign, MapPin, Shield, Cloud, Users, Phone } from "lucide-react";
import { BOOKING_URL, CALENDLY_URL, PHONE_NUMBER, PHONE_HREF, EMAIL } from "@/lib/constants";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQCategory {
  icon: React.ReactNode;
  label: string;
  items: FAQItem[];
}

const categories: FAQCategory[] = [
  {
    icon: <Calendar className="w-5 h-5" />,
    label: "Booking & Availability",
    items: [
      {
        question: "How far in advance do I need to book?",
        answer:
          "We recommend booking at least 2–3 weeks in advance, especially for weekend dates. Summer and holiday weekends book fast. That said, we'll always try to accommodate last-minute requests — give us a call and we'll see what we can do.",
      },
      {
        question: "How do I book an event?",
        answer: (
          <>
            The easiest way is through our{" "}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 underline"
            >
              online booking system
            </a>
            . You can also{" "}
            <a href={PHONE_HREF} className="text-cyan-400 hover:text-cyan-300 underline">
              call or text us
            </a>{" "}
            at {PHONE_NUMBER}, or{" "}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 underline"
            >
              schedule a free consultation
            </a>{" "}
            if you have questions before committing.
          </>
        ),
      },
      {
        question: "Can I book same-day?",
        answer:
          "Sometimes, yes — but it depends on our schedule, travel distance, and will include a surcharge. Call or text us directly at " +
          PHONE_NUMBER +
          " and we'll do our best to make it happen.",
      },
      {
        question: "What's your cancellation policy?",
        answer: (
          <>
            Cancel more than 14 days out and you'll get a full refund. Inside
            7–13 days, cancellations aren't refundable but you'll receive a
            100% credit valid for 90 days. Inside 6 days, credit is issued at
            our discretion, and cancellations inside 48 hours aren't eligible
            for a refund or credit. See our{" "}
            <Link href="/terms-of-service" className="text-cyan-400 hover:text-cyan-300 underline">
              Terms of Service
            </Link>{" "}
            for the full policy.
          </>
        ),
      },
      {
        question: "Can I reschedule my event?",
        answer: (
          <>
            Yes — give us as much notice as possible. More than 14 days out,
            your first reschedule is free (additional changes are $100 each).
            Inside 7–13 days, a 20% rescheduling fee applies. Inside 7 days,
            rescheduling isn't available. Full details are in our{" "}
            <Link href="/terms-of-service" className="text-cyan-400 hover:text-cyan-300 underline">
              Terms of Service
            </Link>
            .
          </>
        ),
      },
    ],
  },
  {
    icon: <DollarSign className="w-5 h-5" />,
    label: "Pricing & Packages",
    items: [
      {
        question: "How much does it cost?",
        answer:
          "Pricing depends on the game type, package duration, group size, and travel distance. Our online booking system shows current pricing for each available package. For larger or custom events, schedule a free consultation and we'll build a quote.",
      },
      {
        question: "Is there a deposit required?",
        answer:
          "No deposit — full payment is due at the time of booking to secure your date. Your event isn't officially reserved until payment is received and you've gotten an official confirmation email from us. Quotes and conversations don't hold a date.",
      },
      {
        question: "Do you offer group discounts?",
        answer:
          "We have packages designed for different group sizes, so larger groups are already priced accordingly. We don't negotiate pricing, but we do offer a referral credit program — refer a friend who books and earn up to $100 toward your next event.",
      },
      {
        question: "What's included in the price?",
        answer:
          "All equipment, setup, teardown, and travel (within standard range) are included. We bring everything — you just provide the space and the players. Optional add-ons like a game host are available depending on the package.",
      },
      {
        question: "Do you offer referral rewards?",
        answer: (
          <>
            Yes! When you refer someone who books with us, you earn approximately 7% of their booking value as credit toward your next event — up to $100. No codes needed. Your friend just mentions your name when they book. Learn more on our{" "}
            <Link href="/referral-program" className="text-cyan-400 hover:text-cyan-300 underline">
              referral program page
            </Link>
            .
          </>
        ),
      },
    ],
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Travel & Service Area",
    items: [
      {
        question: "Where do you serve?",
        answer: (
          <>
            We're based in Buckeye, Arizona and serve the entire state —
            Phoenix Metro, East Valley, West Valley, Tucson, Flagstaff,
            Prescott, Sedona, and beyond. If you're not sure whether we can
            reach you, use our{" "}
            <Link href="/mileage-calculator" className="text-cyan-400 hover:text-cyan-300 underline">
              mileage calculator
            </Link>{" "}
            or just ask.
          </>
        ),
      },
      {
        question: "Do you charge for travel?",
        answer: (
          <>
            If your event location is within 15 miles of our base in Buckeye,
            there's no travel surcharge. Beyond 15 miles, you're in our
            extended service area and a travel fee applies. Use our{" "}
            <Link href="/mileage-calculator" className="text-cyan-400 hover:text-cyan-300 underline">
              mileage calculator
            </Link>{" "}
            to check your distance.
          </>
        ),
      },
      {
        question: "Do you come to my location?",
        answer:
          "Yes — that's the whole point. We bring everything to you: your backyard, a park, a school, a church, a corporate campus, a convention center. You provide the space; we handle everything else.",
      },
      {
        question: "What kind of space do you need?",
        answer: (
          <>
            Space needs depend on the game and how many players you have —
            exact requirements are listed in each experience's description.
            As a general guide:
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>
                <span className="text-white font-medium">VR:</span> Indoor
                only. Needs the smallest footprint of any of our games.
              </li>
              <li>
                <span className="text-white font-medium">Laser Tag:</span>{" "}
                Indoor or outdoor (weather dependent). At least 1,500 sq ft.
              </li>
              <li>
                <span className="text-white font-medium">Nerf Wars:</span>{" "}
                Indoor or outdoor. At least 1,500 sq ft if using our
                obstacles.
              </li>
              <li>
                <span className="text-white font-medium">Water Wars:</span>{" "}
                Outdoor only. At least 1,500 sq ft if using our obstacles.
              </li>
            </ul>
          </>
        ),
      },
    ],
  },
  {
    icon: <Users className="w-5 h-5" />,
    label: "Age, Groups & Safety",
    items: [
      {
        question: "What's the minimum age to play?",
        answer: (
          <>
            Age minimums vary by game:
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>
                <span className="text-white font-medium">Nerf Wars &amp; Water Wars:</span>{" "}
                No minimum age — these work for players of any age.
              </li>
              <li>
                <span className="text-white font-medium">Laser Tag:</span>{" "}
                Ages 8 and up, based on equipment size and weight, and the
                strategic gameplay involved.
              </li>
              <li>
                <span className="text-white font-medium">VR:</span> Ages 12
                and up, based on headset fit, cognitive demands, and
                manufacturer guidance.
              </li>
            </ul>
          </>
        ),
      },
      {
        question: "Is there a minimum or maximum group size?",
        answer:
          "There's no minimum group size, though we always recommend at least six players for the best experience. Maximums vary by package and game, and are listed in the description of each package.",
      },
      {
        question: "Is it safe?",
        answer:
          "Yes — every piece of equipment is cleaned and inspected before each event to make sure it's functioning properly and ready to go. Our laser tag gear uses FDA-certified Class 1 eye-safe lasers, so there's no risk to players' eyes during gameplay.",
      },
      {
        question: "Do adults play too, or just kids?",
        answer:
          "Everyone plays. Our games are just as fun for adults as they are for kids. Many of our corporate events and adult parties are some of our best sessions.",
      },
    ],
  },
  {
    icon: <Cloud className="w-5 h-5" />,
    label: "Weather & Logistics",
    items: [
      {
        question: "What happens if it rains or gets too hot?",
        answer:
          "Arizona weather can be intense. If unsafe conditions (extreme heat, monsoon, lightning) come up before we start setup, you'll receive a 100% credit and we'll help you find a new date. Once setup has begun, the event is considered delivered, so we're not able to issue refunds or credits if we need to pause, modify, or end gameplay early — safety always comes first, though, and we'll never keep playing through something dangerous.",
      },
      {
        question: "Do you do indoor events?",
        answer:
          "Yes. Many of our games adapt well to indoor spaces like gyms, warehouses, church halls, and event centers. VR in particular works great indoors. If you have an indoor venue in mind, tell us during booking.",
      },
      {
        question: "How long does setup and teardown take?",
        answer:
          "Setup typically takes 30–60 minutes depending on the game and package. Teardown is usually 20–30 minutes. We handle all of it — you don't need to lift a finger.",
      },
    ],
  },
  {
    icon: <Shield className="w-5 h-5" />,
    label: "Insurance & Licensing",
    items: [
      {
        question: "Are you insured?",
        answer:
          "Yes. We carry comprehensive coverage including $1M/$2M general liability, inland marine insurance for equipment in transit, and errors & omissions coverage. A certificate of insurance is available upon request for venues and event planners.",
      },
      {
        question: "Are you a licensed business?",
        answer: "Yes. Altered Combat LLC is a fully licensed business operating in Arizona.",
      },
      {
        question: "Can you provide proof of insurance for a venue?",
        answer:
          "Absolutely. Just let us know you need a COI and we'll get it to you. Email us at " +
          EMAIL +
          " or request it during booking.",
      },
    ],
  },
];

function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full text-left py-5 flex items-center justify-between gap-4 group bg-transparent"
            aria-expanded={openIndex === i}
          >
            <span className="text-white font-medium text-lg group-hover:text-cyan-300 transition-colors">
              {item.question}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-cyan-400 flex-shrink-0 transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === i && (
            <div className="pb-5 text-gray-400 text-base leading-relaxed">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="pt-12">
      {/* Hero */}
      <section className="pt-12 pb-8 bg-gradient-to-b from-[#0a0a0f] to-[#0f0f18]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-teko text-5xl sm:text-6xl font-bold text-white mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to know before you book. Don't see your
            question?{" "}
            <a href={PHONE_HREF} className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Give us a call
            </a>{" "}
            or{" "}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              schedule a free consultation
            </a>
            .
          </p>
        </div>
      </section>

      {/* Category tabs + content */}
      <section className="py-12 bg-[#0f0f18]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category nav */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(i)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-transparent border-2 transition-all duration-300 ${
                  activeCategory === i
                    ? "border-cyan-500 text-cyan-400"
                    : "border-cyan-500/30 text-gray-400 hover:border-cyan-500 hover:text-cyan-400"
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>

          {/* Active category */}
          <div className="bg-[#12121a] border border-white/10 rounded-2xl px-6 md:px-10 py-2">
            <FAQAccordion items={categories[activeCategory].items} />
          </div>
        </div>
      </section>

      {/* Still have questions CTA */}
      <section className="py-12 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#12121a] border border-cyan-500/30 rounded-2xl p-8 md:p-12 text-center">
            <Phone className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
            <h2 className="font-teko text-3xl sm:text-4xl font-bold text-white mb-3">
              STILL HAVE QUESTIONS?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              We're real people and we love talking about what we do. Call or
              text us, schedule a free consultation, or just fire off an email.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-10 py-4"
              >
                Book an Event
              </a>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
              >
                Schedule a Consultation →
              </a>
            </div>
            <p className="mt-6 text-gray-500 text-sm">
              Or call/text us directly at{" "}
              <a href={PHONE_HREF} className="text-cyan-400 hover:text-cyan-300">
                {PHONE_NUMBER}
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
