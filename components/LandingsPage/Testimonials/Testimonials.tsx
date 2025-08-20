"use client";
import Container from "@/components/ui/Container";
import Carousel from "@/components/ui/Carousel";
import styles from "./Testimonials.module.css";
import Image from "next/image";
import useIsMobile from "@/utils/hooks/useIsMobile";
import { Quotes } from "@phosphor-icons/react";

interface Testimonial {
  quote: string;
  client: string;
  logo: string;
  personName: string;
  personPosition: string;
}

interface TestimonialsProps {
  titleLight: string;
  titleBold: string;
  testimonialsList: Testimonial[];
}

const Testimonials = ({ titleLight, titleBold, testimonialsList }: TestimonialsProps) => {
  const isMobile = useIsMobile();

  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <div className={styles.testimonialCard}>
      <div className={styles.quoteIcon}>
        <Quotes size={32} weight="duotone" />
      </div>
      <blockquote className={styles.quote}>
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className={styles.clientInfo}>
        <div className={styles.logoContainer}>
          <Image
            src={testimonial.logo}
            alt={`${testimonial.client} logo`}
            fill
            style={{ objectFit: "contain" }}
            sizes="200px"
          />
        </div>
        <div className={styles.personInfo}>
          <div className={styles.personName}>{testimonial.personName}</div>
          <div className={styles.personPosition}>{testimonial.personPosition}</div>
        </div>
      </div>
    </div>
  );

  return (
    <section className={styles.testimonialsSection}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.titleLight}>{titleLight} </span>
            <span className={styles.titleBold}>{titleBold}</span>
          </h2>
        </div>
        
        {isMobile ? (
          <div className={styles.carouselWrapper}>
            <Carousel
              slidesPerView={1}
              spaceBetween={20}
              navigation={true}
              pagination={true}
              autoplay={true}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 1.1,
                  spaceBetween: 20,
                },
              }}
            >
              {testimonialsList.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </Carousel>
          </div>
        ) : (
          <div className={styles.testimonialsGrid}>
            {testimonialsList.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default Testimonials; 