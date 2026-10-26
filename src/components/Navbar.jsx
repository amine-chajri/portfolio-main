import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks, socialLinks } from '../data/links'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    const sectionIds = navLinks.map(({ href }) => href.slice(1))
    let animationFrame = 0

    const updateActiveSection = () => {
      animationFrame = 0
      const marker = window.scrollY + window.innerHeight * 0.35
      let currentSection = sectionIds[0]

      for (const id of sectionIds) {
        const section = document.getElementById(id)
        if (section && section.offsetTop <= marker) currentSection = id
      }

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) {
        currentSection = sectionIds[sectionIds.length - 1]
      }

      setActiveSection((current) => (current === currentSection ? current : currentSection))
    }

    const requestUpdate = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(updateActiveSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4 lg:pt-5">
      <nav
        aria-label="Primary navigation"
        className="mx-auto max-w-6xl rounded-2xl border border-white/[0.08] bg-[#0B0F19]/80 shadow-[0_12px_48px_-16px_rgba(0,0,0,0.9)] backdrop-blur-md"
      >
        <div className="flex h-[58px] items-center justify-between gap-2 px-3 sm:h-16 sm:px-4 lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:px-5">
          <a
            href="#home"
            onClick={closeMenu}
            className="group flex w-fit items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F19]"
            aria-label="Amine Chajri — back to top"
          >
            <img
              src="/ac-wordmark.png"
              alt=""
              aria-hidden="true"
              className="h-9 w-auto shrink-0 object-contain drop-shadow-[0_0_18px_rgba(56,189,248,0.35)] transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <span className="hidden flex-col sm:flex">
              <span className="text-[13px] font-semibold leading-none tracking-[-0.02em] text-white">
                Amine Chajri
              </span>
              <span className="mt-1.5 text-[8px] font-semibold uppercase leading-none tracking-[0.24em] text-slate-500">
                Full-Stack Developer
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-0.5 lg:flex lg:justify-self-center">
            {navLinks.map(({ label, href }) => {
              const section = href.slice(1)
              const isActive = activeSection === section

              return (
                <a
                  key={href}
                  href={href}
                  aria-current={isActive ? 'location' : undefined}
                  className={`relative rounded-full px-3 py-2 text-[12px] font-medium tracking-[0.01em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F19] ${
                    isActive
                      ? 'bg-white/[0.06] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]'
                      : 'text-slate-400 hover:bg-white/[0.035] hover:text-white'
                  }`}
                >
                  {label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-1 left-1/2 h-0.5 w-0.5 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.9)]"
                    />
                  )}
                </a>
              )
            })}
          </div>

          <div className="flex items-center gap-1 sm:gap-1.5 lg:justify-self-end">
            <div className="flex items-center gap-1 sm:gap-1.5">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.035] text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-200 hover:shadow-[0_0_24px_-8px_rgba(34,211,238,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F19] sm:h-9 sm:w-9"
                >
                  <Icon
                    aria-hidden="true"
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110 sm:h-4 sm:w-4"
                    strokeWidth={1.8}
                  />
                </a>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="ml-0.5 flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.035] text-slate-300 transition-all duration-300 hover:border-cyan-300/25 hover:bg-cyan-300/10 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F19] lg:hidden"
            >
              {isMenuOpen ? (
                <X aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
              ) : (
                <Menu aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div id="mobile-menu" className="border-t border-white/[0.07] px-2 pb-2.5 pt-2 lg:hidden">
            <div className="grid grid-cols-2 gap-1">
              {navLinks.map(({ label, href }, index) => {
                const isActive = activeSection === href.slice(1)

                return (
                  <a
                    key={href}
                    href={href}
                    onClick={closeMenu}
                    aria-current={isActive ? 'location' : undefined}
                    className={`group flex items-center justify-between rounded-xl px-3 py-2.5 text-[13px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 ${
                      isActive
                        ? 'bg-white/[0.06] text-white'
                        : 'text-slate-400 hover:bg-white/[0.035] hover:text-white'
                    }`}
                  >
                    <span>{label}</span>
                    <span
                      aria-hidden="true"
                      className={`font-mono text-[8px] tracking-[0.12em] ${
                        isActive ? 'text-cyan-300/80' : 'text-slate-600 group-hover:text-cyan-300/60'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </a>
                )
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
