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
import Image from "next/image";
import profileImg from "./assets/profile.png";
import Footer from "./components/Footer";
import { projects } from "./data/projects";
import ProjectCard from "./components/ProjectCard";
import Link from "next/link";
import ArrowRight from "./assets/icons/arrow-right-alt.svg";

export default function Home() {
  const { t } = useTranslation();

  const projectsHighlighted = projects.filter((project) => project.highlight);

  return (
    <main className={styles.home}>
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
      <section className={styles["home-about"]}>
        <div className={styles["home-about-wrapper"]}>
          <div>
            <Typography variant="h2">
              {t("pages.home.about.introduction.label")}
            </Typography>
            <Typography variant="h4">
              {t("pages.home.about.content.label")}
            </Typography>
          </div>
          <Image src={profileImg} alt="Profile photo" />
          <Typography variant="body1">
            &quot;{t("pages.home.about.description.label")}&quot;
          </Typography>
        </div>
      </section>
      <section className={styles["home-section"]}>
        <div className={styles["home-section-wrapper"]}>
          <div className={styles["home-section-title"]}>
            <Typography variant="h3">
              {t("pages.home.projects.title.label")}
            </Typography>
            <Link href="/projects">
              <Typography variant="body1">
                {t("pages.home.projects.seeMore.label")}
              </Typography>
              <ArrowRight />
            </Link>
          </div>
          <ul className={styles["projects-list"]}>
            {projectsHighlighted.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                image={project.images[0]}
                link={project.link}
                github={project.repository}
              />
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  );
}
