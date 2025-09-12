import { useState, useEffect } from 'react';
import Psicologia from '../../Components/Aluno/psicologia';
import { SidebarAluno } from '../../Components/Aluno/SidebarAluno';
export function PsicologiaPag() {
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
        <SidebarAluno />
      </div>
      
      {/* Conteúdo principal */}
      <div className={`${styles.mainContent} ${!sidebarOpen && styles.fullWidth}`}>
        <Psicologia />
      </div>
    </div>
  );
}