import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { HorizontalDivider } from './Horizontal'

AboutMe.propTypes = {
    content: PropTypes.object.isRequired
}

const linkDaFoto = '/profilepicAvatarAi.png'

export function AboutMe({content}) {
    return (
      <>
        <div         
          className="flex flex-wrap justify-center bg-gradient-to-t from-first-blue to-brand-2"
        >
          <motion.img
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1  }}
            whileHover={{ scale: 1.05 }}
            className="flex mb-[20px] mt-[30px] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] overflow-hidden rounded-full shadow-2xl border-4 border-solid border-[#FFFFF0] "
            src={linkDaFoto}
         >
          </motion.img>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col justify-center items-center"
          >
            <div 
              dangerouslySetInnerHTML={{ __html: content.aboutMe }}
              className="text-3xl font-bold m-2 text-brand-1">
            </div>
          </motion.div>
          <div
              dangerouslySetInnerHTML={{ __html: content.aboutMeText }}
              className="text-xl m-2 text-white text-opacity-75">
          </div>
        </div>
        <HorizontalDivider />
      </>
      
    )
}