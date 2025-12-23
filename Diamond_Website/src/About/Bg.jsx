import React from 'react';

export default function MissionHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop')`,
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50" />
      
      {/* Content Container */}
      <div className="relative h-full flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          {/* Small Top Text */}
          <div className="mb-6">
            <span className="text-xs tracking-widest uppercase text-white opacity-70 font-light">
              @ CARBONSTAR DIAMONDS
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight">
            Our Mission
          </h1>
          
          {/* Description */}
          <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12 font-light">
            To satisfy customer's demand and to build trust by providing ethically sourced and environmentally friendly diamonds, and to provide jewellery industry with eco-friendly diamonds that are more accessible and affordable for everyone.
          </p>
          
          {/* Decorative Dot */}
          <div className="flex justify-center">
            <div className="w-2 h-2 bg-white rounded-full opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
}