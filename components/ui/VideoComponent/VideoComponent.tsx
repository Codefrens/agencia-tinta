"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./VideoComponent.module.css";
import Image from "next/image";
import Container from "../Container";
import VideoButton from "../VideoButton";
import { X } from "@phosphor-icons/react";

const VideoComponent = ({
  videoSrc,
  posterSrc,
  videoAlt = "Video",
  videoLabelButton = "Ver video",
}: {
  videoSrc: string;
  posterSrc: string;
  videoAlt?: string;
  videoLabelButton?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Error al reproducir el video:", error);
      });
    }
  }, [isOpen]);

  return (
    <>
      {/* Imagen del primer frame con botón de play */}
      <Container>
        <div className={styles.videoPreview} onClick={() => setIsOpen(true)}>
          <Image src={posterSrc} alt={videoAlt} objectFit="cover" fill />
          <div className={styles.playButton}>
            <VideoButton>{videoLabelButton}</VideoButton>
          </div>
        </div>
      </Container>

      {/* Modal con el video */}
      {isOpen && (
        <div className={styles.modal} onClick={() => setIsOpen(false)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <video ref={videoRef} controls className={styles.video}>
              <source src={videoSrc} type="video/mp4" />
            </video>
            <button
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoComponent;
