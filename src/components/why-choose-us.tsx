import { MapPin, PackageOpen, Users, Star } from 'lucide-react';

const reasons = [
  {
    title: "We Come To You",
    description: "Parks, backyards, schools, churches, offices, conventions — we set up nearly anywhere.",
    icon: <MapPin className="w-8 h-8" />,
  },
  {
    title: "All-Inclusive Setup",
    description: "Equipment, bunkers, safety briefings — we handle everything so you can focus on the fun.",
    icon: <PackageOpen className="w-8 h-8" />,
  },
  {
    title: "Something For Everyone",
    description: "From kids' birthday parties to corporate team building.",
    icon: <Users className="w-8 h-8" />,
  },
  {
    title: "Proven Track Record",
    description: "5 years and thousands of happy guests. We know how to deliver an unforgettable event.",
    icon: <Star className="w-8 h-8" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a0f] to-[#0f0f18]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-teko text-4xl sm:text-5xl font-bold text-white mb-4">
            WHY ALTERED COMBAT?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We make hosting epic events effortless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex items-start space-x-4 p-6 rounded-xl bg-[#12121a]/50 border border-gray-800/50"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-400">
                {reason.icon}
              </div>
              <div>
                <h3 className="font-teko text-xl font-semibold text-white mb-1">
                  {reason.title}
                </h3>
                <p className="text-gray-400">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
