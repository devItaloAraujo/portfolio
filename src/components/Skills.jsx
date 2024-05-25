import PropTypes from 'prop-types'
import { motion } from 'framer-motion';

Skills.propTypes = {
    content: PropTypes.object.isRequired
}

export function Skills({content}) {
    return (
      <div className="flex flex-col items-center">   
        <div className="text-3xl font-bold m-2 text-brand-1">
          {content.skills}
        </div>
        <div className="flex flex-wrap justify-center">
          {content.listOfSkills.map((skill, index) => (
            <motion.img 
              key={index} 
              src={skill.badgeLink} 
              alt={skill.name} 
              className="my-5 mx-10"
              initial={{ scale: 1.5 }}
              whileHover={{ scale: 1.7 }}
              transition={{ duration: 0.2 }}  
            />
          ))}
        </div>
      </div>
    )
}