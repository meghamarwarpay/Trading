'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PhoneCall, Mail, MapPin } from 'lucide-react';

export const Navbar = () => {
  return (
    <header className="w-full bg-[#0a0b2e]">
      {/* Top Bar */}
      <div className="container mx-auto flex flex-wrap justify-between items-center py-2 text-yellow-400 text-sm">
        <div className="flex items-center gap-2">
          <MapPin size={16} aria-hidden="true" />
          <span>Sheopur Road, Jaipur, 302033</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Mail size={16} aria-hidden="true" />
            <a 
              href="mailto:info@breakoutmantra.in" 
              className="hover:underline focus:outline-none focus:ring focus:ring-yellow-400 rounded"
            >
              info@breakoutmantra.in
            </a>
          </div>
          <div className="flex items-center gap-2">
            <PhoneCall size={16} aria-hidden="true" />
            <a 
              href="tel:+919306596579" 
              className="hover:underline focus:outline-none focus:ring focus:ring-yellow-400 rounded"
            >
              (+91) 9306596579
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto flex justify-between items-center py-4 flex-wrap">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/placeholder.svg?height=40&width=40"
            alt="Breakout Mantra Logo"
            className="h-10 w-10"
            loading="lazy"
          />
          <span className="text-white text-xl font-bold">BREAKOUT MANTRA</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 items-center text-white">
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About' },
            { href: '/why-us', label: 'Why Us' },
            { href: '/plans', label: 'Plans' },
            { href: '/faq', label: 'FAQ' },
            { href: '/legals', label: 'Legals' },
            { href: '/contact', label: 'Contact' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-yellow-400 transition-colors focus:outline-none focus:ring focus:ring-yellow-400 rounded"
            >
              {link.label}
            </Link>
          ))}
          <Button className="bg-yellow-400 text-[#0a0b2e] hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-500 rounded">
            Log In
          </Button>
        </div>
      </nav>
    </header>
  );
};
