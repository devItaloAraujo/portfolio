import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { FolderKanban } from 'lucide-react'
import { WorkCard } from '../WorkCard'

Projects.propTypes = {
  content: PropTypes.object.isRequired
}

// Which works to show, in order. The recipe app stays in the data but off the page.
const workShownOrder = [0, 1, 2, 3, 4, 5, 6]

export function Projects({ content }) {
  return (
    <section id="projects" className="py-12 md:py-16 bg-gradient-to-b from-teal-50 to-cyan-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-100/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <FolderKanban className="w-5 h-5 text-slate-800" />
            <span className="text-sm font-semibold text-slate-800 uppercase tracking-wider">{content.worksBadge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{content.works}</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{content.worksDescription}</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {workShownOrder.map((id) => {
            const work = content.listOfWorks[id]
            if (!work) return null
            return (
              <motion.div
                key={work.id}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              >
                <WorkCard work={work} content={content} />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
