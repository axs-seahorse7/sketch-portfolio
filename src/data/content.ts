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
    name: 'Vehicle Entry Management System',
    title: 'VEMS Dashboard',
    company: 'PG Technoplast Ltd',
    description: 'A secure and efficient system for managing vehicle entries, integrating real-time monitoring, access control, and reporting features to streamline operations.',
    stack: ['React', 'JavaScript', 'Node.js', 'MongoDB', 'AWS'],
    url: 'https://vems-client.vercel.app/',
    github: 'https://github.com/example/foundry-commerce',
    screenshot: '/Project-ss/vems-dashbaord.png',
  },
  {
    name: 'Field Failure Analysis Tool',
    title: 'FFR Dashboard',
    company: 'PG Technoplast Ltd',
    description: 'A comprehensive dashboard for analyzing field failure reports, providing insights into failure patterns, root causes, and actionable recommendations to improve product reliability.',
    stack: ['React', 'Express.js', 'REST APIs', 'AWS', 'MongoDB'],
    url: 'https://ffcs-field-failure-complaint-system-ten.vercel.app/',
    github: 'https://github.com/example/atlas-workflow',
    screenshot: "/Project-ss/FFR-Dashboard.png",
  },
  {
    name: 'CRM System for Sales and Support',
    title: 'CRM Platform',
    company: 'My Project',
    description: 'A custom CRM platform designed to manage customer relationships, track sales pipelines, and provide support ticketing, enhancing customer engagement and operational efficiency.',
    stack: ['Node.js', 'Express.js', 'React', 'MongoDB', 'AWS'],
    url: 'https://example.com/northstar-portal',
    screenshot: '/Project-ss/CRM.png',
  },
  
];

export const timeline = [
  { date: '2022', role: 'Education', organization: 'Computer Science & Engineering', description: 'Built the foundation in programming, data structures, and the discipline of thinking through systems before implementation.' },
  { date: '2024', role: 'Learning Phase', organization: 'Self-Guided Modern Web Study', description: 'Learned modern JavaScript, React, APIs, databases, deployment workflows, and the habit of shipping small complete products.' },
  { date: '2025', role: 'First Professional Experience - BanksterIndia pvt Ltd ', organization: 'Start Internship at BanksterIndia pvt Ltd', description: 'Started solving real business problems by turning requirements into stable, maintainable full-stack application features.' },
  { date: '2026', role: 'PG Technoplast Ltd', organization: 'Joined PG Technoplast and move to solving Real-World Problems', description: 'Delivered dashboards, portals, workflow systems, and architecture improvements with a focus on clarity and long-term maintainability.' },
  { date: "Now", role: 'Current Position', organization: 'Software Engineer and Product Designer', description: 'Building scalable digital products while deepening expertise in architecture, cloud systems, and practical product development.' },
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
  { label: 'Email', value: 'sonukrdas1754@gmail.com', href: 'mailto:sonukrdas1754@gmail.com', icon: Mail },
  { label: 'LinkedIn', value: 'linkedin.com/in/sonu-kumar-das-linked-in', href: 'https://www.linkedin.com/in/sonu-kumar-das-linked-in', icon: BriefcaseBusiness },
  { label: 'GitHub', value: 'github.com/axs-seahorse7', href: 'https://github.com/axs-seahorse7', icon: GitBranch },
  { label: 'Resume Download', value: 'Download PDF resume', href: '/resume.pdf', icon: Award },
];

export const drivers = [
  { title: 'Problem solving', description: 'Understanding the real constraint before writing the first line of code.', icon: Brain },
  { title: 'Building products', description: 'Creating useful software that moves from concept to daily workflow.', icon: Layers3 },
  { title: 'Learning technologies', description: 'Exploring new tools with purpose, not novelty for its own sake.', icon: Lightbulb },
  { title: 'Innovation', description: 'Improving systems through small, durable, well-reasoned decisions.', icon: Compass },
];
