import React, { useState } from 'react';

export default function Descricao() {
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) {
      alert('Por favor, preencha a descrição da solução.');
      return;
    }

    // Simula envio
    alert('Providência registrada com sucesso!');
    setDescription('');
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        {/* Sidebar (pode adicionar conteúdo aqui depois) */}
      </aside>

      <main className={styles.mainContent}>
        <h1 className={styles.pageTitle}>Denúncia SOS-2025-00062</h1>
        <h2 className={styles.pageSubtitle}>Relato da providência na denúncia</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="description" className={styles.formLabel}>
              Descrição da Solução:
            </label>
            <textarea
              id="description"
              className={styles.formTextarea}
              placeholder="Escreva a descrição da ação tomada para a resolução da situação"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className={styles.buttonGroup}>
            <button type="button" className={`${styles.btn} ${styles.btnBack}`} onClick={handleBack}>
              Voltar
            </button>
            <button type="submit" className={`${styles.btn} ${styles.btnSubmit}`}>
              Enviar
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
