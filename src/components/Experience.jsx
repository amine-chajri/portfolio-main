import { ArrowUpRight, Briefcase, Code2, GraduationCap } from 'lucide-react'

const experiences = [
  {
    period: '2024 — Present',
    role: 'Full-Stack Web Development Student',
    organization: 'Self-directed learning · Morocco',
    description:
      'Building a strong foundation across the stack while shipping project-based applications with React, Node.js, and MongoDB.',
    tags: ['React', 'Node.js', 'MongoDB'],
    Icon: GraduationCap,
    current: true,
  },
  {
    period: '2023 — Present',
    role: 'Independent Project Developer',
    organization: 'Personal & freelance projects',
    description:
      'Taking ideas from wireframe to deployment — designing responsive interfaces, building APIs, and refining every detail in between.',
    tags: ['UI/UX', 'REST APIs', 'Vercel'],
    Icon: Briefcase,
    current: false,
  },
  {
    period: '2022 — 2023',
    role: 'Web Development Foundations',
    organization: 'Continuous learning',
    description:
      'Focused on semantic HTML, modern CSS, JavaScript fundamentals, and version control workflows that keep projects moving.',
    tags: ['JavaScript', 'HTML/CSS', 'Git'],
    Icon: Code2,
    current: false,
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative scroll-mt-28 overflow-hidden border-t border-white/[0.06] bg-[#090D16] py-24 sm:py-28 lg:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-cyan-500/[0.04] blur-[120px]" />
        <div className="absolute -right-32 top-0 h-72 w-72 rounded-full bg-violet-500/[0.035] blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-cyan-300/70" />
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-cyan-300/80">
                Experience
              </span>
            </div>
            <h2
              id="experience-heading"
              className="mt-5 max-w-md text-balance text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl"
            >
              A journey built in iterations.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400 sm:text-base">
              I am early in my career and intentional about how I grow. Every project is a chance
              to sharpen the way I design, build, and ship.
            </p>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-5 py-2.5 text-sm font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/25 hover:bg-cyan-300/10 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090D16]"
            >
              Work with me
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 text-slate-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-300"
                strokeWidth={1.8}
              />
            </a>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute bottom-8 left-5 top-6 w-px bg-gradient-to-b from-cyan-400/40 via-white/[0.08] to-transparent"
            />

            <div className="space-y-4">
              {experiences.map(({ period, role, organization, description, tags, Icon, current }) => (
                <div key={role} className="relative pl-12 sm:pl-14">
                  <span
                    className={`absolute left-0 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-2xl border bg-[#090D16] transition-colors duration-300 ${
                      current
                        ? 'border-cyan-300/25 text-cyan-300 shadow-[0_0_24px_-10px_rgba(34,211,238,0.5)]'
                        : 'border-white/[0.09] text-slate-500'
                    }`}
                  >
                    <Icon aria-hidden="true" className="h-[18px] w-[18px]" strokeWidth={1.6} />
                  </span>

                  <article className="group rounded-2xl border border-white/[0.08] bg-[#0D1321]/75 p-5 transition-all duration-500 ease-out hover:-translate-y-0.5 hover:border-white/[0.14] hover:bg-[#0D1321] sm:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-cyan-300/70">
                        {period}
                      </span>
                      {current && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-2 py-0.5 text-[8px] font-semibold uppercase tracking-[0.14em] text-emerald-300/80">
                          <span className="h-1 w-1 rounded-full bg-emerald-400" />
                          Now
                        </span>
                      )}
                    </div>
                    <h3 className="mt-3 text-base font-semibold tracking-[-0.02em] text-white sm:text-lg">
                      {role}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-slate-500">{organization}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/[0.06] bg-white/[0.025] px-2.5 py-1 text-[9px] font-medium text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
