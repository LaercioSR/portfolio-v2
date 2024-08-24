import styles from "./styles.module.css";

interface TypographyProps {
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "body1"
    | "body2"
    | "body3"
    | "caption1"
    | "caption2";
  children: React.ReactNode;
}

export default function Typography({ variant, children }: TypographyProps) {
  return (
    <>
      {variant === "h1" && <h1 className={styles.headline1}>{children}</h1>}
      {variant === "h2" && <h2 className={styles.headline2}>{children}</h2>}
      {variant === "h3" && <h3 className={styles.headline3}>{children}</h3>}
      {variant === "h4" && <h4 className={styles.headline4}>{children}</h4>}
      {variant === "body1" && <p className={styles.body1}>{children}</p>}
      {variant === "body2" && <p className={styles.body2}>{children}</p>}
      {variant === "body3" && <p className={styles.body3}>{children}</p>}
      {variant === "caption1" && <p className={styles.caption1}>{children}</p>}
      {variant === "caption2" && <p className={styles.caption2}>{children}</p>}
    </>
  );
}
