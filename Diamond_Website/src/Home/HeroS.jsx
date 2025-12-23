import { ArrowRight } from "lucide-react"

const features = [{ label: "Look" }, { label: "Cost" }, { label: "Environment" }, { label: "Quality" }]

export function LabGrownDiamonds() {
  return (
    <section className="bg-[#0f0f0f] min-h-fit w-full py-16 px-6 md:py-24 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Visual Section */}
          <div className="relative flex justify-center lg:justify-start">

            <div className="relative w-full max-w-lg">
              {/* Background image - lab cubes */}
              <div className="absolute top-0 right-0 w-60 h-40 z-10">
                <img
                  src="https://i.postimg.cc/P5cqvmtV/Chat-GPT-Image-Dec-22-2025-11-45-33-PM.png"
                  alt="Lab grown diamond cubes"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Foreground image - diamond tweezers */}
              <div className="relative z-20 w-80 h-80 mt-16 lg:mt-24 -translate-y-5 translate-x-20">
                <img
                  src="https://i.postimg.cc/445NQCf9/Chat-GPT-Image-Dec-22-2025-11-40-33-PM.png"
                  alt="Diamond held by tweezers"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Decorative dotted pattern */}
              <div className="absolute -translate-y-96 translate-x-48 w-20 z-0 hidden md:block">
                <div className="grid grid-cols-4 gap-2 h-full w-full">
                  {Array.from({ length: 60 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-neutral-600/50" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Section */}
          <div className="space-y-8">
            {/* Label */}
            <p className="text-neutral-400 text-sm tracking-[0.3em] uppercase">What Are</p>

            {/* Heading */}
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Lab Grown Diamonds</h2>

            {/* Description */}
            <div className="space-y-6 max-w-xl">
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
                Lab grown diamonds are chemically identical to natural diamonds, and can be a more affordable option.
                Environmental and Conflict Free stones sourced from only the best and reputed sources. Pass on value and
                a better world for future generations.
              </p>
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
                Our lab created diamonds are readily available in a variety of colorless ranges.
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-neutral-700" />

            {/* Feature Links */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-4 pt-2">
              {features.map((feature) => (
                <a
                  key={feature.label}
                  href="#"
                  className="flex items-center gap-3 text-white hover:text-neutral-300 transition-colors group"
                >
                  <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:translate-x-1 transition-transform" />
                  <span className="text-base font-medium">{feature.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LabGrownDiamonds    