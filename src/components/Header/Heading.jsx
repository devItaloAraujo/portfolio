import { PortugueseContent, EnglishContent } from '../../assets/content'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

Heading.propTypes = {
    content: PropTypes.object.isRequired,
    setContent: PropTypes.func.isRequired
}

const linkToLogo = '/logoeditada.png'

export function Heading ({content, setContent}) {

    return (
      <div
        className="bg-gradient-to-t from-brand-2 to-first-blue flex items-center justify-between"
      >
        <motion.img
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse"}}
          whileHover={{ scale: 1.05 }}
          className="sm:w-[200px] sm:h-[120px] w-[130px] h-[90px] overflow-hidden rounded-3xl m-5"
          src = {linkToLogo}>
        </motion.img>
        <div className="flex flex-col text-white text-opacity-75">
          <button 
            className="mr-5"
            onClick={() => setContent(PortugueseContent)}>
            Português
          </button>
          <button 
            className="mr-5"
            onClick={() => setContent(EnglishContent)}>
            English
          </button>
        </div>
      </div>
    )
}