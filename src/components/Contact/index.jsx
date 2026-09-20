import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { MessageCircle, Mail, Phone } from 'lucide-react'
import { ContactForm } from './ContactForm'
import SocialMedia from '../SocialMedia'

Contact.propTypes = {
  content: PropTypes.object.isRequired
}

export function Contact({ content }) {
  return (
    <section id="contact" className="py-12 md:py-16 bg-gradient-to-b from-cyan-50 via-teal-50 to-blue-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-teal-100/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <MessageCircle className="w-5 h-5 text-slate-800" />
            <span className="text-sm font-semibold text-slate-800 uppercase tracking-wider">{content.getInTouch}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{content.contact}</h2>
          {content.contactText &&
            <div
              dangerouslySetInnerHTML={{ __html: content.contactText }}
              className="text-lg text-slate-600 max-w-2xl mx-auto"
            />}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <ContactForm formId="mblrybvn" content={content} />
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-teal-50/90 backdrop-blur-sm rounded-2xl border border-teal-200/50 p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4">{content.connectWithMe}</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-700">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-teal-700" />
                  </div>
                  <a
                    href="mailto:italojsouza@gmail.com?subject=Contato pelo site de Desenvolvedor"
                    className="hover:text-slate-900 transition-colors"
                  >
                    italojsouza@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-teal-700" />
                  </div>
                  <a
                    href="https://api.whatsapp.com/send?phone=5531995385299&text=Contato%20Pelo%20Site"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-slate-900 transition-colors"
                  >
                    +55 (31) 99538-5299
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-teal-50/90 backdrop-blur-sm rounded-2xl border border-teal-200/50 p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4">{content.socialMedia}</h3>
              <div className="flex justify-center">
                <SocialMedia />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center pt-8 border-t border-slate-200/50"
        >
          <p className="text-sm text-slate-500">© 2024 Ítalo Tecnologia™. Todos os direitos reservados.</p>
        </motion.footer>
      </div>
    </section>
  )
}
