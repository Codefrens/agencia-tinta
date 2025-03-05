"use client";
import { useState } from "react";
import styles from "./VideoComponent.module.css";
import Image from "next/image";
import Container from "../Container";
import VideoButton from "../VideoButton";

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
            <iframe
              src={videoSrc} // URL del embed
              width="800"
              height="450"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
            <button
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoComponent;
