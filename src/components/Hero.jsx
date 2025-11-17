import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export default function Hero() {
  return (
    <section className="pt-6 pb-4">
      <motion.div
        className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <div>
          <motion.h2 variants={item} className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Hire proven candidates, without the guesswork
          </motion.h2>
          <motion.p variants={item} className="mt-4 text-lg text-gray-600">
            Choose Marketers connects you with pre-vetted marketing and GTM talent ready to make an impact. Tell us what you need and we’ll handle the rest.
          </motion.p>
          <motion.div variants={item} className="mt-6 flex items-center gap-3">
            <a href="#book" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md font-medium shadow">
              Book a discovery call
            </a>
            <a href="#benefits" className="text-blue-700 hover:text-blue-900 font-medium">Why Choose Marketers</a>
          </motion.div>
          <motion.div variants={item} className="mt-6 text-sm text-gray-500">
            No upfront fees. Only pay when you hire.
          </motion.div>
        </div>
        <div className="relative">
          <motion.div
            className="aspect-square rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-100"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
          <motion.div
            className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow p-4 border border-gray-100"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p className="text-sm text-gray-700"><span className="font-semibold">Recent placements:</span> Demand Gen Manager, Senior SDR, Growth Lead</p>
          </motion.div>

          {/* Floating orbs for subtle motion */}
          <motion.span
            className="absolute -top-3 -left-3 h-20 w-20 rounded-full bg-blue-200/60 blur-2xl"
            animate={{ y: [0, -6, 0], x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          />
          <motion.span
            className="absolute top-6 -right-6 h-16 w-16 rounded-full bg-indigo-200/60 blur-2xl"
            animate={{ y: [0, 6, 0], x: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 0.5 }}
          />
        </div>
      </motion.div>
    </section>
  )
}
