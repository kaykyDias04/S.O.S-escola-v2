import React from 'react';
import { Sidebar } from '../Components/Sidebar';
import CorpoRela from '../Components/CorpoRela';
import styles from '../styles/MainLayout.module.css';

export function relatorio() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.sidebarContainer}>
        <Sidebar />
      </div>
      
      <main className={styles.dashboardContainer}>
        <CorpoRela />
      </main>
    </div>
  );
}