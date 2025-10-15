import { useState, useCallback } from 'react';

// Hook para validación de formularios con reglas para Chile
export const useFormValidation = (initialData = {}) => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});

  // Reglas de validación
  const validationRules = {
    nombre: {
      required: true,
      minLength: 2,
      maxLength: 50,
      message: {
        required: 'El nombre es requerido',
        minLength: 'El nombre debe tener al menos 2 caracteres',
        maxLength: 'El nombre debe tener máximo 50 caracteres'
      }
    },
    email: {
      required: true,
      pattern: /\S+@\S+\.\S+/,
      message: {
        required: 'El email es requerido',
        pattern: 'El email no es válido'
      }
    },
    region: {
      required: true,
      message: {
        required: 'La región es requerida'
      }
    },
    consulta: {
      required: true,
      minLength: 10,
      maxLength: 500,
      message: {
        required: 'La consulta es requerida',
        minLength: 'La consulta debe tener al menos 10 caracteres',
        maxLength: 'La consulta debe tener máximo 500 caracteres'
      }
    },
    telefono: {
      required: false,
      pattern: /^(\+56)?[2-9]\d{8}$/,
      message: {
        pattern: 'Teléfono debe ser válido para Chile'
      }
    }
  };

  // Validar un campo específico
  const validateField = useCallback((name, value) => {
    const rules = validationRules[name];
    if (!rules) return '';

    // Requerido
    if (rules.required && !value?.toString().trim()) {
      return rules.message.required;
    }

    // Longitud mínima
    if (rules.minLength && value?.toString().length < rules.minLength) {
      return rules.message.minLength;
    }

    // Longitud máxima
    if (rules.maxLength && value?.toString().length > rules.maxLength) {
      return rules.message.maxLength;
    }

    // Patrón (regex)
    if (rules.pattern && !rules.pattern.test(value)) {
      return rules.message.pattern;
    }

    return '';
  }, []);

  // Validar todos los campos
  const validateAll = useCallback(() => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData, validateField]);

  // Manejar cambios en los campos
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    
    // Actualizar el valor
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validación en tiempo real
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  }, [validateField]);

  // Resetear formulario
  const resetForm = useCallback(() => {
    setFormData(initialData);
    setErrors({});
  }, [initialData]);

  // Verificar si hay errores
  const hasErrors = Object.values(errors).some(error => error !== '');

  // Verificar si el formulario está completo
  const isComplete = Object.keys(validationRules).every(key => 
    !validationRules[key].required || formData[key]?.toString().trim() !== ''
  );

  return {
    // Estado
    formData,
    errors,
    hasErrors,
    isComplete,
    
    // Funciones
    handleChange,
    validateField,
    validateAll,
    resetForm,
    setFormData,
    setErrors
  };
};