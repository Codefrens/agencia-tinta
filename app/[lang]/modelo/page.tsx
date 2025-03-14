"use client";

import Script from "next/script";
import React, { useEffect, useState } from "react";

// Componente personalizado para model-viewer
const ModelViewer = (props: {
  src: string;
  alt?: string;
  ar?: boolean;
  poster?: string;
  shadowIntensity?: string | number;
  cameraControls?: boolean;
  touchAction?: string;
  style?: React.CSSProperties;
}) => {
  // Solo renderizar en el cliente para evitar errores de hidratación
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // No renderizar nada en el servidor
  }

  // Convertir las props a atributos HTML para model-viewer
  const elementProps = {
    src: props.src,
    alt: props.alt || "",
    ar: props.ar ? "" : undefined,
    poster: props.poster || "",
    "shadow-intensity": props.shadowIntensity?.toString() || "1",
    "camera-controls": props.cameraControls ? "" : undefined,
    "touch-action": props.touchAction || "pan-y",
    style: props.style || {
      width: "100%",
      height: "100vh",
      maxWidth: "800px",
      margin: "auto",
      display: "block",
    },
  };

  // Renderizar model-viewer como un elemento HTML personalizado
  return React.createElement("model-viewer", elementProps);
};

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
        shadowIntensity={1}
        cameraControls
        touchAction="pan-y"
      />
    </div>
  );
};

export default ModeloPage;
