import PropTypes from 'prop-types'

Contact.propTypes = {
    content: PropTypes.object.isRequired
}

export function Contact({content}) {
    return (
      <div className="container flex flex-wrap justify-center">
        <div className="flex flex-col justify-center items-center">
          <div className="text-3xl font-bold m-2 text-brand-1">
            {content.contact}
          </div>
          <div 
            className="text-xl m-2">
            {content.contactText}
          </div>       
        </div>
      </div>
    )
}