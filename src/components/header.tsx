'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { BOOKING_URL } from "@/lib/constants";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/games', label: 'Games' },
    { href: '/parties-events', label: 'Parties & Events' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/95 backdrop-blur-sm border-b border-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center h-20'>
          {/* Logo */}
          <div className='flex-1'>
            <Link href='/' className='flex-shrink-0'>
              <img
                src='https://us.chat-img.sintra.ai/97d167d5-7687-49d0-a6c6-ccc61b7563ca/adcd015e-8263-4eb3-8503-91ab3b64ba31/Altered_Combat_-_Original.png'
                alt='Altered Combat logo - mobile gaming and party rental company'
                className='h-16 w-auto'
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='text-gray-300 hover:text-cyan-400 transition-colors font-medium'
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className='flex-1 hidden md:flex items-center justify-end'>
            <a
              href={BOOKING_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='btn-primary'
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden text-white p-2'
            aria-label='Toggle menu'
          >
            {isMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden py-4 border-t border-gray-800'>
            <nav className='flex flex-col space-y-4'>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className='text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2'
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={BOOKING_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='btn-primary text-center'
              >
                Book Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
