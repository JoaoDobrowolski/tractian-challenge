import { Bolt, CodePen } from "@assets/icons";
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <div className={styles.test}>
      <Bolt />
      <CodePen />
    </div>
  );
}
