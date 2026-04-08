import { Link } from 'react-router-dom'
import { LayoutGrid, GitBranch, Scale, Users } from 'lucide-react'

const CARDS = [
  {
    eyebrow: 'Discover & Compare',
    headline: 'AI Products',
    description:
      'Thousands of AI tools ranked by verified user reviews. Not vendor claims. Not hype. What real teams actually use.',
    cta: 'Browse Products',
    to: '#',
    icon: LayoutGrid,
    iconBg: 'bg-[var(--g2-purple-light)]',
    iconColor: 'text-[var(--g2-purple)]',
    ctaStyle: 'bg-[var(--g2-purple)] text-white hover:bg-purple-700',
  },
  {
    eyebrow: 'Build & Share',
    headline: 'AI Workflows',
    description:
      "See how real teams string AI together from first prompt to final output. Steal their blueprint. Ship yours.",
    cta: 'Explore Workflows',
    to: '/playbook/new',
    icon: GitBranch,
    iconBg: 'bg-orange-50 dark:bg-orange-950/40',
    iconColor: 'text-[var(--g2-orange)]',
    ctaStyle: 'bg-[var(--g2-orange)] text-white hover:bg-orange-600',
  },
  {
    eyebrow: 'Test & Benchmark',
    headline: 'AI Evaluations',
    description:
      "Head-to-head model comparisons with real outputs. No marketing spin. See what actually performs for your use case.",
    cta: 'View Evaluations',
    to: '#',
    icon: Scale,
    iconBg: 'bg-teal-50 dark:bg-teal-950/40',
    iconColor: 'text-teal-600',
    ctaStyle: 'bg-teal-600 text-white hover:bg-teal-700',
  },
  {
    eyebrow: 'Learn & Follow',
    headline: 'AI Experts',
    description:
      "Practitioners who've built, deployed, and battle-tested AI across every industry. Get their take, not a thought leader's.",
    cta: 'Meet the Experts',
    to: '#',
    icon: Users,
    iconBg: 'bg-sky-50 dark:bg-sky-950/40',
    iconColor: 'text-sky-600',
    ctaStyle: 'bg-sky-600 text-white hover:bg-sky-700',
  },
]

export default function FeaturePanels() {
  return (
    <section aria-label="Feature highlights" className="max-w-[1160px] mx-auto px-8 py-6 pb-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {CARDS.map((card) => {
          const Icon = card.icon
          const isExternal = card.to === '#'
          const cardContent = (
            <div className="flex flex-col h-full rounded-2xl border border-[var(--g2-border)] bg-[var(--g2-surface)] p-5 gap-5 hover:border-[var(--g2-purple)] transition-colors group">
              {/* Icon */}
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${card.iconBg}`}>
                <Icon size={20} className={card.iconColor} />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-1.5 flex-1">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--g2-muted)]">
                  {card.eyebrow}
                </p>
                <h2 className="text-[22px] font-black text-[var(--g2-dark)] leading-tight">
                  {card.headline}
                </h2>
                <p className="text-[13px] text-[var(--g2-muted)] leading-relaxed mt-1">
                  {card.description}
                </p>
              </div>

              {/* CTA */}
              <div className="mt-auto pt-1">
                <span className={`inline-flex items-center px-4 py-2 rounded-full text-[12.5px] font-semibold transition-colors ${card.ctaStyle}`}>
                  {card.cta}
                </span>
              </div>
            </div>
          )

          return isExternal ? (
            <a key={card.headline} href={card.to}>{cardContent}</a>
          ) : (
            <Link key={card.headline} to={card.to}>{cardContent}</Link>
          )
        })}
      </div>
    </section>
  )
}
