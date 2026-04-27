import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/layout/Navbar'
import Hero from './components/home/Hero'
import FeaturePanels from './components/home/FeaturePanels'
import TrendingGrid from './components/home/TrendingGrid'
import PlaybookBuilder from './pages/PlaybookBuilder'
import PlaybookView from './pages/PlaybookView'

function useTheme() {
  const [dark, setDark] = useState(true)
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])
  return { dark, toggle: () => setDark((d) => !d) }
}

function Homepage({ dark, onToggle, workflowTerm = 'Workflows' }: { dark: boolean; onToggle: () => void; workflowTerm?: string }) {
  return (
    <div className="min-h-screen bg-[var(--g2-bg)] transition-colors duration-200">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navbar dark={dark} onToggle={onToggle} workflowTerm={workflowTerm} />
      <main id="main-content">
        <Hero dark={dark} workflowTerm={workflowTerm} />
        <FeaturePanels workflowTerm={workflowTerm} />
        <TrendingGrid />
      </main>
    </div>
  )
}

export default function App() {
  const { dark, toggle } = useTheme()

  return (
    <BrowserRouter basename="/g2ai">
      <Routes>
        <Route path="/" element={<Homepage dark={dark} onToggle={toggle} />} />
        <Route path="/ai-workflows" element={<Homepage dark={dark} onToggle={toggle} workflowTerm="AI Workflows" />} />
        <Route path="/ai-blueprints" element={<Homepage dark={dark} onToggle={toggle} workflowTerm="AI Blueprints" />} />
        <Route path="/ai-stacks" element={<Homepage dark={dark} onToggle={toggle} workflowTerm="AI Stacks" />} />
        <Route path="/playbook/new" element={<PlaybookBuilder dark={dark} onToggle={toggle} />} />
        <Route path="/playbook/view/:id" element={<PlaybookView dark={dark} onToggle={toggle} />} />
      </Routes>
    </BrowserRouter>
  )
}
