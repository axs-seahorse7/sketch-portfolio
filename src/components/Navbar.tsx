import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { navItems } from '../data/content';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative rounded-full px-4 py-2 text-sm font-medium transition duration-300 ${isActive ? 'text-ink dark:text-white' : 'text-graphite/65 hover:text-ink dark:text-white/60 dark:hover:text-white'}`;

  return (
    <header className="fixed left-1/2 top-5 z-40 w-[85vw] -translate-x-1/2">
      <nav className={`relative overflow-hidden rounded-full ${open ? "max-sm:rounded-2xl" : ""} border border-white/75 bg-gradient-to-br from-white/55 via-white/30 to-white/15 px-4 py-3 shadow-[0_2px_4px_rgba(255,255,255,0.9),0_8px_40px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(0,0,0,0.05)] backdrop-blur-[40px] saturate-[1.8] dark:border-white/[0.06] dark:from-white/[0.08] dark:via-white/[0.04] dark:to-transparent dark:shadow-[0_8px_40px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)] dark:saturate-100`}>
        <div className="relative flex items-center justify-between gap-4">
          <NavLink to="/" className="whitespace-nowrap font-hand text-3xl text-ink dark:text-white" onClick={() => setOpen(false)}>
            Software Engineer
          </NavLink>
          <div className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} className={linkClass}>
                {({ isActive }) => (
                  <>
                    {isActive && <motion.span layoutId="activeNav" className="absolute inset-0 rounded-full bg-white/80 shadow-sm dark:bg-white/10" />}
                    <span className="relative">{item.label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </div>
          <button type="button" className="rounded-full border border-graphite/10 p-2 text-ink xl:hidden dark:border-white/10 dark:text-white" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="xl:hidden">
              <div className="grid gap-2 px-1 pb-2 pt-4 sm:grid-cols-2">
                {navItems.map((item) => (
                  <NavLink key={item.path} to={item.path} onClick={() => setOpen(false)} className="rounded-2xl border border-graphite/10 bg-white/45 px-4 py-3 text-sm text-graphite dark:border-white/10 dark:bg-white/5 dark:text-white/75">
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
