

export default function CorpoRela() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Relatório e Estatísticas</h1>
        <div className={styles.filters}>
          <div className={styles.filterGroup}>
            <label htmlFor="period">Período:</label>
            <select id="period">
              <option value="monthly">Mensal</option>
              <option value="quarterly">Trimestral</option>
              <option value="yearly">Anual</option>
            </select>
          </div>
          <div className={styles.filterGroup}>
            <label htmlFor="category">Categoria:</label>
            <select id="category">
              <option value="all">Todas</option>
              <option value="bullying">Bullying</option>
              <option value="cyberbullying">Cyberbullying</option>
            </select>
          </div>
          <button id="export-btn" className={styles.button}>Exportar Dados</button>
        </div>
      </header>

      <section className={styles.summary}>
        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>Total de denúncias</div>
          <div className={styles.summaryValue}>32</div>
        </div>
        <div className={styles.summaryItem}>
          <div className={`${styles.summaryValue} ${styles.success}`}>
            24 <span className={styles.percentage}>(75%)</span>
          </div>
          <div className={styles.summaryLabel}>Resolvidas</div>
        </div>
        <div className={styles.summaryItem}>
          <div className={styles.summaryLabel}>Tempo médio</div>
          <div className={styles.summaryValue}>3.2 dias</div>
        </div>
      </section>

      <div className={styles.statsContainer}>
        <div className={styles.statsCard}>
          <h2>Denúncias por Tipo</h2>
          <table>
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Quantidade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bullying Verbal</td>
                <td>14 <span className={styles.percentage}>(43,8%)</span></td>
              </tr>
              <tr>
                <td>Bullying Psicológico</td>
                <td>8 <span className={styles.percentage}>(25%)</span></td>
              </tr>
              <tr>
                <td>Bullying Físico</td>
                <td>5 <span className={styles.percentage}>(15,6%)</span></td>
              </tr>
              <tr>
                <td>Cyberbullying</td>
                <td>3 <span className={styles.percentage}>(9,4%)</span></td>
              </tr>
              <tr>
                <td>Outros</td>
                <td>2 <span className={styles.percentage}>(6,2%)</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.statsCard}>
          <h2>Local das Ocorrências</h2>
          <table>
            <thead>
              <tr>
                <th>Local</th>
                <th>Quantidade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pátio/Intervalo</td>
                <td>12 <span className={styles.percentage}>(37,5%)</span></td>
              </tr>
              <tr>
                <td>Sala de Aula</td>
                <td>8 <span className={styles.percentage}>(25%)</span></td>
              </tr>
              <tr>
                <td>Corredores</td>
                <td>6 <span className={styles.percentage}>(18,7%)</span></td>
              </tr>
              <tr>
                <td>Online/Virtual</td>
                <td>4 <span className={styles.percentage}>(12,5%)</span></td>
              </tr>
              <tr>
                <td>Outros Locais</td>
                <td>2 <span className={styles.percentage}>(6,2%)</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
