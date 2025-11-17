const benefits = [
  {
    title: "Pre-vetted talent",
    desc: "We shortlist only qualified candidates so you interview fewer, hire faster.",
  },
  {
    title: "Faster time-to-hire",
    desc: "Positions filled in weeks, not months — without sacrificing quality.",
  },
  {
    title: "Recruitment partner",
    desc: "We align with your goals, brand, and process to feel like part of your team.",
  },
]

export default function Benefits() {
  return (
    <section className="py-12" id="benefits">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        {benefits.map((b, i) => (
          <div key={i} className="bg-white/70 backdrop-blur rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">{b.title}</h3>
            <p className="text-gray-600 mt-2">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
