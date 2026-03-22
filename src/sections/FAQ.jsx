export default function FAQ() {
  const faqs = [
    { q: "How long does it take?", a: "Most projects take between 2 to 4 weeks depending on the complexity, scale, and revisions required." },
    { q: "What is your tech stack?", a: "We specialize in modern web technologies including React, Next.js, Tailwind CSS, and headless CMS solutions to guarantee performance." },
    { q: "Do you offer SEO optimization?", a: "Yes, all our websites are built with best-in-class technical SEO standards, engaging fast delivery metrics, and semantic structural layouts." },
    { q: "Can we integrate a payment gateway?", a: "Absolutely. We are fully capable of integrating Stripe, Razorpay, or any preferred provider seamlessly." }
  ];

  return (
    <section id="faq" className="py-32 bg-[#FAFAFA] border-t border-black/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-neutral-900">Frequently Asked.</h2>
          <p className="mt-6 text-xl text-neutral-500 font-medium leading-relaxed">Everything you need to know about the process.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-white p-8 rounded-[2rem] border border-black/5 cursor-pointer open:ring-1 open:ring-black/5 hover:shadow-premium transition-all duration-300">
              <summary className="font-bold text-xl flex justify-between items-center text-neutral-900 outline-none list-none [&::-webkit-details-marker]:hidden tracking-tight">
                {faq.q}
                <span className="text-neutral-400 w-10 h-10 flex items-center justify-center rounded-full bg-neutral-50 group-open:-rotate-45 transition-transform duration-300 ease-in-out border border-black/5">+</span>
              </summary>
              <div className="mt-6 text-neutral-500 leading-relaxed text-lg pr-8 origin-top opacity-80">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
