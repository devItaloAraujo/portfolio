import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

AboutMe.propTypes = {
    content: PropTypes.object.isRequired
}

export function AboutMe({content}) {
    return (
      <motion.div
      animate={{ scale: [1, 1.25, 1] }}
      transition={{ times: [0, 0.5, 1], duration: 1 }}
      className="flex flex-wrap justify-center"
      >
        <div className="flex items-center w-[300px] h-[300px] overflow-hidden rounded-lg">
          <img src="https://i.imgur.com/kYXtAIy.jpeg" alt="profile-pic" />
        </div> 
        <div className="flex flex-col justify-center items-center">
          <div className="text-3xl font-bold m-2 text-brand-1">
            {content.aboutMe}
          </div>
          <div 
            dangerouslySetInnerHTML={{__html: content.aboutMeText}}
            className="text-xl m-2">
          </div>       
        </div>
      </motion.div>
    )
}