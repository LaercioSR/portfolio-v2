"use client";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./page.module.css";

export default function Projects() {
  return (
    <main className={styles.projects}>
      <Header hasBackButton />
      <section className={styles["projects-main"]}></section>
      <Footer />
    </main>
  );
}
