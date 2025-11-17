import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import BookingForm from './components/BookingForm'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Header />
      <Hero />
      <Benefits />
      <BookingForm />
      <footer className="py-10">
        <div className="max-w-5xl mx-auto px-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Choose Marketers. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
