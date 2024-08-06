import { useState } from 'react'
import './App.css'
import { EnglishContent } from './assets/content'
import { Heading } from './components/Heading'
import { AboutMe } from './components/Aboutme'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Skills } from './components/Skills'

function App() {
  const [content, setContent] = useState(EnglishContent)

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
