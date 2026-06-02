const CakeIcon = () => (
  <svg
    className="w-10 h-10"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-8a2 2 0 00-2-2H6a2 2 0 00-2 2v8" />
    <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
    <path d="M2 21h20" />
    <path d="M7 8v3" />
    <path d="M12 8v3" />
    <path d="M17 8v3" />
    <path d="M7 4h.01" />
    <path d="M12 4h.01" />
    <path d="M17 4h.01" />
  </svg>
);

const BuildingIcon = () => (
  <svg
    className="w-10 h-10"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01" />
    <path d="M16 6h.01" />
    <path d="M8 10h.01" />
    <path d="M16 10h.01" />
    <path d="M8 14h.01" />
    <path d="M16 14h.01" />
  </svg>
);

const GradCapIcon = () => (
  <svg
    className="w-10 h-10"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
  </svg>
);

const UsersIcon = () => (
  <svg
    className="w-10 h-10"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 00-3-3.87" />
    <path d="M16 3.13a4 4 0 010 7.75" />
  </svg>
);

const SparklesIcon = () => (
  <svg
    className="w-10 h-10"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9.937 15.5A2 2 0 008.5 14.063l-6.135-1.582a.5.5 0 010-.962L8.5 9.936A2 2 0 009.937 8.5l1.582-6.135a.5.5 0 01.963 0L14.063 8.5A2 2 0 0015.5 9.937l6.135 1.582a.5.5 0 010 .963L15.5 14.063a2 2 0 00-1.437 1.437l-1.582 6.135a.5.5 0 01-.963 0z" />
    <path d="M20 3v4" />
    <path d="M22 5h-4" />
  </svg>
);

const PartyIcon = () => (
  <svg
    className="w-10 h-10"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5.8 11.3L2 22l10.7-3.79" />
    <path d="M4 3h.01" />
    <path d="M22 8h.01" />
    <path d="M15 2h.01" />
    <path d="M22 20h.01" />
    <path d="M22 2l-2.24.75a2.9 2.9 0 00-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" />
    <path d="M22 13l-1.34-.45a2.9 2.9 0 00-3.12 1.96c-.24.72-1.04 1.04-1.68.67l-.33-.2" />
  </svg>
);

const eventTypes = [
  {
    title: "Birthday Parties",
    description:
      "Make their birthday unforgettable! We bring the action right to your backyard or favorite park. Fun for all ages.",
    icon: <CakeIcon />,
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
    icon: <BuildingIcon />,
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
    icon: <GradCapIcon />,
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
    icon: <UsersIcon />,
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
    icon: <SparklesIcon />,
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
    icon: <PartyIcon />,
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
                    <svg
                      className="w-4 h-4 text-cyan-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
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
