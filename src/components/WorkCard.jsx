import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { VscGithub } from 'react-icons/vsc'
import { TbWorld } from 'react-icons/tb'
import { filterAndChangeBadgeStyle } from '../assets/content'

WorkCard.propTypes = {
  work: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired
}

const primaryButton = 'flex-1 px-6 py-3.5 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/25 flex items-center justify-center gap-2'
const secondaryButton = 'flex-1 px-6 py-3.5 bg-teal-50 border-2 border-teal-600 hover:bg-teal-600 hover:text-white text-teal-700 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2'

export function WorkCard({ work, content }) {
  const liveWebsite = content?.liveWebsite || 'Live Website'
  // Closed-source work has no repo, so the live site takes the primary slot on its own.
  const siteOnly = !work.links.github

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      className="group bg-cyan-50/90 backdrop-blur-sm rounded-2xl border border-teal-200/50 shadow-sm hover:shadow-xl hover:shadow-teal-200/50 transition-all duration-300 overflow-hidden h-full flex flex-col"
    >
      <div className="relative overflow-hidden bg-teal-100">
        <motion.img
          src={work.src}
          alt={work.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          whileHover={{ scale: 1.1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors">
          {work.title}
        </h3>
        <p className="text-slate-600 mb-6 flex-1 leading-relaxed">{work.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {filterAndChangeBadgeStyle(work.skills).slice(0, 4).map((skill) => (
            <img key={skill.id} src={skill.badgeLink} alt={skill.name} className="h-5 w-auto object-contain" />
          ))}
          {work.skills.length > 4 &&
            <span className="text-xs font-medium text-slate-500 px-2 py-1 bg-teal-100 rounded-lg">
              +{work.skills.length - 4} more
            </span>}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
          {work.links.github &&
            <motion.a
              href={work.links.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={primaryButton}
            >
              <VscGithub className="w-5 h-5" />
              GitHub
            </motion.a>}
          {work.links.site &&
            <motion.a
              href={work.links.site}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={siteOnly ? `w-full ${primaryButton}` : secondaryButton}
            >
              <TbWorld className="w-5 h-5" />
              {liveWebsite}
            </motion.a>}
        </div>
      </div>
    </motion.div>
  )
}
