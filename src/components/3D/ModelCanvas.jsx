import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import { HamberModel } from "./HamberModel";

function ResettableOrbitControls() {
  const controlsRef = useRef()
  const timeoutRef = useRef()
  useEffect(() => {
    const controls = controlsRef.current

    const handleEnd = () => {
      // وقتی کاربر درگ رو متوقف کرد، 100ms بعد روتیشن رو ریست کن
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => {
        controls.setAzimuthalAngle(0)
        controls.setPolarAngle(Math.PI / 2)
        controls.update()
      }, 600) // این رو هر عددی خواستی بذار
    }

    controls?.addEventListener('end', handleEnd)

    return () => {
      controls?.removeEventListener('end', handleEnd)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={false}
      enablePan={false}
    />
  )
}
const ModelCanvas = () => {
  const ref = useRef(null);
  return (
    <Canvas
      style={{
        // pointerEvents: "none",
        position: "absolute",
        top: 0,
        left: "25%",
        // transform: "translateX(-50%)",
        zIndex: 9,
      }}
      camera={{
        fov: 14,
      }}
      shadows
      dpr={[1, 1.5]}
      gl={{ antialias: true }}
    >
      <group scale={1.1} ref={ref} position={[0, 0, 0]}>
        <Float
          speed={3}
          floatIntensity={0.1}
          floatingRange={[-0.1, 0.5]}
          rotationIntensity={2}
        >
          <HamberModel />
        </Float>
      </group>
      <ResettableOrbitControls />
      <Environment files={"/hdrs/lobby.hdr"} environmentIntensity={1} />
      <directionalLight position={[1, 1, 2]} intensity={5} />
    </Canvas>
  );
};

export default ModelCanvas;
