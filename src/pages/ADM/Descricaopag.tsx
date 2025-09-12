import { Sidebar } from '../../Components/ADM/Sidebar';
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