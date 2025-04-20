import { useState, FormEvent } from 'react';
import styles from '../styles/Ap.module.css';

type ComplaintType = 'assedio moral' | 'xigamento' | 'violencia' | 'discriminacao' | 'outro' | '';

interface ComplaintFormData {
  complaintType: ComplaintType;
  isAnonymous: boolean;
  name: string;
  email: string;
  phone: string;
  description: string;
  agreeTerms: boolean;
}

export function AP() {
  const [formData, setFormData] = useState<ComplaintFormData>({
    complaintType: '',
    isAnonymous: true,
    name: '',
    email: '',
    phone: '',
    description: '',
    agreeTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    // Aqui você pode adicionar a lógica para enviar os dados
  };

  return (
    <div className={styles.complaintContainer}> {/* Container principal ajustado */}
    <div className={styles['main-area']}>
      <h1 className={styles['form-title']}>Nova Denúncia</h1>
        <p className={styles['form-instructions']}>
          Preencha os campos abaixo para registrar sua denúncia. Todos os dados são tratados com confidencialidade.
        </p>
        
        <form onSubmit={handleSubmit} className={styles['complaint-form']}>
          <div className={styles['form-group']}>
            <label htmlFor="complaintType">Tipo de Denúncia</label>
            <select
              id="complaintType"
              name="complaintType"
              value={formData.complaintType}
              onChange={handleInputChange}
              required
              className={styles.select}
            >
              <option value="" disabled>Selecione o tipo de denúncia</option>
              <option value="assedio moral">Assédio moral </option>
              <option value="xigamento ">xigamento </option>
              <option value="fraude">Violencia</option>
              <option value="discriminacao">Discriminação</option>
              <option value="outro">Outro</option>
            </select>
          </div>
          
          <div className={styles['toggle-container']}>
            <span className={styles['toggle-label']}>Identificação:</span>
            <label className={styles['toggle-switch']}>
              <input
                type="checkbox"
                name="isAnonymous"
                checked={formData.isAnonymous}
                onChange={handleInputChange}
              />
              <span className={styles['toggle-slider']}></span>
            </label>
            <span className={styles['toggle-text']}>
              {formData.isAnonymous ? 'Anônimo' : 'Identificado'}
            </span>
          </div>
          
          {!formData.isAnonymous && (
            <div id="identification-fields">
              <div className={styles['form-group']}>
                <label htmlFor="name">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Digite seu nome completo"
                  className={styles.input}
                />
              </div>
              
              <div className={styles['form-group']}>
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Digite seu e-mail"
                  className={styles.input}
                />
              </div>
              
              <div className={styles['form-group']}>
                <label htmlFor="phone">Telefone</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Digite seu telefone"
                  className={styles.input}
                />
              </div>
            </div>
          )}
          
          <div className={styles['form-group']}>
            <label htmlFor="description">Descrição da Denúncia</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Descreva detalhadamente o ocorrido, incluindo data, local e pessoas envolvidas"
              required
              className={styles.textarea}
            ></textarea>
          </div>
          
          <div className={styles['checkbox-container']}>
            <input
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleInputChange}
              required
              className={styles.checkbox}
            />
            <label htmlFor="agreeTerms">Declaro que as informações fornecidas são verdadeiras</label>
          </div>
          
          <button type="submit" className={styles['submit-button']}>Enviar</button>
        </form>
      </div>
    </div>
  );
}