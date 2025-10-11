import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Eco Ahorro Chile</h1>
      <p className={styles.subtitle}>Asistente Virtual que te ayude con tus consultas de consumo eléctrico</p>
    </header>
  );
};

export default Header;