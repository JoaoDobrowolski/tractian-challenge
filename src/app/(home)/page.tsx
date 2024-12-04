'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import { buildTree, TreeNode } from '../utils/tree';
import Header from '@components/header';
import SpinLoader from '@components/spin-loader';
import { useCompanies } from '@hooks/useCompanies';
import { useLocations } from '@hooks/useLocations';
import { useAssets } from '@hooks/useAssets';
import { TreeNodeComponent } from '@components/tree-node-component';

import styles from './styles.module.scss';
import Filter from '@components/filter';
import { Lightning, Search, Warning } from '@assets/icons';

export default function Home() {
  const [selectedCompanyId, setSelectedCompanyId] = useState<string>('');
  const [tree, setTree] = useState<TreeNode[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const { data: companiesData } = useCompanies();
  const { data: locationsData } = useLocations(selectedCompanyId);
  const { data: assetsData } = useAssets(selectedCompanyId);

  // Process data into tree and map when locations and assets change
  useEffect(() => {
    if (locationsData && assetsData) {
      const { tree } = buildTree(locationsData, assetsData);
      setTree(tree);
    }
  }, [locationsData, assetsData]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

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
              <div className={styles['unit-filters']}>
                <div className={styles['horizontal-wrapper']}>
                  <h1 className={styles.title}>Assets</h1>
                  <span className={styles.unit}>&nbsp;/&nbsp;</span>
                  <h2 className={styles.unit}>
                    {`${
                      companiesData.find(
                        (company: { id: string }) => company.id === selectedCompanyId
                      )?.name || 'Company'
                    } Unit`}
                  </h2>
                </div>
                {/* TODO: Filters logic */}
                <div className={styles.filters}>
                  <Filter
                    id="energy"
                    name="Sensor de Energia"
                    selectedFilters={selectedFilters}
                    setSelectedFilters={setSelectedFilters}
                    icon={<Lightning />}
                  />
                  <Filter
                    id="critical"
                    name="Crítico"
                    selectedFilters={selectedFilters}
                    setSelectedFilters={setSelectedFilters}
                    icon={<Warning />}
                  />
                </div>
              </div>
              <div className={styles['tree-container']}>
                {/* TODO: Search input logic */}
                <div className={styles['search-container']}>
                  <input
                    type="text"
                    placeholder="Buscar Ativo ou Local"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className={styles.search}
                  />
                  <Search className={styles['search-icon']} />
                </div>
                <div className={styles.tree}>
                  {tree.map(node => (
                    <TreeNodeComponent key={node.id} node={node} />
                  ))}
                </div>
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
