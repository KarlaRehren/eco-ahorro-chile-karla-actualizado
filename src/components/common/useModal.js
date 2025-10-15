import { useState, useEffect } from 'react';

// Hook para manejar modales
export const useModal = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const toggleModal = () => {
    isOpen ? closeModal() : openModal();
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return {
    isOpen,
    openModal,
    closeModal,
    toggleModal
  };
};