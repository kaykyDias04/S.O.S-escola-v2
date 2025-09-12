

export function DenunciaRecentes() {
  return (
    <main className={styles.container}>
      <header>
        <h1>Lista de Denúncias</h1>
      </header>

      <section className={styles.complaintsList}>
        <article className={styles.complaintCard}>
          <div className={styles.complaintContent}>
            <h2 className={styles.complaintCode}>SOS-2025-00123</h2>
            <div className={styles.complaintDetails}>
              <span className={styles.complaintType}>Ameaça</span>
              <span className={styles.complaintDate}>15/03/2025</span>
            </div>
          </div>
          <div className={`${styles.statusIndicator} ${styles.highPriority}`} title="Alta prioridade"></div>
        </article>

        <article className={styles.complaintCard}>
          <div className={styles.complaintContent}>
            <h2 className={styles.complaintCode}>SOS-2025-00124</h2>
            <div className={styles.complaintDetails}>
              <span className={styles.complaintType}>Bullying verbal</span>
              <span className={styles.complaintDate}>14/03/2025</span>
            </div>
          </div>
          <div className={`${styles.statusIndicator} ${styles.inProgress}`} title="Em andamento"></div>
        </article>

        <article className={styles.complaintCard}>
          <div className={styles.complaintContent}>
            <h2 className={styles.complaintCode}>SOS-2025-00125</h2>
            <div className={styles.complaintDetails}>
              <span className={styles.complaintType}>Discriminação</span>
              <span className={styles.complaintDate}>12/03/2025</span>
            </div>
          </div>
          <div className={`${styles.statusIndicator} ${styles.resolved}`} title="Resolvido"></div>
        </article>

        <article className={styles.complaintCard}>
          <div className={styles.complaintContent}>
            <h2 className={styles.complaintCode}>SOS-2025-00126</h2>
            <div className={styles.complaintDetails}>
              <span className={styles.complaintType}>Assédio</span>
              <span className={styles.complaintDate}>10/03/2025</span>
            </div>
          </div>
          <div className={`${styles.statusIndicator} ${styles.inProgress}`} title="Em andamento"></div>
        </article>
      </section>

      <button className={styles.loadMore} aria-label="Carregar mais denúncias">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    </main>
  );
}
