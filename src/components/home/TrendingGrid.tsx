import { useState } from 'react'
import { Link } from 'react-router-dom'
import ToolCard, { type Tool } from '../ui/ToolCard'

const USE_CASES = ['All', 'AI Assistant', 'Workflow Automation', 'Content Creation', 'App Builder', 'Testing']

const TRENDING_TOOLS: Tool[] = [
  {
    name: 'Claude',
    domain: 'claude.ai',
    category: 'AI Assistant',
    description: 'AI assistant by Anthropic for analysis, writing, and coding. Known for its honesty, nuanced reasoning, and low hallucination rate.',
    rating: 4.7,
    reviewCount: 194,
    tags: ['ai-assistant', 'text-generation', 'large-language-models'],
  },
  {
    name: 'ChatGPT',
    domain: 'chatgpt.com',
    category: 'AI Assistant',
    description: "OpenAI's conversational AI assistant, used by over 800 million people weekly for writing, coding, research, and complex analysis.",
    rating: 4.7,
    reviewCount: 883,
    tags: ['ai-assistant', 'text-generation', 'code-generation'],
  },
  {
    name: 'Confluence',
    domain: 'atlassian.com',
    category: 'Workflow Automation',
    description: 'AI-powered collaborative workspace by Atlassian for documentation, knowledge bases, and team coordination across pages, whiteboards, and databases.',
    rating: 4.1,
    reviewCount: 4241,
    tags: ['knowledge-management', 'collaboration', 'documentation'],
  },
  {
    name: 'Kualitee',
    domain: 'kualitee.com',
    category: 'Testing',
    description: 'Streamline QA testing with AI-driven test case generation, defect detection, and coverage analysis. G2 Best Software Award winner.',
    rating: 4.6,
    reviewCount: 212,
    tags: ['test-automation', 'qa-tools', 'workflow-automation'],
  },
  {
    name: 'Lovable',
    domain: 'lovable.dev',
    category: 'App Builder',
    description: 'Chat with AI to build for the web and ship faster. Go from prompt to prototype in seconds with real-time iteration on real applications.',
    rating: 4.6,
    reviewCount: 207,
    tags: ['app-builder', 'code-generation', 'no-code'],
  },
  {
    name: 'Microsoft Power Apps',
    domain: 'powerapps.microsoft.com',
    category: 'Workflow Automation',
    description: 'Low-code app development platform with AI Copilot that connects to 1,400+ data sources. Build, automate, and deploy business apps without deep coding expertise.',
    rating: 4.2,
    reviewCount: 379,
    tags: ['low-code', 'app-development', 'workflow-automation'],
  },
]

export default function TrendingGrid() {
  const [activeChip, setActiveChip] = useState('All')

  const filtered = activeChip === 'All'
    ? TRENDING_TOOLS
    : TRENDING_TOOLS.filter((t) => t.category === activeChip)

  return (
    <section aria-labelledby="trending-heading" className="max-w-[1160px] mx-auto px-8 pt-4 pb-14">

      <div className="flex items-center gap-2.5 mb-6">
        <h2 id="trending-heading" className="text-[24px] font-black text-[var(--g2-dark)]">
          Trending Products
        </h2>
        <svg aria-hidden="true" className="h-5 w-auto text-[var(--g2-purple)]" viewBox="0 0 512 512" fill="currentColor">
          <path d="M511.58,140.9c-.07-.73-.18-1.45-.31-2.16l0-.14c-.14-.71-.31-1.41-.51-2.09,0-.06,0-.12-.05-.17-.2-.68-.44-1.34-.7-2l-.09-.23c-.26-.64-.55-1.26-.87-1.87,0-.09-.09-.18-.14-.27-.32-.61-.67-1.2-1-1.78l-.17-.25c-.4-.6-.83-1.18-1.28-1.74l-.12-.16c-.51-.62-1-1.21-1.6-1.77h0c-.57-.56-1.16-1.1-1.77-1.6l-.16-.13c-.56-.45-1.14-.88-1.74-1.28l-.26-.16q-.87-.56-1.77-1l-.28-.14q-.92-.47-1.86-.87l-.25-.09q-1-.39-2-.69l-.18-.06c-.68-.19-1.38-.37-2.08-.5l-.16,0c-.7-.13-1.41-.24-2.14-.31h-.14c-.72-.07-1.44-.1-2.18-.11H356.48a24,24,0,0,0,0,48h73.27L305.65,291.34l-102-102a24,24,0,0,0-33.94,0L7.34,351.79a24,24,0,1,0,33.94,33.95L186.72,240.29l102,102a24,24,0,0,0,33.94,0L463.69,201.18v73.26a24,24,0,0,0,48,0V143.24h0c0-.75,0-1.48-.1-2.21A.49.49,0,0,1,511.58,140.9Z"/>
        </svg>
      </div>

      {/* Use case chips */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {USE_CASES.map((chip) => (
          <button
            key={chip}
            onClick={() => setActiveChip(chip)}
            className={`text-[13px] font-semibold px-4 py-1.5 rounded-full border transition-all ${
              activeChip === chip
                ? 'bg-[var(--g2-purple)] border-[var(--g2-purple)] text-white'
                : 'border-[var(--g2-border)] text-[var(--g2-muted)] hover:border-[var(--g2-purple)] hover:text-[var(--g2-purple)]'
            }`}
          >
            {chip}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((tool) => (
          <Link key={tool.name} to="/coming-soon" className="block h-full">
            <ToolCard tool={tool} />
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link
          to="/coming-soon"
          className="px-7 py-3 rounded-full border border-[var(--g2-border)] text-[var(--g2-text)] text-[13px] font-semibold hover:border-[var(--g2-purple)] hover:text-[var(--g2-purple)] transition-colors"
        >
          See All
        </Link>
      </div>

    </section>
  )
}
