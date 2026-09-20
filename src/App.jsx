import { useState } from 'react'
import { PortugueseContent } from './assets/content'
import { Header } from './components/Header'
import { AboutMe } from './components/Aboutme'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'

function App() {
  const [content, setContent] = useState(PortugueseContent)

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-cyan-50 to-blue-50">
      <Header content={content} setContent={setContent} />
      <AboutMe content={content} />
      <Projects content={content} />
      <Skills content={content} />
      <Contact content={content} />
    </div>
  )
}

export default App
