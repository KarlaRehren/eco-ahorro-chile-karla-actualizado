import React, { useState } from 'react';
import styles from '../styles/ConsultaModal.module.css';

const ConsultaModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    region: '',
    consulta: ''
  });

  const [errors, setErrors] = useState({});

  const regions = [
    { value: 'arica', label: 'Arica y Parinacota' },
    { value: 'tarapaca', label: 'Tarapacá' },
    { value: 'antofagasta', label: 'Antofagasta' },
    { value: 'atacama', label: 'Atacama' },
    { value: 'coquimbo', label: 'Coquimbo' },
    { value: 'valparaiso', label: 'Valparaíso' },
    { value: 'metropolitana', label: 'Metropolitana' },
    { value: 'ohiggins', label: "O'Higgins" },
    { value: 'maule', label: 'Maule' },
    { value: 'nuble', label: 'Ñuble' },
    { value: 'biobio', label: 'Biobío' },
    { value: 'araucania', label: 'Araucanía' },
    { value: 'los-rios', label: 'Los Ríos' },
    { value: 'los-lagos', label: 'Los Lagos' },
    { value: 'aysen', label: 'Aysén' },
    { value: 'magallanes', label: 'Magallanes' }
  ];

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'nombre':
        if (!value.trim()) error = 'El nombre es requerido';
        else if (value.length < 2) error = 'El nombre debe tener al menos 2 caracteres';
        break;
      case 'email':
        if (!value.trim()) error = 'El email es requerido';
        else if (!/\S+@\S+\.\S+/.test(value)) error = 'El email no es válido';
        break;
      case 'region':
        if (!value) error = 'La región es requerida';
        break;
      case 'consulta':
        if (!value.trim()) error = 'La consulta es requerida';
        else if (value.length < 10) error = 'La consulta debe tener al menos 10 caracteres';
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Validación en tiempo real
    const error = validateField(name, value);
    setErrors({
      ...errors,
      [name]: error
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validar todos los campos
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(formData);
    setFormData({ nombre: '', email: '', region: '', consulta: '' });
    setErrors({});
  };

  const handleClose = () => {
    onClose();
    setFormData({ nombre: '', email: '', region: '', consulta: '' });
    setErrors({});
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modal} onClick={handleClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>Consulta Gratuita</h3>
          <button className={styles.closeButton} onClick={handleClose} aria-label="Cerrar modal">
            &times;
          </button>
        </div>
        <div className={styles.modalBody}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={`${styles.formGroup} ${errors.nombre ? styles.error : ''}`}>
                <label className={`${styles.label} ${styles.required}`}>Nombre completo</label>
                <input
                  type="text"
                  name="nombre"
                  className={styles.input}
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Ingresa tu nombre completo"
                  required
                />
                {errors.nombre && <div className={styles.errorMessage}>{errors.nombre}</div>}
              </div>
              <div className={`${styles.formGroup} ${errors.email ? styles.error : ''}`}>
                <label className={`${styles.label} ${styles.required}`}>Email</label>
                <input
                  type="email"
                  name="email"
                  className={styles.input}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                />
                {errors.email && <div className={styles.errorMessage}>{errors.email}</div>}
              </div>
            </div>
            
            <div className={`${styles.formGroup} ${errors.region ? styles.error : ''}`}>
              <label className={`${styles.label} ${styles.required}`}>Región</label>
              <select
                name="region"
                className={styles.select}
                value={formData.region}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona tu región</option>
                {regions.map((region) => (
                  <option key={region.value} value={region.value}>
                    {region.label}
                  </option>
                ))}
              </select>
              {errors.region && <div className={styles.errorMessage}>{errors.region}</div>}
            </div>
            
            <div className={`${styles.formGroup} ${styles.fullWidth} ${errors.consulta ? styles.error : ''}`}>
              <label className={`${styles.label} ${styles.required}`}>Consulta</label>
              <textarea
                name="consulta"
                rows="4"
                className={styles.textarea}
                value={formData.consulta}
                onChange={handleChange}
                placeholder="Describe tu consulta sobre electricidad, facturas, subsidios, paneles solares, etc."
                required
              />
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                {formData.consulta.length}/500 caracteres
              </div>
              {errors.consulta && <div className={styles.errorMessage}>{errors.consulta}</div>}
            </div>
            
            <button type="submit" className={styles.submitButton}>
              Enviar Consulta Gratuita
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConsultaModal;