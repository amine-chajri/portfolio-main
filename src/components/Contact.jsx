import { ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { socialLinks } from '../data/links'

const channelDescriptions = {
  LinkedIn: 'Connect with me',
  GitHub: 'Explore my code',
  Email: 'Start a conversation',
}

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative scroll-mt-28 overflow-hidden border-t border-white/[0.06] bg-[#0B0F19] py-24 sm:py-28 lg:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-96 w-[640px] -translate-x-1/2 rounded-full bg-cyan-500/[0.06] blur-[130px]" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-violet-500/[0.05] blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0D1321]/80 p-7 shadow-[0_40px_120px_-70px_rgba(34,211,238,0.35)] sm:rounded-[36px] sm:p-10 lg:p-14">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_80%_at_30%_20%,#000_15%,transparent_80%)]"
          />
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-cyan-400/[0.1] blur-[90px]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent"
          />

          <div className="relative max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-cyan-300/70" />
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-cyan-300/80">
                Contact
              </span>
            </div>
            <h2
              id="contact-heading"
              className="mt-5 text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl"
            >
              Let&apos;s build something people remember.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              I am currently open to internships, junior roles, and freelance projects. If you
              have an idea worth building, my inbox is always open.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:chajriamine911@gmail.com"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 to-sky-400 px-6 py-3 text-sm font-bold text-slate-950 shadow-[0_12px_36px_-14px_rgba(34,211,238,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-14px_rgba(34,211,238,0.9)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1321]"
              >
                Say hello
                <Mail
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5"
                  strokeWidth={1.9}
                />
              </a>
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-6 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1321]"
              >
                View my work
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 text-slate-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-300"
                  strokeWidth={1.9}
                />
              </a>
            </div>
          </div>

          <div className="relative mt-12 border-t border-white/[0.07] pt-7">
            <div className="grid gap-3 sm:grid-cols-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/20 hover:bg-cyan-300/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1321]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.035] text-slate-400 transition-colors duration-300 group-hover:border-cyan-300/20 group-hover:text-cyan-300">
                    <Icon aria-hidden="true" className="h-4 w-4" strokeWidth={1.7} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-semibold text-slate-200">{label}</span>
                    <span className="mt-0.5 block truncate text-[10px] text-slate-500">
                      {channelDescriptions[label]}
                    </span>
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-3.5 w-3.5 shrink-0 text-slate-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300"
                    strokeWidth={1.8}
                  />
                </a>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-[9px] font-medium uppercase tracking-[0.18em] text-slate-600">
              <span className="flex items-center gap-1.5">
                <MapPin aria-hidden="true" className="h-3 w-3 text-cyan-300/60" strokeWidth={1.8} />
                Morocco · Open to remote
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
