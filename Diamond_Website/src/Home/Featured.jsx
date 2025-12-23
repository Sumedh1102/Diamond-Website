import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';
import Diamond from '../Components/Diamond';

const RotatingDiamond = () => {
  const diamondRef = useRef();

  useFrame((state, delta) => {
    if (diamondRef.current) {
      diamondRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <Center>
      <Diamond
        ref={diamondRef}
        scale={45}
        rotation={[Math.PI / 2, 0, 0]} // Side view
      />
    </Center>
  );
};

const DiamondScene = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "200px" });

  return (
    <div ref={containerRef} className="w-full h-full">
      <Canvas
        frameloop={isInView ? "always" : "never"}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 100], fov: 45 }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={1} />
        <RotatingDiamond />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};


const LuxuryFeaturedSection = () => {
  const text =
    "FEATURED PRODUCTS · CARBONSTAR DIAMONDS · FEATURED PRODUCTS · CARBONSTAR DIAMONDS · FEATURED PRODUCTS ";
  const chars = text.split('');

  return (
    <div className="min-h-fit bg-[#0f0f0f] flex items-center justify-center px-8 py-16">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div className="flex items-center justify-center">
          <div className="relative w-[600px] h-[600px] flex items-center justify-center">

            {/* Outer Border */}
            <div className="absolute inset-[16px] rounded-full border border-white/20"></div>

            {/* Rotating Circular Text */}
            <div className="absolute inset-0 animate-[spin_30s_linear_infinite]">
              <svg viewBox="0 0 600 600" className="w-full h-full">

                <defs>
                  <path
                    id="circlePath"
                    d="M 300,300 m -240,0 a 240,240 0 1,1 480,0 a 240,240 0 1,1 -480,0"
                  />
                </defs>

                {/* Bottom Border (Stroke Below Text) */}
                <circle
                  cx="300"
                  cy="300"
                  r="225"
                  fill="none"
                  stroke="white"
                  strokeOpacity="0.25"
                  strokeWidth="1"
                />

                {/* Circular Text */}
                <text
                  fill="white"
                  className="text-[18px] font-light uppercase"
                  style={{ letterSpacing: '0.4em' }}
                >
                  <textPath href="#circlePath" startOffset="0%">
                    {chars.map((char, i) => (
                      <tspan key={i}>{char}</tspan>
                    ))}
                  </textPath>
                </text>

              </svg>
            </div>

            {/* Center Diamond */}
            <div className="relative z-10 w-80 h-80 flex items-center justify-center">
              <DiamondScene />
            </div>

          </div>
        </div>

        {/* Right Side Content */}
        <div className="space-y-8 text-left">

          <div className="inline-flex items-center gap-2 px-6 py-2 border border-gray-700 rounded-full">
            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
            <span className="text-gray-300 text-sm tracking-widest uppercase font-light">
              Diamonds
            </span>
            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
          </div>

          <h2 className="text-5xl lg:text-6xl font-light text-white leading-tight">
            Featured Products
          </h2>

          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              We offer an extensive range of internationally graded man-made diamonds that are
              forever. Ageless. Timeless.
            </p>
            <p>
              We offers our valued clients a wide variety of polished, certified stones of CVD and
              HPHT diamonds from 0.001 to 10 cts.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default LuxuryFeaturedSection;
