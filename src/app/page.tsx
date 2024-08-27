"use client";
import styles from "./page.module.css";
import Header from "./components/Header";
import "./i18n";
import Logo from "./assets/logo.svg";
import Typography from "./components/Typography";
import { useTranslation } from "react-i18next";
import { GITHUB_LINK, EMAIL_LINK, LINKEDIN_LINK } from "./utils/contrants";
import GithubIcon from "./assets/icons/github-logo.svg";
import EmailIcon from "./assets/icons/email-logo.svg";
import LinkedinIcon from "./assets/icons/linkedin-logo.svg";
import ArrowDownIcon from "./assets/icons/arrow-down.svg";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className={styles.page}>
      <Header />
      <section className={styles["home-intro_section"]}>
        <div className={styles["home-intro_section-wrapper"]}>
          <Logo className={styles["home-intro_section-logo"]} />
          <div className={styles["home-intro_section-title"]}>
            <Typography variant="h1">Laercio Rios</Typography>
            <Typography variant="h2">{t("profile.role")}</Typography>
          </div>
          <ul className={styles["home-intro_section-networks"]}>
            <li>
              <a href={EMAIL_LINK} target="_blank" rel="noreferrer">
                <EmailIcon />
              </a>
            </li>
            <li>
              <a href={LINKEDIN_LINK} target="_blank" rel="noreferrer">
                <LinkedinIcon />
              </a>
            </li>
            <li>
              <a href={GITHUB_LINK} target="_blank" rel="noreferrer">
                <GithubIcon />
              </a>
            </li>
          </ul>
          <ArrowDownIcon className={styles["home-intro_section-arrow_down"]} />
        </div>
      </section>
      <section className={styles["home-about_section"]}>
        <div className={styles["home-about_section-wrapper"]}></div>
      </section>
    </main>
  );
}
