import { useState } from 'react'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { PortugueseContent, EnglishContent } from '../../assets/content'
import { cn } from '../../lib/cn'

Header.propTypes = {
  content: PropTypes.object.isRequired,
  setContent: PropTypes.func.isRequired
}

export function Header({ content, setContent }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const isEnglish = content.heading === EnglishContent.heading

  const switchLanguage = (english) => {
    setContent(english ? EnglishContent : PortugueseContent)
  }

  return (
    <header className="sticky top-0 z-50 bg-teal-50/95 backdrop-blur-md border-b border-teal-200/50 shadow-sm">
      <div className="container mx-auto px-4 py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-24 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
              <img src="/logoeditada.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 tracking-tight">{content.heading}</h1>
              <p className="text-xs text-slate-500 font-medium">{content.subtitle}</p>
            </div>
          </motion.div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">{content.navAbout}</a>
            <a href="#projects" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">{content.navProjects}</a>
            <a href="#skills" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">{content.navSkills}</a>
            <a href="#contact" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">{content.navContact}</a>
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => switchLanguage(false)}
              className={cn(
                'px-4 py-2 rounded-xl font-medium transition-all duration-200',
                isEnglish ? 'bg-teal-100 text-teal-700 hover:bg-teal-200' : 'bg-teal-600 text-white shadow-lg'
              )}
            >
              PT
            </button>
            <button
              onClick={() => switchLanguage(true)}
              className={cn(
                'px-4 py-2 rounded-xl font-medium transition-all duration-200',
                isEnglish ? 'bg-teal-600 text-white shadow-lg' : 'bg-teal-100 text-teal-700 hover:bg-teal-200'
              )}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 hover:bg-teal-100 rounded-xl transition-colors"
          >
            {menuOpen
              ? <X className="w-6 h-6 text-slate-700" />
              : <Menu className="w-6 h-6 text-slate-700" />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen &&
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-slate-200/50"
            >
              <nav className="flex flex-col gap-4 mt-4">
                <a href="#about" onClick={() => setMenuOpen(false)} className="text-slate-700 hover:text-slate-900 font-medium transition-colors">{content.navAbout}</a>
                <a href="#projects" onClick={() => setMenuOpen(false)} className="text-slate-700 hover:text-slate-900 font-medium transition-colors">{content.navProjects}</a>
                <a href="#skills" onClick={() => setMenuOpen(false)} className="text-slate-700 hover:text-slate-900 font-medium transition-colors">{content.navSkills}</a>
                <a href="#contact" onClick={() => setMenuOpen(false)} className="text-slate-700 hover:text-slate-900 font-medium transition-colors">{content.navContact}</a>
              </nav>
              <div className="flex items-center gap-2 mt-4">
                <button
                  onClick={() => switchLanguage(false)}
                  className={cn(
                    'px-4 py-2 rounded-xl font-medium transition-all duration-200 flex-1',
                    isEnglish ? 'bg-teal-100 text-teal-700' : 'bg-slate-900 text-white shadow-lg'
                  )}
                >
                  Português
                </button>
                <button
                  onClick={() => switchLanguage(true)}
                  className={cn(
                    'px-4 py-2 rounded-xl font-medium transition-all duration-200 flex-1',
                    isEnglish ? 'bg-slate-900 text-white shadow-lg' : 'bg-teal-100 text-teal-700'
                  )}
                >
                  English
                </button>
              </div>
            </motion.div>}
        </AnimatePresence>
      </div>
    </header>
  )
}
