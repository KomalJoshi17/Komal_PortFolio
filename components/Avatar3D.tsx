"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";


  function Avatar() {
const { scene } = useGLTF("/models/avatar.glb");

  return (
    <primitive
      object={scene}
      scale={1.8}
      position={[0, -1.5, 0]}
    />
  );
}

export default function Avatar3D() {
  return (
    <div className="w-[350px] h-[500px]">
      <Canvas camera={{ position: [0, 1.2, 3] }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 2, 2]} />

        <Avatar />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={13} 
        />
      </Canvas>
    </div>
  );
}