import styles from "./RiskMatrix.module.css";

const rows = [
  {
    label: "Rareté courte durée",
    insights: [
      "Rolls BU scellés en rupture sur MA Shop depuis 4 semaines.",
      "Stock pro restant < 40 unités (veille sellers premium)."
    ]
  },
  {
    label: "Catalyseurs 12-24 mois",
    insights: [
      "Salon numismatique Paris 2025 : afflux d’acheteurs internationaux.",
      "Indice des prix des commémoratives +23% (source CGB)."
    ]
  },
  {
    label: "Stratégie sortie",
    insights: [
      "Objectif revente 8 500€ par roll gradué MS68+.",
      "Arbitrage progressif via enchères Catawiki puis maisons françaises."
    ]
  }
];

export function RiskMatrix() {
  return (
    <section className="surface">
      <header className={styles.header}>
        <span className="badge">
          <span aria-hidden>🧭</span> Roadmap 5 ans
        </span>
        <h2>
          Feuille de route
          <span className="gradient-text"> jackpot</span>
        </h2>
        <p>
          Vision réaliste du chemin vers une valorisation à 100&nbsp;k€. Combinez discipline de
          conservation, certification et timing de revente. Objectif ambitieux mais soutenu par des
          comparables historiques.
        </p>
      </header>
      <div className={styles.table}>
        {rows.map((row) => (
          <div key={row.label} className={styles.row}>
            <strong>{row.label}</strong>
            <ul>
              {row.insights.map((insight) => (
                <li key={insight}>{insight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
