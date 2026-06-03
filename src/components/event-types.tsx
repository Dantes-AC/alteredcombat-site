import { Cake, Building2, GraduationCap, Ticket } from 'lucide-react';

const eventTypes = [
  {
    title: "Birthday Parties",
    description: "Epic celebrations for kids, teens, and adults. We bring the action to you.",
    icon: <Cake className="w-8 h-8" />,
    href: "/parties-events",
  },
  {
    title: "Corporate Events",
    description: "Team building that&apos;s actually fun. Get your crew out of the office and into battle.",
    icon: <Building2 className="w-8 h-8" />,
    href: "/parties-events",
  },
  {
    title: "Schools & Churches",
    description: "Safe, supervised fun for youth groups, field days, and community events.",
    icon: <GraduationCap className="w-8 h-8" />,
    href: "/parties-events",
  },
  {
    title: "Conventions & Festivals",
    description: "Large-scale entertainment that draws crowds and keeps them engaged.",
    icon: <Ticket className="w-8 h-8" />,
    href: "/parties-events",
  },
];

export default function EventTypes() {
  return (
    <section className="py-20 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-teko text-4xl sm:text-5xl font-bold text-white mb-4">
            FUN FOR EVERY OCCASION
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From backyard birthdays to large-scale events, we&apos;ve got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventTypes.map((event) => (
            <a
              key={event.title}
              href={event.href}
              className="group p-6 rounded-xl bg-[#12121a]/50 border border-gray-800/50 hover:border-cyan-500/30 transition-all hover:transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-400 mb-4 group-hover:bg-cyan-500/20 transition-colors">
                {event.icon}
              </div>
              <h3 className="font-teko text-xl font-semibold text-white mb-2">
                {event.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {event.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
