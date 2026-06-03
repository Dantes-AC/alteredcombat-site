import Link from 'next/link';
import type { Metadata } from 'next';
import { PHONE_NUMBER, PHONE_HREF, BOOKING_URL_LASER_TAG, BOOKING_URL_VR, BOOKING_URL_NERF, BOOKING_URL_WATER } from '@/lib/constants';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Games | Altered Combat - Laser Tag, Nerf Wars, VR & More',
  description: 'Explore our mobile games: Tactical Laser Tag, Nerf Wars, Water Wars, and Arena-Scale VR. Perfect for birthday parties and events in Phoenix, Arizona.',
};

const games = [
  {
    id: 'laser-tag',
    title: 'Tactical Laser Tag',
    tagline: 'Your favorite FPS, in real life',
    description: 'Pro-grade tactical laser tag with real FPS gameplay — weapon modes, kill streaks, and competitive game modes. We set up the arena, run the games, and keep score. You just show up and play.',
    maxPlayers: 20,
    ageRange: 'Ages 8+',
    duration: '2 hours minimum',
    serviceType: 'Fully hosted',
    bookingUrl: BOOKING_URL_LASER_TAG,
    image: 'https://us.chat-img.sintra.ai/97d167d5-7687-49d0-a6c6-ccc61b7563ca/e5d6bea6-d7f5-44e0-a441-6e23c615caf5/Homepage_LT_Tile.jpg',
    alt: 'Group playing tactical laser tag outdoors with laser tag guns and bunkers',
    features: [
      'Structured matches with rotating game modes',
      'Our team runs everything — zero stress for you',
      'Works for birthdays, team events, and large groups',
      'Scales from small parties to 100+ players',
    ],
  },
  {
    id: 'vr',
    title: 'Arena-Scale VR',
    tagline: 'Step into another world',
    description: 'Free-roam VR where you actually walk around — no sitting, no controllers on a couch. Fight zombies, escape temples, and explore impossible worlds together.',
    maxPlayers: 10,
    ageRange: 'Ages 12+',
    duration: '2 hours minimum',
    serviceType: 'Fully hosted',
    bookingUrl: BOOKING_URL_VR,
    image: 'https://us.chat-img.sintra.ai/97d167d5-7687-49d0-a6c6-ccc61b7563ca/363efb95-1f66-449a-a96a-3b132f7d167d/Homepage_VR_Tile.jpg',
    alt: 'Players in arena-scale free-roam VR experience',
    features: [
      'Immersive experiences you can\'t get at home',
      'Our team handles all setup and guidance',
      'Perfect for teens, adults, and unique parties',
      'Rotating players keeps everyone engaged',
    ],
  },
  {
    id: 'nerf-wars',
    title: 'Nerf Wars',
    tagline: 'Classic foam flinging fun',
    description: 'Classic foam dart chaos. Easy for anyone to pick up, impossible not to love. Choose hosted for organized games, or grab the gear and run it yourself.',
    maxPlayers: 40,
    ageRange: 'All ages',
    duration: '2 hours minimum',
    serviceType: 'Hosted or DIY',
    bookingUrl: BOOKING_URL_NERF,
    image: 'https://us.chat-img.sintra.ai/97d167d5-7687-49d0-a6c6-ccc61b7563ca/48f7e9b4-c90c-4f4e-90fe-e36496d96e85/Homepage_Nerf_Tile_2.jpg',
    alt: 'Kids playing Nerf Wars with foam dart blasters',
    features: [
      'Blasters and ammo for everyone',
      'Hosted = we run structured games and keep order',
      'Pickup/Drop-off = you run it your way',
      'Great for backyards, parks, and indoor spaces',
    ],
  },
  {
    id: 'water-wars',
    title: 'Water Wars',
    tagline: 'Beat the Arizona heat',
    description: 'Epic water blaster battles — the best way to beat Arizona heat. Grab the gear, get soaked, and make some memories.',
    maxPlayers: 40,
    ageRange: 'All ages',
    duration: '2 hours minimum',
    serviceType: 'DIY',
    bookingUrl: BOOKING_URL_WATER,
    image: 'https://us.chat-img.sintra.ai/97d167d5-7687-49d0-a6c6-ccc61b7563ca/9b8ed85f-5da6-4d28-9345-b7e0d2b2bded/Homepage_Water_Tile.jpg',
    alt: 'Group playing Water Wars with water blasters',
    features: [
      'Motorized blasters that actually soak',
      'Pick up, set up, and run it your way',
      'No host needed — just add water and chaos',
      'Perfect for summer birthdays and pool parties',
    ],
  },
];

export default function GamesPage() {
  return (
    <div className='pt-20'>
      {/* Hero */}
      <section className='py-20 bg-gradient-to-b from-[#0a0a0f] to-[#0f0f18]'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='font-teko text-5xl sm:text-6xl font-bold text-white mb-4'>
            OUR GAMES
          </h1>
          <p className='text-xl text-gray-400'>
            Choose your adventure. We bring the action to you.
          </p>
        </div>
      </section>

      {/* Event Types Callout */}
      <section className='py-8 bg-[#0f0f18] border-b border-gray-800'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <p className='text-gray-400'>
            Planning a specific type of event?{' '}
            <Link href='/parties-events' className='text-cyan-400 hover:text-cyan-300 font-medium transition-colors'>
              View event types →
            </Link>
          </p>
        </div>
      </section>

      {/* Games List */}
      <section className='py-16 bg-[#0f0f18]'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='space-y-16'>
            {games.map((game, index) => (
              <div
                key={game.id}
                id={game.id}
                className={`scroll-mt-28 flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}
              >
                {/* Image */}
                <div className='flex-shrink-0 w-full lg:w-1/2'>
                  <div className='relative rounded-2xl overflow-hidden'>
                    <img
                      src={game.image}
                      alt={game.alt}
                      className='w-full h-64 lg:h-80 object-cover'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-[#0f0f18]/50 to-transparent'></div>
                  </div>
                </div>

                {/* Content */}
                <div className='flex-1'>
                  <div className='inline-block bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-1 mb-4'>
                    <span className='text-cyan-400 text-sm font-medium'>{game.tagline}</span>
                  </div>
                  <h2 className='font-teko text-4xl font-bold text-white mb-3'>
                    {game.title}
                  </h2>
                  
                  {/* Fit Bar */}
                  <div className='flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-400 mb-4'>
                    <span>{game.ageRange}</span>
                    <span className='text-gray-600'>•</span>
                    <span>Up to {game.maxPlayers} players</span>
                    <span className='text-gray-600'>•</span>
                    <span>{game.duration}</span>
                    <span className='text-gray-600'>•</span>
                    <span className='text-cyan-400 font-medium'>{game.serviceType}</span>
                  </div>
                  
                  <p className='text-gray-300 mb-6'>
                    {game.description}
                  </p>
                  
                  {/* What to Expect */}
                  <div className='mb-6'>
                    <p className='text-sm uppercase tracking-wider text-gray-500 mb-3'>What to expect</p>
                    <ul className='space-y-2'>
                      {game.features.map((feature) => (
                        <li key={feature} className='flex items-start text-gray-400 text-sm'>
                          <Check className='w-5 h-5 text-cyan-400 flex-shrink-0' />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a
                    href={game.bookingUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn-primary inline-block'
                  >
                    Book {game.title}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-20 bg-[#0a0a0f]'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='font-teko text-4xl font-bold text-white mb-4'>
            NOT SURE WHICH TO CHOOSE?
          </h2>
          <p className='text-xl text-gray-400 mb-8'>
            Call us and we'll help you pick the perfect game for your group.
          </p>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
            <a href={PHONE_HREF} className='btn-secondary text-lg px-10 py-4'>
              Call {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </section>

      {/* Service Areas Callout */}
      <section className='py-12 bg-[#12121a] border-t border-gray-800'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <p className='text-gray-400 mb-4'>
            We bring the games to you anywhere in Arizona and beyond.
          </p>
          <Link href='/service-areas' className='text-cyan-400 hover:text-cyan-300 font-medium transition-colors'>
            View Service Areas →
          </Link>
        </div>
      </section>
    </div>
  );
}
