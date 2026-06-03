import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';
import { PHONE_NUMBER, PHONE_HREF } from '@/lib/constants';

// US Flag SVG component
const USFlagIcon = () => (
  <svg className='w-5 h-5' viewBox='0 0 24 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <rect width='24' height='16' fill='#B22234'/>
    <rect y='1.23' width='24' height='1.23' fill='white'/>
    <rect y='3.69' width='24' height='1.23' fill='white'/>
    <rect y='6.15' width='24' height='1.23' fill='white'/>
    <rect y='8.62' width='24' height='1.23' fill='white'/>
    <rect y='11.08' width='24' height='1.23' fill='white'/>
    <rect y='13.54' width='24' height='1.23' fill='white'/>
    <rect width='9.6' height='8.62' fill='#3C3B6E'/>
    <g fill='white'>
      <circle cx='1.2' cy='0.86' r='0.4'/>
      <circle cx='2.8' cy='0.86' r='0.4'/>
      <circle cx='4.4' cy='0.86' r='0.4'/>
      <circle cx='6' cy='0.86' r='0.4'/>
      <circle cx='7.6' cy='0.86' r='0.4'/>
      <circle cx='2' cy='1.72' r='0.4'/>
      <circle cx='3.6' cy='1.72' r='0.4'/>
      <circle cx='5.2' cy='1.72' r='0.4'/>
      <circle cx='6.8' cy='1.72' r='0.4'/>
      <circle cx='1.2' cy='2.58' r='0.4'/>
      <circle cx='2.8' cy='2.58' r='0.4'/>
      <circle cx='4.4' cy='2.58' r='0.4'/>
      <circle cx='6' cy='2.58' r='0.4'/>
      <circle cx='7.6' cy='2.58' r='0.4'/>
      <circle cx='2' cy='3.44' r='0.4'/>
      <circle cx='3.6' cy='3.44' r='0.4'/>
      <circle cx='5.2' cy='3.44' r='0.4'/>
      <circle cx='6.8' cy='3.44' r='0.4'/>
      <circle cx='1.2' cy='4.3' r='0.4'/>
      <circle cx='2.8' cy='4.3' r='0.4'/>
      <circle cx='4.4' cy='4.3' r='0.4'/>
      <circle cx='6' cy='4.3' r='0.4'/>
      <circle cx='7.6' cy='4.3' r='0.4'/>
      <circle cx='2' cy='5.16' r='0.4'/>
      <circle cx='3.6' cy='5.16' r='0.4'/>
      <circle cx='5.2' cy='5.16' r='0.4'/>
      <circle cx='6.8' cy='5.16' r='0.4'/>
      <circle cx='1.2' cy='6.02' r='0.4'/>
      <circle cx='2.8' cy='6.02' r='0.4'/>
      <circle cx='4.4' cy='6.02' r='0.4'/>
      <circle cx='6' cy='6.02' r='0.4'/>
      <circle cx='7.6' cy='6.02' r='0.4'/>
      <circle cx='2' cy='6.88' r='0.4'/>
      <circle cx='3.6' cy='6.88' r='0.4'/>
      <circle cx='5.2' cy='6.88' r='0.4'/>
      <circle cx='6.8' cy='6.88' r='0.4'/>
      <circle cx='1.2' cy='7.74' r='0.4'/>
      <circle cx='2.8' cy='7.74' r='0.4'/>
      <circle cx='4.4' cy='7.74' r='0.4'/>
      <circle cx='6' cy='7.74' r='0.4'/>
      <circle cx='7.6' cy='7.74' r='0.4'/>
    </g>
  </svg>
);

export default function Footer() {
  return (
    <footer className='bg-[#08080c] border-t border-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
          {/* Logo & Description */}
          <div className='md:col-span-2'>
            <img
              src='https://us.chat-img.sintra.ai/97d167d5-7687-49d0-a6c6-ccc61b7563ca/adcd015e-8263-4eb3-8503-91ab3b64ba31/Altered_Combat_-_Original.png'
              alt='Altered Combat logo - mobile gaming and party rental company'
              className='h-20 w-auto mb-4'
            />
            <p className='text-gray-400 max-w-md mb-4'>
              Arizona&apos;s mobile gaming experts. We bring the battlefield to you.
            </p>
            <div className='flex items-center space-x-2 text-cyan-400'>
              <USFlagIcon />
              <span className='font-semibold'>Veteran Owned & Operated</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-white font-bold text-lg mb-4'>Quick Links</h3>
            <nav className='flex flex-col space-y-3'>
              <Link href='/games' className='text-gray-400 hover:text-cyan-400 transition-colors'>
                Our Games
              </Link>
              <Link href='/parties-events' className='text-gray-400 hover:text-cyan-400 transition-colors'>
                Parties & Events
              </Link>
              <Link href='/service-areas' className='text-gray-400 hover:text-cyan-400 transition-colors'>
                Service Areas
              </Link>
              <Link href='/contact' className='text-gray-400 hover:text-cyan-400 transition-colors'>
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-white font-bold text-lg mb-4'>Contact</h3>
            <div className='flex flex-col space-y-3 text-gray-400'>
              <a href={PHONE_HREF} className='hover:text-cyan-400 transition-colors flex items-center space-x-2'>
                <Phone className='w-5 h-5' />
                <span>{PHONE_NUMBER}</span>
              </a>
              <Link 
                href='/#reviews'
                className='hover:text-yellow-400 transition-colors flex items-center space-x-2'
              >
                <div className='flex'>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className='w-4 h-4 text-yellow-400' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                  ))}
                </div>
                <span>Google Reviews</span>
              </Link>
              <div className='flex items-start space-x-2'>
                <MapPin className='w-5 h-5 mt-0.5' />
                <span>
                  <Link href='/service-areas' className='hover:text-cyan-400 transition-colors'>
                    Serving Arizona & Beyond
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-gray-500 text-sm'>
            © {new Date().getFullYear()} Altered Combat. All rights reserved.
          </p>
          <p className='text-gray-500 text-sm mt-2 md:mt-0'>
            Based in Buckeye, Arizona
          </p>
        </div>
      </div>
    </footer>
  );
}
