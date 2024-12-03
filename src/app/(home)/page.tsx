"use client";

import Header from "@components/header";
import { useCompanies } from "@hooks/useCompanies";
import { useState } from "react";
// import styles from "./styles.module.scss";

export default function Home() {
  const [selectedCompanyId, setSelectedCompanyId] = useState<string>("");

  const {
    data: companiesData,
    // , isLoading, isError, error
  } = useCompanies();

  return (
    <div>
      <Header
        companies={companiesData}
        selectedCompanyId={selectedCompanyId}
        setSelectedCompanyId={setSelectedCompanyId}
      />
    </div>
  );
}
