import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const initialState = {
  full_name: '',
  company: '',
  email: '',
  phone: '',
  role_title: '',
  hiring_need: 'Single hire',
  candidates_needed: '',
  preferred_date: '',
  preferred_time: '',
  timezone: '',
  message: '',
}

export default function BookingForm() {
  const [form, setForm] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)

    // Prepare payload: cast candidates_needed to number if provided
    const payload = { ...form }
    if (payload.candidates_needed === '') delete payload.candidates_needed

    try {
      const res = await fetch(`${backend}/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const d = await res.json().catch(() => ({}))
        throw new Error(d.detail || 'Failed to submit booking')
      }

      const data = await res.json()
      setSuccess('Thanks! Your request has been received. We will reach out shortly to confirm your time.')
      setForm(initialState)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="book" className="py-10">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 overflow-hidden"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 className="text-2xl font-bold text-gray-900" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Book a discovery call
          </motion.h2>
          <motion.p className="text-gray-600 mt-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            Tell us about your hiring needs. We'll confirm within 24 hours.
          </motion.p>

          <AnimatePresence>
            {success && (
              <motion.div
                key="success"
                className="mt-4 p-3 rounded bg-green-50 text-green-700 border border-green-200"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
              >
                {success}
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {error && (
              <motion.div
                key="error"
                className="mt-4 p-3 rounded bg-red-50 text-red-700 border border-red-200"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full name</label>
              <input required name="full_name" value={form.full_name} onChange={handleChange} className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Company</label>
              <input required name="company" value={form.company} onChange={handleChange} className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Acme Inc." />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Business email</label>
              <input required type="email" name="email" value={form.email} onChange={handleChange} className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500" placeholder="you@company.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500" placeholder="(+1) 555 000 0000" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Role or function</label>
              <input required name="role_title" value={form.role_title} onChange={handleChange} className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500" placeholder="e.g., Senior SDR, Marketing Manager" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Hiring need</label>
              <select name="hiring_need" value={form.hiring_need} onChange={handleChange} className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                <option>Single hire</option>
                <option>Multiple hires</option>
                <option>Ongoing hiring</option>
                <option>Exploratory call</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Approx. number of hires</label>
              <input type="number" min="1" name="candidates_needed" value={form.candidates_needed} onChange={handleChange} className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500" placeholder="e.g., 3" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Preferred date</label>
              <input type="date" name="preferred_date" value={form.preferred_date} onChange={handleChange} className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Preferred time</label>
              <input type="time" name="preferred_time" value={form.preferred_time} onChange={handleChange} className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Timezone</label>
              <input name="timezone" value={form.timezone} onChange={handleChange} className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500" placeholder="e.g., PST, EST, CET, IST" />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Additional context</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Briefly describe your hiring goals, target profiles, and timeline"></textarea>
            </div>

            <div className="md:col-span-2 flex items-center justify-between gap-4">
              <p className="text-sm text-gray-500">By submitting, you agree to be contacted by Choose Marketers.</p>
              <motion.button
                disabled={loading}
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white px-5 py-2.5 rounded-md shadow"
                whileHover={!loading ? { y: -2 } : {}}
                whileTap={{ y: 0 }}
              >
                {loading ? 'Submitting...' : 'Submit request'}
              </motion.button>
            </div>
          </form>

          {/* Decorative gradient bars */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -z-10 inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="absolute -top-20 -right-24 h-56 w-56 rounded-full bg-indigo-200/40 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-blue-200/40 blur-3xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
