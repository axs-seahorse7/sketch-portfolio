import type { LucideIcon } from 'lucide-react';
import { Award, Brain, BriefcaseBusiness, Code2, Compass, Database, GitBranch, GraduationCap, Layers3, Lightbulb, Mail, Server, Sparkles, Terminal, Trophy, Wrench } from 'lucide-react';

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Me', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Career', path: '/career' },
  { label: 'Profession', path: '/profession' },
  { label: 'Skills', path: '/skills' },
  { label: 'Achievements', path: '/achievements' },
  { label: 'Contact', path: '/contact' },
];

export const skills: Array<{ title: string; icon: LucideIcon; items: string[] }> = [
  { title: 'Frontend', icon: Code2, items: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS'] },
  { title: 'Backend', icon: Server, items: ['Node.js', 'Express.js', 'REST APIs'] },
  { title: 'Database', icon: Database, items: ['MongoDB', 'MySQL'] },
  { title: 'Cloud & DevOps', icon: Terminal, items: ['AWS', 'Docker', 'Linux', 'Nginx'] },
  { title: 'Tools', icon: Wrench, items: ['Git', 'GitHub', 'VS Code', 'Postman'] },
];

export const projects = [
  {
    name: 'Foundry Commerce OS',
    company: 'Independent Product Lab',
    description: 'A modular commerce dashboard for founders to manage inventory, orders, analytics, and customer workflows from one focused workspace.',
    stack: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    url: 'https://example.com/foundry-commerce',
    github: 'https://github.com/example/foundry-commerce',
  },
  {
    name: 'Atlas Workflow Engine',
    company: 'Studio Systems',
    description: 'A business automation platform that transforms repeated operational tasks into traceable, reusable workflows with role-based controls.',
    stack: ['React', 'Express.js', 'REST APIs', 'Docker'],
    url: 'https://example.com/atlas-workflow',
    github: 'https://github.com/example/atlas-workflow',
  },
  {
    name: 'Northstar Client Portal',
    company: 'Consulting Practice',
    description: 'A polished client portal for project updates, document exchange, milestones, and delivery visibility across active engagements.',
    stack: ['TypeScript', 'AWS', 'MySQL', 'Nginx'],
    url: 'https://example.com/northstar-portal',
  },
  {
    name: 'Signal Architecture Notes',
    company: 'Personal Research',
    description: 'A living knowledge base that documents software architecture decisions, tradeoffs, deployment patterns, and reusable engineering notes.',
    stack: ['React', 'Markdown', 'GitHub', 'Linux'],
    url: 'https://example.com/signal-notes',
    github: 'https://github.com/example/signal-notes',
  },
];

export const timeline = [
  { date: '2019', role: 'Education', organization: 'Computer Science Foundations', description: 'Built the foundation in programming, data structures, and the discipline of thinking through systems before implementation.' },
  { date: '2020', role: 'Learning Phase', organization: 'Self-Guided Modern Web Study', description: 'Learned modern JavaScript, React, APIs, databases, deployment workflows, and the habit of shipping small complete products.' },
  { date: '2021', role: 'First Professional Experience', organization: 'Product-Focused Engineering Teams', description: 'Started solving real business problems by turning requirements into stable, maintainable full-stack application features.' },
  { date: '2023', role: 'Major Projects', organization: 'Client and Internal Platforms', description: 'Delivered dashboards, portals, workflow systems, and architecture improvements with a focus on clarity and long-term maintainability.' },
  { date: 'Now', role: 'Current Position', organization: 'Software Engineer and Product Builder', description: 'Building scalable digital products while deepening expertise in architecture, cloud systems, and practical product development.' },
  { date: 'Next', role: 'Future Milestones', organization: 'Architecture and Product Leadership', description: 'Growing toward larger system ownership, stronger product judgment, and software that compounds value over time.' },
];

export const professionCards = [
  { title: 'Software Engineer', icon: Code2, description: 'I design and build reliable software systems with a focus on maintainable code, clear architecture, and thoughtful user experiences.' },
  { title: 'Product Builder', icon: Layers3, description: 'I enjoy taking ideas from blank page to working product, shaping features around real needs and measurable outcomes.' },
  { title: 'Problem Solver', icon: Brain, description: 'I like breaking complex problems into understandable pieces, then turning them into simple, practical solutions.' },
  { title: 'Continuous Learner', icon: Compass, description: 'I stay curious about new technologies, better workflows, and engineering principles that improve every product I build.' },
];

export const achievements = [
  { category: 'Certification', title: 'Full-Stack Development Path', icon: Award, description: 'Completed a structured path covering frontend systems, backend APIs, database modeling, and deployment fundamentals.' },
  { category: 'Milestone', title: 'Built Products From Scratch', icon: Sparkles, description: 'Created multiple end-to-end applications from idea, wireframe, and architecture through delivery and iteration.' },
  { category: 'Award', title: 'Reliable Delivery Recognition', icon: Trophy, description: 'Recognized for consistent execution, ownership, and the ability to simplify ambiguous technical challenges.' },
  { category: 'Personal Accomplishment', title: 'Self-Learned Modern Stack', icon: GraduationCap, description: 'Developed a practical engineering toolkit through deliberate study, experimentation, and repeated product building.' },
];

export const contactLinks = [
  { label: 'Email', value: 'hello@sketchengineer.dev', href: 'mailto:hello@sketchengineer.dev', icon: Mail },
  { label: 'LinkedIn', value: 'linkedin.com/in/sketchengineer', href: 'https://linkedin.com', icon: BriefcaseBusiness },
  { label: 'GitHub', value: 'github.com/sketchengineer', href: 'https://github.com', icon: GitBranch },
  { label: 'Resume Download', value: 'Download PDF resume', href: '/resume.pdf', icon: Award },
];

export const drivers = [
  { title: 'Problem solving', description: 'Understanding the real constraint before writing the first line of code.', icon: Brain },
  { title: 'Building products', description: 'Creating useful software that moves from concept to daily workflow.', icon: Layers3 },
  { title: 'Learning technologies', description: 'Exploring new tools with purpose, not novelty for its own sake.', icon: Lightbulb },
  { title: 'Innovation', description: 'Improving systems through small, durable, well-reasoned decisions.', icon: Compass },
];
