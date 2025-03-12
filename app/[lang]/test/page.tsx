"use client";
import ModelViewer from "@/components/ui/ModelViewer";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

const TestPage = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Canvas camera={{ position: [0, 2, 5], fov: 5 }}>
        <ambientLight />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 4}
          minPolarAngle={Math.PI / 4}
        />
        <Suspense fallback={null}>
          <ModelViewer src="https://res.cloudinary.com/nicojoystin/image/upload/v1741798340/agencia-tinta/plato_1_fo1m31.glb" />
        </Suspense>
      </Canvas>
    </div>
  );
};
export default TestPage;
