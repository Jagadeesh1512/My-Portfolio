import {
  Award,
  Binary,
  Bot,
  BrainCircuit,
  Cloud,
  Code2,
  Cpu,
  Database,
  Github,
  Globe2,
  Linkedin,
  Mail,
  MapPin,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Trophy,
  Zap,
} from 'lucide-react';

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievement', label: 'Achievement' },
  { id: 'leadership', label: 'Leadership' },
];

export const rotatingTitles = ['Software Developer', 'AWS Cloud Learner', 'AI Enthusiast', 'Problem Solver'];

export const stats = [
  { label: 'Academic Projects', value: 3, suffix: '' },
  { label: 'Personal Projects', value: 3, suffix: '' },
  { label: 'Hackathon Achievement', value: 1, suffix: '' },
  { label: 'Technical Skills', value: 10, suffix: '+' },
];

export const skillGroups = [
  {
    title: 'Programming Skills',
    icon: Code2,
    skills: [
      { name: 'Python', level: 82 },
      { name: 'Data Structures & Algorithms', level: 74 },
      { name: 'HTML', level: 88 },
      { name: 'CSS', level: 84 },
      { name: 'SQL', level: 72 },
    ],
  },
  {
    title: 'Tools',
    icon: Database,
    skills: [
      { name: 'MATLAB', level: 76 },
      { name: 'Git', level: 80 },
      { name: 'GitHub', level: 84 },
      { name: 'Postman', level: 70 },
      { name: 'PostgreSQL', level: 68 },
    ],
  },
  {
    title: 'Cloud Learning',
    icon: Cloud,
    skills: [

      { name: 'EC2', level: 72 },
      { name: 'IAM', level: 72 },
      { name: 'VPC', level: 68 },
      { name: 'S3', level: 76 },
      { name: 'Security Groups', level: 70 },
    ],
  },
];

export const projects = [
  {
    title: 'Driver Drowsiness Detection System',
    description:
      'A real-time safety system using React, MediaPipe FaceMesh, EAR-based detection, PERCLOS monitoring, alerts, dashboard telemetry, and geolocation tracking.',
    goal: 'Improve driver safety through intelligent monitoring.',
    tech: ['React', 'MediaPipe', 'Computer Vision', 'JavaScript'],
    icon: BrainCircuit,
  },
  {
    title: 'Ultrasonic Pest Repeller in Home',
    description:
      'An Arduino-based eco-friendly pest control prototype with HC-SR04 sensing, piezo buzzer output, distance-based activation, and automated detection.',
    goal: 'Build practical embedded systems for everyday environments.',
    tech: ['Arduino', 'Embedded Systems', 'Sensors', 'Electronics'],
    icon: Cpu,
  },
  {
    title: 'Smart Recycling Bin System',
    description:
      'An IoT recycling platform with ESP32, ultrasonic sensors, QR scanning, GPS tracking, React dashboards, Convex data flows, fill monitoring, and smart alerts.',
    goal: 'Make waste management measurable, connected, and responsive.',
    tech: ['ESP32', 'React', 'Convex', 'GPS', 'IoT'],
    icon: Bot,
  },
];

export const journeyNodes = ['IAM', 'EC2', 'VPC', 'Subnets', 'Route Tables', 'Internet Gateway', 'Security Groups', 'Elastic IP', 'S3'];

export const leadershipItems = [
  {
    role: 'Student Coordinator - AWS Cloud Builder',
    description:
      'Organized technical workshops, conducted cloud sessions, coordinated engineering events, and promoted AWS learning initiatives.',
    icon: Network,
  },
];

export const contactLinks = [
  { label: 'Gmail', href: 'mailto:ivjagadeesh2006@gmail.com', icon: Mail },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/venkata-jagadeesh-ippagunta-0b2635327', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/Jagadeesh1512', icon: Github },
  { label: 'India', href: '#contact', icon: MapPin },
];

export const heroSignals = [
  { label: 'Cloud', icon: Cloud },
  { label: 'AWS', icon: Globe2 },
  { label: 'AI', icon: Binary },
  { label: 'Secure', icon: ShieldCheck },
  { label: 'Launch', icon: Rocket },
  { label: 'Impact', icon: Zap },
  { label: 'Award', icon: Award },
  { label: 'Trophy', icon: Trophy },
];
