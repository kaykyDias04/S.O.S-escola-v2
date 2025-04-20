import { AP } from "../Components/AP";
import { Sidebar } from "../Components/Sidebar";
import styles from '../styles/NovaDenuncia.module.css';

export function NovaDenuncia() {
    return (
        <div className={styles.appContainer}>
            <div className={styles.sidebar}>
                <Sidebar/>
            </div>
            <div className={styles.mainContent}>
                <AP/>
            </div>
        </div>
    );
}