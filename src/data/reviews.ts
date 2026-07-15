// Reseñas REALES del perfil de Google (capturadas 2026-07-15).
// Se actualizan a mano: Maps es una SPA (no se puede leer automáticamente) y la
// Places API prohíbe cachear reseñas más de 30 días.
// Google muestra el texto autotraducido según el idioma del lector; aquí se
// guarda el par en/es para que el toggle del sitio funcione.

export interface Review {
  name: string;
  rating: number; // 1–5
  text: { en: string; es: string };
}

export const reviews: Review[] = [
  {
    name: 'Matheus Mezavilla',
    rating: 5,
    text: {
      en: 'We had dinner here today and had a wonderful experience. The food was absolutely delicious: everything fresh, flavorful and cooked to perfection. The atmosphere was warm, welcoming and very pleasant. The staff was friendly, attentive and made us feel at home throughout our visit. We highly recommend this restaurant.',
      es: 'Cenamos aquí hoy y tuvimos una experiencia maravillosa. La comida estaba absolutamente deliciosa: todo fresco, sabroso y preparado a la perfección. El ambiente era cálido, acogedor y muy agradable. El personal fue amable, atento y nos hizo sentir como en casa durante toda nuestra visita. Recomendamos encarecidamente este restaurante.',
    },
  },
  {
    name: 'Kate Freeman',
    rating: 5,
    text: {
      en: 'Cute place, great food and great service. What more can you ask for!',
      es: 'Un lugar encantador, muy buena comida y excelente servicio. ¡Qué más se puede pedir!',
    },
  },
  {
    name: 'Steve Conine',
    rating: 5,
    text: {
      en: 'Very tasty, and friendly staff!',
      es: '¡Muy sabroso y personal amable!',
    },
  },
];
