import { useState } from 'react'
import './App.css'
import { EnglishContent } from './assets/content'
import { Heading } from './components/Heading'
import { HorizontalDivider } from './components/Horizontal'
import { AboutMe } from './components/Aboutme'

function App() {
  const [content, setContent] = useState(EnglishContent)

  return (
    <>
      <Heading content={content} setContent={setContent} />  
      <HorizontalDivider />
      <AboutMe content={content} />    
    </>
  )
}

export default App
