"use client";
import "../i18n";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import GithubIcon from "../assets/icons/github-logo.svg";
import LinkIcon from "../assets/icons/link.svg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Typography from "../components/Typography";
import { projects } from "../data/projects";
import styles from "./page.module.css";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <main className={styles.projects}>
      <Header hasBackButton />
      <section className={styles["projects-main"]}>
        <Typography variant="h1">{t("pages.projects.title.label")}</Typography>
        <ul className={styles["projects-list"]}>
          {projects.map((project) => (
            <li key={project.title} className={styles["projects-list-item"]}>
              {project.images.length > 0 && (
                <Image
                  src={`/images/projects/${project.title}/${project.images[0]}`}
                  alt={project.title}
                  width={800}
                  height={400}
                />
              )}
              <div className={styles["projects-list-item-content"]}>
                <Typography variant="h2">
                  {t(`data.projects.${project.title}.title.label`)}
                </Typography>
                <Typography variant="body1">
                  {`${t(`data.projects.types.${project.type}.label`)}${project.bond ? ` - ${project.bond}` : ""}`}
                </Typography>
                <Typography variant="h4">{project.year}</Typography>
                <Typography variant="body2">
                  {t(`data.projects.${project.title}.description.label`)}
                </Typography>
                <ul className={styles["projects-list-item-skills_list"]}>
                  {project.skills.map((skill) => (
                    <li key={skill}>
                      <Typography variant="body1">{skill}</Typography>
                    </li>
                  ))}
                </ul>
                <div>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <LinkIcon />
                    </a>
                  )}
                  {project.repository && (
                    <a
                      href={project.repository}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GithubIcon />
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <Footer />
    </main>
  );
}
