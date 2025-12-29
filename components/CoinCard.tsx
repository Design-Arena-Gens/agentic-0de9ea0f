import type { Coin } from "@/data/coins";
import { Info } from "./Info";
import styles from "./CoinCard.module.css";

type Props = {
  coin: Coin;
  highlighted?: boolean;
};

const convictionColors: Record<Coin["conviction"], string> = {
  Conservateur: "chip chip-soft",
  Equilibré: "chip chip-success",
  Spéculatif: "chip chip-danger"
};

export function CoinCard({ coin, highlighted = false }: Props) {
  return (
    <article className={`${styles.card} ${highlighted ? styles.featured : ""}`}>
      <header className={styles.header}>
        <div>
          <h3>{coin.name}</h3>
          <p className={styles.subtitle}>{coin.rarity}</p>
        </div>
        <div className={styles.priceStack}>
          <span className={styles.price}>
            {Intl.NumberFormat("fr-FR", {
              style: "currency",
              currency: "EUR",
              maximumFractionDigits: 0
            }).format(coin.priceEur)}
          </span>
          <span className={styles.upside}>{coin.potentialUpside}</span>
        </div>
      </header>

      <div className={styles.snapshot}>
        <Info label="Frappe">{coin.snapshot.mintDate}</Info>
        <Info label="Tirage">{coin.snapshot.mintage}</Info>
        <Info label="Signal">{coin.snapshot.currentTrend}</Info>
      </div>

      <div className={styles.section}>
        <span className={convictionColors[coin.conviction]}>{coin.conviction}</span>
      </div>

      <div className={styles.section}>
        <h4>Pourquoi cette pièce retient l’attention</h4>
        <ul className={styles.list}>
          {coin.whyItMatters.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className={`${styles.section} ${styles.grid}`}>
        <div>
          <h4>Plan d’action</h4>
          <ul className={styles.list}>
            {coin.nextSteps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Guettez ces signaux</h4>
          <ul className={styles.list}>
            {coin.watchSignals.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
