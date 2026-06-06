import { Cake, Building2, GraduationCap, Heart, Ticket, PartyPopper, Check } from 'lucide-react';

const allEventTypes = [
  {
    title: "Birthday Parties",
    description: "Make their birthday unforgettable! We bring the action right to your backyard or favorite park. Fun for all ages.",
    shortDescription: "Epic celebrations for kids, teens, and adults. We bring the action to you.",
    icon: { homepage: <Cake className="w-8 h-8" />, full: <Cake className="w-10 h-10" /> },
    href: "/parties-events",
    features: [
      "2-hour packages & up",
      "All equipment included",
      "Game host optional",
      "Nearly any venue works",
    ],
  },
  {
    title: "Corporate Events",
    description: "Build team spirit with competitive fun! Laser tag and VR are perfect for team building, company picnics, and office celebrations.",
    shortDescription: "Team building that's actually fun. Get your crew out of the office and into battle.",
    icon: { homepage: <Building2 className="w-8 h-8" />, full: <Building2 className="w-10 h-10" /> },
    href: "/parties-events",
    features: [
      "Large group packages",
      "Team-based games",
      "Competitive tournaments",
      "Flexible scheduling",
    ],
  },
  {
    title: "Schools & Churches",
    description: "Field days, end-of-year celebrations, fundraisers, and more. We work with schools across Arizona to create memorable events.",
    shortDescription: "Safe, supervised fun for youth groups, field days, and community events.",
    icon: { homepage: <GraduationCap className="w-8 h-8" />, full: <GraduationCap className="w-10 h-10" /> },
    href: "/parties-events",
    features: [
      "Large capacity (40+ players)",
      "Safe & supervised",
      "Teamwork & communication focused",
      "Flexible timing",
    ],
  },
  {
    title: "Conventions & Festivals",
    description: "Add excitement to your convention, festival, or community event. We bring the equipment and run the games.",
    shortDescription: "Large-scale entertainment that draws crowds and keeps them engaged.",
    icon: { homepage: <Ticket className="w-8 h-8" />, full: <Ticket className="w-10 h-10" /> },
    href: "/parties-events",
    features: [
      "Multi-day availability",
      "High-volume capacity",
      "Professional setup",
      "Crowd management",
    ],
  },
  {
    title: "Church & Youth Groups",
    description: "Fun, safe activities for youth groups and church events. Great for lock-ins, youth nights, and community gatherings.",
    shortDescription: "Fun, safe activities for youth groups and church events.",
    icon: { homepage: <Heart className="w-8 h-8" />, full: <Heart className="w-10 h-10" /> },
    href: "/parties-events",
    features: [
      "Packages for any group size",
      "All ages welcome",
      "Indoor/outdoor options",
      "Safe environment",
    ],
  },
  {
    title: "Private Parties",
    description: "A bachelor/bachelorette party, graduation, quinceañera, or just because. Any reason is a good reason to play!",
    shortDescription: "Any occasion is a good occasion. We bring the fun to your celebration.",
    icon: { homepage: <PartyPopper className="w-8 h-8" />, full: <PartyPopper className="w-10 h-10" /> },
    href: "/parties-events",
    features: [
      "Customizable packages",
      "Nearly any venue works",
      "All ages welcome",
      "Unforgettable fun",
    ],
  },
];

interface EventTypesProps {
  variant?: 'homepage' | 'full';
}

export default function EventTypes({ variant = 'homepage' }: EventTypesProps) {
  const events = variant === 'homepage' ? allEventTypes.slice(0, 4) : allEventTypes;

  if (variant === 'homepage') {
    return (
      <section className="py-12 bg-[#0a0a0f]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="font-teko text-4xl sm:text-5xl font-bold text-white mb-4">
              FUN FOR EVERY OCCASION
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From backyard birthdays to large-scale events, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event) => (
              <a
                key={event.title}
                href={event.href}
                className="group p-6 rounded-xl bg-[#12121a]/50 border border-gray-800/50 hover:border-cyan-500/30 transition-all hover:transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-400 mb-4 group-hover:bg-cyan-500/20 transition-colors">
                  {event.icon.homepage}
                </div>
                <h3 className="font-teko text-xl font-semibold text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {event.shortDescription}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 bg-[#0f0f18]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.title}
              className="bg-[#12121a] border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="text-cyan-400 mb-4">
                {event.icon.full}
              </div>
              <h3 className="font-teko text-2xl font-semibold text-white mb-2">
                {event.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {event.description}
              </p>
              <ul className="space-y-2">
                {event.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-sm text-gray-500"
                  >
                    <Check className="w-4 h-4 text-cyan-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
