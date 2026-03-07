export default function DiamondHero() {
  return (
    <section className="relative min-h-fit w-full bg-[#0f0f0f] px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20 overflow-hidden flex items-center">

      {/* Subtle diamond pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l15 15-15 15-15-15L30 0zm0 30l15 15-15 15-15-15L30 30z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">

        {/* Heading */}
        <h1 className="text-white font-bold leading-[1.1] max-w-4xl">
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Welcome to <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            NavKar Diamonds
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 sm:mt-8 md:mt-10 text-[#b3b3b3] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl lg:translate-x-[550px]">
          Where beauty meets sustainability and ethics. Our story began with a passion for diamonds
          and a deep commitment to creating a better world. We are a celebrated and renowned company
          specializing in Type IIA lab grown diamonds crafted using advanced Chemical Vapor
          Deposition (CVD) technology.
        </p>
      </div>

      {/* Scroll Indicator - Hidden on small screens */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-6 rounded-full border-2 border-white/30 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
}