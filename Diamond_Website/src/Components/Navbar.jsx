import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function LuxuryNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'OUR PRODUCTS', path: '/products' },
    { name: 'BLOGS', path: '/blogs' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <div className="w-full bg-[#1A1A1A] px-[40px]">
      <nav className="max-w-screen-2xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center">
          <div className="text-white font-light tracking-wider">
            <span className="text-xl">CARBON</span>
            <span className="text-xl text-[#B88A6A] mx-1">ST</span>
            <span className="text-[#B88A6A] text-xl">★</span>
            <span className="text-xl text-[#B88A6A]">R</span>
            <div className="text-xs tracking-widest mt-0.5 text-white/90">
              DIAMONDS
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="text-sm tracking-wider text-white hover:text-[#B88A6A] transition-colors duration-200"
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <button className="hidden lg:flex items-center space-x-2 bg-[#B88A6A] text-white px-8 py-3 transition-colors duration-200">
          <span className="text-sm tracking-wide">Inquiry</span>
          <span className="text-lg">↗</span>
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white p-2"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-zinc-900 border-t border-amber-700/30">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm tracking-wider text-white hover:text-amber-600 transition-colors duration-200"
              >
                {link.name}
              </NavLink>
            ))}

            <button className="w-full flex items-center justify-center space-x-2 bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 transition-colors duration-200 mt-4">
              <span className="text-sm tracking-wide">Inquiry</span>
              <span className="text-lg">↗</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
