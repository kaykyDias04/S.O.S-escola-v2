import React from 'react';
import { Sidebar } from '../Components/Sidebar';
import Dashboard from '../Components/dash';
import styles from '../styles/MainLayout.module.css';

export function MainLayout() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.sidebarContainer}>
        <Sidebar />
      </div>
      
      <main className={styles.dashboardContainer}>
        <Dashboard />
      </main>
    </div>
  );
}