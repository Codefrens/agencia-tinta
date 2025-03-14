"use client";

import React, { useEffect, useState } from "react";

const ModelViewer = (props: {
  src: string;
  alt?: string;
  ar?: boolean;
  arModes?: string;
  poster?: string;
  shadowIntensity?: string | number;
  cameraControls?: boolean;
  toneMapping?: string;
  touchAction?: string;
  autoRotate?: boolean;
  disableZoom?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  cameraOrbit?: string;
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
    "ar-modes": props.arModes || "",
    poster: props.poster || "",
    "shadow-intensity": props.shadowIntensity?.toString() || "1",
    "camera-controls": props.cameraControls ? "" : undefined,
    "tone-mapping": props.toneMapping || "",
    "touch-action": props.touchAction || "pan-y",
    "auto-rotate": props.autoRotate ? "" : undefined,
    "disable-zoom": props.disableZoom ? "" : undefined,
    "camera-orbit": props.cameraOrbit || "",
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

export default ModelViewer;
