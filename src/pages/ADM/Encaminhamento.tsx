import { Sidebar } from '../../Components/ADM/Sidebar';
import styles from '../../styles/MainLayout.module.css';
import CorpoEnc from '../../Components/ADM/CorpoEnc';

export function Encaminhamento() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.sidebarContainer}>
        <Sidebar />
      </div>
      
      <main className={styles.dashboardContainer}>
        <CorpoEnc />
      </main>
    </div>
  );
}