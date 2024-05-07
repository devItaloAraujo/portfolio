import { useState } from 'react'
import './App.css'
import { PortugueseContent, EnglishContent } from './assets/content'

function App() {
  const [content, setContent] = useState(EnglishContent)

  return (
    <>
      <h1>
        {content.heading}
      </h1>
      <div className="card">
        <button onClick={() => 
          setContent(PortugueseContent) }>
          Português
        </button>
        <button onClick={() =>          
          setContent(EnglishContent) }>
          English
        </button>
      </div>
    </>
  )
}

export default App
