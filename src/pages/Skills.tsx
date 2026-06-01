import { PageShell, SketchCard } from '../components/Sketch';
import { skills } from '../data/content';

export function Skills() {
  return (
    <PageShell eyebrow="Skills" title="Tools arranged like hand-drawn index cards." description="A focused stack for creating full-stack products, APIs, deployment workflows, and maintainable user interfaces.">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skills.map(({ title, items, icon: Icon }) => (
          <SketchCard key={title} className="min-h-72">
            <div className="flex items-center justify-between">
              <h2 className="font-hand text-5xl text-ink dark:text-white">{title}</h2>
              <Icon className="text-graphite/55 dark:text-white/55" />
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {items.map((item) => <span key={item} className="rounded-full border border-graphite/10 bg-ivory px-4 py-2 text-sm font-semibold text-graphite transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/5 dark:text-white/75">{item}</span>)}
            </div>
          </SketchCard>
        ))}
      </div>
    </PageShell>
  );
}
