import { Send } from 'lucide-react';
import { PageShell, SketchCard } from '../components/Sketch';
import { contactLinks } from '../data/content';

export function Contact() {
  return (
    <PageShell eyebrow="Contact" title="Start a conversation on a clean page." description="Reach out for product ideas, engineering collaboration, architecture discussions, or focused full-stack development work.">
      <div className="grid gap-7 lg:grid-cols-[.85fr_1.15fr]">
        <div className="grid gap-4">
          {contactLinks.map(({ label, value, href, icon: Icon }) => (
            <a key={label} href={href} className="rounded-[1.5rem] border border-graphite/10 bg-white/75 p-5 shadow-paper transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/5">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-graphite/10 dark:border-white/10"><Icon size={20} /></span>
                <div>
                  <p className="font-hand text-3xl text-ink dark:text-white">{label}</p>
                  <p className="text-sm text-graphite/65 dark:text-white/60">{value}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <SketchCard>
          <form className="grid gap-5">
            <label className="grid gap-2">
              <span className="font-hand text-3xl text-ink dark:text-white">Name</span>
              <input className="rounded-2xl border border-graphite/10 bg-ivory px-5 py-4 outline-none transition focus:border-graphite/40 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-white/35" placeholder="Your name" />
            </label>
            <label className="grid gap-2">
              <span className="font-hand text-3xl text-ink dark:text-white">Email</span>
              <input type="email" className="rounded-2xl border border-graphite/10 bg-ivory px-5 py-4 outline-none transition focus:border-graphite/40 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-white/35" placeholder="you@example.com" />
            </label>
            <label className="grid gap-2">
              <span className="font-hand text-3xl text-ink dark:text-white">Message</span>
              <textarea rows={7} className="resize-none rounded-2xl border border-graphite/10 bg-ivory px-5 py-4 outline-none transition focus:border-graphite/40 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-white/35" placeholder="Tell me about the product or problem you are building around." />
            </label>
            <button type="button" className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 dark:bg-white dark:text-ink">
              Send Message <Send size={17} />
            </button>
          </form>
        </SketchCard>
      </div>
    </PageShell>
  );
}
