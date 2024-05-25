import { PortugueseContent, EnglishContent } from '../assets/content'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

Heading.propTypes = {
    content: PropTypes.object.isRequired,
    setContent: PropTypes.func.isRequired
}

export function Heading ({content, setContent}) {

    return (
      <div
        className="container flex items-center justify-between"
        >
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }} 
          className="logo text-xl font-bold m-2 flex-item self-start">
          {content.heading}
        </motion.div>
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
      </div>
    )
}