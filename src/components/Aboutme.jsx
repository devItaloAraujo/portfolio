import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { HorizontalDivider } from './Horizontal'

AboutMe.propTypes = {
    content: PropTypes.object.isRequired
}

export function AboutMe({content}) {
    return (
      <>
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1 }}
          className="flex flex-wrap justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="flex items-center w-[300px] h-[300px] overflow-hidden rounded-lg"
          >
            <img src="https://i.imgur.com/kYXtAIy.jpeg" alt="profile-pic" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col justify-center items-center"
          >
            <div className="text-3xl font-bold m-2 text-brand-1">
              {content.aboutMe}
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: content.aboutMeText }}
              className="text-xl m-2 text-white text-opacity-75">
            </div>
          </motion.div>
        </motion.div>
        <HorizontalDivider />
      </>
      
    )
}