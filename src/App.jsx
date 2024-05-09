import { useState } from 'react'
import './App.css'
import { EnglishContent } from './assets/content'
import { Heading } from './components/Heading'

function App() {
  const [content, setContent] = useState(EnglishContent)

  return (
    <>
      <Heading content={content} setContent={setContent} />      
    </>
  )
}

export default App
