import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

Contact.propTypes = {
    content: PropTypes.object.isRequired
}

export function Contact({content}) {
    return (
      <>      
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="container flex flex-wrap justify-center"
        >
          <div className="flex flex-col justify-center items-center">
            <div className="text-3xl font-bold m-2 text-brand-1">
              {content.contact}
            </div>
            <div 
              className="text-xl m-2">
              {content.contactText}
            </div>       
          </div>
        </motion.div>
      </>
    )
}