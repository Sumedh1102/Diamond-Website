import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, ScrollControls, useScroll, ContactShadows, Scroll } from '@react-three/drei'
import Diamond from '../Components/Diamond'
import gsap from 'gsap'

function DiamondScene({ isMobile, isTablet }) {
    const scroll = useScroll()
    const diamondRef = useRef()

    // Responsive scale based on device
    const scale = isMobile ? 1.2 : isTablet ? 1.6 : 2

    useFrame((state, delta) => {
        if (!diamondRef.current) return

        // Calculate scroll offset (0 to 1)
        const r1 = scroll.range(0, 1) // Full page scroll range

        // Interpolate Rotation: Top View (PI/2) to Side View (0)
        // Adjusting start angle to ensure Table is facing camera
        const targetRotationX = Math.PI / 2 - (r1 * Math.PI / 2)

        // Interpolate Position Y: Start lower, come up (Zoom effect can be scale or Z position)
        // Adjust movement range based on device
        const moveDistance = isMobile ? 0.6 : isTablet ? 0.8 : 1
        const zoomDistance = isMobile ? 1.2 : isTablet ? 1.5 : 2

        const targetPosY = -moveDistance + (r1 * moveDistance)
        const targetPosZ = 0 + (r1 * zoomDistance)

        // Smooth dampening
        diamondRef.current.rotation.x = targetRotationX
        diamondRef.current.rotation.y += delta * 0.2 // Keep a slow spin on Y axis

        diamondRef.current.position.y = targetPosY
        diamondRef.current.position.z = targetPosZ
    })

    return (
        <Diamond
            ref={diamondRef}
            scale={[scale, scale, scale]}
            position={[0, -1, 0]}
            rotation={[Math.PI / 2, 0, 0]}
        />
    )
}

export default function KapuGemsHero() {
    const [isMobile, setIsMobile] = useState(false)
    const [isTablet, setIsTablet] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
            setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024)
        }

        // Initial check
        handleResize()

        // Add event listener
        window.addEventListener('resize', handleResize)

        // Cleanup
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Responsive camera FOV
    const cameraFov = isMobile ? 60 : isTablet ? 50 : 45

    return (
        <div className="relative w-full h-screen">
            <Canvas camera={{ position: [0, 0, 5], fov: cameraFov }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={1} />

                <ScrollControls pages={2} damping={0.2}>
                    {/* 3D Scene */}
                    <DiamondScene isMobile={isMobile} isTablet={isTablet} />
                    <Environment preset="city" />
                    <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={10} blur={2.5} far={4} />

                    {/* HTML Overlay Content */}
                    <Scroll html style={{ width: '100%' }}>
                        {/* Page 1 Content (Top View) */}
                        <div className="w-full h-screen flex flex-col items-center justify-center pointer-events-none">
                        </div>

                        {/* Page 2 Content (Side View / Zoomed) */}
                        <div className="w-full h-screen flex flex-col items-center justify-center pointer-events-none px-4">
                            <p
                                className="text-neutral-100 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif tracking-widest mt-32 sm:mt-48 md:mt-64 lg:mt-96 drop-shadow-md text-center"
                                style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.2em' }}
                            >
                                Unearthing Brilliance
                            </p>
                        </div>
                    </Scroll>
                </ScrollControls>
            </Canvas>
            <div
                className="absolute inset-0 w-full h-full -z-10 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("https://i.postimg.cc/j2hZZjcH/Chat-GPT-Image-Mar-6-2026-11-02-51-PM.png")'
                }}
            />
        </div>
    )
}