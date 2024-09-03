import BuyMeACoffee from "../BuyMeACoffee";
import Typography from "../Typography";
import styles from "./styles.module.css";
import { GITHUB_LINK, EMAIL_LINK, LINKEDIN_LINK } from "../../utils/contrants";
import GithubIcon from "../../assets/icons/github-logo.svg";
import EmailIcon from "../../assets/icons/email-logo.svg";
import LinkedinIcon from "../../assets/icons/linkedin-logo.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-wrapper"]}>
        <ul>
          <li>
            <BuyMeACoffee />
          </li>
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
        <Typography variant="h3">Laercio Rios - 2024</Typography>
      </div>
    </footer>
  );
}
