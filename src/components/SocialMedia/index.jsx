import { motion } from 'framer-motion'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { IoIosMail } from 'react-icons/io'
import { IoLogoWhatsapp } from 'react-icons/io5'

const iconLink = 'w-12 h-12 rounded-xl bg-teal-100 hover:bg-teal-600 text-teal-700 hover:text-white flex items-center justify-center transition-all duration-300 hover:shadow-lg'

const SocialMedia = () => {
  return (
    <div className="flex items-center gap-4">
      <motion.a
        href="https://www.linkedin.com/in/italo-jean-araujo-de-souza/"
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.95 }}
        className={iconLink}
      >
        <AiOutlineLinkedin size={'1.5em'} />
      </motion.a>
      <motion.a
        href="mailto: italojsouza@gmail.com?subject=Contato pelo site de Desenvolvedor"
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.95 }}
        className={iconLink}
      >
        <IoIosMail size={'1.5em'} />
      </motion.a>
      <motion.a
        href="https://api.whatsapp.com/send?phone=5531995385299&text=Contato%20Pelo%20Site"
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.95 }}
        className={iconLink}
      >
        <IoLogoWhatsapp size={'1.5em'} />
      </motion.a>
    </div>
  )
}

export default SocialMedia
