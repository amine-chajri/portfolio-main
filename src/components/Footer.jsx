import { socialLinks } from '../data/links'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#090D16]">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-24 w-72 -translate-x-1/2 rounded-full bg-cyan-500/[0.06] blur-3xl"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 py-8 sm:flex-row sm:justify-between sm:px-8">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/25 hover:bg-cyan-300/10 hover:text-cyan-200 hover:shadow-[0_0_24px_-8px_rgba(34,211,238,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090D16]"
              >
                <Icon
                  aria-hidden="true"
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1.8}
                />
              </a>
            ))}
          </div>
          <span aria-hidden="true" className="hidden h-4 w-px bg-white/10 sm:block" />
          <span className="hidden text-[9px] font-medium uppercase tracking-[0.22em] text-slate-600 md:block">
            Let&apos;s connect
          </span>
        </div>

        <p className="text-center text-xs tracking-[0.01em] text-slate-500 sm:text-right">
          © 2026 Amine Chajri
        </p>
      </div>
    </footer>
  )
}
