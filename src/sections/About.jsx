export default function About() {
  return (
    <section id="about" className="py-24 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">About Us.</h2>
            <p className="text-xl text-neutral-500 leading-relaxed text-balance">
              We are a specialized development studio focused on creating web experiences that feel native, responsive, and incredibly fast. 
              Led by Prabu, our team bridges the gap between premium design and scalable engineering architecture.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Web Development', 'UI/UX Design', 'Performance Optimization', 'Brand Strategy'].map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-neutral-100/80 border border-neutral-200 text-neutral-700 rounded-full font-medium text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="aspect-square max-w-sm mx-auto bg-neutral-50 rounded-[3rem] overflow-hidden border border-neutral-200 relative group shadow-sm">
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition duration-500 z-10" />
              {/* Optional custom picture placeholder */}
              <div className="w-full h-full filter grayscale group-hover:grayscale-0 transition duration-500 flex items-center justify-center text-neutral-300 text-9xl">
                👨‍💻
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
