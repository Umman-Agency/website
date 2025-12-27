export const plans = [
  {
    name: 'Plan Básico',
    price: '$29',
    pricePeriod: '/mes',
    description: 'Ideal para individuos y pequeños equipos que empiezan.',
    features: [
      '1 Proyecto',
      'Análisis Básico',
      'Soporte por Email',
      '10GB de Almacenamiento',
    ],
    isPopular: false,
  },
  {
    name: 'Plan General',
    price: '$59',
    pricePeriod: '/mes',
    description: 'Perfecto para negocios en crecimiento y profesionales.',
    features: [
      '5 Proyectos',
      'Análisis Avanzado',
      'Soporte Prioritario',
      '50GB de Almacenamiento',
      'Integraciones API',
    ],
    isPopular: true,
  },
  {
    name: 'Plan Premium',
    price: '$99',
    pricePeriod: '/mes',
    description: 'La solución completa para grandes empresas y agencias.',
    features: [
      'Proyectos Ilimitados',
      'Análisis Premium',
      'Soporte Dedicado 24/7',
      'Almacenamiento Ilimitado',
      'Funciones Beta',
    ],
    isPopular: false,
  },
];