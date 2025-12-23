
import React, { useRef, useLayoutEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, ScrollControls, useScroll, ContactShadows, Scroll } from '@react-three/drei'
import Diamond from '../Components/Diamond'
import gsap from 'gsap'

function DiamondScene() {
    const scroll = useScroll()
    const diamondRef = useRef()

    useFrame((state, delta) => {
        if (!diamondRef.current) return

        // Calculate scroll offset (0 to 1)
        const r1 = scroll.range(0, 1) // Full page scroll range

        // Interpolate Rotation: Top View (PI/2) to Side View (0)
        // Adjusting start angle to ensure Table is facing camera
        const targetRotationX = Math.PI / 2 - (r1 * Math.PI / 2)

        // Interpolate Position Y: Start lower, come up (Zoom effect can be scale or Z position)
        // Let's bring it up and maybe closer
        const targetPosY = -1 + (r1 * 1) // Moves from -1 to 0
        const targetPosZ = 0 + (r1 * 2) // Moves closer (0 to 2)

        // Smooth dampening
        // We can use simple lerp for smoothness if needed, or set directly since scroll is dampened
        diamondRef.current.rotation.x = targetRotationX
        diamondRef.current.rotation.y += delta * 0.2 // Keep a slow spin on Y axis

        diamondRef.current.position.y = targetPosY
        diamondRef.current.position.z = targetPosZ
    })

    return (
        <Diamond
            ref={diamondRef}
            scale={[2, 2, 2]}
            position={[0, -1, 0]}
            rotation={[Math.PI / 2, 0, 0]}
        />
    )
}

export default function KapuGemsHero() {
    return (
        <div className="relative w-full h-screen">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={1} />

                <ScrollControls pages={2} damping={0.2}>
                    {/* 3D Scene */}
                    <DiamondScene />
                    <Environment preset="city" />
                    <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={10} blur={2.5} far={4} />

                    {/* HTML Overlay Content */}
                    <Scroll html style={{ width: '100%' }}>
                        {/* Page 1 Content (Top View) */}
                        <div className="w-full h-screen flex flex-col items-center justify-center pointer-events-none">
                        </div>

                        {/* Page 2 Content (Side View / Zoomed) */}
                        <div className="w-full h-screen flex flex-col items-center justify-center pointer-events-none">
                            <p
                                className="text-neutral-100 text-3xl font-serif tracking-widest mt-96 drop-shadow-md"
                                style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.2em' }}
                            >
                                Unearthing Brilliance
                            </p>
                        </div>
                    </Scroll>
                </ScrollControls>
            </Canvas>
            <div
                className="absolute inset-0 w-full h-full bg-[#1A1A1A] -z-10"
            />
        </div>
    )
}