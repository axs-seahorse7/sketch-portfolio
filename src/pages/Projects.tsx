import { ExternalLink, Github } from 'lucide-react';
import { PageShell, ProjectMockup, SketchCard } from '../components/Sketch';
import { projects } from '../data/content';

export function Projects() {
  return (
    <PageShell eyebrow="Projects" title="Premium showcases on paper cards." description="Placeholder projects designed to scale into a larger portfolio with pagination-ready structure and consistent project metadata.">
      <div className="grid gap-7">
        {projects.map((project, index) => (
          <a key={project.name} href={project.url} target="_blank" rel="noreferrer" className="block">
            <SketchCard className="grid gap-7 lg:grid-cols-[.92fr_1.08fr]">
              <ProjectMockup title={`0${index + 1}`} />
              <div className="flex flex-col justify-center">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-graphite/45 dark:text-white/45">{project.company}</p>
                <h2 className="mt-3 font-hand text-5xl text-ink dark:text-white">{project.name}</h2>
                <p className="mt-4 text-lg leading-8 text-graphite/72 dark:text-white/68">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.stack.map((tech) => <span key={tech} className="rounded-full border border-graphite/10 px-4 py-2 text-sm text-graphite/75 dark:border-white/10 dark:text-white/70">{tech}</span>)}
                </div>
                <div className="mt-7 flex flex-wrap gap-4 text-sm font-semibold text-ink dark:text-white">
                  <span className="inline-flex items-center gap-2">Project URL <ExternalLink size={16} /></span>
                  {project.github && <span className="inline-flex items-center gap-2">GitHub URL <Github size={16} /></span>}
                </div>
              </div>
            </SketchCard>
          </a>
        ))}
      </div>
      <div className="mt-8 flex justify-center gap-3">
        {[1, 2].map((page) => <button key={page} className={`h-11 w-11 rounded-full border text-sm font-semibold ${page === 1 ? 'border-ink bg-ink text-white dark:border-white dark:bg-white dark:text-ink' : 'border-graphite/15 text-graphite dark:border-white/15 dark:text-white/65'}`}>{page}</button>)}
      </div>
    </PageShell>
  );
}
