import Link from 'next/link';

const games = [
  {
    title: 'Tactical Laser Tag',
    tagline: 'Your favorite FPS, in real life.',
    description: 'Laser tag, reinvented. Pro-grade gear, epic game modes, and kill streaks you have to experience to believe.',
    image: '/images/game-laser-tag.jpg',
    alt: 'Group playing tactical laser tag outdoors with laser tag guns and bunkers',
    href: '/games#laser-tag',
  },
  {
    title: 'Arena-Scale VR',
    tagline: 'Step into another world.',
    description: 'Fight zombies. Escape ancient temples. Explore the impossible. This is VR like you\'ve never experienced.',
    image: '/images/game-vr.jpg',
    alt: 'Players in arena-scale free-roam VR experience',
    href: '/games#vr',
  },
  {
    title: 'Nerf Wars',
    tagline: 'Classic foam flinging fun.',
    description: 'Arm the whole crew and let the chaos begin. Easy to play, impossible not to love.',
    image: '/images/game-nerf.jpg',
    alt: 'Kids playing Nerf Wars with foam dart blasters',
    href: '/games#nerf-wars',
  },
  {
    title: 'Water Wars',
    tagline: 'Beat the Arizona heat.',
    description: 'Grab a blaster and go all out. Nonstop action, maximum soaking, and the best way to survive an Arizona summer.',
    image: '/images/game-water.jpg',
    alt: 'Group playing Water Wars with water blasters',
    href: '/games#water-wars',
  },
];

export default function GamesPreview() {
  return (
    <section className='py-24 bg-[#0a0a0f]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='font-teko text-4xl sm:text-5xl font-bold text-white mb-4'>
            CHOOSE YOUR GAME
          </h2>
          <p className='text-xl text-gray-400 max-w-2xl mx-auto'>
            Whether it&apos;s 10 kids or 1,000 adults, we bring the party to you.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {games.map((game) => (
            <Link
              key={game.title}
              href={game.href}
              className='bg-[#12121a] border border-gray-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group block'
            >
              {/* Image */}
              <div className='relative h-48 overflow-hidden'>
                <img
                  src={game.image}
                  alt={game.alt}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-[#12121a] to-transparent'></div>
              </div>
              
              {/* Content */}
              <div className='p-6'>
                <p className='text-cyan-400 text-sm font-medium mb-1'>{game.tagline}</p>
                <h3 className='font-teko text-2xl font-semibold text-white mb-2'>
                  {game.title}
                </h3>
                <p className='text-gray-400 text-sm mb-4'>
                  {game.description}
                </p>
                <span className='inline-flex items-center text-cyan-400 font-medium text-sm group-hover:text-cyan-300 transition-colors'>
                  Learn More
                  <svg className='w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className='text-center mt-12'>
          <Link href='/games' className='btn-secondary'>
            View All Games
          </Link>
        </div>
      </div>
    </section>
  );
}