import { useState, useEffect } from 'react'

const navItems = [
  { label: '首页', href: '#hero' },
  { label: '关于', href: '#about' },
  { label: '工作', href: '#work' },
  { label: '项目', href: '#projects' },
  { label: '创作', href: '#personal' },
  { label: '生活', href: '#life' },
  { label: '联系', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 bg-white/80 backdrop-blur-xl border-b border-ink-900/5' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="font-display font-bold text-xl tracking-tight text-ink-900">
          李建国<span className="text-ink-500">·个人简历</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink-500 hover:text-ink-900 transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:block px-5 py-2 text-sm font-medium text-ink-900 rounded-full border border-ink-900/10 hover:border-ink-900/20 hover:bg-ink-900/5 transition-all duration-300"
        >
          联系我 →
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-ink-900"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            ) : (
              <path d="M4 8h16M4 16h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 bg-white/95 backdrop-blur-xl border-b border-ink-900/5">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-ink-600 hover:text-ink-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
