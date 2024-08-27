import Typography from "../Typography";
import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-wrapper"]}>
        <Typography variant="h3">Laercio Rios - 2024</Typography>
      </div>
    </footer>
  );
}
