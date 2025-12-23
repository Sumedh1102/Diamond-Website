
import React, { useMemo, forwardRef } from 'react'
import { useGLTF, MeshTransmissionMaterial } from '@react-three/drei'

const Diamond = forwardRef((props, ref) => {
    const { scene } = useGLTF('/models/diamond.glb')

    // Extract geometry from the GLB
    const geometry = useMemo(() => {
        let geo = null
        scene.traverse((child) => {
            if (child.isMesh) {
                geo = child.geometry
            }
        })
        return geo
    }, [scene])

    // If no geometry found, fallback to primitive
    if (!geometry) return <primitive object={scene} ref={ref} {...props} />

    return (
        <mesh ref={ref} geometry={geometry} {...props}>
            <MeshTransmissionMaterial
                backside
                samples={8}
                thickness={1.5}
                chromaticAberration={1}
                transmission={1}
                roughness={0}
                ior={2.4}
                color="#ffffff"
            />
        </mesh>
    )
})

useGLTF.preload('/models/diamond.glb')

export default Diamond
