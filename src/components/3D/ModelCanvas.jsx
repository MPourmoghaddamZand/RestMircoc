import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import { HamberModel } from "./HamberModel";

const ModelCanvas = () => {
  return (
    <Canvas
      style={{
        pointerEvents: "none",
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9,
      }}
      camera={{
        fov: 14,
      }}
      shadows
      dpr={[1, 1.5]}
      gl={{ antialias: true }}
    >
      <group scale={1} position={[0.8, 0, 0]}>
        <Float 
          speed={3}
          floatIntensity={.1}
          floatingRange={[-.1,.5]}
          rotationIntensity={2}
        >
          <HamberModel />
        </Float>
      </group>
      <OrbitControls />
      <Environment files={"/hdrs/lobby.hdr"} environmentIntensity={1} />
      <directionalLight position={[1, 1, 2]} intensity={5} />
    </Canvas>
  );
};

export default ModelCanvas;
