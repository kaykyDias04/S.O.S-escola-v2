import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faExclamation, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/dash.module.css';

const Dashboard: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Dashboard</h1>
        <button className={styles.settingsBtn}>
          <FontAwesomeIcon icon={faCog} />
        </button>
      </header>

      <section className={styles.statsContainer}>
        <div className={`${styles.statCard} ${styles.cardNew}`}>
          <h2>Novas Denúncias</h2>
          <div className={styles.number}>12</div>
          <div className={styles.caption}>Últimos 7 dias</div>
        </div>

        <div className={`${styles.statCard} ${styles.cardInProgress}`}>
          <h2>Em Atendimento</h2>
          <div className={styles.number}>8</div>
          <div className={styles.caption}>Casos ativos</div>
        </div>

        <div className={`${styles.statCard} ${styles.cardResolved}`}>
          <h2>Resolvidos</h2>
          <div className={styles.number}>24</div>
          <div className={styles.caption}>Este mês</div>
        </div>
      </section>

      <section className={styles.priorityCases}>
        <h2>Casos Prioritários</h2>
        <div className={styles.caseList}>
          <div className={styles.caseItem}>
            <div className={styles.caseAlert}>
              <FontAwesomeIcon icon={faExclamation} />
            </div>
            <div className={styles.caseInfo}>
              <div className={styles.caseCode}>BLY-2023-0042</div>
              <div className={styles.caseDescription}>Bullying verbal • 12/10/2023</div>
            </div>
            <span className={styles.priorityTag}>Alta Prioridade</span>
          </div>

          <div className={styles.caseItem}>
            <div className={styles.caseAlert}>
              <FontAwesomeIcon icon={faExclamation} />
            </div>
            <div className={styles.caseInfo}>
              <div className={styles.caseCode}>BLY-2023-0039</div>
              <div className={styles.caseDescription}>Cyberbullying • 10/10/2023</div>
            </div>
            <span className={styles.priorityTag}>Alta Prioridade</span>
          </div>

          <div className={styles.caseItem}>
            <div className={styles.caseAlert}>
              <FontAwesomeIcon icon={faExclamation} />
            </div>
            <div className={styles.caseInfo}>
              <div className={styles.caseCode}>BLY-2023-0036</div>
              <div className={styles.caseDescription}>Bullying físico • 08/10/2023</div>
            </div>
            <span className={styles.priorityTag}>Alta Prioridade</span>
          </div>
        </div>
      </section>

      <div className={styles.scrollIcon}>
        <FontAwesomeIcon icon={faArrowDown} />
      </div>
    </div>
  );
};

export default Dashboard;