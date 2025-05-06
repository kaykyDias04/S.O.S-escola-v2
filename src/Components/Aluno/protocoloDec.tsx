import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/Aluno/ProtocoloDec.module.css';

export function ProtocoloDen() {
  const navigate = useNavigate();
  const [copiado, setCopiado] = useState(false);
  const [protocolo, setProtocolo] = useState('');

  useEffect(() => {
    const protocoloSalvo = localStorage.getItem("protocologerado");
  
    if (protocoloSalvo) {
      setProtocolo(protocoloSalvo);
    } else {
      const numero = Math.floor(10000 + Math.random() * 90000);
      const novoProtocolo = `SOS-2025-${numero}`;
      localStorage.setItem("protocologerado", novoProtocolo);
      setProtocolo(novoProtocolo);
  
      const novaDenuncia = {
        protocolo: novoProtocolo,
        descricao: "Descrição automática - Nova denúncia", // ou pegue de um formulário
        status: "Em Análise"
      };
  
      const denunciasSalvas = JSON.parse(localStorage.getItem("denuncias") || "[]");
      denunciasSalvas.unshift(novaDenuncia);
      localStorage.setItem("denuncias", JSON.stringify(denunciasSalvas));
    }
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

  

  const handleClickTo = () => {
    navigate('/inicial-pag');
  };
  const hadleClickToProcesss=()=>{
    navigate('/minhas-denc');
  }

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
          <button className={styles.primaryButton} onClick={hadleClickToProcesss}>
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
