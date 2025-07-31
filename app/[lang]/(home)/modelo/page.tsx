"use client";

import Script from "next/script";
import ModelViewer from "@/components/ui/ModelViewer";

const ModeloPage = () => {
  return (
    <div>
      {/* Cargar el script correctamente */}
      <Script
        type="module"
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"
        strategy="lazyOnload"
        crossOrigin="anonymous"
      />

      {/* Usar el componente personalizado */}

      <ModelViewer
        src="https://res.cloudinary.com/nicojoystin/image/upload/v1741798340/agencia-tinta/plato_1_fo1m31.glb"
        alt="comida"
        ar
        arModes="webxr scene-viewer quick-look"
        shadowIntensity={1}
        cameraControls
        touchAction="pan-y"
        autoRotate
      />
    </div>
  );
};

export default ModeloPage;
