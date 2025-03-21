"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import styles from "./ReelVideo.module.css";
import Image from "next/image";
import classNames from "classnames";
import { PauseCircle, PlayCircle } from "@phosphor-icons/react";
import { motion, useMotionValue } from "motion/react";
import useIsMobile from "@/utils/hooks/useIsMobile";

const ReelVideo = ({
  videoUrl,
  posterSrc,
  videoAlt,
}: {
  videoUrl: string;
  posterSrc: string;
  videoAlt: string;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPoster, setShowPoster] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isMobile = useIsMobile();

  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [isHover, setIsHover] = useState(false);

  const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const { left, top } = ref.current.getBoundingClientRect();
    const x = e.clientX - left - 25; // Ajuste para centrar
    const y = e.clientY - top - 25; // Ajuste para centrar

    mouseX.set(x);
    mouseY.set(y);
  };

  useLayoutEffect(() => {
    if (!videoRef.current) return;
    if (isPlaying && videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Error al reproducir el video:", error);
      });
    } else {
      videoRef.current?.pause();
    }
  }, [isPlaying]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={mouseMove}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <motion.div
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
      </motion.div>

      {isMobile ? (
        <div className={styles.playButtonMobile}>
          {isPlaying ? (
            <PauseCircle size={48} weight="fill" />
          ) : (
            <PlayCircle size={48} weight="fill" />
          )}
        </div>
      ) : (
        <motion.div
          className={styles.playButton}
          style={{ x: mouseX, y: mouseY }}
          animate={isHover ? "enter" : "exit"}
          initial="initial"
          transition={{ duration: 0.1, ease: "easeInOut" }}
          variants={{
            initial: { scale: 0 },
            enter: { scale: 1, transition: { duration: 0.3 } },
            exit: { scale: 0, transition: { duration: 0.1 } },
          }}
        >
          {isPlaying ? (
            <PauseCircle size={48} weight="fill" />
          ) : (
            <PlayCircle size={48} weight="fill" />
          )}
        </motion.div>
      )}

      <video
        ref={videoRef}
        loop
        className={styles.video}
        onClick={() => {
          setIsPlaying(!isPlaying);
          setShowPoster(true);
        }}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    </motion.div>
  );
};

export default ReelVideo;
