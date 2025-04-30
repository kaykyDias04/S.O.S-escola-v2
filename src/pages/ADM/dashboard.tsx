import { Sidebar } from '../../Components/ADM/Sidebar';
import Dashboard from '../../Components/ADM/dash';
import styles from '../../styles/MainLayout.module.css';

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