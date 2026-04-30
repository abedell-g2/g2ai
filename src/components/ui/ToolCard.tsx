import { Star } from 'lucide-react'
import ToolLogo from './ToolLogo'

export interface Tool {
  name: string
  domain: string
  category: string
  description: string
  rating: number
  reviewCount: number
  tags: string[]
}

interface ToolCardProps {
  tool: Tool
}

function Stars({ rating }: { rating: number }) {
  const filled = Math.round(rating)
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={13}
          strokeWidth={1.5}
          style={
            s <= filled
              ? { fill: 'var(--g2-star)', color: 'var(--g2-star)' }
              : { fill: 'none', color: 'var(--g2-border)' }
          }
        />
      ))}
    </span>
  )
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <article className="flex flex-col h-full rounded-2xl border border-[var(--g2-border)] bg-[var(--g2-surface)] p-5 gap-3 hover:shadow-lg hover:border-[var(--g2-purple)] transition-all cursor-pointer">

      {/* Header: Logo + Name + Category chip */}
      <div className="flex items-start gap-3">
        <ToolLogo domain={tool.domain} name={tool.name} size={40} className="shrink-0 mt-0.5" />
        <div className="min-w-0 flex-1">
          <p className="text-[15px] font-bold text-[var(--g2-dark)] truncate">{tool.name}</p>
          <span className="inline-block mt-1.5 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-[var(--g2-border)] text-[var(--g2-muted)]">
            {tool.category}
          </span>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <Stars rating={tool.rating} />
        <span className="text-[13px] font-semibold text-[var(--g2-dark)]">{tool.rating.toFixed(1)}</span>
        <span className="text-[12px] text-[var(--g2-muted)]">({tool.reviewCount.toLocaleString()})</span>
      </div>

      {/* Description */}
      <p className="text-[13.5px] text-[var(--g2-muted)] leading-relaxed line-clamp-2 flex-1">
        {tool.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
        {tool.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-medium px-2.5 py-1 rounded-full border border-[var(--g2-border)] text-[var(--g2-muted)]"
          >
            {tag}
          </span>
        ))}
      </div>

    </article>
  )
}
