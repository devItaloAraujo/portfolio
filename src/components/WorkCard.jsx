import PropTypes from 'prop-types'

WorkCard.propTypes = {
    work: PropTypes.object.isRequired
}

export function WorkCard({work}) {
    return (
      <div className="container flex flex-col bg-gray-700 rounded-lg">   
        <div className="text-xl font-bold m-2 text-brand-2">
          {work.title}
        </div>
        <div className="flex items-center w-[300px] h-[300px] overflow-hidden rounded-lg">
            <img src={work.src} alt={work.title+"-pic"} />
        </div> 
        <div className="text-l m-2">
          {work.description}
        </div>    
      </div>
    )
}