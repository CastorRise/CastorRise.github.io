export const categories = [
  {
    slug: 'photography',
    title: 'Photography',
    kicker: 'A collection of moments',
    description: 'Light, places and the passing of time.',
    imageStem: 'photo-01',
  },
  {
    slug: 'illustration',
    title: 'Illustration',
    kicker: 'Drawn observations',
    description: 'Small ideas, lines and forms.',
    imageStem: 'illustration-01',
  },
  {
    slug: 'weather',
    title: 'Weather',
    kicker: 'Looking at the sky',
    description: 'A visual record of atmosphere and change.',
    imageStem: 'weather-01',
  },
] as const;

export type Category = (typeof categories)[number];

export const projects = [
  {
    slug: 'nimby',
    title: 'NIMBY Analysis',
    description: 'A lightweight analysis tool.',
    imageStem: 'nimby',
  },
] as const;
