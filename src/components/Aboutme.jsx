import PropTypes from 'prop-types'

AboutMe.propTypes = {
    content: PropTypes.object.isRequired
}

export function AboutMe({content}) {
    return (
      <div className="container flex flex-col">
        <div className="container flex items-center w-[300px] h-[300px] overflow-hidden rounded-lg">
            <img src="https://i.imgur.com/kYXtAIy.jpeg" alt="profile-pic" />
        </div>   
        <div className="text-3xl font-bold m-2">
          {content.aboutMe}
        </div>
        <div className="text-xl m-2">
          {content.aboutMeText}
        </div>    
      </div>
    )
}