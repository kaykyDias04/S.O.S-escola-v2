

const Psicologia = () => {
  const handleChatClick = () => {
    console.log('Iniciando chat...');
  };

  const handleScheduleClick = () => {
    console.log('Abrindo agendamento...');
  };

  const handleCardClick = (name: string) => {
    console.log('Profissional selecionado:', name);
  };

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        {/* Conteúdo da sidebar aqui */}
      </aside>

      <main className={styles.mainContent}>
        <div className={styles.contentContainer}>
          <header className={styles.pageHeader}>
            <h1>Apoio Psicológico</h1>
            <p>Aqui você pode receber suporte emocional e orientações psicológicas</p>
          </header>

          <section className={styles.professionalsSection}>
            <h2 className={styles.sectionTitle}>Profissionais Disponíveis</h2>

            <div
              className={styles.professionalCard}
              onClick={() => handleCardClick('Dra. Ana Paula Silva')}
            >
              <div className={`${styles.professionalIcon} ${styles.iconFemale}`}>
                <i className="fas fa-user"></i>
              </div>
              <div className={styles.professionalInfo}>
                <h3 className={styles.professionalName}>Dra. Ana Paula Silva</h3>
                <p className={styles.professionalTitle}>Psicóloga Escolar - CRP 06/12345</p>
                <p className={styles.professionalSpecialty}>Especialista em bullying e comportamento adolescente</p>
              </div>
              <div className={styles.statusBadge}>
                <i className="fas fa-circle" style={{ fontSize: 8, marginRight: 4 }}></i> Online
              </div>
            </div>

            <div
              className={styles.professionalCard}
              onClick={() => handleCardClick('Dr. Carlos Mendes')}
            >
              <div className={`${styles.professionalIcon} ${styles.iconMale}`}>
                <i className="fas fa-user"></i>
              </div>
              <div className={styles.professionalInfo}>
                <h3 className={styles.professionalName}>Dr. Carlos Mendes</h3>
                <p className={styles.professionalTitle}>Psicólogo - CRP 06/54321</p>
                <p className={styles.professionalSpecialty}>Especialista em traumas e violência escolar</p>
              </div>
              <div className={styles.statusBadge}>
                <i className="fas fa-circle" style={{ fontSize: 8, marginRight: 4 }}></i> Online
              </div>
            </div>
          </section>

          <section className={styles.serviceSection}>
            <h2 className={styles.sectionTitle}>Formas de Atendimento</h2>
            <div className={styles.serviceCards}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <i className="fas fa-comments"></i>
                </div>
                <h3 className={styles.serviceTitle}>Chat Privado</h3>
                <p className={styles.serviceDescription}>Converse em tempo real de forma segura e anônima</p>
                <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={handleChatClick}>
                  Iniciar Chat
                </button>
              </div>

              <div className={styles.serviceCard}>
                <div className={`${styles.serviceIcon} ${styles.orange}`}>
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <h3 className={styles.serviceTitle}>Agendar Consulta</h3>
                <p className={styles.serviceDescription}>Marque um horário para atendimento em vídeo</p>
                <button className={`${styles.btn} ${styles.btnOrange}`} onClick={handleScheduleClick}>
                  Agendar
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Psicologia;
