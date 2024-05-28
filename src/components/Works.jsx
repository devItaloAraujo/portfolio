import PropTypes from 'prop-types'
import { WorkCard } from './WorkCard'
import { HorizontalDivider } from './Horizontal'
import { motion } from 'framer-motion'

Works.propTypes = {
    content: PropTypes.object.isRequired
}

export function Works({content}) {
    return (
      <>
        <div
          className="flex flex-col items-center">
          <motion.div
            whileHover={{ scale: 1.2 }} 
            className="text-3xl font-bold m-2 text-brand-1">
            {content.works}
          </motion.div>
          <div className="flex flex-wrap justify-center">
          {content.listOfWorks.map((work, index) => (            
            <WorkCard key={index} work={work} />
          ))}
          </div>
        </div>
        <HorizontalDivider />
      </>
    )
}