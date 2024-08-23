import styles from "./styles.module.css";
import dynamic from "next/dynamic";

const ThemeSwitch = dynamic(() => import("../ThemeSwitch"), {
  ssr: false,
});

export default function Header() {
  return (
    <nav className={styles.header}>
      <div className={styles["nav-wrapper"]}>
        <ul className={styles["header-side_left"]}></ul>
        <ul className={styles["header-side_right"]}>
          <li className={styles["header-side-item"]}>
            <ThemeSwitch />
          </li>
        </ul>
      </div>
    </nav>
  );
}
