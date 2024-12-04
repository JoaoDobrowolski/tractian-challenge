'use client';

import Header from '@components/header';
import { useCompanies } from '@hooks/useCompanies';
import { useState } from 'react';

import styles from './styles.module.scss';
import SpinLoader from '@components/spin-loader';

export default function Home() {
  const [selectedCompanyId, setSelectedCompanyId] = useState<string>('');

  const { data: companiesData } = useCompanies();

  const selectedCompanyName = companiesData
    ? companiesData?.find(
        (company: { id: string; name: string }) => company.id === selectedCompanyId
      )?.name
    : 'Company';

  return (
    <div>
      <Header
        companies={companiesData}
        selectedCompanyId={selectedCompanyId}
        setSelectedCompanyId={setSelectedCompanyId}
      />
      <main className={styles.main}>
        <div className={styles.container}>
          {companiesData ? (
            <>
              <div className={styles['horizontal-wrapper']}>
                <h1 className={styles.title}>Ativos</h1>
                <span className={styles.unit}>&nbsp;/&nbsp;</span>
                <h2 className={styles.unit}>{`${selectedCompanyName} Unit`}</h2>
              </div>
            </>
          ) : (
            <div className={styles['loader-container']}>
              <SpinLoader />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
