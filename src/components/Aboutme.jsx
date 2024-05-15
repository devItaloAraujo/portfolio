import PropTypes from 'prop-types'

AboutMe.propTypes = {
    content: PropTypes.object.isRequired
}

export function AboutMe({content}) {
    return (
      <div className="container flex flex-wrap items-center">
        <div className="flex items-center w-[300px] h-[300px] overflow-hidden rounded-lg">
            <img src="https://i.imgur.com/kYXtAIy.jpeg" alt="profile-pic" />
        </div> 
        <div className="flex flex-col w-[300px] justify-center items-center">
          <div className="text-3xl font-bold m-2 text-brand-1">
              {content.aboutMe}
          </div>
          <div className="text-xl m-2">
          {content.aboutMeText}
        </div>       
        </div>
          
      </div>
    )
}