"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./ReelVideo.module.css";
import Image from "next/image";
import classNames from "classnames";

const ReelVideo = ({
  videoSrc,
  posterSrc,
  videoAlt,
}: {
  videoSrc: string;
  posterSrc: string;
  videoAlt: string;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPoster, setShowPoster] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Error al reproducir el video:", error);
      });
    } else {
      videoRef.current?.pause();
    }
  }, [isPlaying]);

  return (
    <>
      <div
        className={classNames(
          styles.poster,
          showPoster ? "" : styles.hidePoster
        )}
        onClick={() => {
          setIsPlaying(true);
          setShowPoster(false);
        }}
      >
        <Image src={posterSrc} alt={videoAlt} objectFit="cover" fill />
        <div className={styles.playButton}>Boton</div>
      </div>
      <video
        ref={videoRef}
        className={styles.video}
        onClick={() => {
          setIsPlaying(!isPlaying);
          setShowPoster(true);
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </>
  );
};

export default ReelVideo;
