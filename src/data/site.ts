// Datos del negocio. Editar aquí y se refleja en todo el sitio (UI + SEO/schema).
export const BUSINESS_NAME = 'Casa Mezcal';
export const BUSINESS_TAGLINE = 'Family Mexican Restaurant';

export const PHONE = '+13076543798';
export const PHONE_LABEL = '(307) 654-3798';

// Dirección desglosada: la UI usa ADDRESS, el JSON-LD usa las partes.
export const ADDRESS_PARTS = {
  street: '170 Highway 89',
  city: 'Alpine',
  state: 'WY',
  zip: '83128',
  country: 'US',
};
export const ADDRESS = `${ADDRESS_PARTS.street}, ${ADDRESS_PARTS.city}, ${ADDRESS_PARTS.state} ${ADDRESS_PARTS.zip}`;

// Coordenadas del perfil de Google Maps. Le dan a Google la ubicación exacta
// en vez de dejar que geocodifique la dirección.
export const GEO = { lat: 43.1618725, lng: -111.0231683 };

// Horarios confirmados. `display` es lo que se ve; opens/closes (24h) alimentan el schema.
export const HOURS = [
  {
    label: { en: 'Mon–Sat', es: 'Lun–Sáb' },
    display: '11:00 AM – 9:00 PM',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '11:00',
    closes: '21:00',
  },
  {
    label: { en: 'Sunday', es: 'Domingo' },
    display: '11:00 AM – 8:00 PM',
    dayOfWeek: ['Sunday'],
    opens: '11:00',
    closes: '20:00',
  },
];

export const MAPS_URL = 'https://maps.app.goo.gl/tVMkKjhGX5ctpsBa6';
export const FACEBOOK_URL =
  'https://www.facebook.com/p/Casa-Mezcal-Alpine-WY-61591071793891/';
export const REVIEW_URL = MAPS_URL; // ← cambiar por search.google.com/local/writereview?placeid=… con el Place ID
