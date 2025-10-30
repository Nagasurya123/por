import React, { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import { useForm, ValidationError } from '@formspree/react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(null)

  // Formspree integration
  // Replace the string below with your Formspree form ID (you provided "mwpwqrjd" in the snippet)
  const [formspreeState, submitToFormspree] = useForm('mwpwqrjd')

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    setErrors((err) => ({ ...err, [e.target.name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const eobj = validate()
    setErrors(eobj)
    if (Object.keys(eobj).length) return

    setSubmitting(true)
    setSuccess(null)
    try {
      // Submit to Formspree
      const res = await submitToFormspree(e)
      // formspree returns state updates via formspreeState; check succeeded flag
      if (formspreeState?.succeeded || (res && res.ok)) {
        setSuccess("✓ Message sent — thank you! I'll reply soon.")
        setForm({ name: '', email: '', message: '' })
      } else {
        setSuccess('❌ Submission failed. Try again or email bassanagasurya@gmail.com')
      }
    } catch (err) {
      console.error(err)
      setSuccess('❌ Submission failed. Try again or email bassanagasurya@gmail.com')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-14 md:py-16 lg:py-20 scroll-mt-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 items-start">
          {/* Contact info */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">Get in touch</h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">Feel free to drop a message — I typically reply within a few business days.</p>

            <ul className="space-y-3 sm:space-y-4 md:space-y-5">
              <li className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-2.5 bg-purple-100 rounded-md md:rounded-lg flex-shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-900">Email</p>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 break-all">bassanagasurya@gmail.com</p>
                </div>
              </li>

              <li className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-2.5 bg-purple-100 rounded-md md:rounded-lg flex-shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-900">Phone</p>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">(add your number)</p>
                </div>
              </li>

              <li className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-2.5 bg-purple-100 rounded-md md:rounded-lg flex-shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-900">Location</p>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">India / Remote</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-lg sm:rounded-xl md:rounded-2xl shadow-sm p-4 sm:p-6 md:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                <label className="flex flex-col">
                  <span className="text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Name</span>
                  <input 
                    name="name" 
                    value={form.name} 
                    onChange={handleChange} 
                    className={`px-3 sm:px-4 py-2 sm:py-2.5 border rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition text-sm md:text-base min-h-[44px] ${errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'}`}
                    placeholder="Your name"
                  />
                  {errors.name && <span className="text-xs text-red-600 mt-1.5">{errors.name}</span>}
                </label>

                <label className="flex flex-col">
                  <span className="text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Email</span>
                  <input 
                    id="email" 
                    name="email" 
                    type="email"
                    value={form.email} 
                    onChange={handleChange} 
                    className={`px-3 sm:px-4 py-2 sm:py-2.5 border rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition text-sm md:text-base min-h-[44px] ${errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'}`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <span className="text-xs text-red-600 mt-1.5">{errors.email}</span>}
                  <ValidationError prefix="Email" field="email" errors={formspreeState.errors} />
                </label>
              </div>

              <label className="flex flex-col mt-3 sm:mt-4 md:mt-6">
                <span className="text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Message</span>
                <textarea 
                  id="message" 
                  name="message" 
                  value={form.message} 
                  onChange={handleChange} 
                  rows={5}
                  className={`px-3 sm:px-4 py-2 sm:py-2.5 border rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition text-sm md:text-base resize-none min-h-[120px] ${errors.message ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'}`}
                  placeholder="Your message here..."
                />
                {errors.message && <span className="text-xs text-red-600 mt-1.5">{errors.message}</span>}
                <ValidationError prefix="Message" field="message" errors={formspreeState.errors} />
              </label>

              <div className="mt-4 sm:mt-6 md:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                <button 
                  type="submit" 
                  disabled={submitting || formspreeState.submitting} 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3 bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white font-semibold rounded-lg md:rounded-xl transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed text-sm md:text-base min-h-[44px] shadow-md hover:shadow-lg"
                >
                  {submitting || formspreeState.submitting ? 'Sending...' : 'Send message'}
                </button>

                {(formspreeState.succeeded || success) && (
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium">
                    ✓ {success || "Message sent — thank you!"}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact