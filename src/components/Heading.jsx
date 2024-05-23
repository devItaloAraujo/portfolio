import { PortugueseContent, EnglishContent } from '../assets/content'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

Heading.propTypes = {
    content: PropTypes.object.isRequired,
    setContent: PropTypes.func.isRequired
}

export function Heading ({content, setContent}) {

    return (
      <motion.div
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
        className="container flex items-center justify-between"
        >
        <div className="logo text-xl font-bold m-2 flex-item self-start">
          {content.heading}
        </div>
        <div className="">
          <button onClick={() => 
            setContent(PortugueseContent) }>
            Português
          </button>
          <button onClick={() =>          
            setContent(EnglishContent) }>
            English
          </button>
        </div>
      </motion.div>
    )
}