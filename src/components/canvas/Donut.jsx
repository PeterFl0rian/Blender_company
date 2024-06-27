import React, { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { MeshTransmissionMaterial, useGLTF, Text, Environment } from "@react-three/drei"
import { Leva, useControls } from 'leva'

const DonutMesh = () => {
    const { nodes } = useGLTF("./donut/scene.glb")
    const { viewport } = useThree()
    const torus = useRef(null)
    
    useFrame(() => {
        if (torus.current) {
            torus.current.rotation.x += 0.02
        }
    })

    const materialProps = useControls({
        thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
        roughness: { value: 0, min: 0, max: 1, step: 0.1 },
        transmission: { value: 1, min: 0, max: 1, step: 0.1 },
        ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
        chromaticAberration: { value: 0.02, min: 0, max: 1 },
        backside: { value: true }
    })

    return (
        <group scale={viewport.width / 3.75}>
            <Text position={[0, 0, -1]} fontSize={0.5} color="white" anchorX="center" anchorY="middle">
                Pozor, začínáme!
            </Text>
            <mesh ref={torus} geometry={nodes.Torus002.geometry}>
                <MeshTransmissionMaterial {...materialProps} />
            </mesh>
        </group>
    )
}

const Donut = () => {
    return (
        <>
            <Canvas className='bg-dark'>
                <directionalLight intensity={2} position={[0, 2, 3]} />
                <Environment preset="city" />
                <DonutMesh />
            </Canvas>
            <Leva hidden />
        </>
    )
}

export default Donut