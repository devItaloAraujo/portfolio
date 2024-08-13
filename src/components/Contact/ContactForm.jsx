import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import axios from 'axios';


ContactForm.propTypes = {
    formId: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired,
};

export function ContactForm({ formId, content }) {

    const { formContent } = content;

    // ADICIONAR <<<------ WHASTSAPP
    const initialValues = {
        name: '',
        email: '',
        message: '',
        whatsapp: '', 
    };

    const validationSchema = Yup.object({
        name: Yup.string().required(formContent.nameRequired),
        email: Yup.string().email(formContent.invalidEmail).required(formContent.emailRequired),
        message: Yup.string().required(formContent.messageRequired),
        whatsapp: Yup.string().required(formContent.whatsappRequired),
    });

    const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
        setStatus(null);
        try {
            const response = await axios.post(`https://formspree.io/f/${formId}`, values, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            setStatus({ success: formContent.messageSuccess });
            resetForm();
        } catch (error) {
            setStatus({ error: formContent.messageProblem });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting, status }) => (
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col bg-second-blue rounded-lg items-center px-2 max-w-xl m-4"
                >
                    <Form className="w-full p-4">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700">Name</label>
                            <Field
                                type="text"
                                name="name"
                                id="name"
                                placeholder={formContent.placeHolderName}
                                className="w-full px-3 py-2 border rounded"
                            />
                            <ErrorMessage name="name" component="div" className="text-red-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <Field
                                type="email"
                                name="email"
                                id="email"
                                placeholder={formContent.placeHolderEmail}
                                className="w-full px-3 py-2 border rounded"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="whatsapp" className="block text-gray-700">WhatsApp</label>
                            <Field
                                type="text"
                                name="whatsapp"
                                id="whatsapp"
                                placeholder={formContent.placeHolderWhatsapp}
                                className="w-full px-3 py-2 border rounded"
                            />
                            <ErrorMessage name="whatsapp" component="div" className="text-red-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700">Message</label>
                            <Field
                                as="textarea"
                                name="message"
                                id="message"
                                placeholder={formContent.placeHolderMessage}
                                className="w-full px-3 py-2 border rounded"
                            />
                            <ErrorMessage name="message" component="div" className="text-red-500" />
                        </div>
                        {isSubmitting && <p className="text-blue-500">{formContent.sending}</p>}
                        {status && status.error && <p className="text-red-500">{status.error}</p>}
                        {status && status.success && <p className="text-green-500">{status.success}</p>}
                        <button type="submit" className={`w-full px-3 py-2 bg-blue-500 text-white rounded ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={isSubmitting}>
                            {formContent.send}
                        </button>
                    </Form>
                </motion.div>
            )}
        </Formik>
    );
}
