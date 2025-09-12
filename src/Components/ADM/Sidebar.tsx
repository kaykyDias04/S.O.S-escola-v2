import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Sidebar() {
    const [activeItem, setActiveItem] = useState('Início'); // Começa no "Início" (ou vazio)
    const navigate=useNavigate();//funcao de navegaçaõ 
    const menuItems = [
        { label: 'DashBoard', icon: 'fas fa-file-alt' ,path:'/dashboard'},
        { label: 'Denúncias Recentes', icon: 'fas fa-history',path:'/DenunciaRec' },
        { label: 'Relatórios e Estatísticas', icon: 'fas fa-user' ,path:'/relatorioEEstatistica' },
        { label: 'Encaminhamentos', icon: 'fas fa-cog',path:'/encaminhamento' }
    ];

    return (
        <aside className={styles.sidebar}>
            <div className={styles['logo-container']}>
                <div className={styles['logo-circle']}>
                    <i className={`fas fa-university ${styles['logo-building']}`}></i>
                </div>
                <div className={styles['logo-text']}>
                    <div className={styles['logo-title']}>S.O.S Escola</div>
                    <div className={styles['logo-subtitle']}>Bem-vindo(a), Maria Silva</div>
                </div>
            </div>

            <nav className={styles['nav-menu']}>
    {menuItems.map((item) => (
        <a
            key={item.label}
            href="#"
            className={`${styles['nav-item']} ${activeItem === item.label ? styles.active : ''}`}
            onClick={() => {
                setActiveItem(item.label);
                navigate(item.path);
            }}
            style={{ cursor: 'pointer' }}
        >
            <i className={`${item.icon} ${styles['nav-icon']}`}></i>
            <span>{item.label}</span>
        </a>
    ))}
</nav>

            <div className={styles['recent-reports']}>
                <h3 className={styles['section-title']}>Denúncias Recentes</h3>
                <div className={styles['report-item']}>
                    <div className={styles['report-code']}>DEN-2023-001</div>
                    <div className={`${styles['report-status']} ${styles['status-analyzing']}`}>
                        <div className={styles['status-indicator']}></div>
                        <span>Em análise</span>
                    </div>
                </div>
                <div className={styles['report-item']}>
                    <div className={styles['report-code']}>DEN-2023-002</div>
                    <div className={`${styles['report-status']} ${styles['status-resolved']}`}>
                        <div className={styles['status-indicator']}></div>
                        <span>Resolvida</span>
                    </div>
                </div>
                <div className={styles['report-item']}>
                    <div className={styles['report-code']}>DEN-2023-003</div>
                    <div className={`${styles['report-status']} ${styles['status-analyzing']}`}>
                        <div className={styles['status-indicator']}></div>
                        <span>Em análise</span>
                    </div>
                </div>
            </div>

            {/* SAC Section */}
            <div className={styles['sac-section']}>
                <div className={styles['sac-info']}>
                    <i className={`fas fa-headset ${styles['sac-icon']}`}></i>
                    <span>SAC: (11) 4002-8922</span>
                </div>
            </div>
        </aside>
    )
}
