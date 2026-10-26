import { ArrowDown, Mail, Code2 } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#0B0F19] px-5 pb-24 pt-32 sm:px-8 sm:pt-36 lg:pb-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-10%,rgba(56,189,248,0.13),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.055)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,#000_20%,transparent_80%)]" />
        <div className="absolute left-[8%] top-[20%] h-56 w-56 rounded-full bg-cyan-500/[0.09] blur-[100px] sm:h-80 sm:w-80" />
        <div className="absolute right-[6%] top-[24%] h-60 w-60 rounded-full bg-violet-500/[0.09] blur-[110px] sm:h-96 sm:w-96" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0B0F19] to-transparent" />
        <div className="absolute left-1/2 top-[47%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04] sm:h-[600px] sm:w-[600px]" />
        <div className="absolute left-1/2 top-[47%] hidden h-[780px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.025] sm:block" />
      </div>

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-5 animate-[pulse_6s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-cyan-500/25 via-sky-500/20 to-violet-500/25 opacity-70 blur-2xl motion-reduce:animate-none"
          />
          <div className="relative rounded-full bg-gradient-to-br from-cyan-300 via-sky-500 to-violet-500 p-[2px] shadow-[0_0_50px_-10px_rgba(56,189,248,0.65)]">
            <div className="rounded-full bg-[#0B0F19] p-2">
              <div
                role="img"
                aria-label="Portrait placeholder for Amine Chajri"
                className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-[radial-gradient(circle_at_35%_25%,#1E293B,#0B0F19_72%)] ring-1 ring-inset ring-white/10 sm:h-28 sm:w-28"
              >
                <span
                  aria-hidden="true"
                  className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-cyan-400/10 blur-xl"
                />
                <span className="bg-gradient-to-b from-white via-white to-slate-500 bg-clip-text text-3xl font-extrabold tracking-[-0.08em] text-transparent sm:text-4xl">
                  AC
                </span>
              </div>
            </div>
          </div>
          <span className="absolute bottom-2 right-2 flex h-6 w-6 items-center justify-center rounded-full border-4 border-[#0B0F19] bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.7)]">
            <span className="sr-only">Available for work</span>
          </span>
          <span className="absolute -left-3 top-1/2 hidden h-8 w-8 -translate-x-full -translate-y-1/2 items-center justify-center rounded-xl border border-white/10 bg-[#101827]/90 text-cyan-300 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.8)] backdrop-blur-md sm:flex">
            <Code2 aria-hidden="true" className="h-4 w-4" strokeWidth={1.6} />
          </span>
        </div>

        <h1 className="mt-8 text-5xl font-bold leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
          Amine Chajri
        </h1>

        <div className="mt-5 flex flex-col items-center gap-1 text-sm leading-6 text-slate-300 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-2 sm:text-[15px]">
          <span className="font-medium text-slate-200">Full-Stack Web Developer Student</span>
          <span aria-hidden="true" className="hidden text-slate-600 sm:inline">
            |
          </span>
          <span>
            JavaScript <span className="text-cyan-400">•</span> React{' '}
            <span className="text-cyan-400">•</span> Node.js
          </span>
          <span aria-hidden="true" className="hidden text-slate-600 sm:inline">
            |
          </span>
          <span>Based in Morocco</span>
        </div>

        <p className="mt-6 max-w-2xl text-pretty text-sm leading-7 text-slate-400 sm:text-base">
          Welcome to my personal showcase of web development projects, skills, and resume.
          Passionate about building impactful and innovative web applications.
        </p>

        <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <a
            href="#projects"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 to-sky-400 px-6 py-3 text-sm font-bold text-slate-950 shadow-[0_12px_36px_-14px_rgba(34,211,238,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-14px_rgba(34,211,238,0.9)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F19] sm:w-auto"
          >
            View Projects
            <ArrowDown
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
              strokeWidth={2}
            />
          </a>
          <a
            href="#contact"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-6 py-3 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F19] sm:w-auto"
          >
            Contact Me
            <Mail
              aria-hidden="true"
              className="h-4 w-4 text-slate-500 transition-colors duration-300 group-hover:text-cyan-300"
              strokeWidth={1.9}
            />
          </a>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-600 sm:mt-16">
          <span>React</span>
          <span className="hidden h-1 w-1 rounded-full bg-slate-700 sm:block" />
          <span>Node.js</span>
          <span className="hidden h-1 w-1 rounded-full bg-slate-700 sm:block" />
          <span>Tailwind CSS</span>
          <span className="hidden h-1 w-1 rounded-full bg-slate-700 sm:block" />
          <span>MongoDB</span>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to the about section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.28em] text-slate-600 transition-colors duration-300 hover:text-slate-300 sm:flex"
      >
        Scroll
        <span aria-hidden="true" className="h-9 w-px bg-gradient-to-b from-slate-600 to-transparent" />
      </a>
    </section>
  )
}
