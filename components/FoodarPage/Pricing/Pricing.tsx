import styles from "./Pricing.module.css";
import { Translations } from "@/translations/types";
import PricingCard from "./PricingCard";

export default function Pricing({
  translations,
}: {
  translations: Translations["foodarPage"]["pricing"];
}) {
  return (
    <div className={styles.pricingContainer}>
      <div className={styles.pricingCards}>
        {translations.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            price={plan.price}
            isFeatured={plan.isFeatured}
            features={plan.features}
            period={plan.period}
          />
        ))}
      </div>
    </div>
  );
}
