"use client";
import Container from "@/components/ui/Container";
import Carousel from "@/components/ui/Carousel";
import styles from "./Works.module.css";
import Image from "next/image";

interface WorksProps {
  title: string;
  subtitle: string;
  works: Array<{
    type: 'image' | 'video' | 'text';
    content: string;
    title?: string;
    description?: string;
  }>;
}

const Works = ({ title, subtitle, works }: WorksProps) => {
  const renderWorkItem = (work: WorksProps['works'][0], index: number) => {
    switch (work.type) {
      case 'image':
        return (
          <div key={index} className={styles.workItem}>
            <div className={styles.imageContainer}>
              <Image 
                src={work.content} 
                alt={work.title || `Trabajo ${index + 1}`}
                className={styles.workImage}
                fill
                priority
                style={{ objectFit: "cover" }}
              />
              {work.title && (
                <div className={styles.workOverlay}>
                  <h4 className={styles.workTitle}>{work.title}</h4>
                  {work.description && (
                    <p className={styles.workDescription}>{work.description}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        );
        
      case 'video':
        return (
          <div key={index} className={styles.workItem}>
            <div className={styles.videoContainer}>
              <video 
                src={work.content}
                className={styles.workVideo}
                controls
                muted
                playsInline
              />
              {work.title && (
                <div className={styles.workOverlay}>
                  <h4 className={styles.workTitle}>{work.title}</h4>
                  {work.description && (
                    <p className={styles.workDescription}>{work.description}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        );
        
      case 'text':
        return (
          <div key={index} className={styles.workItem}>
            <div className={styles.textContainer}>
              <div className={styles.textContent}>
                {work.title && <h4 className={styles.textTitle}>{work.title}</h4>}
                <div className={styles.textBody} dangerouslySetInnerHTML={{ __html: work.content }} />
                {work.description && (
                  <p className={styles.textDescription}>{work.description}</p>
                )}
              </div>
            </div>
          </div>
        );
        
      default:
        return (
          <div key={index} className={styles.workItem}>
            <div className={styles.customContainer}>
              {work.content}
            </div>
          </div>
        );
    }
  };

  return (
    <section className={styles.worksSection}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      </Container>
      
      <div className={styles.carouselWrapper}>
        <Carousel
          slidesPerView={1}
          spaceBetween={20}
          navigation={true}
          pagination={true}
          autoplay={false}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4.2,
              spaceBetween: 40,
            },
          }}
        >
          {works.map((work, index) => renderWorkItem(work, index))}
        </Carousel>
      </div>
    </section>
  );
};

export default Works; 