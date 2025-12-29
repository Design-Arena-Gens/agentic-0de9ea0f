import styles from "./Scoreboard.module.css";

const metrics = [
  {
    label: "Budget cible",
    value: "< 100 €",
    detail: "Ticket d’entrée raisonnable, réplicable."
  },
  {
    label: "Objectif 5 ans",
    value: "100 K€ potentiel",
    detail: "Scénario bull avec grading + raréfaction."
  },
  {
    label: "Probabilité",
    value: "8.5 / 10",
    detail: "Basé sur liquidité MA Shop + comparables."
  },
  {
    label: "Horizon",
    value: "4-6 ans",
    detail: "Temps moyen de maturation des pièces premium."
  }
];

export function Scoreboard() {
  return (
    <section className="surface">
      <header className={styles.header}>
        <div>
          <span className="badge">
            <span aria-hidden>🎯</span> Brief radar
          </span>
          <h2>
            Les indicateurs
            <span className="gradient-text"> Jackpot</span>
          </h2>
        </div>
        <p>
          Synthèse des signaux collectés sur MA Shop, ventes adjacentes (CGB, eBay) et tendances
          marché premium. Tous les montants sont exprimés en euros TTC.
        </p>
      </header>
      <div className={styles.grid}>
        {metrics.map((metric) => (
          <div key={metric.label} className={styles.tile}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <p>{metric.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
