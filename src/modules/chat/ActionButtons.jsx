import React from 'react';

const ActionButtons = ({ onButtonClick, onConsultaClick }) => {
  const buttons = [
    { query: 'reclamos contra la luz', text: 'Reclamos contra la luz' },
    { query: 'subsidios estatales', text: 'Subsidios Estatales' },
    { query: 'paneles solares', text: 'Paneles Solares' },
    { query: 'derechos consumidores', text: 'Derechos de los consumidores' },
    { query: 'consulta gratuita', text: 'Consulta Gratuita' },
    { query: 'tips de ahorro', text: 'Tips De Ahorro' }
  ];

  const handleButtonClick = (button) => {
    if (button.query === 'consulta gratuita') {
      onConsultaClick();
    } else {
      onButtonClick(button.text, button.query);
    }
  };

  return (
    <div className="buttons-section">
      {buttons.map((button, index) => (
        <button
          key={index}
          className="action-btn"
          onClick={() => handleButtonClick(button)}
        >
          {button.text}
        </button>
      ))}
    </div>
  );
};

export default ActionButtons;