import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

Skills.propTypes = {
  content: PropTypes.object.isRequired
}

export function Skills({ content }) {
  return (
    <section id="skills" className="py-12 md:py-16 bg-gradient-to-b from-cyan-50 to-teal-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-teal-100/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-slate-800" />
            <span className="text-sm font-semibold text-slate-800 uppercase tracking-wider">{content.skillsBadge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{content.skills}</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{content.skillsDescription}</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {content.listOfSkills.map((skill) => (
            <motion.a
              key={skill.id}
              href={`https://www.google.com/search?q=${encodeURIComponent(skill.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              variants={{ hidden: { opacity: 0, scale: 0.8, y: 20 }, visible: { opacity: 1, scale: 1, y: 0 } }}
              whileHover={{ y: -8, scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
              className="group relative p-4 bg-teal-50/90 backdrop-blur-sm rounded-2xl border border-teal-200/50 shadow-sm hover:shadow-xl hover:shadow-teal-200/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex justify-center">
                <img src={skill.badgeLink} alt={skill.name} className="h-8 w-auto object-contain" />
              </div>
              <p className="text-xs font-medium text-slate-700 text-center mt-2 group-hover:text-slate-900 transition-colors">
                {skill.name}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
