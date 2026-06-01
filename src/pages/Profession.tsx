import { PageShell, SketchCard } from '../components/Sketch';
import { professionCards } from '../data/content';

export function Profession() {
  return (
    <PageShell eyebrow="Profession" title="Professional identity in four sketches." description="The way I describe my work: engineering craft, product momentum, problem clarity, and a habit of continual learning.">
      <div className="grid gap-6 md:grid-cols-2">
        {professionCards.map(({ title, description, icon: Icon }) => (
          <SketchCard key={title} className="min-h-64">
            <Icon className="mb-7 text-graphite/65 dark:text-white/65" size={32} />
            <h2 className="font-hand text-5xl text-ink dark:text-white">{title}</h2>
            <p className="mt-4 text-lg leading-8 text-graphite/72 dark:text-white/68">{description}</p>
          </SketchCard>
        ))}
      </div>
    </PageShell>
  );
}
