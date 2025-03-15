import styles from "./Pricing.module.css";
export interface PricingFeature {
  text: string;
}

export interface PricingCardProps {
  title: string;
  price: string;
  isFeatured?: boolean;
  features: PricingFeature[];
  period?: string;
}

export default function PricingCard({
  title,
  price,
  isFeatured = false,
  features,
  period = "/mes",
}: PricingCardProps) {
  return (
    <div
      className={`${styles.pricingCard} ${isFeatured ? styles.featured : ""}`}
    >
      {isFeatured && <div className={styles.popularBadge}>Popular</div>}
      <div className={styles.cardContent}>
        <div className={styles.planName}>{title}</div>
        <div className={styles.planPrice}>
          <span className={styles.price}>€{price}</span>
          <span className={styles.period}>{period}</span>
        </div>
        <ul className={styles.featuresList}>
          {features.map((feature, index) => (
            <li key={index}>
              <svg className={styles.checkIcon} viewBox="0 0 24 24">
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              {feature.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
