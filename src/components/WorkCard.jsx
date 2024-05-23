import PropTypes from 'prop-types'

WorkCard.propTypes = {
    work: PropTypes.object.isRequired
}

export function WorkCard({work}) {
    return (
      <div className="container flex flex-col bg-second-blue rounded-lg items-center px-2">   
        <div className="text-xl font-bold m-2 text-brand-2">
          {work.title}
        </div>
        <div className="inline-block flex items-center overflow-hidden rounded-lg">
            <img src={work.src} alt={work.title+"-pic"} />
        </div> 
        <div className="text-l m-2">
          {work.description}
        </div>    
      </div>
    )
}