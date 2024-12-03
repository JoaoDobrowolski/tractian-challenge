"use client";

import Header from "@components/header";
import { useCompanies } from "@hooks/useCompanies";
// import styles from "./styles.module.scss";

export default function Home() {
  const {
    data: companiesData,
    // , isLoading, isError, error
  } = useCompanies();

  return (
    <div>
      <Header companies={companiesData} />
    </div>
  );
}
