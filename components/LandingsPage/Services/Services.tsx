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
  Buildings,
  TrendUp,
  PencilSimple,
  Microphone
} from "@phosphor-icons/react";

interface Service {
  title: string;
  description: string;
}

interface ServicesProps {
  title: string;
  subtitle: string;
  servicesList: Service[];
  source: string;
}

const aestheticServiceIcons = [
  <TrendUp key="market-analysis" size={32} weight="duotone" />,
  <ShareNetwork key="social-media" size={32} weight="duotone" />,
  <VideoCamera key="video-production" size={32} weight="duotone" />,
  <Camera key="photography" size={32} weight="duotone" />,
  <PencilSimple key="editing" size={32} weight="duotone" />,
  <Megaphone key="digital-ads" size={32} weight="duotone" />,
];

const productionServiceIcons = [
  <Buildings key="corporate" size={32} weight="duotone" />,
  <Megaphone key="promotional" size={32} weight="duotone" />,
  <ShareNetwork key="social" size={32} weight="duotone" />,
  <Calendar key="events" size={32} weight="duotone" />,
  <VideoCamera key="interviews" size={32} weight="duotone" />,
  <Package key="product" size={32} weight="duotone" />,
  <Microphone key="podcast" size={32} weight="duotone" />,
];

const photographyServiceIcons = [
  <Camera key="corporate-photo" size={32} weight="duotone" />,
  <Calendar key="event-photo" size={32} weight="duotone" />,
  <ShareNetwork key="social-photo" size={32} weight="duotone" />,
  <Package key="product-photo" size={32} weight="duotone" />,
  <ForkKnife key="food-photo" size={32} weight="duotone" />,
  <Buildings key="real-estate-photo" size={32} weight="duotone" />,
];

const dentalServiceIcons = [
  <VideoCamera key="video" size={32} weight="duotone" />,
  <Calendar key="calendar" size={32} weight="duotone" />,
  <DeviceMobile key="mobile" size={32} weight="duotone" />,
  <Package key="package" size={32} weight="duotone" />,
  <DeviceMobile key="mobile" size={32} weight="duotone" />,
  <Package key="package" size={32} weight="duotone" />,
];

const Services = ({ title, subtitle, servicesList, source }: ServicesProps) => {

  const serviceIcons = {
    "landing-aesthetic": aestheticServiceIcons,
    "landing-production": productionServiceIcons,
    "landing-photography": photographyServiceIcons,
    "landing-dental": dentalServiceIcons
  }

  const currentIcons = serviceIcons[source];
  const hasFourItems = currentIcons && currentIcons.length === 4;

  return (
      <section className={styles.wrapper}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
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