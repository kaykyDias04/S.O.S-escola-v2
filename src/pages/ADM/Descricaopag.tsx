import { Sidebar } from '../../Components/ADM/Sidebar';
import styles from '../styles/MainLayout.module.css';
import Descricao from '../../Components/ADM/Descricao';

export function DenunciaRec() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.sidebarContainer}>
        <Sidebar />
      </div>
      
      <main className={styles.dashboardContainer}>
        <Descricao/>
      </main>
    </div>
  );
}