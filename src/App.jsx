import { useState } from 'react'
import './App.css'
import { EnglishContent } from './assets/content'
import { Heading } from './components/Heading'
import { HorizontalDivider } from './components/Horizontal'
import { AboutMe } from './components/Aboutme'
import { Works } from './components/Works'
import { Contact } from './components/Contact'
import { Skills } from './components/Skills'

function App() {
  const [content, setContent] = useState(EnglishContent)

  return (
    <>
      <Heading content={content} setContent={setContent} />  
      <AboutMe content={content} />
      <Skills content={content} /> 
      <Works content={content} />
      <Contact content={content} />
    </>
  )
}

export default App
