import { Logo } from "@assets/icons";
import styles from "./styles.module.scss";

type HeaderProps = {
  companies: { id: string; name: string }[] | null;
};

export default function Header({ companies }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Logo className={styles.logo} />
      <div className={styles.companies}>
        {companies && companies.map((company) => company.name)}
      </div>
    </header>
  );
}
