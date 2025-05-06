import styles from '../../styles/Aluno/inicial.module.css';
import { Link } from 'react-router-dom';


export default function InicialAluno() {
  return (
    <main className={styles.mainContent}>
      <section className={styles.welcomeSection}>
        <h1 className={styles.welcomeTitle}>Olá, Nome Exemplo!</h1>
        <p className={styles.welcomeSubtitle}>
          Bem-vindo(a) ao S.O.S Escola. Como podemos ajudar você hoje?
        </p>
      </section>

      <div className={styles.actionBlocks}>
        <div className={styles.actionBlock}>
          <div className={`${styles.iconContainer} ${styles.reportIcon}`}>!</div>
          <h2 className={styles.actionTitle}>Fazer Nova Denúncia</h2>
          <p className={styles.actionText}>
            Denuncie situações de bullying ou violência no ambiente escolar.
          </p>
          <Link to="/nova-denuncia" className={`${styles.actionButton} ${styles.reportButton}`}>
  Criar Denúncia
</Link>
        </div>

        {/* Acompanhar Denúncias */}
        <div className={styles.actionBlock}>
          <div className={`${styles.iconContainer} ${styles.trackIcon}`}>✓</div>
          <h2 className={styles.actionTitle}>Acompanhar Denúncias</h2>
          <p className={styles.actionText}>
            Verifique o status e as atualizações das suas denúncias.
          </p>
          <Link to="/minhas-denc" className={`${styles.actionButton} ${styles.trackButton}`}>
            Ver Minhas Denúncias
          </Link>
        </div>

        {/* Apoio Psicológico */}
        <div className={styles.actionBlock}>
          <div className={`${styles.iconContainer} ${styles.supportIcon}`}>?</div>
          <h2 className={styles.actionTitle}>Apoio Psicológico</h2>
          <p className={styles.actionText}>
            Converse com profissionais que podem te ajudar.
          </p>
          <Link to="/psi" className={`${styles.actionButton} ${styles.supportButton}`}>
            Buscar Apoio
          </Link>
        </div>
      </div>
    </main>
  );
}
