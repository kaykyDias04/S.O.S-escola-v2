import React from 'react';
import styles from '../styles/enc.module.css';

export default function CorpoEnc() {
  const tabs = ['Pendentes', 'Em Andamento', 'Concluídos'];
  const [activeTab, setActiveTab] = React.useState('Pendentes');
  const [status, setStatus] = React.useState('Todos');

  const encaminhamentos = [
    {
      protocolo: 'ENC-2023-001',
      tipo: 'Psicológico',
      data: '15/05/2023',
      encaminhadoPara: 'Psicóloga Escolar',
      subtitulo: 'Maria Silva',
    },
    {
      protocolo: 'ENC-2023-002',
      tipo: 'Conselho Tutelar',
      data: '18/05/2023',
      encaminhadoPara: 'Conselho Tutelar',
      subtitulo: 'Zona Norte',
    },
    {
      protocolo: 'ENC-2023-003',
      tipo: 'Assistência Social',
      data: '20/05/2023',
      encaminhadoPara: 'CRAS',
      subtitulo: 'Unidade Central',
    },
    {
      protocolo: 'ENC-2023-004',
      tipo: 'Psicológico',
      data: '22/05/2023',
      encaminhadoPara: 'Psicóloga Escolar',
      subtitulo: 'Maria Silva',
    },
  ];

  const handleStatusChange = () => {
    const options = ['Todos', 'Pendentes', 'Em Andamento', 'Concluídos'];
    const currentIndex = options.indexOf(status);
    const nextIndex = (currentIndex + 1) % options.length;
    setStatus(options[nextIndex]);
  };

  const handleNew = () => {
    alert('Abrir formulário...');
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Encaminhamentos</h1>
      </header>

      <section className={styles.filters}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Buscar por protocolo ou palavra-chave..."
        />
        <button className={styles.statusDropdown} onClick={handleStatusChange}>
          Status: {status}
        </button>
        <button className={styles.newButton} onClick={handleNew}>
          Novo
        </button>
      </section>

      <section className={styles.statusTabs}>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </section>

      <section className={styles.tableContainer}>
        <table>
          <thead>
            <tr>
              <th>Protocolo</th>
              <th>Tipo</th>
              <th>Data</th>
              <th>Encaminhado para</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {encaminhamentos.map((item) => (
              <tr key={item.protocolo}>
                <td className={styles.protocol}>{item.protocolo}</td>
                <td className={styles.type}>{item.tipo}</td>
                <td className={styles.date}>{item.data}</td>
                <td className={styles.forwardedTo}>
                  {item.encaminhadoPara}
                  <span className={styles.subtitle}>{item.subtitulo}</span>
                </td>
                <td className={styles.actionCell}>
                  <button className={styles.actionButton}>Ver</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className={styles.infoCard}>
        <h3>Equipe de Apoio Disponível</h3>
        <p>Psicóloga Escolar: Disponível segundas e quartas (8h às 12h)</p>
        <p>Conselho Tutelar: Disponível diariamente (8h às 17h)</p>
      </section>
    </div>
  );
}
