import React, { useState, useEffect, useRef } from "react";

const DiamondShapesSlider = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  const diamonds = [
    {
      name: "Heart",
      image: "https://i.postimg.cc/x8LBHnMG/Chat-GPT-Image-Dec-22-2025-10-16-20-AM-Background-Removed.png",
    },
    {
      name: "Round",
      image: "https://i.postimg.cc/yN9h7xHh/Chat-GPT-Image-Dec-22-2025-10-03-42-AM-Background-Removed.png",
    },
    {
      name: "Oval",
      image: "https://i.postimg.cc/N01XWn67/Chat-GPT-Image-Dec-22-2025-10-12-50-AM-Background-Removed.png",
    },
    {
      name: "Cushion",
      image: "https://i.postimg.cc/c1fzF1ts/Chat-GPT-Image-Dec-22-2025-10-06-45-AM-Background-Removed.png",
    },
    {
      name: "Pear",
      image: "https://i.postimg.cc/MHzmPSgZ/Chat-GPT-Image-Dec-22-2025-10-09-48-AM-Background-Removed.png",
    },
    {
      name: "Princess",
      image: "https://i.postimg.cc/P5CzFKVW/Chat-GPT-Image-Dec-22-2025-10-05-22-AM-Background-Removed.png",
    },
    {
      name: "Emerald",
      image: "https://i.postimg.cc/gjpNCRL6/Chat-GPT-Image-Dec-22-2025-10-08-04-AM-Background-Removed.png",
    },
    {
      name: "Marquise",
      image: "https://i.postimg.cc/RFdMt1Bj/Chat-GPT-Image-Dec-22-2025-10-14-37-AM-Background-Removed.png",
    },
  ];

  // Duplicate for seamless loop
  const duplicatedDiamonds = [...diamonds, ...diamonds, ...diamonds];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 320;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full bg-[#1A1A1A] px-8 overflow-hidden min-h-fit">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex items-start justify-between">
          <h1 className="text-7xl font-bold text-white leading-tight">
            Shapes Of
            <br />
            Diamond
          </h1>

          <div className="flex items-center gap-8">
            <p className="text-white/80 text-lg translate-y-12 -translate-x-56">
              The World&apos;s Greatest Lab Grown Diamonds.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => scroll("left")}
                className="w-12 h-12 rounded-full border border-gray-600 text-white hover:border-white transition"
              >
                ‹
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-12 h-12 rounded-full border border-gray-600 text-white hover:border-white transition"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div ref={scrollRef} className="overflow-hidden">
          <div
            className="flex"
            style={{
              animation:
                isAnimating && !isPaused
                  ? "scroll 24s linear infinite"
                  : "none",
            }}
          >
            {duplicatedDiamonds.map((diamond, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 px-6 group"
              >
                <div className="flex flex-col items-center py-12 border-l border-white/10">
                  <img
                    src={diamond.image}
                    alt={diamond.name}
                    loading="lazy"
                    className="
                      w-56 h-56 object-contain
                      grayscale
                      transition-all duration-500
                      ml-14
                    "
                  />
                  <h3 className="mt-8 text-white text-xl font-light tracking-wider ml-14">
                    {diamond.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${diamonds.length * 256}px);
          }
        }
      `}</style>
    </div>
  );
};

export default DiamondShapesSlider;
