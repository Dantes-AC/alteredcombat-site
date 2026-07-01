import Link from 'next/link';
import { Phone, MapPin, Star } from 'lucide-react';
import { PHONE_NUMBER, PHONE_HREF } from '@/lib/constants';
import USFlagIcon from '@/components/ui/us-flag-icon';

export default function Footer() {
  return (
    <footer className='bg-[#08080c] border-t border-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
          {/* Logo & Description */}
          <div className='md:col-span-2'>
            <img
              src='/images/logo.png'
              alt='Altered Combat logo - mobile gaming and party rental company'
              className='h-20 w-auto mb-4'
            />
            <p className='text-gray-400 max-w-md mb-4'>
              Arizona's mobile gaming experts. We bring the battlefield to you.
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
              <Link href='/faq' className='text-gray-400 hover:text-cyan-400 transition-colors'>
                FAQ
              </Link>
              <Link href='/referral-program' className='text-gray-400 hover:text-cyan-400 transition-colors'>
                Referral Program
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
                    <Star key={i} className='w-4 h-4 text-yellow-400 fill-yellow-400' />
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
        <div className='border-t border-gray-800 mt-6 pt-8 flex flex-col md:flex-row justify-between items-center'>
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
