import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/Aluno/ProtocoloDec.module.css';

export function ProtocoloDen() {
  const navigate = useNavigate();
  const [copiado, setCopiado] = useState(false);
  const [protocolo, setProtocolo] = useState('');

  useEffect(() => {
    const gerarProtocolo = () => {
      const numero = Math.floor(10000 + Math.random() * 90000);
      return `SOS–2025–${numero}`;
    };

    setProtocolo(gerarProtocolo());
  }, []);

  const copiarProtocolo = async () => {
    try {
      await navigator.clipboard.writeText(protocolo);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 1500);
    } catch (error) {
      console.error('Erro ao copiar o protocolo:', error);
    }
  };

  const acompanharStatus = () => {
    alert('Redirecionando para acompanhamento do protocolo: ' + protocolo);
    // window.location.href = `/track-status?protocol=${protocolo}`;
  };

  const handleClickTo = () => {
    navigate('/inicial-pag');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Protocolo Gerado</h1>

      <div className={styles.confirmationContainer}>
        <p className={styles.confirmationText}>Sua denúncia foi registrada!</p>

        <span className={styles.protocolNumber} onClick={copiarProtocolo}>
          {copiado ? "Copiado!" : protocolo}
        </span>

        <p className={styles.subtext}>Guarde este número para acompanhamento</p>

        <div className={styles.buttonsContainer}>
          <button className={styles.primaryButton} onClick={acompanharStatus}>
            Acompanhar Status
          </button>
          <button className={styles.secondaryButton} onClick={handleClickTo}>
            Voltar à Página Inicial
          </button>
        </div>
      </div>
    </div>
  );
}
