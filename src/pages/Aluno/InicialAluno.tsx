import { SidebarAluno } from '../../Components/Aluno/SidebarAluno';
import styles from '../../styles/MainLayout.module.css';
import Descricao from '../../Components/Aluno/inicialpag';

export function InicialPag() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.sidebarContainer}>
        <SidebarAluno />
      </div>
      
      <main className={styles.dashboardContainer}>
        <Descricao/>
      </main>
    </div>
  );
}