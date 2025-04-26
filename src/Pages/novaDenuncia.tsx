import { useState, useEffect } from 'react';
import { AP } from "../Components/AP";
import { Sidebar } from "../Components/Sidebar";
import styles from '../styles/NovaDenuncia.module.css';
export function NovaDenuncia() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true); // Inicia como true

  useEffect(() => {
    const checkIfMobile = () => {
      const mobileBreakpoint = 992;
      const isMobileView = window.innerWidth <= mobileBreakpoint;
      setIsMobile(isMobileView);
      
      // Se for mobile, inicia fechado. Se for desktop, inicia aberto.
      setSidebarOpen(!isMobileView);
    };

    // Verifica ao montar o componente
    checkIfMobile();
    
    // Adiciona listener para redimensionamento
    window.addEventListener('resize', checkIfMobile);
    
    // Limpeza
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  return (
    <div className={styles.appContainer}>
      {/* Botão de toggle para mobile */}
      {isMobile && (
        <button 
          className={styles.menuToggle} 
          onClick={toggleSidebar}
          aria-label={sidebarOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={sidebarOpen}
        >
          {sidebarOpen ? '✕' : '☰'}
        </button>
      )}
      
      {/* Sidebar - agora usando a classe open corretamente */}
      <div className={`${styles.sidebar} ${sidebarOpen ? styles.open : ''}`}>
        <Sidebar />
      </div>
      
      {/* Conteúdo principal */}
      <div className={`${styles.mainContent} ${!sidebarOpen && styles.fullWidth}`}>
        <AP />
      </div>
    </div>
  );
}