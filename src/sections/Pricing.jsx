import { motion } from 'framer-motion';
import { loadRazorpayScript } from '../lib/razorpay';

export default function Pricing() {
  const handlePayment = async (planName, amount) => {
    const res = await loadRazorpayScript();
    if (!res) { alert('Razorpay SDK failed to load.'); return; }
    const options = {
      key: 'rzp_test_YOUR_KEY_HERE',
      amount: amount * 100,
      currency: 'INR',
      name: 'Prabu Portfolio',
      description: `Payment for ${planName} Plan`,
      handler: function (response) { alert(`Payment successful! ID: ${response.razorpay_payment_id}`); },
      prefill: { name: 'Client Name', email: 'client@example.com' },
      theme: { color: '#0A0A0B' }
    };
    new window.Razorpay(options).open();
  };

  return (
    <section id="pricing" className="py-32 bg-[#030303] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">Simple, transparent pricing.</h2>
          <p className="mt-6 text-xl text-neutral-400 font-medium leading-relaxed">No hidden fees. We believe in delivering exceptional value with complete transparency.</p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-5xl mx-auto">
          {/* Base Plan */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 w-full bg-[#0A0A0A] p-12 rounded-[2.5rem] border border-white/5 hover:border-white/10 hover:shadow-[0_8px_32px_rgba(255,255,255,0.02)] transition-all duration-500"
          >
            <h3 className="text-2xl font-bold mb-2 tracking-tight text-white">Landing Page</h3>
            <p className="text-neutral-400 mb-8 font-medium">Perfect for new businesses.</p>
            <div className="mb-10 flex items-baseline gap-2">
              <span className="text-5xl font-black tracking-tighter text-white">₹15,000</span>
            </div>
            <ul className="space-y-5 mb-10">
              {['1 Page Website', 'Responsive Design', 'Basic SEO', 'Fast Delivery'].map((feature, idx) => (
                <li key={idx} className="flex items-center text-neutral-300 font-medium">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-accent/20 text-brand-accent border border-brand-accent/30 mr-4 text-sm font-bold">✓</span> 
                  {feature}
                </li>
              ))}
            </ul>
            <button onClick={() => handlePayment('Landing Page', 15000)} className="w-full py-4 bg-[#111] border border-white/10 text-white font-bold rounded-2xl hover:bg-brand-accent hover:text-black hover:border-brand-accent hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300">
              Get Started
            </button>
          </motion.div>

          {/* Premium Plan */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 w-full bg-[#0A0A0B] text-white p-12 rounded-[3rem] border border-brand-purple/20 relative shadow-[0_0_40px_rgba(99,102,241,0.15)] group transform md:-translate-y-6"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[3rem] pointer-events-none"></div>
            <div className="absolute top-0 right-10 transform -translate-y-1/2">
              <span className="bg-gradient-to-r from-brand-purple to-purple-400 text-white text-xs font-bold px-5 py-2 rounded-full uppercase tracking-widest shadow-[0_0_15px_rgba(99,102,241,0.5)]">Popular</span>
            </div>
            <h3 className="text-2xl font-bold mb-2 tracking-tight">Standard Growth</h3>
            <p className="text-neutral-400 mb-8 font-medium">For scaling companies.</p>
            <div className="mb-10 flex items-baseline gap-2">
              <span className="text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">₹35,000</span>
            </div>
            <ul className="space-y-5 mb-10">
              {['Up to 5 Pages', 'CMS Integration', 'Advanced SEO & Analytics', 'Priority Support'].map((feature, idx) => (
                <li key={idx} className="flex items-center text-neutral-300 font-medium">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-purple/20 text-purple-400 border border-brand-purple/30 mr-4 text-sm font-bold">✓</span> 
                  {feature}
                </li>
              ))}
            </ul>
            <button onClick={() => handlePayment('Standard Growth', 35000)} className="w-full py-4 bg-brand-purple border border-brand-purple text-white font-bold rounded-2xl hover:bg-brand-accent hover:border-brand-accent hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] relative z-10">
              Get Started
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
