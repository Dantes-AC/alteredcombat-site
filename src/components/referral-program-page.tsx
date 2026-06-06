import React from "react";
import Link from "next/link";
import { Heart, Megaphone, Trophy, DollarSign, Shield, HelpCircle } from "lucide-react";
import { BOOKING_URL, CALENDLY_URL } from "@/lib/constants";

export default function ReferralProgramPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a0f] to-[#0f0f18]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-teko text-5xl sm:text-6xl font-bold text-white mb-4">
            KNOW SOMEONE WHO'D LOVE THIS?
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Instead of wasting money on marketing agencies, we'd rather reward
            the customers who actually spread the word. Tell a friend about
            Altered Combat and earn booking credit when they book.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#0f0f18]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-teko text-4xl font-bold text-white text-center mb-12">
            HOW IT WORKS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/30 rounded-full flex items-center justify-center mx-auto">
                <Trophy className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="font-teko text-2xl font-bold text-white">
                HAVE AN EPIC EVENT
              </h3>
              <p className="text-gray-400">
                You book with us, we show up and deliver an unforgettable
                experience for you and your guests.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/30 rounded-full flex items-center justify-center mx-auto">
                <Megaphone className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="font-teko text-2xl font-bold text-white">
                SPREAD THE WORD
              </h3>
              <p className="text-gray-400">
                When someone you know is planning a party or event, tell them
                about Altered Combat and ask them to mention your name when
                they book.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/30 rounded-full flex items-center justify-center mx-auto">
                <DollarSign className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="font-teko text-2xl font-bold text-white">
                EARN BOOKING CREDIT
              </h3>
              <p className="text-gray-400">
                Once their booking is confirmed, we'll apply credit to your
                account automatically — no forms, no hassle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credit Details */}
      <section className="py-20 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#12121a] border border-cyan-500/30 rounded-2xl p-8 md:p-12">
            <h2 className="font-teko text-4xl font-bold text-white text-center mb-8">
              CREDIT DETAILS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="text-cyan-400 font-semibold text-sm uppercase tracking-wide">
                  How Much
                </p>
                <p className="text-white text-lg">
                  ~7% of the referred booking value
                </p>
                <p className="text-gray-400 text-sm">
                  Up to a maximum of $100 per referral
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-cyan-400 font-semibold text-sm uppercase tracking-wide">
                  What You Get
                </p>
                <p className="text-white text-lg">Altered Combat booking credit</p>
                <p className="text-gray-400 text-sm">
                  Applied to your next event with us
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-cyan-400 font-semibold text-sm uppercase tracking-wide">
                  No Codes Needed
                </p>
                <p className="text-white text-lg">Just your name</p>
                <p className="text-gray-400 text-sm">
                  The referred customer enters your name in the "How did you
                  hear about us?" field at checkout
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-cyan-400 font-semibold text-sm uppercase tracking-wide">
                  No Limit on Referrals
                </p>
                <p className="text-white text-lg">Refer as many people as you like</p>
                <p className="text-gray-400 text-sm">
                  Every confirmed booking earns you credit
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Do This */}
      <section className="py-20 bg-[#0f0f18]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/30 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-cyan-400" />
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="font-teko text-4xl font-bold text-white">
                WHY WE DO THIS
              </h2>
              <p className="text-gray-400 text-lg">
                Altered Combat is veteran-owned and built from the ground up by
                people who genuinely love what they do. We've been burned by
                marketing agencies — promised leads, delivered excuses, and
                charged a premium for both.
              </p>
              <p className="text-gray-400 text-lg">
                The truth is, our best customers come from word of mouth. When
                someone who's had a great experience tells a friend, that's
                worth more than any ad campaign we could run. So instead of
                sending that money to an agency, we'd rather put it back in
                your pocket.
              </p>
              <p className="text-gray-400 text-lg">
                You're not just a customer — you're a champion for what we've
                built. This program is our way of saying thank you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Tracking Works */}
      <section className="py-20 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/30 rounded-full flex items-center justify-center">
                <HelpCircle className="w-8 h-8 text-cyan-400" />
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="font-teko text-4xl font-bold text-white">
                HOW TRACKING WORKS
              </h2>
              <p className="text-gray-400 text-lg">
                There's nothing complicated here. Our checkout form already
                includes a "How did you hear about us?" field. When your
                referred friend books, they simply enter your name in that
                field.
              </p>
              <p className="text-gray-400 text-lg">
                We review every booking, match the name, and apply your credit
                manually. No tracking pixels, no referral codes, no third-party
                apps. Just a name and a handshake.
              </p>
              <p className="text-gray-400 text-sm text-cyan-400">
                Have a question about a referral? Reach out anytime — we're
                easy to get ahold of.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0f0f18]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#12121a] border border-cyan-500/30 rounded-2xl p-8 md:p-12 text-center">
            <Heart className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
            <h2 className="font-teko text-3xl sm:text-4xl font-bold text-white mb-3">
              READY TO BOOK YOUR NEXT EVENT?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Every great referral starts with your own great experience. Book
              your event today — and when your friends ask where the fun came
              from, you'll know what to tell them.
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
                Ask a Question →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
