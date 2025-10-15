// Regiones de Chile para formularios
export const regions = [
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

// Función para obtener el nombre de la región por valor
export const getRegionName = (value) => {
  const region = regions.find(r => r.value === value);
  return region ? region.label : '';
};

// Función para obtener el valor de la región por nombre
export const getRegionValue = (label) => {
  const region = regions.find(r => r.label === label);
  return region ? region.value : '';
};

// Regiones agrupadas por zona (opcional para uso futuro)
export const regionsByZone = {
  norte: ['arica', 'tarapaca', 'antofagasta', 'atacama'],
  centro: ['coquimbo', 'valparaiso', 'metropolitana', 'ohiggins', 'maule'],
  sur: ['nuble', 'biobio', 'araucania', 'los-rios', 'los-lagos'],
  austral: ['aysen', 'magallanes']
};