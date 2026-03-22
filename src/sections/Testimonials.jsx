export default function Testimonials() {
  const testimonials = [
    { quote: "Prabu transformed our online presence. Our traffic doubled in 3 months.", name: "Sarah L.", role: "CEO, TechStart" },
    { quote: "Incredible design and blazing fast performance. Highly recommend.", name: "Mike R.", role: "Founder, SV Construction" },
    { quote: "The attention to detail and technical optimization is unmatched.", name: "Elena G.", role: "Director, LawFirm" }
  ];

  return (
    <section id="testimonials" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-neutral-900">What Clients Say.</h2>
          <p className="mt-6 text-xl text-neutral-500 font-medium">Don't just take our word for it.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <div key={i} className="bg-[#FAFAFA] p-10 rounded-[2.5rem] border border-black/5 hover:shadow-premium-hover transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between h-full">
              <div>
                <div className="flex space-x-1 mb-8 text-emerald-400">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-neutral-700 text-lg leading-relaxed mb-8 font-medium tracking-tight">"{item.quote}"</p>
              </div>
              <div className="flex items-center space-x-4 pt-8 border-t border-black/5">
                <div className="w-12 h-12 bg-white border border-black/5 rounded-full flex items-center justify-center font-bold text-neutral-500 shadow-sm">{item.name[0]}</div>
                <div>
                  <h4 className="font-bold text-neutral-900 tracking-tight">{item.name}</h4>
                  <p className="text-sm text-neutral-500 font-medium">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
