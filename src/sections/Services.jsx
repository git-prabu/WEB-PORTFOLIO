export default function Services() {
  return (
    <section id="services" className="py-24 bg-neutral-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Services.</h2>
          <p className="mt-4 text-lg text-neutral-500">Everything you need to scale your brand online.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Web Design', desc: 'Stunning layouts that convert visitors into customers.', icon: '✨' },
            { title: 'Next.js Development', desc: 'Blazing fast, SEO optimized web applications.', icon: '⚡' },
            { title: 'E-Commerce', desc: 'Custom stores built to maximize revenue.', icon: '🛍️' }
          ].map((service, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 hover:shadow-md transition group">
              <div className="w-12 h-12 bg-neutral-50 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-neutral-500 text-balance leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
