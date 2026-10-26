import {
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Circle,
  CloudRain,
  CloudSun,
  Droplets,
  Github,
  Lock,
  MapPin,
  Search,
  ShoppingBag,
  Sun,
  Wind,
} from 'lucide-react'

const techDotColors = {
  React: 'bg-cyan-400',
  Tailwind: 'bg-sky-400',
  MongoDB: 'bg-emerald-400',
}

const projects = [
  {
    number: '01',
    title: 'E-commerce Platform',
    description:
      'A conversion-focused storefront with considered product discovery, a fluid cart, and a frictionless checkout flow.',
    tech: ['React', 'Tailwind', 'MongoDB'],
    type: 'commerce',
    url: 'atelier-store.dev',
    demo: '#',
    source: '#',
  },
  {
    number: '02',
    title: 'Weather App Dashboard',
    description:
      'Real-time forecasts, clear data visualisation, and saved locations in one calm, responsive dashboard.',
    tech: ['React', 'Tailwind', 'MongoDB'],
    type: 'weather',
    url: 'skyview.amine.dev',
    demo: '#',
    source: '#',
  },
  {
    number: '03',
    title: 'Task Manager API',
    description:
      'A kanban-style workspace powered by a clean REST API, secure authentication, and role-based access.',
    tech: ['React', 'Tailwind', 'MongoDB'],
    type: 'tasks',
    url: 'flowboard.api/tasks',
    demo: '#',
    source: '#',
  },
  {
    number: '04',
    title: 'Blog Application',
    description:
      'A markdown-first publishing platform with authentication, thoughtful reading experiences, and comments.',
    tech: ['React', 'Tailwind', 'MongoDB'],
    type: 'blog',
    url: 'folio-journal.dev',
    demo: '#',
    source: '#',
  },
]

function BrowserBar({ url }) {
  return (
    <div
      aria-hidden="true"
      className="flex items-center border-b border-white/[0.06] bg-[#0B111C] px-4 py-2.5"
    >
      <div className="flex w-[42px] shrink-0 items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-[#F87171]/80" />
        <span className="h-2 w-2 rounded-full bg-[#FBBF24]/80" />
        <span className="h-2 w-2 rounded-full bg-[#34D399]/80" />
      </div>
      <div className="mx-auto flex min-w-0 max-w-[70%] items-center gap-1.5 rounded-md bg-white/[0.035] px-2.5 py-1 ring-1 ring-inset ring-white/[0.04]">
        <Lock className="h-2.5 w-2.5 shrink-0 text-slate-600" strokeWidth={2} />
        <span className="truncate font-mono text-[9px] tracking-[0.04em] text-slate-500">
          {url}
        </span>
      </div>
      <div className="w-[42px] shrink-0" />
    </div>
  )
}

function CommercePreview() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-[#0C1018] px-4 pb-3.5 pt-3 sm:px-5">
      <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-amber-300/20 blur-3xl" />
      <div className="absolute -bottom-16 left-1/4 h-36 w-36 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative flex shrink-0 items-center justify-between border-b border-white/[0.07] pb-2">
        <div className="flex items-center gap-1.5">
          <span className="flex h-5 w-5 items-center justify-center rounded-md bg-[#F5EFE6] text-[8px] font-black text-[#3D2F21]">
            a
          </span>
          <span className="text-[10px] font-semibold tracking-[-0.02em] text-white">atelier.</span>
        </div>
        <div className="hidden items-center gap-3 text-[7px] font-medium uppercase tracking-[0.12em] text-slate-500 sm:flex">
          <span className="text-white">New in</span>
          <span>Shop</span>
          <span>Journal</span>
        </div>
        <div className="flex items-center gap-2.5 text-slate-500">
          <Search className="h-3 w-3" strokeWidth={1.8} />
          <div className="relative">
            <ShoppingBag className="h-3 w-3" strokeWidth={1.8} />
            <span className="absolute -right-1 -top-1 h-1.5 w-1.5 rounded-full bg-amber-300" />
          </div>
        </div>
      </div>

      <div className="relative grid min-h-0 flex-1 grid-cols-[1.15fr_0.85fr] items-center gap-3 pt-3">
        <div>
          <span className="text-[7px] font-semibold uppercase tracking-[0.22em] text-amber-300/80">
            Autumn / Winter 2026
          </span>
          <p className="mt-1.5 text-[17px] font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-[20px]">
            Objects for
            <br />
            slow living.
          </p>
          <p className="mt-2 max-w-[160px] text-[7px] leading-3 text-slate-500">
            Considered pieces, crafted to last beyond the season.
          </p>
          <span className="mt-2.5 inline-flex items-center gap-1 rounded-full bg-[#F5EFE6] px-2.5 py-1 text-[7px] font-bold uppercase tracking-[0.1em] text-[#261D15]">
            Shop the edit
            <ArrowUpRight className="h-2.5 w-2.5" strokeWidth={2} />
          </span>
        </div>

        <div className="relative h-[88%] min-h-24 overflow-hidden rounded-lg bg-gradient-to-br from-[#E7D8C2] via-[#D4BC9B] to-[#A88862]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.55),transparent_45%)]" />
          <ShoppingBag
            className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 text-[#584838]/70 sm:h-11 sm:w-11"
            strokeWidth={1}
          />
          <span className="absolute bottom-1.5 left-1.5 rounded-sm bg-black/25 px-1.5 py-0.5 text-[6px] font-medium uppercase tracking-[0.1em] text-white/80">
            Canvas tote
          </span>
        </div>
      </div>
    </div>
  )
}

const forecast = [
  { day: 'Tue', temp: '25°', Icon: CloudSun, tone: 'text-amber-200' },
  { day: 'Wed', temp: '27°', Icon: Sun, tone: 'text-amber-300' },
  { day: 'Thu', temp: '22°', Icon: CloudRain, tone: 'text-sky-300' },
  { day: 'Fri', temp: '23°', Icon: CloudSun, tone: 'text-amber-200' },
  { day: 'Sat', temp: '26°', Icon: Sun, tone: 'text-amber-300' },
]

function WeatherPreview() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-gradient-to-br from-[#0A1A2F] via-[#0B1526] to-[#0C101B] px-4 pb-3 pt-3 sm:px-5">
      <div className="absolute -left-10 -top-16 h-40 w-40 rounded-full bg-sky-400/15 blur-3xl" />
      <div className="absolute -right-6 bottom-0 h-32 w-32 rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="relative flex items-start justify-between gap-2">
        <div>
          <p className="text-[7px] font-medium uppercase tracking-[0.24em] text-sky-200/60">
            Current conditions
          </p>
          <div className="mt-1 flex items-center gap-2">
            <CloudSun className="h-6 w-6 text-amber-200" strokeWidth={1.4} />
            <span className="text-[32px] font-light leading-none tracking-[-0.08em] text-white">
              24<span className="align-top text-sm">°</span>
            </span>
            <div className="ml-1 text-[8px] leading-3 text-slate-400">
              <p className="font-medium text-slate-200">Partly cloudy</p>
              <p>Feels like 26°</p>
            </div>
          </div>
          <div className="mt-1 flex items-center gap-1 text-[8px] text-slate-400">
            <MapPin className="h-2.5 w-2.5 text-sky-300" strokeWidth={1.8} />
            Casablanca, MA
          </div>
        </div>

        <div className="grid shrink-0 grid-cols-2 gap-x-2.5 gap-y-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm">
          <div className="flex items-center gap-1 text-[7px] text-slate-400">
            <Wind className="h-2.5 w-2.5 text-sky-300" strokeWidth={1.8} />
            12 km/h
          </div>
          <div className="flex items-center gap-1 text-[7px] text-slate-400">
            <Droplets className="h-2.5 w-2.5 text-sky-300" strokeWidth={1.8} />
            62%
          </div>
          <div className="text-[7px] text-slate-500">
            UV <span className="text-slate-300">4</span>
          </div>
          <div className="text-[7px] text-slate-500">
            AQI <span className="text-emerald-300">32</span>
          </div>
        </div>
      </div>

      <div className="relative mt-2.5 flex flex-1 flex-col rounded-lg border border-white/[0.08] bg-white/[0.035] p-2.5">
        <div className="flex items-center justify-between text-[7px] font-medium uppercase tracking-[0.14em] text-slate-500">
          <span>5-day forecast</span>
          <span className="text-sky-300/80">View all</span>
        </div>
        <div className="mt-auto grid grid-cols-5 gap-1">
          {forecast.map(({ day, temp, Icon, tone }) => (
            <div
              key={day}
              className="flex flex-col items-center gap-1 rounded-md border border-white/[0.055] bg-[#0A1220]/60 py-1.5"
            >
              <span className="text-[7px] uppercase tracking-wide text-slate-500">{day}</span>
              <Icon className={`h-3 w-3 ${tone}`} strokeWidth={1.6} />
              <span className="text-[7px] font-semibold text-slate-200">{temp}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function TaskCard({ title, tag, tagTone, meta, done = false }) {
  return (
    <div className="rounded-md border border-white/[0.06] bg-[#0E1524] p-1.5">
      <div className="flex items-start gap-1.5">
        {done ? (
          <CheckCircle2 className="mt-px h-2.5 w-2.5 shrink-0 text-emerald-400" strokeWidth={2} />
        ) : (
          <Circle className="mt-px h-2.5 w-2.5 shrink-0 text-slate-600" strokeWidth={2} />
        )}
        <p
          className={`min-w-0 text-[7px] font-medium leading-[10px] ${
            done ? 'text-slate-500 line-through decoration-slate-600' : 'text-slate-300'
          }`}
        >
          {title}
        </p>
      </div>
      <div className="mt-1 flex items-center justify-between gap-1">
        <span
          className={`rounded-sm px-1 py-0.5 text-[5px] font-semibold uppercase tracking-[0.12em] ${tagTone}`}
        >
          {tag}
        </span>
        <span className="text-[5px] text-slate-600">{meta}</span>
      </div>
    </div>
  )
}

function TasksPreview() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-[#0B101B] px-4 pb-3 pt-3 sm:px-5">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/15 blur-3xl" />
      <div className="absolute -bottom-16 left-0 h-32 w-32 rounded-full bg-fuchsia-500/[0.08] blur-3xl" />

      <div className="relative flex shrink-0 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-md bg-violet-500/15 ring-1 ring-inset ring-violet-400/20">
            <CheckCircle2 className="h-3 w-3 text-violet-300" strokeWidth={1.8} />
          </span>
          <div>
            <p className="text-[9px] font-semibold leading-none text-white">flowboard</p>
            <p className="mt-1 text-[6px] font-medium uppercase leading-none tracking-[0.18em] text-slate-500">
              Sprint 04
            </p>
          </div>
        </div>
        <div className="flex -space-x-1">
          <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#0B101B] bg-gradient-to-br from-cyan-300 to-sky-500 text-[5px] font-bold text-slate-950">
            JL
          </span>
          <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#0B101B] bg-gradient-to-br from-violet-300 to-fuchsia-500 text-[5px] font-bold text-slate-950">
            MK
          </span>
          <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#0B101B] bg-white/[0.08] text-[5px] text-slate-400">
            +2
          </span>
        </div>
      </div>

      <div className="relative mt-2.5 grid min-h-0 flex-1 grid-cols-2 gap-2">
        <div className="flex min-h-0 flex-col rounded-lg border border-white/[0.06] bg-white/[0.02] p-2">
          <div className="flex items-center justify-between">
            <span className="text-[6px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              In progress
            </span>
            <span className="rounded-sm bg-white/[0.05] px-1 text-[6px] text-slate-500">2</span>
          </div>
          <div className="mt-1.5 space-y-1.5">
            <TaskCard
              title="Build task endpoints"
              tag="API"
              tagTone="bg-violet-400/10 text-violet-300"
              meta="Due Fri"
            />
            <TaskCard
              title="Polish mobile layout"
              tag="UI"
              tagTone="bg-cyan-400/10 text-cyan-300"
              meta="Due Mon"
            />
          </div>
        </div>

        <div className="flex min-h-0 flex-col rounded-lg border border-white/[0.06] bg-white/[0.02] p-2">
          <div className="flex items-center justify-between">
            <span className="text-[6px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              Done
            </span>
            <span className="rounded-sm bg-white/[0.05] px-1 text-[6px] text-slate-500">2</span>
          </div>
          <div className="mt-1.5 space-y-1.5">
            <TaskCard
              title="Auth middleware"
              tag="API"
              tagTone="bg-emerald-400/10 text-emerald-300"
              meta="Done"
              done
            />
            <TaskCard
              title="Database schema"
              tag="DB"
              tagTone="bg-amber-400/10 text-amber-300"
              meta="Done"
              done
            />
          </div>
        </div>
      </div>

      <div className="relative mt-2 flex shrink-0 items-center gap-2 rounded-md border border-emerald-400/10 bg-emerald-400/[0.04] px-2 py-1.5 font-mono text-[6px]">
        <span className="rounded-sm bg-emerald-400/15 px-1 py-0.5 font-semibold text-emerald-300">
          GET
        </span>
        <span className="text-slate-500">/api/tasks</span>
        <span className="ml-auto flex items-center gap-1 text-emerald-300/80">
          <span className="h-1 w-1 rounded-full bg-emerald-400" />
          200 OK
        </span>
      </div>
    </div>
  )
}

function BlogPreview() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-[#0F0E18] px-4 pb-3 pt-3 sm:px-5">
      <div className="absolute -right-10 -top-12 h-36 w-36 rounded-full bg-rose-400/10 blur-3xl" />
      <div className="absolute -bottom-14 left-1/3 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative flex shrink-0 items-center justify-between border-b border-white/[0.06] pb-2">
        <span className="font-serif text-[11px] font-semibold italic tracking-[-0.02em] text-white">
          folio<span className="text-rose-300">.</span>
        </span>
        <div className="flex items-center gap-3 text-[6px] font-medium uppercase tracking-[0.14em] text-slate-500">
          <span className="text-slate-300">Journal</span>
          <span>Notes</span>
          <span>About</span>
        </div>
        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-rose-300 to-violet-400 text-[5px] font-bold text-[#1A1224]">
          AC
        </div>
      </div>

      <div className="relative mt-2.5 grid grid-cols-[1.15fr_0.85fr] items-center gap-2.5">
        <div>
          <span className="text-[6px] font-semibold uppercase tracking-[0.22em] text-rose-300/70">
            Featured essay
          </span>
          <p className="mt-1 text-[14px] font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-[16px]">
            Designing interfaces that feel human.
          </p>
          <p className="mt-1.5 line-clamp-2 text-[7px] leading-3 text-slate-500">
            Thoughts on restraint, rhythm, and building digital spaces with a little more warmth.
          </p>
          <div className="mt-2 flex items-center gap-1.5">
            <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-gradient-to-br from-rose-300 to-violet-400 text-[4px] font-bold text-[#1A1224]">
              AC
            </span>
            <span className="text-[6px] text-slate-500">Amine · 6 min read</span>
          </div>
        </div>

        <div className="relative h-[76px] overflow-hidden rounded-md bg-gradient-to-br from-violet-400/30 via-rose-300/20 to-[#1A1525] ring-1 ring-inset ring-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(251,113,133,0.35),transparent_55%)]" />
          <BookOpen
            className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 text-white/60"
            strokeWidth={1.2}
          />
        </div>
      </div>

      <div className="relative mt-2 grid flex-1 grid-cols-2 gap-2">
        <div className="flex min-w-0 items-center gap-1.5 rounded-md border border-white/[0.05] bg-white/[0.02] p-1.5">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-gradient-to-br from-cyan-300/60 to-sky-500/20 ring-1 ring-inset ring-white/10">
            <span className="h-2 w-2 rounded-full bg-white/40" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-[7px] font-medium text-slate-300">
              Designing with constraints
            </p>
            <p className="mt-0.5 text-[5px] uppercase tracking-[0.14em] text-slate-600">
              4 min read
            </p>
          </div>
        </div>
        <div className="flex min-w-0 items-center gap-1.5 rounded-md border border-white/[0.05] bg-white/[0.02] p-1.5">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-gradient-to-br from-amber-300/60 to-rose-400/20 ring-1 ring-inset ring-white/10">
            <span className="h-2 w-2 rounded-full bg-white/40" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-[7px] font-medium text-slate-300">
              The quiet power of whitespace
            </p>
            <p className="mt-0.5 text-[5px] uppercase tracking-[0.14em] text-slate-600">
              3 min read
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectPreview({ type }) {
  if (type === 'commerce') return <CommercePreview />
  if (type === 'weather') return <WeatherPreview />
  if (type === 'tasks') return <TasksPreview />
  return <BlogPreview />
}

function ProjectCard({ project }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-white/[0.08] bg-[#0D1321]/80 p-2.5 shadow-[0_24px_70px_-45px_rgba(0,0,0,1)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-cyan-300/20 hover:shadow-[0_32px_90px_-45px_rgba(34,211,238,0.28)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#070C15]">
        <BrowserBar url={project.url} />
        <div aria-hidden="true" className="relative h-52 overflow-hidden sm:h-56">
          <div className="h-full transition-transform duration-700 ease-out group-hover:scale-[1.025]">
            <ProjectPreview type={project.type} />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070C15]/20 via-transparent to-white/[0.015]" />
        </div>
      </div>

      <div className="flex flex-1 flex-col px-2.5 pb-1 pt-5 sm:px-3 sm:pt-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="font-mono text-[9px] font-medium uppercase tracking-[0.2em] text-slate-600">
              {project.number} / Project
            </span>
            <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-white sm:text-[22px]">
              {project.title}
            </h3>
          </div>
          <a
            href={project.demo}
            aria-label={`View the ${project.title} live demo`}
            className="mt-5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-slate-500 transition-all duration-300 hover:border-cyan-300/25 hover:bg-cyan-300/10 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1321] group-hover:border-cyan-300/20 group-hover:text-cyan-300"
          >
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2}
            />
          </a>
        </div>

        <p className="mt-3 text-[13px] leading-6 text-slate-400 sm:text-sm">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.06] bg-white/[0.025] px-2.5 py-1 text-[9px] font-medium tracking-[0.02em] text-slate-400"
            >
              <span
                aria-hidden="true"
                className={`h-1 w-1 rounded-full ${techDotColors[tech] ?? 'bg-slate-500'}`}
              />
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-3 border-t border-white/[0.06] pt-4">
          <a
            href={project.demo}
            aria-label={`Open the ${project.title} live demo`}
            className="group/demo inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-[11px] font-medium text-slate-300 transition-all duration-300 hover:border-cyan-300/20 hover:bg-cyan-300/10 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1321]"
          >
            Live demo
            <ArrowUpRight
              aria-hidden="true"
              className="h-3 w-3 transition-transform duration-300 group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5"
              strokeWidth={2}
            />
          </a>
          <a
            href={project.source}
            aria-label={`View the source code for ${project.title}`}
            className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-500 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1321]"
          >
            <Github aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={1.8} />
            Source
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative scroll-mt-28 overflow-hidden border-t border-white/[0.06] bg-[#0B0F19] py-24 sm:py-28 lg:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-0 h-[420px] w-[520px] rounded-full bg-cyan-500/[0.045] blur-[120px]" />
        <div className="absolute -left-40 bottom-1/4 h-[420px] w-[420px] rounded-full bg-violet-500/[0.05] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 border-b border-white/[0.06] pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-cyan-300/70" />
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-cyan-300/80">
                Selected work
              </span>
            </div>
            <h2
              id="projects-heading"
              className="mt-5 text-balance text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl"
            >
              Projects built with purpose.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-400 lg:pb-1 lg:text-right">
            A selection of full-stack builds exploring product design, clean architecture, and the
            small details that make an interface feel right.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 md:grid-cols-2 lg:gap-7">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
