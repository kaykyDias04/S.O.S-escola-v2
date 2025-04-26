import React from 'react';
import { Sidebar } from '../Components/Sidebar';
import {DenunciaRecentes} from '../Components/DenunciasRecentes';
import styles from '../styles/MainLayout.module.css';

export function DenunciaRec() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.sidebarContainer}>
        <Sidebar />
      </div>
      
      <main className={styles.dashboardContainer}>
        <DenunciaRecentes/>
      </main>
    </div>
  );
}