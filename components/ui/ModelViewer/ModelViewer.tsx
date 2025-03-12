"use client";
import { useGLTF } from "@react-three/drei";

function ModelViewer({ src }: { src: string }) {
  const { scene } = useGLTF(src);

  return (
    <>
      <primitive object={scene} />;
    </>
  );
}

export default ModelViewer;
