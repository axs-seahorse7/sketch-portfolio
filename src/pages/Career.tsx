import { motion } from 'framer-motion';
import { PageShell } from '../components/Sketch';
import { timeline } from '../data/content';

export function Career() {
  return (
    <PageShell eyebrow="Career" title="A timeline drawn as the path grows." description="A scalable professional timeline that can receive future entries without changing the design system.">
      <div className="relative mx-auto max-w-4xl">
        <motion.div className="absolute left-5 top-0 h-full w-px bg-graphite/20 dark:bg-white/20 md:left-1/2" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.1, ease: 'easeOut' }} style={{ transformOrigin: 'top' }} />
        <div className="space-y-10">
          {timeline.map((item, index) => (
            <motion.article key={item.role} className={`relative grid gap-6 md:grid-cols-2 ${index % 2 === 0 ? '' : 'md:[&>div:first-child]:col-start-2'}`} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.45 }}>
              <div className="ml-14 rounded-[2rem] border border-graphite/10 bg-white/80 p-6 shadow-paper dark:border-white/10 dark:bg-white/5">
                <p className="font-hand text-3xl text-graphite/60 dark:text-white/55">{item.date}</p>
                <h2 className="mt-1 font-hand text-4xl text-ink dark:text-white">{item.role}</h2>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-graphite/50 dark:text-white/45">{item.organization}</p>
                <p className="mt-4 leading-7 text-graphite/72 dark:text-white/68">{item.description}</p>
              </div>
              <span className="absolute left-2 top-8 h-7 w-7 rounded-full border-2 border-graphite bg-white dark:border-white dark:bg-ink md:left-1/2 md:-translate-x-1/2" />
            </motion.article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
