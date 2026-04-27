export interface ProductData {
  id: string
  name: string
  domain: string
  category: string
  categoryColor: string
  shortDescription: string
  description: string
  rating: number
  reviewCount: number
  tags: string[]
  relatedIds: string[]
}

export interface PlaybookStep {
  toolId: string
  action: string
}

export interface PlaybookData {
  id: string
  title: string
  author: string
  authorRole: string
  company: string
  toolIds: string[]
  rating: number
  ratingCount: number
  description: string
  steps: PlaybookStep[]
  problem?: string
  biggestWin?: string
}

export const PRODUCTS: ProductData[] = [
  {
    id: 'claude',
    name: 'Claude',
    domain: 'claude.ai',
    category: 'Generative',
    categoryColor: 'bg-violet-50 text-violet-500',
    shortDescription: 'AI assistant by Anthropic for analysis, writing, and coding',
    description:
      'Claude is Anthropic\'s AI assistant — helpful, harmless, and honest. Use it for complex analysis, long-form writing, code review, and nuanced reasoning across any domain.',
    rating: 4.7,
    reviewCount: 2341,
    tags: ['generative', 'writing', 'coding', 'analysis', 'assistant', 'anthropic', 'claude'],
    relatedIds: ['chatgpt', 'perplexity', 'cursor', 'copilot'],
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    domain: 'openai.com',
    category: 'Generative',
    categoryColor: 'bg-violet-50 text-violet-500',
    shortDescription: "The world's leading AI assistant by OpenAI",
    description:
      "ChatGPT is OpenAI's conversational AI that helps with writing, analysis, coding, math, and creative projects. Available in GPT-3.5 and GPT-4 variants with plugin support.",
    rating: 4.6,
    reviewCount: 12450,
    tags: ['generative', 'writing', 'coding', 'openai', 'gpt', 'chatgpt', 'assistant'],
    relatedIds: ['claude', 'perplexity', 'jasper', 'copilot'],
  },
  {
    id: 'cursor',
    name: 'Cursor',
    domain: 'cursor.com',
    category: 'Coding',
    categoryColor: 'bg-sky-50 text-sky-600',
    shortDescription: 'The AI-first code editor for pair programming',
    description:
      'Cursor is an AI-first code editor built on VS Code. It offers tab completion, inline code generation, and a built-in AI chat that understands your entire codebase.',
    rating: 4.8,
    reviewCount: 3120,
    tags: ['coding', 'developer', 'editor', 'ide', 'cursor', 'code', 'vscode'],
    relatedIds: ['copilot', 'claude', 'replit'],
  },
  {
    id: 'copilot',
    name: 'GitHub Copilot',
    domain: 'github.com',
    category: 'Coding',
    categoryColor: 'bg-sky-50 text-sky-600',
    shortDescription: 'AI pair programmer directly in your IDE',
    description:
      "GitHub Copilot is an AI pair programmer that offers autocomplete suggestions in real time. Trained on billions of lines of code, it integrates with VS Code, JetBrains, and more.",
    rating: 4.5,
    reviewCount: 8934,
    tags: ['coding', 'developer', 'github', 'copilot', 'autocomplete', 'ide'],
    relatedIds: ['cursor', 'claude', 'replit'],
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    domain: 'perplexity.ai',
    category: 'Research',
    categoryColor: 'bg-teal-50 text-teal-500',
    shortDescription: 'AI-powered search engine that cites sources',
    description:
      'Perplexity is an AI search engine that answers questions with cited sources in real time. It combines large language models with live web search for accurate, verifiable answers.',
    rating: 4.4,
    reviewCount: 5678,
    tags: ['search', 'research', 'perplexity', 'citations', 'web', 'ai search'],
    relatedIds: ['chatgpt', 'claude', 'notion-ai'],
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    domain: 'midjourney.com',
    category: 'Image Creation',
    categoryColor: 'bg-rose-50 text-rose-500',
    shortDescription: 'Text-to-image AI for stunning visual creation',
    description:
      'Midjourney is an AI image generator that creates stunning visuals from text prompts. Known for its artistic quality and ability to produce highly stylized, creative imagery.',
    rating: 4.6,
    reviewCount: 15230,
    tags: ['image', 'design', 'art', 'midjourney', 'generative', 'visual', 'creative', 'text-to-image'],
    relatedIds: ['chatgpt', 'notion-ai', 'jasper'],
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    domain: 'notion.so',
    category: 'Productivity',
    categoryColor: 'bg-indigo-50 text-indigo-500',
    shortDescription: 'AI writing and summarization built into Notion',
    description:
      'Notion AI integrates directly into your Notion workspace to help you write, summarize, translate, and brainstorm — without leaving the context of your notes and docs.',
    rating: 4.3,
    reviewCount: 4120,
    tags: ['productivity', 'writing', 'notion', 'notes', 'docs', 'workspace', 'summarize'],
    relatedIds: ['claude', 'jasper', 'perplexity', 'grammarly'],
  },
  {
    id: 'jasper',
    name: 'Jasper',
    domain: 'jasper.ai',
    category: 'Marketing',
    categoryColor: 'bg-orange-50 text-orange-500',
    shortDescription: 'AI marketing copy and content creation platform',
    description:
      'Jasper is an enterprise AI platform for marketing teams. Create on-brand content at scale — blog posts, ads, social media, email campaigns, and more with brand voice control.',
    rating: 4.2,
    reviewCount: 3456,
    tags: ['marketing', 'writing', 'content', 'jasper', 'copywriting', 'ads', 'seo'],
    relatedIds: ['chatgpt', 'notion-ai', 'grammarly'],
  },
  {
    id: 'replit',
    name: 'Replit',
    domain: 'replit.com',
    category: 'Coding',
    categoryColor: 'bg-sky-50 text-sky-600',
    shortDescription: 'Collaborative browser-based coding with AI assistance',
    description:
      'Replit is a cloud-based IDE that supports 50+ languages and includes an AI coding assistant (Ghostwriter). Build, run, and deploy apps directly from the browser.',
    rating: 4.1,
    reviewCount: 2890,
    tags: ['coding', 'developer', 'replit', 'ide', 'browser', 'deploy', 'cloud'],
    relatedIds: ['cursor', 'copilot', 'claude'],
  },
  {
    id: 'grammarly',
    name: 'Grammarly',
    domain: 'grammarly.com',
    category: 'Writing',
    categoryColor: 'bg-emerald-50 text-emerald-600',
    shortDescription: 'AI writing assistant for grammar, clarity, and tone',
    description:
      'Grammarly is an AI writing assistant that checks grammar, spelling, style, and tone in real time. Available as a browser extension, desktop app, and API for teams.',
    rating: 4.4,
    reviewCount: 9870,
    tags: ['writing', 'grammar', 'grammarly', 'editing', 'proofreading', 'clarity'],
    relatedIds: ['notion-ai', 'jasper', 'claude'],
  },
  {
    id: 'codeium',
    name: 'Codeium',
    domain: 'codeium.com',
    category: 'Coding',
    categoryColor: 'bg-sky-50 text-sky-600',
    shortDescription: 'Free AI code acceleration toolkit for developers',
    description: 'Codeium is a free AI coding assistant that provides autocomplete, search, and chat directly in your IDE. Supports 70+ languages and 40+ editors.',
    rating: 4.5,
    reviewCount: 1820,
    tags: ['coding', 'developer', 'codeium', 'autocomplete', 'ide', 'free'],
    relatedIds: ['cursor', 'copilot', 'claude'],
  },
  {
    id: 'gemini',
    name: 'Gemini',
    domain: 'gemini.google.com',
    category: 'Generative',
    categoryColor: 'bg-violet-50 text-violet-500',
    shortDescription: "Google's most capable AI model family",
    description: "Gemini is Google's multimodal AI model capable of reasoning across text, code, images, and data. Available through Google products and the Gemini API.",
    rating: 4.3,
    reviewCount: 3210,
    tags: ['generative', 'google', 'gemini', 'multimodal', 'assistant'],
    relatedIds: ['claude', 'chatgpt', 'perplexity'],
  },
  {
    id: 'slack',
    name: 'Slack',
    domain: 'slack.com',
    category: 'Productivity',
    categoryColor: 'bg-amber-50 text-amber-600',
    shortDescription: 'Team messaging and collaboration platform',
    description: 'Slack is a messaging platform for teams that organizes conversations into channels. Integrates with hundreds of apps and now includes AI-powered summaries and search.',
    rating: 4.5,
    reviewCount: 32100,
    tags: ['productivity', 'messaging', 'slack', 'collaboration', 'team'],
    relatedIds: ['notion-ai', 'google-workspace', 'zoom'],
  },
  {
    id: 'google-workspace',
    name: 'Google Workspace',
    domain: 'workspace.google.com',
    category: 'Productivity',
    categoryColor: 'bg-emerald-50 text-emerald-600',
    shortDescription: 'Collaborative docs, sheets, and email suite by Google',
    description: 'Google Workspace is a cloud-based productivity suite including Gmail, Docs, Sheets, Slides, and Drive — now enhanced with Gemini AI for writing and summarization.',
    rating: 4.6,
    reviewCount: 42300,
    tags: ['productivity', 'google', 'docs', 'sheets', 'email', 'drive', 'collaboration'],
    relatedIds: ['notion-ai', 'slack', 'zoom'],
  },
  {
    id: 'zoom',
    name: 'Zoom',
    domain: 'zoom.us',
    category: 'Productivity',
    categoryColor: 'bg-sky-50 text-sky-600',
    shortDescription: 'Video conferencing and meetings platform',
    description: 'Zoom is the leading video conferencing platform for meetings, webinars, and team collaboration. AI Companion features include automated summaries and action items.',
    rating: 4.5,
    reviewCount: 55400,
    tags: ['video', 'meetings', 'zoom', 'conferencing', 'collaboration', 'productivity'],
    relatedIds: ['slack', 'google-workspace', 'notion-ai'],
  },
  {
    id: 'granola',
    name: 'Granola',
    domain: 'granola.so',
    category: 'Productivity',
    categoryColor: 'bg-amber-50 text-amber-600',
    shortDescription: 'AI notepad that transcribes and enhances your meeting notes',
    description: 'Granola runs in the background during meetings, capturing audio and enriching your rough notes with AI. Integrates with Claude to extract action items and create follow-ups automatically.',
    rating: 4.7,
    reviewCount: 890,
    tags: ['productivity', 'meetings', 'notes', 'transcription', 'granola', 'ai'],
    relatedIds: ['zoom', 'claude', 'notion-ai'],
  },
  {
    id: 'monday',
    name: 'Monday.com',
    domain: 'monday.com',
    category: 'Project Management',
    categoryColor: 'bg-red-50 text-red-500',
    shortDescription: 'Work OS for project and workflow management',
    description: 'Monday.com is a flexible work management platform that lets teams plan, track, and manage any type of work. AI features help automate status updates and surface insights.',
    rating: 4.6,
    reviewCount: 12800,
    tags: ['project management', 'monday', 'workflow', 'tracking', 'productivity'],
    relatedIds: ['slack', 'google-workspace', 'notion-ai'],
  },
  {
    id: 'highspot',
    name: 'Highspot',
    domain: 'highspot.com',
    category: 'Sales',
    categoryColor: 'bg-orange-50 text-orange-500',
    shortDescription: 'Sales enablement platform for content and training',
    description: 'Highspot is a sales enablement platform that helps teams manage content, train reps, and guide buyers. AI-powered search and recommendations surface the right materials at the right time.',
    rating: 4.4,
    reviewCount: 2340,
    tags: ['sales', 'enablement', 'highspot', 'content', 'training'],
    relatedIds: ['slack', 'monday', 'google-workspace'],
  },
  {
    id: 'sendinblue',
    name: 'Sendinblue',
    domain: 'brevo.com',
    category: 'Marketing',
    categoryColor: 'bg-blue-50 text-blue-600',
    shortDescription: 'Email marketing and CRM platform',
    description: 'Sendinblue (now Brevo) is an all-in-one marketing platform for email campaigns, SMS, CRM, and automation. Used by product teams to manage outbound communications.',
    rating: 4.2,
    reviewCount: 4560,
    tags: ['marketing', 'email', 'sendinblue', 'brevo', 'crm', 'automation'],
    relatedIds: ['jasper', 'chatgpt', 'notion-ai'],
  },
]

export const PLAYBOOKS: PlaybookData[] = [
  {
    id: 'atlassian-engineering',
    title: 'Atlassian AI Engineering Playbook',
    author: 'Marcus Chen',
    authorRole: 'Staff Engineer',
    company: 'Atlassian',
    toolIds: ['claude', 'cursor', 'copilot', 'perplexity'],
    rating: 4.8,
    ratingCount: 134,
    description:
      "How Atlassian's engineering teams use AI to accelerate development — from code review with Claude to IDE assistance with Cursor and Copilot.",
    steps: [
      { toolId: 'cursor', action: 'Write and refactor code with AI pair programming' },
      { toolId: 'copilot', action: 'Get intelligent autocomplete across all repositories' },
      { toolId: 'claude', action: 'Review PRs, generate test cases, and debug issues' },
      { toolId: 'perplexity', action: 'Research solutions and find relevant documentation' },
    ],
  },
  {
    id: 'hubspot-sales',
    title: 'HubSpot Sales AI Stack',
    author: 'Sarah Martinez',
    authorRole: 'VP of Sales',
    company: 'HubSpot',
    toolIds: ['chatgpt', 'jasper', 'perplexity', 'notion-ai'],
    rating: 4.6,
    ratingCount: 89,
    description:
      "The AI stack HubSpot's sales team uses to qualify leads, personalize outreach, and close deals faster.",
    steps: [
      { toolId: 'perplexity', action: 'Research prospects and gather company intelligence' },
      { toolId: 'chatgpt', action: 'Draft personalized outreach emails and follow-ups' },
      { toolId: 'jasper', action: 'Create sales collateral, case studies, and decks' },
      { toolId: 'notion-ai', action: 'Summarize call notes and update CRM records' },
    ],
  },
  {
    id: 'figma-design',
    title: 'Figma Design Team AI Workflow',
    author: 'Priya Patel',
    authorRole: 'Design Lead',
    company: 'Figma',
    toolIds: ['midjourney', 'chatgpt', 'claude', 'notion-ai'],
    rating: 4.7,
    ratingCount: 211,
    description:
      "From ideation to handoff — how Figma's design team integrates AI to speed up research, generate concepts, and document design decisions.",
    steps: [
      { toolId: 'midjourney', action: 'Generate visual concepts and mood boards' },
      { toolId: 'chatgpt', action: 'Write UX copy and microcopy variants' },
      { toolId: 'claude', action: 'Analyze user research and synthesize insights' },
      { toolId: 'notion-ai', action: 'Document design decisions and create specs' },
    ],
  },
  {
    id: 'shopify-ecommerce',
    title: 'Shopify E-commerce AI Playbook',
    author: 'Jordan Kim',
    authorRole: 'Growth Manager',
    company: 'Shopify',
    toolIds: ['jasper', 'chatgpt', 'midjourney', 'cursor'],
    rating: 4.5,
    ratingCount: 67,
    description:
      'How Shopify merchants use AI to create product listings, generate ad creative, and automate customer support at scale.',
    steps: [
      { toolId: 'midjourney', action: 'Create product photography and ad visuals' },
      { toolId: 'jasper', action: 'Write product descriptions and email campaigns' },
      { toolId: 'chatgpt', action: 'Build customer FAQ and support templates' },
      { toolId: 'cursor', action: 'Customize Shopify theme and automation scripts' },
    ],
  },
  {
    id: 'vercel-frontend',
    title: 'Vercel Frontend Engineering Stack',
    author: 'Alex Thompson',
    authorRole: 'Frontend Engineer',
    company: 'Vercel',
    toolIds: ['cursor', 'claude', 'copilot', 'chatgpt'],
    rating: 4.9,
    ratingCount: 302,
    description:
      "The AI tools powering Vercel's frontend engineering team — from building Next.js apps to debugging performance issues.",
    steps: [
      { toolId: 'cursor', action: 'Build and refactor Next.js components with AI' },
      { toolId: 'copilot', action: 'Get AI completions while typing' },
      { toolId: 'claude', action: 'Debug complex issues and optimize performance' },
      { toolId: 'chatgpt', action: 'Generate documentation and API references' },
    ],
  },
  {
    id: 'content-marketing',
    title: 'Content Marketing AI Workflow',
    author: 'Emma Wilson',
    authorRole: 'Content Strategist',
    company: 'Buffer',
    toolIds: ['perplexity', 'claude', 'jasper', 'grammarly', 'midjourney'],
    rating: 4.4,
    ratingCount: 156,
    description:
      'A complete AI workflow for content teams — from research and ideation to writing, editing, and distributing at scale.',
    steps: [
      { toolId: 'perplexity', action: 'Research trending topics and gather sources' },
      { toolId: 'claude', action: 'Create outlines and first drafts' },
      { toolId: 'jasper', action: 'Generate ad copy and social media variants' },
      { toolId: 'grammarly', action: 'Edit and polish final copy' },
      { toolId: 'midjourney', action: 'Create custom blog header images' },
    ],
  },
  {
    id: 'startup-mvp',
    title: 'Startup MVP Builder Playbook',
    author: 'David Park',
    authorRole: 'Founder & CTO',
    company: 'YC S24',
    toolIds: ['claude', 'cursor', 'replit', 'chatgpt', 'perplexity'],
    rating: 4.8,
    ratingCount: 445,
    description:
      'How to go from idea to shipped MVP in days using AI. A no-nonsense playbook for founders who want to build fast.',
    steps: [
      { toolId: 'perplexity', action: 'Validate idea and research competitors' },
      { toolId: 'claude', action: 'Architect the product and write technical specs' },
      { toolId: 'cursor', action: 'Build the core product features' },
      { toolId: 'replit', action: 'Deploy and test in the browser instantly' },
      { toolId: 'chatgpt', action: 'Create landing page copy and pitch deck' },
    ],
  },
  {
    id: 'legal-research',
    title: 'Law Firm AI Research Playbook',
    author: 'Rebecca Torres',
    authorRole: 'Senior Associate',
    company: 'Davis Polk',
    toolIds: ['claude', 'perplexity', 'notion-ai', 'grammarly'],
    rating: 4.6,
    ratingCount: 78,
    description:
      'How modern law firms use AI for case research, document drafting, and due diligence — while keeping privileged information secure.',
    steps: [
      { toolId: 'perplexity', action: 'Research case law and regulatory precedents' },
      { toolId: 'claude', action: 'Summarize lengthy documents and identify key issues' },
      { toolId: 'grammarly', action: 'Review and polish legal memos and briefs' },
      { toolId: 'notion-ai', action: 'Organize research notes and timelines' },
    ],
  },
  {
    id: 'g2-ai-lab-management',
    title: 'Managing Five Simultaneous AI Lab Products',
    author: 'Miao C.',
    authorRole: 'Product Growth',
    company: 'G2',
    toolIds: ['claude', 'chatgpt', 'codeium', 'gemini', 'sendinblue', 'monday', 'slack', 'highspot', 'google-workspace', 'zoom', 'granola'],
    rating: 0,
    ratingCount: 0,
    description: 'Manage multiple AI lab products efficiently by using AI tools to scout, synthesize information, and stay organized across simultaneous projects and complex workflows.',
    problem: 'Managing five simultaneous AI lab products requires staying on top of a high volume of work and information. Using AI tools helps scout and synthesise information across projects to keep pace with the workload and complexity.',
    biggestWin: 'Granola records meetings and integrates directly with Claude. This allows extracting action items and creating projects automatically from meeting context, eliminating manual note processing and making the workflow significantly more efficient.',
    steps: [
      { toolId: 'claude', action: 'Analyze product requirements, synthesize competitive research, and draft strategic documents across all five AI lab products simultaneously.' },
      { toolId: 'chatgpt', action: 'Draft stakeholder communications, meeting agendas, and product update summaries.' },
      { toolId: 'codeium', action: 'Accelerate technical explorations and prototype code contributions across product initiatives.' },
      { toolId: 'gemini', action: 'Cross-reference research and get alternative AI perspectives on product positioning decisions.' },
      { toolId: 'sendinblue', action: 'Manage outbound communications and track campaign performance for product launches.' },
      { toolId: 'monday', action: 'Track tasks, milestones, and cross-product dependencies in one unified board.' },
      { toolId: 'slack', action: 'Coordinate real-time communication and async updates across product teams.' },
      { toolId: 'highspot', action: 'Organize and share product materials, demos, and sales enablement content.' },
      { toolId: 'google-workspace', action: 'Collaborate on live documents, spreadsheets, and slide decks with internal and external stakeholders.' },
      { toolId: 'zoom', action: 'Run structured product reviews, demos, and cross-functional stakeholder syncs.' },
      { toolId: 'granola', action: 'Record meetings and automatically extract action items — integrates directly with Claude to create projects from meeting context.' },
    ],
  },
]

export function searchProducts(query: string): ProductData[] {
  const q = query.toLowerCase().trim()
  if (!q) return PRODUCTS.slice(0, 5)
  return PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.tags.some((t) => t.includes(q)) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q),
  )
}

export function searchPlaybooks(query: string): PlaybookData[] {
  const q = query.toLowerCase().trim()
  if (!q) return PLAYBOOKS.slice(0, 5)
  return PLAYBOOKS.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.company.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.toolIds.some((id) => id.includes(q)) ||
      p.author.toLowerCase().includes(q),
  )
}

export function getProductById(id: string): ProductData | undefined {
  return PRODUCTS.find((p) => p.id === id)
}

export function getPlaybookById(id: string): PlaybookData | undefined {
  return PLAYBOOKS.find((p) => p.id === id)
}
