import styles from '../../styles/login.module.css';
import { useNavigate } from 'react-router-dom';

const LoginMatricula = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/inicial-pag');
    // Adicione sua lógica de autenticação aqui
  };

  const handleRegister = () => {
    console.log("Cadastro iniciado");
    // Adicione sua lógica de cadastro aqui
  };

  return (
    <div className={styles.container}>
      {/* Left Side - Login */}
      <div className={styles.leftSide}>
        <h1 className={styles.title}>
          <span>S.O.S</span> Escola
        </h1>

        <div className={styles.formGroup}>
          <div className={styles.inputGroup}>
            <i className={`fas fa-envelope ${styles.icon}`}></i>
            <input type="email" className={styles.inputField} placeholder="Email" />
          </div>

          <div className={styles.inputGroup}>
            <i className={`fas fa-lock ${styles.icon}`}></i>
            <input type="password" className={styles.inputField} placeholder="Senha" />
          </div>
          
          {/* Botão de Entrar */}
          <button 
            className={styles.loginButton}
            onClick={handleLogin}
          >
            Entrar
          </button>
        </div>

        <a href="#" className={styles.forgotPassword}>
          Esqueci minha senha
        </a>
      </div>

      {/* Divider */}
      <div className={styles.divider}></div>

      {/* Right Side - Registration */}
      <div className={styles.rightSide}>
        <div className={styles.iconContainer}>
          <i className="fas fa-university"></i>
        </div>

        <h2 className={styles.registerTitle}>Registro</h2>

        <div className={styles.formGroup}>
          <div className={styles.inputGroup}>
            <i className={`fas fa-user ${styles.icon}`}></i>
            <input type="text" className={styles.inputField} placeholder="Nome" />
          </div>

          {/* Campo de Matrícula */}
          <div className={styles.inputGroup}>
            <i className={`fas fa-id-card ${styles.icon}`}></i>
            <input type="text" className={styles.inputField} placeholder="Matrícula" />
          </div>

          <div className={styles.inputGroup}>
            <i className={`fas fa-envelope ${styles.icon}`}></i>
            <input type="email" className={styles.inputField} placeholder="Email" />
          </div>

          <div className={styles.inputGroup}>
            <i className={`fas fa-lock ${styles.icon}`}></i>
            <input type="password" className={styles.inputField} placeholder="Senha" />
          </div>
          
          {/* Botão de Cadastrar */}
          <button 
            className={styles.registerButton}
            onClick={handleRegister}
          >
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginMatricula;
