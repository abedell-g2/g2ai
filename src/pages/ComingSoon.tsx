import { Link } from 'react-router-dom'
import G2Logo from '../components/ui/G2Logo'

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-[var(--g2-bg)] flex flex-col items-center justify-center text-center px-8">
      <Link to="/" aria-label="G2.AI home" className="mb-12">
        <G2Logo className="h-10 w-auto" />
      </Link>

      <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-[var(--g2-dark)] leading-tight mb-4">
        Coming Soon
      </h1>
      <p className="text-[16px] text-[var(--g2-muted)] max-w-[400px] leading-relaxed mb-10">
        We're building something here. Check back soon.
      </p>

      <Link
        to="/"
        className="px-6 py-3 rounded-full border border-[var(--g2-purple)] text-[var(--g2-purple)] text-[13.5px] font-semibold hover:bg-[var(--g2-purple)] hover:text-white transition-colors"
      >
        Back to home
      </Link>
    </div>
  )
}
