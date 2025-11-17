import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className="w-full py-8">
      <motion.div
        className="max-w-5xl mx-auto px-4 flex items-center justify-between"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <motion.div
            className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg"
            whileHover={{ rotate: 5, scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            CM
          </motion.div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Choose Marketers</h1>
            <p className="text-sm text-gray-600">Recruitment that moves at your speed</p>
          </div>
        </motion.div>
        <motion.a
          href="#book"
          className="hidden sm:inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-sm"
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
        >
          Book a Call
        </motion.a>
      </motion.div>
    </header>
  )
}
