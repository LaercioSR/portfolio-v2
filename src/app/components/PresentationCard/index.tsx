import styles from "./styles.module.css";

interface PresentationCardProps {
  title: string;
  link: string;
  date: Date;
}

export default function PresentationCard({ link }: PresentationCardProps) {
  return (
    <div className={styles["presentation"]}>
      <iframe
        src={link}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
