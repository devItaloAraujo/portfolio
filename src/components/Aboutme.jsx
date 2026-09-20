import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { Code, Briefcase, GraduationCap } from 'lucide-react'

AboutMe.propTypes = {
  content: PropTypes.object.isRequired
}

export function AboutMe({ content }) {
  return (
    <section id="about" className="relative py-12 md:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-100/30 via-cyan-100/20 to-blue-100/30" />
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center lg:items-start"
          >
            <div className="relative mb-8 lg:ml-8">
              <motion.div
                animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-1 to-brand-2 rounded-full blur-2xl opacity-30 animate-pulse" />
                <img
                  src="/Perfil.PNG"
                  alt="Profile"
                  className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full shadow-2xl border-4 border-white object-cover"
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-center lg:text-left"
            >
              <div
                dangerouslySetInnerHTML={{ __html: content.aboutMe }}
                className="text-4xl md:text-5xl font-bold mb-6 [&>p]:bg-gradient-to-r [&>p]:from-slate-900 [&>p]:via-slate-800 [&>p]:to-slate-900 [&>p]:bg-clip-text [&>p]:text-transparent [&>p]:mb-2"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div
              dangerouslySetInnerHTML={{ __html: content.aboutMeText }}
              className="text-lg md:text-xl text-slate-700 leading-relaxed [&>p]:mb-4 [&>div>p]:mb-4"
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-4 bg-cyan-50/80 backdrop-blur-sm rounded-2xl border border-teal-200/50 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <Code className="w-8 h-8 text-teal-700 mb-2" />
                <h3 className="font-semibold text-slate-900">{content.badgeFullStack}</h3>
                <p className="text-sm text-slate-600">{content.badgeFullStackDesc}</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-4 bg-cyan-50/80 backdrop-blur-sm rounded-2xl border border-teal-200/50 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <Briefcase className="w-8 h-8 text-teal-700 mb-2" />
                <h3 className="font-semibold text-slate-900">{content.badgeEngineer}</h3>
                <p className="text-sm text-slate-600">{content.badgeEngineerDesc}</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-4 bg-cyan-50/80 backdrop-blur-sm rounded-2xl border border-teal-200/50 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <GraduationCap className="w-8 h-8 text-teal-700 mb-2" />
                <h3 className="font-semibold text-slate-900">{content.badgeLearner}</h3>
                <p className="text-sm text-slate-600">{content.badgeLearnerDesc}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
