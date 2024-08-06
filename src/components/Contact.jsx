import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { ContactForm } from './ContactForm'

Contact.propTypes = {
    content: PropTypes.object.isRequired
}

export function Contact({content}) {
    return (
      <>      
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center"
        >
          <div className="text-3xl font-bold m-2 text-brand-1">
            {content.contact}
          </div>    
          <ContactForm formId="xqkwzqzj" content={content}/>
          <div 
            className="text-xl m-2 text-white"
          >
            {content.contactText}
          </div> 
        </motion.div>
      </>
    )
}