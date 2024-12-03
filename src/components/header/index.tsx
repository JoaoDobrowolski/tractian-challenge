import { Gold, Logo } from "@assets/icons";
import styles from "./styles.module.scss";
import SpinLoader from "@components/spin-loader";
import SegmentedGroup from "@components/segmented-group";
import { Dispatch, SetStateAction, useEffect } from "react";

type HeaderProps = {
  companies: { id: string; name: string }[] | null;
  selectedCompanyId: string;
  setSelectedCompanyId: Dispatch<SetStateAction<string>>;
};

export default function Header({
  companies,
  selectedCompanyId,
  setSelectedCompanyId,
}: HeaderProps) {
  useEffect(() => {
    if (companies && companies.length > 0) {
      setSelectedCompanyId(companies[0].id);
    }
  }, [companies, setSelectedCompanyId]);

  return (
    <header className={styles.header}>
      <Logo className={styles.logo} />
      <div className={styles.companies}>
        {companies ? (
          <SegmentedGroup
            elements={companies}
            selectedId={selectedCompanyId}
            setSelectedId={setSelectedCompanyId}
            icon={<Gold />}
          />
        ) : (
          <SpinLoader />
        )}
      </div>
    </header>
  );
}
