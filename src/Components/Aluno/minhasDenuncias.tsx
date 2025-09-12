import { useEffect, useState } from 'react';

interface Denuncia {
  protocolo: string;
  descricao: string;
  status: 'Em Análise' | 'Resolvida';
}

export default function MinhasDenuncias() {
  const [denuncias, setDenuncias] = useState<Denuncia[]>([]);

  useEffect(() => {
    const denunciasSalvas = localStorage.getItem("denuncias");
    if (denunciasSalvas) {
      setDenuncias(JSON.parse(denunciasSalvas));
    }
  }, []);

  const handleClick = (protocolo: string) => {
    console.log(`Denúncia ${protocolo} clicada`);
    // Redirecionamento ou modal
  };

  return (
    <main className={styles.mainContent}>
      <h1 className={styles.pageTitle}>Minhas Denúncias</h1>

      <div className={styles.complaintsList}>
        {denuncias.map((d) => (
          <div key={d.protocolo} className={styles.complaintCard} onClick={() => handleClick(d.protocolo)}>
            <div className={styles.complaintInfo}>
              <div className={styles.complaintProtocol}>{d.protocolo}</div>
              <div className={styles.complaintDetails}>{d.descricao}</div>
            </div>
            <div className={styles.statusContainer}>
              <span className={styles.statusText}>{d.status}</span>
              <span
                className={`${styles.statusIndicator} ${
                  d.status === 'Em Análise' ? styles.statusInAnalysis : styles.statusResolved
                }`}
                title={d.status}
              ></span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
