"use client";
import React from "react";
import Container from "@/components/ui/Container";
import Carousel from "@/components/ui/Carousel";
import VideoComponent from "@/components/ui/VideoComponent/VideoComponent";
import styles from "./VideoCarousel.module.css";

interface Video {
  videoSrc: string;
  posterSrc: string;
  videoAlt?: string;
  videoLabelButton?: string;
}

interface VideoCarouselProps {
  videos: Video[];
}

const VideoCarousel = ({ videos }: VideoCarouselProps) => {
  return (
    <section className={styles.videoSection}>
      <Container>
        <div className={styles.carouselWrapper}>
          <Carousel
            slidesPerView={1}
            spaceBetween={30}
            navigation={true}
            pagination={true}
            autoplay={false}
            loop={videos.length > 1}
            breakpoints={{
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
            }}
          >
            {videos.map((video, index) => (
              <VideoComponent
                key={index}
                videoSrc={video.videoSrc}
                posterSrc={video.posterSrc}
                videoAlt={video.videoAlt}
                videoLabelButton={video.videoLabelButton}
              />
            ))}
          </Carousel>
        </div>
      </Container>
    </section>
  );
};

export default VideoCarousel; 