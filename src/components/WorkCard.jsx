import PropTypes from 'prop-types'
import { filterAndChangeBadgeStyle } from '../assets/content'
import { motion } from 'framer-motion'
import { VscGithub } from 'react-icons/vsc'
import { TbWorld } from "react-icons/tb";

WorkCard.propTypes = {
    work: PropTypes.object.isRequired
}

export function WorkCard({work}) {
    return (
      <div
        className="flex flex-col bg-second-blue rounded-lg items-center px-2 max-w-full mx-4"
      >   
        <div className="text-xl font-bold m-2 text-brand-2">
          {work.title}
        </div>
        <div className="inline-block flex items-center overflow-hidden rounded-lg">
            <img src={work.src} alt={work.title+"-pic"} className='max-h-[350px] sm:max-h-[500px]'/>
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
        {work.links.github &&
        <button
          className="bg-first-blue text-white rounded-lg p-2 m-2 w-[300px]"
        >
          <a
            href={work.links.github}
            target="_blank"
            rel="noreferrer"
            className='flex justify-around items-center'
          >
            GitHub
           <VscGithub size={'2em'} />
          </a>
        </button>
        }
        {work.links.site &&
        <button
          className="bg-first-blue text-white rounded-lg p-2 m-2 w-[300px]"
        >
          <a
            href={work.links.site}
            target="_blank"
            rel="noreferrer"
            className='flex justify-around items-center'
          >
            WebSite
            <TbWorld size={'2em'}/>
          </a>
        </button>
        }
      </div>
    )
}