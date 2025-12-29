import styles from "./Info.module.css";

type Props = {
  label: string;
  children: React.ReactNode;
};

export function Info({ label, children }: Props) {
  return (
    <div className={styles.container}>
      <span className={styles.label}>{label}</span>
      <p className={styles.content}>{children}</p>
    </div>
  );
}
