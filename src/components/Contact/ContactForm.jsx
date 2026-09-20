import PropTypes from 'prop-types'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { motion } from 'framer-motion'
import { User, Mail, Phone, MessageSquare, Send } from 'lucide-react'

ContactForm.propTypes = {
  formId: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired
}

const fieldClass = 'w-full px-4 py-3 bg-cyan-50 border border-teal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-300 transition-all'
const labelClass = 'flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2'
const errorClass = 'text-red-500 text-sm mt-1'

export function ContactForm({ formId, content }) {
  const { formContent } = content

  const initialValues = { name: '', email: '', message: '', phone: '' }

  const validationSchema = Yup.object({
    name: Yup.string().required(formContent.nameRequired),
    email: Yup.string().email(formContent.invalidEmail).required(formContent.emailRequired),
    message: Yup.string().required(formContent.messageRequired),
    phone: Yup.string().required(formContent.phoneRequired)
  })

  const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
    setStatus(null)
    try {
      await axios.post(`https://formspree.io/f/${formId}`, values, {
        headers: { 'Content-Type': 'application/json' }
      })
      setStatus({ success: formContent.messageSuccess })
      resetForm()
    } catch {
      setStatus({ error: formContent.messageProblem })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ isSubmitting, status }) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl mx-auto"
        >
          <Form className="bg-teal-50/90 backdrop-blur-sm rounded-2xl border border-teal-200/50 p-8 shadow-sm">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className={labelClass}>
                  <User className="w-4 h-4" />
                  {formContent.placeHolderName}
                </label>
                <Field type="text" name="name" id="name" placeholder={formContent.placeHolderName} className={fieldClass} />
                <ErrorMessage name="name" component="div" className={errorClass} />
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  <Mail className="w-4 h-4" />
                  {formContent.placeHolderEmail}
                </label>
                <Field type="email" name="email" id="email" placeholder={formContent.placeHolderEmail} className={fieldClass} />
                <ErrorMessage name="email" component="div" className={errorClass} />
              </div>

              <div>
                <label htmlFor="phone" className={labelClass}>
                  <Phone className="w-4 h-4" />
                  {formContent.placeHolderPhone}
                </label>
                <Field type="text" name="phone" id="phone" placeholder={formContent.placeHolderPhone} className={fieldClass} />
                <ErrorMessage name="phone" component="div" className={errorClass} />
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  <MessageSquare className="w-4 h-4" />
                  {formContent.placeHolderMessage}
                </label>
                <Field as="textarea" name="message" id="message" rows="5" placeholder={formContent.placeHolderMessage} className={`${fieldClass} resize-none`} />
                <ErrorMessage name="message" component="div" className={errorClass} />
              </div>

              {isSubmitting &&
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-4 bg-blue-50 border border-blue-200 rounded-xl text-blue-700"
                >
                  {formContent.sending}
                </motion.div>}

              {status && status.error &&
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700"
                >
                  {status.error}
                </motion.div>}

              {status && status.success &&
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700"
                >
                  {status.success}
                </motion.div>}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full px-6 py-4 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/25 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <Send className="w-5 h-5" />
                {formContent.send}
              </motion.button>
            </div>
          </Form>
        </motion.div>
      )}
    </Formik>
  )
}
