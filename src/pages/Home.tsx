import { ArrowRight, Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Doodle, SketchUnderline } from '../components/Sketch';

export function Home() {
  return (
    <motion.main className="mx-auto grid min-h-screen w-full max-w-7xl items-center gap-14 px-5 pb-20 pt-36 sm:px-8 lg:grid-cols-[1.02fr_.98fr] lg:px-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.45 }}>
      <section className="relative">
        <p className="font-hand text-3xl text-graphite/70 dark:text-white/60">Software Engineer and Product Builder</p>
        <h1 className="mt-4 max-w-4xl font-hand text-6xl leading-[0.95] tracking-tight text-ink dark:text-white sm:text-7xl lg:text-8xl">Transforming ideas into scalable digital products.</h1>
        <SketchUnderline />
        <p className="mt-8 max-w-2xl text-lg leading-8 text-graphite/76 dark:text-white/70">
          I am a Software Engineer passionate about building meaningful software experiences. My journey started with curiosity and evolved into creating full-stack applications, solving real-world business problems, and continuously exploring new technologies. I enjoy turning complex challenges into elegant solutions while constantly pushing the boundaries of what I can build.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link to="/projects" className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-graphite dark:bg-white dark:text-ink">
            View Projects <ArrowRight size={17} />
          </Link>
          <a href="/resume.pdf" className="inline-flex items-center justify-center gap-2 rounded-full border border-graphite/15 bg-white/60 px-7 py-4 text-sm font-semibold text-ink transition hover:-translate-y-1 hover:border-graphite/35 dark:border-white/15 dark:bg-white/5 dark:text-white">
            Download Resume <Download size={17} />
          </a>
        </div>
        <Doodle className="-bottom-16 left-64 hidden rotate-12 lg:block" />
      </section>

      <section className="relative mx-auto w-full max-w-lg">
        <motion.div className="relative rotate-[-2.5deg] rounded-[2rem] border border-graphite/15 bg-white p-5 shadow-paper dark:border-white/15 dark:bg-graphite dark:shadow-darkpaper" initial={{ y: 24, rotate: -5, opacity: 0 }} animate={{ y: 0, rotate: -2.5, opacity: 1 }} transition={{ duration: 0.65, ease: 'easeOut' }}>
          <div className="sketch-border overflow-hidden rounded-[1.4rem] bg-ivory p-7 dark:bg-ink">
            <div className="relative aspect-[4/5] rounded-[1.1rem] border border-graphite/10 bg-white dark:border-white/10 dark:bg-white/5">
              <svg className="absolute inset-0 h-full w-full text-graphite dark:text-white" viewBox="0 0 420 520" fill="none" aria-label="Sketch style professional portrait illustration">
                <path d="M112 429C134 351 171 318 211 318C252 318 289 351 310 429" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                <path d="M151 194C151 125 177 86 216 86C255 86 281 126 281 194C281 258 253 292 216 292C179 292 151 258 151 194Z" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                <path d="M147 174C169 134 211 113 278 133C269 90 239 63 203 68C157 75 130 111 128 168" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M174 206C184 199 194 199 203 206M232 206C242 199 253 199 262 206M198 247C211 256 226 256 239 247" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                <path d="M75 89C101 52 139 32 190 27M312 60C342 75 365 100 381 135M64 377C42 344 35 306 44 263M344 409C371 384 387 353 393 316" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 12" />
              </svg>
            </div>
            <div className="mt-5 flex items-end justify-between gap-4">
              <div>
                <p className="font-hand text-4xl text-ink dark:text-white">Product-minded engineer</p>
                <p className="text-sm text-graphite/65 dark:text-white/60">Architecture, systems, craft</p>
              </div>
              <ExternalLink className="text-graphite/45 dark:text-white/45" size={20} />
            </div>
          </div>
        </motion.div>
      </section>
    </motion.main>
  );
}
