import PropTypes from 'prop-types'
import { filterAndChangeBadgeStyle } from '../assets/content'
import { motion } from 'framer-motion'

WorkCard.propTypes = {
    work: PropTypes.object.isRequired
}

export function WorkCard({work}) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex flex-col bg-second-blue rounded-lg items-center px-2 max-w-xl m-4"
      >   
        <div className="text-xl font-bold m-2 text-brand-2">
          {work.title}
        </div>
        <div className="inline-block flex items-center overflow-hidden rounded-lg">
            <img src={work.src} alt={work.title+"-pic"} />
        </div> 
        <div className="text-l m-2 text-white text-opacity-75">
          {work.description}
        </div>
        <div
          className="flex flex-wrap justify-center" 
        >
        { filterAndChangeBadgeStyle(work.skills).map((skill) => (
            <img key={skill.id} src={skill.badgeLink} alt={skill.name} className="m-1" />
        ))}        
        </div>    
      </motion.div>
    )
}