import { Logo } from "@assets/icons";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo className={styles.logo} />
      <div></div>
    </header>
  );
}
