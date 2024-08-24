"use client";
import styles from "./page.module.css";
import Header from "./components/Header";
import "./i18n";

export default function Home() {
  return (
    <main className={styles.page}>
      <Header />
    </main>
  );
}
