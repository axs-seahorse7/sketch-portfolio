import { Doodle, PageShell, SketchCard } from '../components/Sketch';
import { drivers } from '../data/content';

export function About() {
  const values = ['Curiosity', 'Ownership', 'Consistency', 'Growth'];
  return (
    <PageShell eyebrow="About me" title="An Engineer with an empty notebook mindset." description="My work sits between engineering discipline and product curiosity: observe carefully, sketch the structure, then build something useful and resilient.">
      <div className="grid gap-7 lg:grid-cols-[1.15fr_.85fr]">
        <SketchCard className="relative overflow-hidden">
          <Doodle className="right-5 top-5" />
          <p className="font-hand text-4xl text-ink dark:text-white">Who Am I</p>
          <p className="mt-5 text-lg leading-9 text-graphite/75 dark:text-white/70">
Building products from ideas, solving complex problems, and turning concepts into reliable software.          </p>
          <p className="mt-5 text-lg leading-9 text-graphite/75 dark:text-white/70">
            I work beyond traditional web development by thinking about architecture, reliability, product direction, and long-term improvement. I care about clean systems, clear communication, and the quiet craft of making software feel simple.
          </p>
        </SketchCard>
        <div className="grid gap-5">
          <SketchCard>
            <p className="font-hand text-4xl text-ink dark:text-white">Core Values</p>
            <div className="mt-5 grid gap-3">
              {values.map((value) => <span key={value} className="rounded-full border border-graphite/10 bg-ivory px-5 py-3 text-sm font-semibold text-graphite dark:border-white/10 dark:bg-white/5 dark:text-white/75">{value}</span>)}
            </div>
          </SketchCard>
        </div>
      </div>
      <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {drivers.map(({ title, description, icon: Icon }) => (
          <SketchCard key={title}>
            <Icon className="mb-5 text-graphite/70 dark:text-white/70" size={28} />
            <h2 className="font-hand text-4xl text-ink dark:text-white">{title}</h2>
            <p className="mt-3 leading-7 text-graphite/70 dark:text-white/65">{description}</p>
          </SketchCard>
        ))}
      </section>
    </PageShell>
  );
}
