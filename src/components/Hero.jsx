export default function Hero() {
  return (
    <section className="pt-8 pb-6">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Hire proven candidates, without the guesswork
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose Marketers connects you with pre-vetted marketing and GTM talent ready to make an impact. Tell us what you need and we’ll handle the rest.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#book" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md font-medium">Book a discovery call</a>
            <a href="#benefits" className="text-blue-700 hover:text-blue-900 font-medium">Why Choose Marketers</a>
          </div>
          <div className="mt-6 text-sm text-gray-500">
            No upfront fees. Only pay when you hire.
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-100"></div>
          <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow p-4 border border-gray-100">
            <p className="text-sm text-gray-700"><span className="font-semibold">Recent placements:</span> Demand Gen Manager, Senior SDR, Growth Lead</p>
          </div>
        </div>
      </div>
    </section>
  )
}
