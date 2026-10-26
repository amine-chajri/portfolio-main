import { Globe2, MapPin, PanelsTopLeft, PenTool, ServerCog } from 'lucide-react'

const highlights = [
  {
    title: 'Frontend Mastery',
    description:
      'Responsive, accessible interfaces built with React, semantic HTML, and a considered design system.',
    Icon: PanelsTopLeft,
  },
  {
    title: 'Backend & APIs',
    description:
      'Reliable Node.js services and REST APIs with clear data models, validation, and authentication.',
    Icon: ServerCog,
  },
  {
    title: 'UI/UX Precision',
    description:
      'Strong hierarchy, thoughtful interactions, and design decisions guided by real user needs.',
    Icon: PenTool,
  },
]

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative scroll-mt-28 overflow-hidden border-t border-white/[0.06] bg-[#0B0F19] py-24 sm:py-28 lg:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-12 h-80 w-80 rounded-full bg-cyan-500/[0.05] blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-violet-500/[0.045] blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-cyan-300/70" />
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-cyan-300/80">
                About me
              </span>
            </div>
            <h2
              id="about-heading"
              className="mt-5 text-balance text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl"
            >
              Curious by nature.
              <br />
              Precise by practice.
            </h2>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              <span className="flex items-center gap-1.5">
                <MapPin aria-hidden="true" className="h-3 w-3 text-cyan-300/70" strokeWidth={1.8} />
                Morocco
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-slate-700 sm:block" />
              <span className="flex items-center gap-1.5">
                <Globe2 aria-hidden="true" className="h-3 w-3 text-cyan-300/70" strokeWidth={1.8} />
                Open to remote
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-pretty text-xl font-medium leading-9 tracking-[-0.025em] text-slate-200 sm:text-2xl sm:leading-10">
              I approach every build like a product: understand the problem, sketch the simplest
              path, then refine the details until the experience feels effortless.
            </p>
            <p className="max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              My process is grounded in clean architecture, readable code, and empathy for the
              people using what I build. I am currently studying full-stack web development while
              shipping personal projects that push me across the front end, back end, and
              everything between.
            </p>
            <p className="max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Whether I am shaping a React interface or designing a Node API, I care about the
              details that make software feel fast, dependable, and genuinely good to use.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3 lg:mt-16">
          {highlights.map(({ title, description, Icon }, index) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0D1321]/75 p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-[#0D1321] hover:shadow-[0_24px_70px_-45px_rgba(34,211,238,0.3)] sm:p-7"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-400/[0.05] blur-2xl transition-opacity duration-500 group-hover:bg-cyan-400/[0.09]"
              />
              <div className="relative flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-400/[0.07] text-cyan-300 transition-colors duration-300 group-hover:border-cyan-300/25 group-hover:text-cyan-200">
                  <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <span className="font-mono text-[9px] font-medium tracking-[0.18em] text-slate-600">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-6 text-base font-semibold tracking-[-0.02em] text-white">
                {title}
              </h3>
              <p className="mt-2.5 text-sm leading-6 text-slate-400">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
