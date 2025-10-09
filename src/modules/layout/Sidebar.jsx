import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar-column">
      <div className="sidebar">
        <h3>Información Útil</h3>
        
        <div className="info-card">
          <h5>📞 Emergencias</h5>
          <p><strong>SEC:</strong> 600 325 8000</p>
          <p><strong>ENEL:</strong> 800 040 040</p>
          <p><strong>CGE:</strong> 600 444 0000</p>
        </div>
        
        <div className="info-card">
          <h5>🛡️ Tus Derechos</h5>
          <p>• Facturación correcta</p>
          <p>• Calidad del suministro</p>
          <p>• Derecho a reclamo</p>
        </div>
        
        <div className="info-card">
          <h5>💡 Tips de Ahorro</h5>
          <p>• Usa ampolletas LED</p>
          <p>• Desconecta standby</p>
          <p>• Aísla tu hogar</p>
        </div>
        
        <div className="info-card">
          <h5>☀️ Energía Solar</h5>
          <p>• Hasta 90% ahorro</p>
          <p>• Subsidios disponibles</p>
          <p>• Retorno 4-7 años</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;