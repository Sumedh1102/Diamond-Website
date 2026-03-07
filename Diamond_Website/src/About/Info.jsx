import React from 'react';

export default function OurStory() {
  return (
    <section className="bg-[#0f0f0f] w-full py-16 px-6 md:py-24 md:px-12 lg:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Image Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
          {/* Left Diamond Image */}
          <div className="md:col-span-5">
            <div className="relative h-[460px] rounded-lg overflow-hidden bg-black">
              <img
                src="https://i.pinimg.com/1200x/5a/bb/cc/5abbccf00f47243aa305ec878446eb83.jpg"
                alt="Premium lab-grown diamond"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Diamond Manufacturing Image */}
          <div className="md:col-span-7">
            <div className="relative aspect-[16/9] md:aspect-[16/10] rounded-lg overflow-hidden bg-neutral-800">
              <img
                src="https://i.pinimg.com/736x/f1/57/b6/f157b6fb3b39927a16dbae938989c363.jpg"
                alt="Diamond quality inspection"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Label */}
          <div className="md:col-span-4">
            <p className="text-xs md:text-sm tracking-[0.2em] text-neutral-400 uppercase font-light">
              Our Story.
            </p>
          </div>

          {/* Story Text */}
          <div className="md:col-span-8">
            <p className="text-lg md:text-xl lg:text-4xl leading-relaxed md:leading-loose text-neutral-100 font-normal">
              NavKar Diamonds is a prime manufacturer and supplier of lab grown diamonds since 2020. We have partnered with trusted source for manufacturing diamonds with highly trained professionals who ensure high-point quality checks to produce the best diamonds for our customers worldwide. Our lab diamonds represent the future of conflict free diamonds while still maintaining the highest standards of worker safety and respect for environmental sustainability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}