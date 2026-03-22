export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Portfolio.</h2>
          <p className="mt-4 text-lg text-neutral-500">A selection of our recent work.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { tag: 'Law Firm Website', bg: 'bg-neutral-100' },
            { tag: 'SV Construction', bg: 'bg-neutral-100' },
            { tag: 'SaaS Dashboard', bg: 'bg-neutral-100' },
            { tag: 'E-Comm Brand', bg: 'bg-neutral-100' }
          ].map((item, i) => (
            <div key={i} className={`group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer ${item.bg} border border-neutral-200 flex items-center justify-center`}>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition duration-500 z-10" />
              <span className="text-neutral-400 font-medium">✨ Image Placeholder</span>
              <div className="absolute top-6 left-6 z-20">
                <span className="px-4 py-2.5 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-neutral-900 shadow-sm">
                  {item.tag}
                </span>
              </div>
              <div className="absolute bottom-6 left-6 z-20 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300 pointer-events-none">
                <span className="flex items-center space-x-2 text-neutral-900 bg-white px-5 py-2.5 rounded-full font-medium shadow-md">
                  <span>View project</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
