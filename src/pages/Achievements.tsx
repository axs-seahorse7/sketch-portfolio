import { PageShell, SketchCard } from '../components/Sketch';
import { achievements } from '../data/content';

export function Achievements() {
  return (
    <PageShell eyebrow="Achievements" title="Notebook pages of progress." description="A concise collection of certifications, milestones, awards, and personal accomplishments that reflect consistent growth.">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {achievements.map(({ category, title, description, icon: Icon }) => (
          <SketchCard key={title} className="min-h-80">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-graphite/45 dark:text-white/45">{category}</p>
            <Icon className="my-7 text-graphite/65 dark:text-white/65" size={34} />
            <h2 className="font-hand text-4xl leading-tight text-ink dark:text-white">{title}</h2>
            <p className="mt-4 leading-7 text-graphite/70 dark:text-white/66">{description}</p>
          </SketchCard>
        ))}
      </div>
    </PageShell>
  );
}
