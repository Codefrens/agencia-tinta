"use client";
import React, { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import styles from './Carousel.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CarouselProps {
  children: ReactNode[];
  slidesPerView?: number | 'auto';
  spaceBetween?: number;
  autoplay?: boolean;
  navigation?: boolean;
  pagination?: boolean;
  loop?: boolean;
  breakpoints?: {
    [key: number]: {
      slidesPerView: number | 'auto';
      spaceBetween?: number;
    };
  };
  className?: string;
}

const Carousel = ({
  children,
  slidesPerView = 1,
  spaceBetween = 20,
  autoplay = false,
  navigation = true,
  pagination = true,
  loop = true,
  breakpoints,
  className = ''
}: CarouselProps) => {
  const defaultBreakpoints = {
    640: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: typeof slidesPerView === 'number' ? Math.min(slidesPerView, 2.5) : 2.5,
      spaceBetween: 40,
    },
  };

  return (
    <div className={`${styles.carouselContainer} ${className}`}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        navigation={navigation}
        pagination={pagination ? { clickable: true } : false}
        autoplay={autoplay ? { delay: 3000, disableOnInteraction: false } : false}
        loop={loop && children.length > 1}
        breakpoints={breakpoints || defaultBreakpoints}
        className={styles.swiper}
      >
        {children.map((child, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel; 