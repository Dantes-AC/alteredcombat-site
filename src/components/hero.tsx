"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { BOOKING_URL, PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";
import USFlagIcon from "@/components/ui/us-flag-icon";

export default function Hero() {

  const services = [
    "Tactical laser tag",
    "Arena-scale VR",
    "Nerf wars",
    "Water wars"
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % services.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section className="relative min-h-screen pt-24">
      {/* Background Image - absolute within hero only */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://us.chat-img.sintra.ai/97d167d5-7687-49d0-a6c6-ccc61b7563ca/9b34d573-01ac-4da6-8ca2-9e946d6508c2/Hero_image_for_home_page.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/70 via-[#0a0a0f]/50 to-[#0a0a0f]"></div>
      </div>

      {/* Content - top aligned on mobile, vertically centered on desktop */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 text-center min-h-[calc(100vh-96px)] flex flex-col justify-start md:justify-center pt-6 md:pt-0 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Badges Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8 md:mb-16">
            {/* Veteran Owned Badge */}
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2">
              <USFlagIcon />
              <span className="text-cyan-400 font-medium text-sm">Veteran Owned & Operated</span>
            </div>

            {/* 5-Star Google Rating Badge - links to reviews section */}
            <Link
              href="/#reviews"
              className="inline-flex items-center space-x-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-2 hover:bg-yellow-500/20 transition-colors"
            >
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-yellow-400 font-medium text-sm">5-Star Rated on Google</span>
            </Link>
          </div>

          <h1 className="font-teko text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-8 md:mb-16 glow-text">
            A NEW WAY TO PLAY
          </h1>
          
          {/* Animated Service Line + Static Text (grouped as one unit) */}
          <div className="max-w-4xl mx-auto mb-10 md:mb-20">
            <div className="flex items-center justify-center overflow-visible mb-2">
              <span 
                className={`text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wide transition-all duration-500 text-center leading-tight ${
                  isAnimating 
                    ? 'opacity-0 transform -translate-y-6' 
                    : 'opacity-100 transform translate-y-0'
                }`}
                style={{
                  color: '#22d3ee',
                  textShadow: '0 0 15px rgba(34, 211, 238, 0.45), 0 0 30px rgba(34, 211, 238, 0.3), 0 0 45px rgba(34, 211, 238, 0.15)'
                }}
              >
                {services[currentIndex]}
              </span>
            </div>
            <p className="text-xl sm:text-2xl text-gray-300" style={{ marginTop: '-10px' }}>
              delivered directly to you
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 md:mb-20">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-10 py-4"
            >
              Book Your Event
            </a>
            <a href={PHONE_HREF} className="btn-secondary text-lg px-10 py-4">
              Call {PHONE_NUMBER}
            </a>
          </div>

          <p className="text-gray-400">
            Serving Arizona & Beyond
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 inset-x-0 flex justify-center z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
