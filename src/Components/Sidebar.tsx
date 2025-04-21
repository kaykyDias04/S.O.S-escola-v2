import styles from '../styles/Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            {/* Logo Section */}
            <div className={styles['logo-container']}>
                <div className={styles['logo-circle']}>
                    <i className={`fas fa-university ${styles['logo-building']}`}></i>
                </div>
                <div className={styles['logo-text']}>
                    <div className={styles['logo-title']}>S.O.S Escola</div>
                    <div className={styles['logo-subtitle']}>Bem-vindo(a), Maria Silva</div>
                </div>
            </div>

            {/* Navigation Menu */}
            <nav className={styles['nav-menu']}>
                <a href="#" className={styles['nav-item']}>
                    <i className={`fas fa-home ${styles['nav-icon']}`}></i>
                    <span>Início</span>
                </a>
                <a href="#" className={`${styles['nav-item']} ${styles.active}`}>
                    <i className={`fas fa-file-alt ${styles['nav-icon']}`}></i>
                    <span>Nova Denúncia</span>
                </a>
                <a href="#" className={styles['nav-item']}>
                    <i className={`fas fa-history ${styles['nav-icon']}`}></i>
                    <span>Histórico</span>
                </a>
                <a href="#" className={styles['nav-item']}>
                    <i className={`fas fa-user ${styles['nav-icon']}`}></i>
                    <span>Meu Perfil</span>
                </a>
                <a href="#" className={styles['nav-item']}>
                    <i className={`fas fa-cog ${styles['nav-icon']}`}></i>
                    <span>Configurações</span>
                </a>
            </nav>

            {/* Recent Reports Section */}
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
    //ola
}