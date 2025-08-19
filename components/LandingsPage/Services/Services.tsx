"use client";
import styles from "./Services.module.css";
import { 
  VideoCamera, 
  Camera, 
  Megaphone, 
  ShareNetwork, 
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
  source: string;
}

const aestheticServiceIcons = [
  <VideoCamera key="video" size={32} weight="duotone" />,
  <Camera key="camera" size={32} weight="duotone" />,
  <Megaphone key="megaphone" size={32} weight="duotone" />,
  <ShareNetwork key="social" size={32} weight="duotone" />,
];

const productionServiceIcons = [
  <VideoCamera key="video" size={32} weight="duotone" />,
  <Calendar key="calendar" size={32} weight="duotone" />,
  <DeviceMobile key="mobile" size={32} weight="duotone" />,
  <Package key="package" size={32} weight="duotone" />,
  <ForkKnife key="fork" size={32} weight="duotone" />,
  <Buildings key="buildings" size={32} weight="duotone" />
];

const Services = ({ title, servicesList, source }: ServicesProps) => {

  const serviceIcons = {
    "landing-aesthetic": aestheticServiceIcons,
    "landing-production": productionServiceIcons
  }

  const currentIcons = serviceIcons[source];
  const hasFourItems = currentIcons && currentIcons.length === 4;

  return (
      <section className={styles.wrapper}>
        <h2 className={styles.title}>{title}</h2>
        <div className={`${styles.serviceContent} ${hasFourItems ? styles.fourColumns : ''}`}>
          {servicesList.map((service, index) => (
            <div key={index} className={styles.serviceItem}>
              <div className={styles.iconContainer}>
                {serviceIcons[source][index]}
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
  );
};

export default Services; 