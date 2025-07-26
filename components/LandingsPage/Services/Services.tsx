"use client";
import Container from "@/components/ui/Container";
import styles from "./Services.module.css";
import { 
  VideoCamera, 
  Calendar, 
  DeviceMobile, 
  Package, 
  ForkKnife, 
  Buildings 
} from "@phosphor-icons/react";

interface Service {
  title: string;
  description: string;
}

interface ServicesProps {
  title: string;
  servicesList: Service[];
}

const Services = ({ title, servicesList }: ServicesProps) => {
  const serviceIcons = [
    <VideoCamera key="video" size={32} weight="duotone" />,
    <Calendar key="calendar" size={32} weight="duotone" />,
    <DeviceMobile key="mobile" size={32} weight="duotone" />,
    <Package key="package" size={32} weight="duotone" />,
    <ForkKnife key="fork" size={32} weight="duotone" />,
    <Buildings key="buildings" size={32} weight="duotone" />
  ];

  return (
    <Container>
      <section className={styles.wrapper}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.serviceContent}>
          {servicesList.map((service, index) => (
            <div key={index} className={styles.serviceItem}>
              <div className={styles.iconContainer}>
                {serviceIcons[index]}
              </div>
              <div className={styles.serviceText}>
                <h3 className="font-color font-bold">
                  {service.title}
                </h3>
                <p className="font-color-gray">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Services; 