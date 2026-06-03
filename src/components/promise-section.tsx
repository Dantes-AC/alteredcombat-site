import { Clock, Wand2, Shield, Umbrella, BadgeCheck } from 'lucide-react';

const promises = [
  {
    title: "On-Time Setup",
    description: "We arrive early and have everything ready before your guests arrive.",
    icon: <Clock className="w-7 h-7" />,
  },
  {
    title: "Hassle-Free Experience",
    description: "We handle setup, breakdown, and everything in between. You just enjoy the event.",
    icon: <Wand2 className="w-7 h-7" />,
  },
  {
    title: "Safety First",
    description: "Full safety briefings before every event. Professional equipment inspected and maintained.",
    icon: <Shield className="w-7 h-7" />,
  },
  {
    title: "$2M Fully Insured",
    description: "Complete liability coverage for your peace of mind. We take our responsibility seriously.",
    icon: <Umbrella className="w-7 h-7" />,
  },
];

export default function PromiseSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0f0f18] to-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
            <BadgeCheck className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-medium text-sm">Our Commitment To You</span>
          </div>
          <h2 className="font-teko text-4xl sm:text-5xl font-bold text-white mb-4">
            THE ALTERED COMBAT PROMISE
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Book with confidence. We're committed to making your event unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {promises.map((promise) => (
            <div
              key={promise.title}
              className="text-center p-6 rounded-xl bg-[#12121a]/50 border border-gray-800/50 hover:border-cyan-500/30 transition-colors"
            >
              <div className="w-14 h-14 bg-cyan-500/10 rounded-full flex items-center justify-center text-cyan-400 mx-auto mb-4">
                {promise.icon}
              </div>
              <h3 className="font-teko text-xl font-semibold text-white mb-2">
                {promise.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {promise.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Proudly serving Arizona & beyond since 2020
          </p>
        </div>
      </div>
    </section>
  );
}
