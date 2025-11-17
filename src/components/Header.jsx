export default function Header() {
  return (
    <header className="w-full py-8">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">CM</div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Choose Marketers</h1>
            <p className="text-sm text-gray-600">Recruitment that moves at your speed</p>
          </div>
        </div>
        <a href="#book" className="hidden sm:inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">Book a Call</a>
      </div>
    </header>
  )
}
