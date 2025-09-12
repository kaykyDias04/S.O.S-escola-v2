import { Sidebar } from '../../Components/ADM/Sidebar';
import Dashboard from '../../Components/ADM/dash';

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