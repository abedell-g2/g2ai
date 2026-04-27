import { Search, Sparkles } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import SearchDropdown from './SearchDropdown'

const BASE = import.meta.env.BASE_URL

interface HeroProps {
  dark: boolean
  workflowTerm?: string
}

export default function Hero({ dark, workflowTerm = 'Workflows' }: HeroProps) {
  const bgImage = dark
    ? `${BASE}images/Background_DarkMode.svg`
    : `${BASE}images/Background_LightMode.svg`

  const [query, setQuery] = useState('')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const showDropdown = dropdownOpen && query.length > 0

  return (
    <section
      className="relative py-16 md:py-24 text-center"
      style={{ background: 'var(--hero-glow), var(--g2-bg)' }}
      aria-labelledby="hero-heading"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <img src={bgImage} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative">
        {/* Heading */}
        <div className="max-w-[860px] mx-auto px-8">
          <h1
            id="hero-heading"
            className="text-[clamp(2rem,5.5vw,5.5rem)] leading-[1.05] tracking-tight text-[var(--g2-dark)] mb-7 text-center"
          >
            <span className="font-light">Real Intelligence for </span>
            <span className="font-medium gradient-text">Real AI.</span>
          </h1>
        </div>

        {/* Search bar + dropdown wrapper */}
        <div ref={searchRef} className="relative max-w-[1100px] mx-auto px-8">
          <div className="max-w-[620px] mx-auto">
            <form
              role="search"
              aria-label="Search G2 AI"
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-3 rounded-full border px-6 py-5 shadow-sm transition-all focus-within:shadow-md"
              style={{
                background: dark ? '#1e1b36' : 'var(--g2-surface)',
                borderColor: dark ? '#4a4570' : 'var(--g2-border)',
              }}
            >
              <Search size={18} className="shrink-0 text-[var(--g2-muted)]" aria-hidden="true" />
              <input
                type="search"
                value={query}
                placeholder="Find AI products, workflows, evaluations, and experts..."
                aria-label="Search G2 AI"
                className="flex-1 bg-transparent text-[var(--g2-dark)] placeholder:text-[var(--g2-muted)] text-[16px] outline-none"
                onChange={(e) => {
                  setQuery(e.target.value)
                  if (e.target.value.length > 0) setDropdownOpen(true)
                }}
                onFocus={() => { if (query.length > 0) setDropdownOpen(true) }}
              />
              <button
                type="submit"
                aria-label="Search with AI"
                className="shrink-0 text-[var(--g2-purple)] hover:text-[var(--g2-orange)] transition-colors"
              >
                <Sparkles size={18} aria-hidden="true" />
              </button>
            </form>
          </div>

          {/* Pillar pills below search */}
          {!showDropdown && (
            <div className="flex justify-center gap-2 mt-4 flex-wrap">
              {['Agents', workflowTerm, 'Evaluations', 'Experts'].map((label) => (
                <a
                  key={label}
                  href="#"
                  className="text-[12px] font-semibold px-3.5 py-1.5 rounded-full border border-[var(--g2-border)] text-[var(--g2-muted)] hover:border-[var(--g2-purple)] hover:text-[var(--g2-purple)] transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          )}

          {/* Dropdown */}
          {showDropdown && (
            <SearchDropdown
              query={query}
              dark={dark}
              onClose={() => {
                setDropdownOpen(false)
                setQuery('')
              }}
            />
          )}
        </div>
      </div>
    </section>
  )
}
