import { Link } from 'react-router-dom'
import ThemeToggle from '../ui/ThemeToggle'
import G2Logo from '../ui/G2Logo'

interface NavbarProps {
  dark: boolean
  onToggle: () => void
  workflowTerm?: string
}

export default function Navbar({ dark, onToggle, workflowTerm = 'Workflows' }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--g2-bg)]/50 backdrop-blur-md">
      <div className="max-w-[1200px] mx-auto px-6 h-16 grid grid-cols-[auto_1fr_auto] items-center gap-6">
        {/* Logo */}
        <a href="/" aria-label="G2.AI home" className="shrink-0">
          <G2Logo className="h-9 w-auto" />
        </a>

        {/* Nav links — centered in the middle column */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center justify-center gap-7">
          <Link to="/coming-soon" className="text-[17px] font-medium text-[var(--g2-muted)] hover:text-[var(--g2-dark)] transition-colors">Agents</Link>
          <Link to="/coming-soon" className="text-[17px] font-medium text-[var(--g2-muted)] hover:text-[var(--g2-dark)] transition-colors">{workflowTerm}</Link>
          <Link to="/coming-soon" className="text-[17px] font-medium text-[var(--g2-muted)] hover:text-[var(--g2-dark)] transition-colors">Evaluations</Link>
          <Link to="/coming-soon" className="text-[17px] font-medium text-[var(--g2-muted)] hover:text-[var(--g2-dark)] transition-colors">Experts</Link>
        </nav>

        {/* Right: theme toggle + avatar */}
        <div className="shrink-0 justify-self-end flex items-center gap-3">
          <ThemeToggle dark={dark} onToggle={onToggle} />
          <img
            src="https://media.licdn.com/dms/image/v2/C5603AQF2xPA_A5YPIg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1653323249034?e=2147483647&v=beta&t=cQ2tQFG2kS-Z38clCSkC6fuw3ANhg6p9FpM9HJtb19Y"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover ring-2 ring-[var(--g2-border)] shrink-0"
          />
        </div>
      </div>
    </header>
  )
}
