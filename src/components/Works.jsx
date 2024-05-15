import PropTypes from 'prop-types'
import { WorkCard } from './WorkCard'

Works.propTypes = {
    content: PropTypes.object.isRequired
}

export function Works({content}) {
    return (
      <div className=" flex flex-col">   
        <div className="text-3xl font-bold m-2 text-brand-1">
          {content.works}
        </div>
        {content.listOfWorks.map((work, index) => (
          <div key={index} className="flex">
            <WorkCard work={work} />
          </div>
        ))}
      </div>
    )
}