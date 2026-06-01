import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

export function PageShell({ eyebrow, title, description, children }: { eyebrow: string; title: string; description: string; children: ReactNode }) {
  return (
    <motion.main
      className="mx-auto min-h-screen w-full max-w-7xl px-5 pb-20 pt-36 sm:px-8 lg:px-10"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <header className="mb-12 max-w-3xl">
        <p className="font-hand text-2xl text-graphite/70 dark:text-white/60">{eyebrow}</p>
        <h1 className="mt-2 font-hand text-6xl leading-none text-ink dark:text-white md:text-7xl">{title}</h1>
        <SketchUnderline />
        <p className="mt-6 text-lg leading-8 text-graphite/75 dark:text-white/70">{description}</p>
      </header>
      {children}
    </motion.main>
  );
}

export function SketchCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={`sketch-border relative rounded-[2rem] bg-white/88 p-6 shadow-paper backdrop-blur dark:bg-ink/80 dark:shadow-darkpaper ${className}`}
      whileHover={{ y: -7, rotate: -0.25 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
    >
      {children}
    </motion.div>
  );
}

export function SketchUnderline() {
  return (
    <svg className="mt-1 h-5 w-56 text-graphite dark:text-white" viewBox="0 0 230 24" fill="none" aria-hidden="true">
      <path className="animate-draw" d="M4 15C42 4 72 21 110 12C146 4 178 5 226 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="260" />
      <path className="animate-draw" d="M18 20C70 12 126 19 201 14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeDasharray="260" />
    </svg>
  );
}

export function Doodle({ className = '' }: { className?: string }) {
  return (
    <svg className={`pointer-events-none absolute text-graphite/25 dark:text-white/25 ${className}`} width="150" height="110" viewBox="0 0 150 110" fill="none" aria-hidden="true">
      <path d="M21 62C35 22 76 9 112 26C139 39 131 77 102 82C72 87 49 66 61 45C72 25 108 35 114 58" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 8" />
      <path d="M18 88L48 78M32 96L42 65M120 16L137 8M128 28L145 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ProjectMockup({ title, screenshot }: { title: string; screenshot: any }) {
  return (
    <div className="relative min-h-64 overflow-hidden rounded-[1.5rem] border border-line bg-ivory p-5 dark:border-white/10 dark:bg-white/5">
     { !screenshot && (
      <>
      <div className="mb-5 flex gap-2">
        <span className="h-3 w-3 rounded-full border border-graphite/30 dark:border-white/30" />
        <span className="h-3 w-3 rounded-full border border-graphite/30 dark:border-white/30" />
        <span className="h-3 w-3 rounded-full border border-graphite/30 dark:border-white/30" />
      </div>
      <div className="space-y-4">
        <div className="h-10 w-3/4 rounded-full border border-graphite/25 bg-white dark:border-white/20 dark:bg-white/10" />
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-2 h-28 rounded-3xl border border-graphite/20 bg-white dark:border-white/15 dark:bg-white/10" />
          <div className="h-28 rounded-3xl border border-graphite/20 bg-white dark:border-white/15 dark:bg-white/10" />
        </div>
        <div className="h-4 w-full rounded-full bg-line dark:bg-white/10" />
        <div className="h-4 w-2/3 rounded-full bg-line dark:bg-white/10" />
      </div>
      </>
      )}
      
    { screenshot && (
      <img src={screenshot} alt={`${title} screenshot`} className="absolute inset-0 h-full w-full object-cover opacity-0" onLoad={(e) => (e.currentTarget.style.opacity = '1')} />
    )}
      <p className="absolute bottom-5 right-6 rotate-[-3deg] font-hand text-3xl text-graphite/50 dark:text-white/45">{title}</p>
    </div>
  );
}
