import { useState } from 'react'
import './App.css'
import { PortugueseContent } from './assets/content'
import { Heading } from './components/Header/Heading'
import { AboutMe } from './components/Aboutme'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Skills } from './components/Skills'

function App() {
  const [content, setContent] = useState(PortugueseContent)

  return (
    <>
      <Heading content={content} setContent={setContent} />  
      <AboutMe content={content} />
      <Skills content={content} /> 
      <Projects content={content} />
      <Contact content={content} />
    </>
  )
}

export default App
