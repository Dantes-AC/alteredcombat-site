import { Cake, Building2, GraduationCap, Heart, Ticket, PartyPopper, Check } from 'lucide-react';

const eventTypes = [
  {
    title: "Birthday Parties",
    description:
      "Make their birthday unforgettable! We bring the action right to your backyard or favorite park. Fun for all ages.",
    icon: <Cake className="w-10 h-10" />,
    features: [
      "2-hour packages & up",
      "All equipment included",
      "Game host optional",
      "Nearly any venue works",
    ],
  },
  {
    title: "Corporate Events",
    description:
      "Build team spirit with competitive fun! Laser tag and VR are perfect for team building, company picnics, and office celebrations.",
    icon: <Building2 className="w-10 h-10" />,
    features: [
      "Large group packages",
      "Team-based games",
      "Competitive tournaments",
      "Flexible scheduling",
    ],
  },
  {
    title: "School Events",
    description:
      "Field days, end-of-year celebrations, fundraisers, and more. We work with schools across Arizona to create memorable events.",
    icon: <GraduationCap className="w-10 h-10" />,
    features: [
      "Large capacity (40+ players)",
      "Safe & supervised",
      "Teamwork & communication focused",
      "Flexible timing",
    ],
  },
  {
    title: "Church & Youth Groups",
    description:
      "Fun, safe activities for youth groups and church events. Great for lock-ins, youth nights, and community gatherings.",
    icon: <Heart className="w-10 h-10" />,
    features: [
      "Packages for any group size",
      "All ages welcome",
      "Indoor/outdoor options",
      "Safe environment",
    ],
  },
  {
    title: "Conventions & Festivals",
    description:
      "Add excitement to your convention, festival, or community event. We bring the equipment and run the games.",
    icon: <Ticket className="w-10 h-10" />,
    features: [
      "Multi-day availability",
      "High-volume capacity",
      "Professional setup",
      "Crowd management",
    ],
  },
  {
    title: "Private Parties",
    description:
      "A bachelor/bachelorette party, graduation, quinceañera, or just because. Any reason is a good reason to play!",
    icon: <PartyPopper className="w-10 h-10" />,
    features: [
      "Customizable packages",
      "Nearly any venue works",
      "All ages welcome",
      "Unforgettable fun",
    ],
  },
];

export default function EventTypesGrid() {
  return (
    <section className="py-16 bg-[#0f0f18]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventTypes.map((event) => (
            <div
              key={event.title}
              className="bg-[#12121a] border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="text-cyan-400 mb-4">
                {event.icon}
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
