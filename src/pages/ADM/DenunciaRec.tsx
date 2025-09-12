import { Sidebar } from '../../Components/ADM/Sidebar';
import {DenunciaRecentes} from '../../Components/ADM/DenunciasRecentes';

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