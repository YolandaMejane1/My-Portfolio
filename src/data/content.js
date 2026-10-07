import techBlogImg from '../assets/projects/kodemor-image.png';
import fitnessImg from '../assets/projects/fitness.webp';
import storeImg from '../assets/projects/store.webp';
import dashboardImg from '../assets/projects/dashboard.webp';
import weatherImg from '../assets/projects/weather.webp';
import ticTacToeImg from '../assets/projects/tictactoe.webp';

export const profile = {
  name: 'Yolanda Mejane',
  role: 'Junior Python & Full-Stack Developer',
  location: 'South Africa',
  intro:
    'I have a year of professional experience writing Python and building full-stack web and mobile apps. I like taking a feature from wireframe to deployment, and I am studying Data Science alongside my work.',
  email: 'yolandamejane@gmail.com',
  github: 'https://github.com/YolandaMejane1',
  linkedin: 'https://www.linkedin.com/in/yolanda-mejane/',
  resume: '/Yolanda_Mejane_Resume.pdf',
};

export const about = {
  paragraphs: [
    'I am a junior developer with about a year of professional experience. I currently write Python at Kandhgroup, and before that I built mobile and web apps at Triangle Labs using FlutterFlow, Dart, Supabase and Firebase.',
    'I am studying for a BSc in Information Technology with a Data Science focus, and I hold the AWS Certified Cloud Practitioner certification. I trained through a full-stack web development bootcamp at Melsoft Academy in 2024.',
    'I like taking an idea from a wireframe to something deployed and working, and I am looking for a team where I can keep growing as a developer.',
  ],
  facts: [
    { label: 'Experience', value: '1 year, professional' },
    { label: 'Studying', value: 'BSc IT, Data Science focus' },
    { label: 'Certified', value: 'AWS Cloud Practitioner' },
    { label: 'Based in', value: 'South Africa' },
  ],
};

export const experience = [
  {
    company: 'Kandhgroup',
    role: 'Python Developer',
    period: 'April 2026 – Present',
    location: '',
    tags: ['Python'],
    highlights: ['Built features for the CA-Live application, a web-based platform for tutoring and educating accounting students.',
      'Wrote Python code for backend services, including data processing and integration with other systems.',
      'Collaborated with a team of developers and stakeholders to gather requirements and implement solutions.',
      'Participated in code reviews and contributed to improving code quality and best practices.',
      'Maintained documentation for the application and its features, ensuring clarity for future development.'
    ],
  },
  {
    company: 'Triangle Labs',
    role: 'Junior Web Developer',
    period: 'July 2025 – January 2026',
    location: 'Remote · South Africa',
    tags: ['FlutterFlow', 'Dart', 'Supabase', 'PostgreSQL', 'Firebase'],
    highlights: [
      'Built mobile and web applications end to end using FlutterFlow and custom Dart code.',
      'Designed and managed backend services on Supabase (PostgreSQL) and Firebase, including database design.',
      'Delivered features through the full lifecycle: wireframing, database design, deployment and maintenance.',
      'Joined client meetings to gather requirements and advised on UI/UX and technical feasibility.',
      'Maintained project documentation and used Notion and Slack for team communication and technical support.',
    ],
  },
];

export const skills = [
  { group: 'Languages', items: ['Python', 'JavaScript', 'SQL', 'Dart', 'HTML', 'CSS'] },
  { group: 'Frameworks & Libraries', items: ['React', 'Redux', 'Node.js', 'Express', 'Tailwind CSS', 'Bootstrap', 'Chart.js'] },
  { group: 'Databases & Backend', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Supabase', 'Firebase'] },
  { group: 'Cloud & Tools', items: ['AWS', 'Vercel', 'Render', 'Git', 'GitHub', 'VS Code', 'Cursor', 'Figma', 'Notion', 'Slack'] },
  { group: 'Low-code & Prototyping', items: ['FlutterFlow', 'Bubble.io', 'Lovable AI', 'V0 by Vercel', 'Wireframing'] },
];

export const projects = [
  {
    title: 'Tech Blog',
    featured: true,
    description:
      'A full-stack blog with Google sign-in. People write and manage their own posts with cover images, and admins can moderate everything. The API verifies Google tokens on the server, keeps sessions in httpOnly cookies and enforces ownership rules, with automated tests for sign-in, sessions and permissions.',
    image: techBlogImg,
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Google OAuth', 'Vercel'],
    live: 'https://tech-blog-5jfl.vercel.app',
    code: 'https://github.com/YolandaMejane1/Tech-Blog',
  },
  {
    title: 'Fitness Tracker',
    description:
      'A full-stack workout tracker. Users register and log in, record workouts with sets, reps, weight and date, edit or delete entries, and see simple progress such as total workouts and max weight lifted.',
    image: fitnessImg,
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    live: 'https://fitness-tracker-app-1-6eco.onrender.com',
    code: 'https://github.com/YolandaMejane1/Fitness-Tracker-App',
  },
  {
    title: 'E-Commerce Store',
    description:
      'A capstone project built from a Figma design: product search and listing, product detail pages, a cart with quantities and totals, and a checkout flow. State is managed with Redux.',
    image: storeImg,
    tags: ['React', 'Redux', 'React Router'],
    live: 'https://ecommerce-website-drab-rho.vercel.app/',
    code: 'https://github.com/YolandaMejane1/ecommerce-website',
  },
  {
    title: 'E-Commerce Dashboard',
    description:
      'A group project: an e-commerce admin dashboard with a login page and Chart.js data visualisations.',
    note: 'Demo login: user@example.com / password123',
    image: dashboardImg,
    tags: ['React', 'Chart.js', 'Group project'],
    live: 'https://e-commerce-dashboard-s4rr.onrender.com/',
    code: 'https://github.com/UnathiPakade/E-Commerce-Dashboard',
  },
  {
    title: 'Weather App',
    description:
      'Shows current weather from a weather API, with a 3-day forecast plus humidity and wind speed.',
    image: weatherImg,
    tags: ['JavaScript', 'HTML', 'CSS', 'Weather API'],
    live: 'https://yolandamejane1.github.io/My-Weather-App/',
    code: 'https://github.com/YolandaMejane1/My-Weather-App',
  },
  {
    title: 'Tic Tac Toe',
    description: 'A tic-tac-toe game built in React, with a small Express backend.',
    image: ticTacToeImg,
    tags: ['React', 'Express'],
    live: 'https://yolandamejane1.github.io/TicTacToeGame/',
    code: 'https://github.com/YolandaMejane1/TicTacToeGame',
  },
];
