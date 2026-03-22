export default function FAQ() {
  const faqs = [
    { q: "How long does it take?", a: "Most projects take between 2 to 4 weeks depending on the complexity, scale, and revisions required." },
    { q: "What is your tech stack?", a: "We specialize in modern web technologies including React, Next.js, Tailwind CSS, and headless CMS solutions to guarantee performance." },
    { q: "Do you offer SEO optimization?", a: "Yes, all our websites are built with best-in-class technical SEO standards, engaging fast delivery metrics, and semantic structural layouts." },
    { q: "Can we integrate a payment gateway?", a: "Absolutely. We are fully capable of integrating Stripe, Razorpay, or any preferred provider seamlessly." }
  ];

  return (
    <section id="faq" className="py-24 bg-neutral-50/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">FAQ.</h2>
          <p className="mt-4 text-lg text-neutral-500">Common questions from our clients.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-white p-6 rounded-2xl border border-neutral-200 cursor-pointer open:ring-2 open:ring-neutral-900/5 transition duration-300">
              <summary className="font-semibold text-lg flex justify-between items-center text-neutral-900 outline-none">
                {faq.q}
                <span className="text-neutral-400 group-open:rotate-45 transition-transform text-2xl duration-300">+</span>
              </summary>
              <p className="mt-4 text-neutral-500 leading-relaxed pr-8">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
