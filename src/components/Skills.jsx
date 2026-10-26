import {
  Atom,
  Braces,
  Code2,
  Database,
  GitBranch,
  PanelsTopLeft,
  Route,
  Server,
  ServerCog,
  Triangle,
  Webhook,
  Wind,
  Zap,
} from 'lucide-react'

const skillGroups = [
  {
    title: 'Frontend',
    description: 'Interfaces that feel as good as they look.',
    Icon: PanelsTopLeft,
    iconStyles: 'border-cyan-300/15 bg-cyan-400/[0.07] text-cyan-300',
    glowStyles: 'bg-cyan-400/[0.06] group-hover:bg-cyan-400/[0.1]',
    skillIconStyles: 'text-cyan-300/75',
    skills: [
      { name: 'React', Icon: Atom },
      { name: 'Vite', Icon: Zap },
      { name: 'JavaScript (ES6+)', Icon: Braces },
      { name: 'Tailwind CSS', Icon: Wind },
      { name: 'HTML5/CSS3', Icon: Code2 },
    ],
  },
  {
    title: 'Backend & APIs',
    description: 'Structured services built for clarity and scale.',
    Icon: ServerCog,
    iconStyles: 'border-sky-300/15 bg-sky-400/[0.07] text-sky-300',
    glowStyles: 'bg-sky-400/[0.06] group-hover:bg-sky-400/[0.1]',
    skillIconStyles: 'text-sky-300/75',
    skills: [
      { name: 'Node.js', Icon: Server },
      { name: 'Express.js', Icon: Route },
      { name: 'RESTful APIs', Icon: Webhook },
    ],
  },
  {
    title: 'Databases & Tools',
    description: 'The systems that keep products running and shipping.',
    Icon: Database,
    iconStyles: 'border-emerald-300/15 bg-emerald-400/[0.07] text-emerald-300',
    glowStyles: 'bg-emerald-400/[0.06] group-hover:bg-emerald-400/[0.1]',
    skillIconStyles: 'text-emerald-300/75',
    skills: [
      { name: 'MongoDB Atlas', Icon: Database },
      { name: 'Vercel', Icon: Triangle },
      { name: 'Git/GitHub', Icon: GitBranch },
    ],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative scroll-mt-28 overflow-hidden border-t border-white/[0.06] bg-[#090D16] py-24 sm:py-28 lg:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-[540px] -translate-x-1/2 rounded-full bg-cyan-500/[0.05] blur-[120px]" />
        <div className="absolute -right-32 bottom-16 h-64 w-64 rounded-full bg-sky-500/[0.04] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 border-b border-white/[0.06] pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-cyan-300/70" />
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-cyan-300/80">
                Technical toolkit
              </span>
            </div>
            <h2
              id="skills-heading"
              className="mt-5 text-balance text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl"
            >
              A toolkit for every layer.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-400 lg:pb-1 lg:text-right">
            From interface details to data models, these are the tools I reach for to take an idea
            from first sketch to production.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-3 lg:gap-5">
          {skillGroups.map(({ title, description, Icon, iconStyles, glowStyles, skillIconStyles, skills }) => (
            <article
              key={title}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0D1321]/75 p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-white/[0.14] hover:bg-[#0D1321] sm:p-7"
            >
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full blur-2xl transition-colors duration-500 ${glowStyles}`}
              />
              <div className="relative flex items-start justify-between gap-4">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl border transition-transform duration-500 group-hover:scale-105 ${iconStyles}`}
                >
                  <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <span className="font-mono text-[9px] font-medium tracking-[0.18em] text-slate-600">
                  {String(skills.length).padStart(2, '0')} tools
                </span>
              </div>

              <h3 className="relative mt-6 text-base font-semibold tracking-[-0.02em] text-white">
                {title}
              </h3>
              <p className="relative mt-2 text-sm leading-6 text-slate-400">{description}</p>

              <div className="relative mt-6 flex flex-wrap gap-2">
                {skills.map(({ name, Icon: SkillIcon }) => (
                  <span
                    key={name}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.07] bg-white/[0.03] px-2.5 py-1.5 text-[11px] font-medium text-slate-300 transition-colors duration-300 hover:border-white/[0.14] hover:bg-white/[0.05] hover:text-white"
                  >
                    <SkillIcon
                      aria-hidden="true"
                      className={`h-3.5 w-3.5 ${skillIconStyles}`}
                      strokeWidth={1.7}
                    />
                    {name}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
