import { PortugueseContent, EnglishContent } from '../assets/content'
import PropTypes from 'prop-types'

Heading.propTypes = {
    content: PropTypes.object.isRequired,
    setContent: PropTypes.func.isRequired
}

export function Heading ({content, setContent}) {

    return (
        <>
        <div>
          {content.heading}
        </div>
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