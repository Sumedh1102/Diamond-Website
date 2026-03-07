import React from 'react';

export default function VisionHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop')",
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40" />
      
      {/* Content Container */}
      <div className="relative h-full flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          {/* Small Top Text */}
          <p className="text-white text-xs md:text-sm tracking-widest uppercase opacity-70 mb-6 font-light">
            @ NavKar Diamonds
          </p>
          
          {/* Main Heading */}
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
            Our Vision
          </h1>
          
          {/* Description */}
          <p className="text-gray-200 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto font-light px-4">
            The dream of owning a diamond will come true for anyone with our sustainable, ethical, and best quality diamonds and building one of the biggest distribution networks.
          </p>
          
          {/* Decorative Dot */}
          <div className="mt-12 flex justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
}