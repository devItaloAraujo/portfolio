import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { ContactForm } from './ContactForm'
import SocialMedia from '../SocialMedia'

Contact.propTypes = {
    content: PropTypes.object.isRequired
}

export function Contact({content}) {
    return (
      <>      
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center bg-gradient-to-t from-brand-2 to-first-blue mt-[20px]"
        >
          <div className="text-3xl font-bold m-2 text-brand-1" id="contact">
            {content.contact}
          </div>    
          <ContactForm formId="xqkwzqzj" content={content}/>
          <div 
            className="text-xl m-2 text-first-blue"
          >
            <p>{content.contactText}</p>
          </div> 
          <div className='text-first-blue'>
          <SocialMedia />
          </div>
          <footer
            className="text-sm text-first-blue"
          >© 2024 Ítalo Araújo. Todos os direitos reservados.</footer>
        </motion.div>
      </>
    )
}