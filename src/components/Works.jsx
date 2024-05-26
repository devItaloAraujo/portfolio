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
        <motion.div
          whileHover={{ scale: 1.05 }} 
          className="flex flex-col items-center">
          <div className="text-3xl font-bold m-2 text-brand-1">
            {content.works}
          </div>
          {content.listOfWorks.map((work, index) => (
            <div key={index} className="flex">
              <WorkCard work={work} />
            </div>
          ))}
        </motion.div>
        <HorizontalDivider />
      </>
    )
}