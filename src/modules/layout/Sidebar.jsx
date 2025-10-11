import React from 'react';
import styles from '../../styles/components/Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebarColumn}>
      <div className={styles.sidebar}>
        <h3 className={styles.title}>Información Útil</h3>
        
        <div className={styles.infoCard}>
          <h5 className={styles.cardTitle}>📞 Emergencias</h5>
          <p className={styles.cardDescription}><strong>SEC:</strong> 600 325 8000</p>
          <p className={styles.cardDescription}><strong>ENEL:</strong> 800 040 040</p>
          <p className={styles.cardDescription}><strong>CGE:</strong> 600 444 0000</p>
        </div>
        
        <div className={styles.infoCard}>
          <h5 className={styles.cardTitle}>🛡️ Tus Derechos</h5>
          <p className={styles.cardDescription}>• Facturación correcta</p>
          <p className={styles.cardDescription}>• Calidad del suministro</p>
          <p className={styles.cardDescription}>• Derecho a reclamo</p>
        </div>
        
        <div className={styles.infoCard}>
          <h5 className={styles.cardTitle}>💡 Tips de Ahorro</h5>
          <p className={styles.cardDescription}>• Usa ampolletas LED</p>
          <p className={styles.cardDescription}>• Desconecta standby</p>
          <p className={styles.cardDescription}>• Aísla tu hogar</p>
        </div>
        
        <div className={styles.infoCard}>
          <h5 className={styles.cardTitle}>☀️ Energía Solar</h5>
          <p className={styles.cardDescription}>• Hasta 90% ahorro</p>
          <p className={styles.cardDescription}>• Subsidios disponibles</p>
          <p className={styles.cardDescription}>• Retorno 4-7 años</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;