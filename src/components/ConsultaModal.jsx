import React, { useState } from 'react';

const ConsultaModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    region: '',
    consulta: ''
  });

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ nombre: '', email: '', region: '', consulta: '' });
  };

  const handleClose = () => {
    onClose();
    setFormData({ nombre: '', email: '', region: '', consulta: '' });
  };

  if (!isOpen) return null;

  return (
    <div className="modal" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>📧 Consulta Gratuita</h3>
          <span className="close" onClick={handleClose}>&times;</span>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Nombre completo</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label>Región</label>
              <select
                name="region"
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
            </div>
            <div className="form-group">
              <label>Consulta</label>
              <textarea
                name="consulta"
                rows="4"
                value={formData.consulta}
                onChange={handleChange}
                placeholder="Describe tu consulta sobre electricidad..."
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              Enviar Consulta
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConsultaModal;