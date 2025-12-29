import styles from "./Disclaimer.module.css";

export function Disclaimer() {
  return (
    <section className={styles.wrapper}>
      <h2>Clause de prudence</h2>
      <p>
        Ce rapport n’est pas un conseil financier. Il synthétise une analyse de marché basée sur
        MA&nbsp;Shop et des sources publiques. Les performances passées ne préjugent pas des
        performances futures. Investissez uniquement des montants que vous êtes prêt à immobiliser et
        validez vos décisions avec un professionnel dûment habilité.
      </p>
    </section>
  );
}
