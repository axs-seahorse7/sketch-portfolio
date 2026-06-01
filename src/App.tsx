import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ThemeToggle } from './components/ThemeToggle';
import { About } from './pages/About';
import { Achievements } from './pages/Achievements';
import { Career } from './pages/Career';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Profession } from './pages/Profession';
import { Projects } from './pages/Projects';
import { Skills } from './pages/Skills';

export default function App() {
  const location = useLocation();
  return (
    <div className="min-h-screen overflow-x-hidden bg-paper text-ink transition-colors duration-500 dark:bg-ink dark:text-white">
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(#eaeaea_1px,transparent_1px),linear-gradient(90deg,#eaeaea_1px,transparent_1px)] bg-[size:42px_42px] opacity-35 dark:bg-[linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] dark:opacity-45" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(248,248,248,.9),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(138,152,168,.12),transparent_26%)] dark:bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,.08),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(138,152,168,.12),transparent_26%)]" />
      <Navbar />
      <ThemeToggle />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/career" element={<Career />} />
          <Route path="/profession" element={<Profession />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
