import React, { useState, useEffect, useRef } from 'react';

const DiamondStorytelling = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef([]);

  const sections = [
    {
      id: 0,
      label: "DIAMONDS",
      heading: "Environment Friendly",
      description: "Lab grown diamonds are a responsible choice given that no mining is required.",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=1000&fit=crop"
    },
    {
      id: 1,
      label: "DIAMONDS",
      heading: "Quality",
      description: "Our lab-grown diamonds are chemically, physically, and optically identical to mined diamonds, certified by leading gemological institutes.",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop"
    },
    {
      id: 2,
      label: "DIAMONDS",
      heading: "Value",
      description: "Experience exceptional quality at a fraction of the cost. Lab-grown diamonds offer uncompromising beauty with superior value.",
      image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&h=1000&fit=crop"
    }
  ];

  useEffect(() => {
    const observers = sectionsRef.current.map((section, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(index);
          }
        },
        {
          threshold: 0.5,
          rootMargin: '-20% 0px -20% 0px'
        }
      );

      if (section) {
        observer.observe(section);
      }

      return observer;
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <div className="bg-[#1A1A1A] min-h-fit">
      {/* Mobile Layout - Stacked image then content */}
      <div className="lg:hidden">
        {sections.map((section, index) => (
          <div 
            key={section.id}
            ref={el => sectionsRef.current[index] = el}
            className="mb-8"
          >
            {/* Image */}
            <div className="h-[60vh] sm:h-[70vh] p-4 sm:p-6">
              <img
                src={section.image}
                alt={section.heading}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            
            {/* Content */}
            <div className="px-5 sm:px-8 py-8 sm:py-12">
              <div className="max-w-xl mx-auto">
                <p className="text-gray-400 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6 font-light">
                  {section.label}
                </p>
                <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-light mb-6 leading-tight">
                  {section.heading}
                </h2>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
                  {section.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Layout - Side by side with sticky image */}
      <div className="hidden lg:grid grid-cols-2">
        {/* Left Column - Sticky Image Panel */}
        <div className="relative h-screen sticky top-0">
          <div className="absolute inset-0 p-8 xl:p-16">
            <div className="relative w-full h-full">
              {sections.map((section, index) => (
                <div
                  key={section.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    activeSection === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={section.image}
                    alt={section.heading}
                    className="w-full h-full object-cover rounded-lg shadow-2xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Scrollable Content */}
        <div>
          {sections.map((section, index) => (
            <div
              key={section.id}
              ref={el => sectionsRef.current[index] = el}
              className="min-h-screen flex items-center justify-center px-12 lg:px-16 py-20"
            >
              <div className="max-w-xl w-full">
                <p className="text-gray-400 text-sm tracking-[0.3em] mb-6 font-light">
                  {section.label}
                </p>
                <h2 className="text-white text-5xl lg:text-6xl font-light mb-8 leading-tight">
                  {section.heading}
                </h2>
                <p className="text-gray-300 text-lg lg:text-xl leading-relaxed font-light">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiamondStorytelling;