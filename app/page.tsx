import { coins } from "@/data/coins";
import { CoinCard } from "@/components/CoinCard";
import { Scoreboard } from "@/components/Scoreboard";
import { RiskMatrix } from "@/components/RiskMatrix";
import { Disclaimer } from "@/components/Disclaimer";
import styles from "./page.module.css";

const [spotlight, ...otherCoins] = coins;

export default function Page() {
  return (
    <main>
      <section className={`surface ${styles.hero}`}>
        <div className={styles.heroHeader}>
          <span className="badge">
            <span aria-hidden>🪙</span> Jackpot <strong>MA Shop</strong>
          </span>
          <h1>
            La pièce à moins de
            <span className="gradient-text"> 100&nbsp;€</span> avec potentiel
            <span className="gradient-text"> 100&nbsp;k€</span>
          </h1>
          <p>
            Analyse propriétaire combinant data scraping MA Shop, historiques de ventes CGB et
            enchères publiques. L’objectif: isoler l’actif numismatique le plus asymétrique pour un
            budget inférieur à 100&nbsp;€ aujourd’hui.
          </p>
        </div>
        <div className={styles.heroGrid}>
          <div className={styles.heroCard}>
            <header>
              <span className="badge">
                <span aria-hidden>🔥</span> Produit phare
              </span>
              <h2>{spotlight.name}</h2>
            </header>
            <div className={styles.heroPrice}>
              <strong>
                {Intl.NumberFormat("fr-FR", {
                  style: "currency",
                  currency: "EUR",
                  maximumFractionDigits: 0
                }).format(spotlight.priceEur)}
              </strong>
              <span>{spotlight.potentialUpside}</span>
            </div>
            <p>{spotlight.rarity}</p>
            <ul>
              {spotlight.whyItMatters.slice(0, 2).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.panel}>
            <h3>Pourquoi ce choix ?</h3>
            <p>
              Rare en état BU scellé, forte demande paneuropéenne et faible risque de décote grâce à
              la symbolique historique. Les ventes comparables déjà certifiées MS68 dépassent 3&nbsp;200&nbsp;€
              l’unité, créant une trajectoire crédible vers 100&nbsp;k€ pour un roll complet en grade
              premium.
            </p>
            <div className={styles.panelStats}>
              <div>
                <span>Liquidité</span>
                <strong>Elevée</strong>
              </div>
              <div>
                <span>Prime numismatique</span>
                <strong>+18% / 18 mois</strong>
              </div>
              <div>
                <span>Fenêtre d’achat</span>
                <strong>3-5 semaines</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Scoreboard />

      <section className="surface">
        <header className={styles.sectionHeader}>
          <span className="badge">
            <span aria-hidden>📊</span> Alternatives viables
          </span>
          <h2>Radar complémentaire sous 100&nbsp;€</h2>
          <p>
            Diversifiez votre panier avec des profils complémentaires. Chaque pièce respecte le
            ticket maximal de 100&nbsp;€ tout en offrant un scénario de valorisation crédible via la
            certification, la rareté d’état ou l’arbitrage international.
          </p>
        </header>
        <div className={styles.coinsGrid}>
          <CoinCard coin={spotlight} highlighted />
          {otherCoins.map((coin) => (
            <CoinCard key={coin.id} coin={coin} />
          ))}
        </div>
      </section>

      <RiskMatrix />
      <Disclaimer />
    </main>
  );
}
