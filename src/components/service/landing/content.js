import heroImage from '../../../assets/pictures/VSL Opening 27.11.2025 469.jpeg';
import pressImage from '../../../assets/pictures/SWD13733.JPG';
import laserImage from '../../../assets/pictures/LASER1.jpg';

export const servicesHeroContent = {
  kicker: 'VSL Manufacturing Services',
  title: 'Built For Precision. Tuned For Scale.',
  subtitle:
    'From high-tonnage power press production to advanced laser operations, our teams deliver industrial capability with disciplined quality and modern engineering support.',
  chips: [
    '2,000 Ton Press Capacity',
    '2D and 3D Laser Processing',
    'Automotive-Grade Quality Systems',
  ],
  imageSrc: heroImage,
  imageAlt: 'VSL services hero overview',
};

export const servicesQuoteContent = {
  quote:
    "You don't start from the top. The best view is actually from the bottom looking up.",
  author: 'Vuyo Skweyiya',
};

export const servicesSplitCards = [
  {
    key: 'powerpress',
    title: 'Power Press Operations',
    description:
      'High-precision stamping and forming backed by advanced press line capability and experienced operators.',
    metrics: ['Up to 2,000 ton force', 'Komani + Gqeberha capability'],
    cta: 'Explore Power Press',
    route: '/powerpress',
    imageSrc: pressImage,
    imageAlt: 'Power press operations',
    accent: 'from-cyan-600/30 to-blue-700/40',
  },
  {
    key: 'lasercutting',
    title: 'Laser Cutting Operations',
    description:
      'Versatile 2D and 3D laser processing with in-house design and programming support from concept to production.',
    metrics: ['TruLaser Cell 5030', 'Prototype to production-ready workflows'],
    cta: 'Explore Laser Cutting',
    route: '/lazercutting',
    imageSrc: laserImage,
    imageAlt: 'Laser cutting operations',
    accent: 'from-sky-500/30 to-indigo-700/45',
  },
];

export const servicesHighlights = [
  {
    title: 'Engineering Support',
    description: 'In-house technical collaboration across tooling, programming, and production readiness.',
  },
  {
    title: 'Quality Discipline',
    description: 'Certified processes designed for repeatability, traceability, and customer confidence.',
  },
  {
    title: 'Production Agility',
    description: 'Responsive manufacturing paths for pilot runs, launch support, and scaled output.',
  },
  {
    title: 'Partnership Mindset',
    description: 'Long-term relationships focused on reliability, communication, and measurable outcomes.',
  },
];
