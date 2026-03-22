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
    <section id="pricing" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-neutral-900">Simple, transparent pricing.</h2>
          <p className="mt-6 text-xl text-neutral-500 font-medium leading-relaxed">No hidden fees. We believe in delivering exceptional value with complete transparency.</p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-5xl mx-auto">
          {/* Base Plan */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 w-full bg-[#FAFAFA] p-12 rounded-[2.5rem] border border-black/5 hover:border-black/10 transition-colors duration-500"
          >
            <h3 className="text-2xl font-bold mb-2 tracking-tight">Landing Page</h3>
            <p className="text-neutral-500 mb-8 font-medium">Perfect for new businesses.</p>
            <div className="mb-10 flex items-baseline gap-2">
              <span className="text-5xl font-black tracking-tighter">₹15,000</span>
            </div>
            <ul className="space-y-5 mb-10">
              {['1 Page Website', 'Responsive Design', 'Basic SEO', 'Fast Delivery'].map((feature, idx) => (
                <li key={idx} className="flex items-center text-neutral-600 font-medium">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 mr-4 text-sm font-bold">✓</span> 
                  {feature}
                </li>
              ))}
            </ul>
            <button onClick={() => handlePayment('Landing Page', 15000)} className="w-full py-4 bg-white border border-black/10 text-neutral-900 font-bold rounded-2xl hover:bg-neutral-50 hover:shadow-sm transition-all duration-300">
              Get Started
            </button>
          </motion.div>

          {/* Premium Plan */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 w-full bg-[#0A0A0B] text-white p-12 rounded-[3rem] border border-white/10 relative shadow-[0_30px_60px_rgba(0,0,0,0.15)] group transform md:-translate-y-6"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[3rem] pointer-events-none"></div>
            <div className="absolute top-0 right-10 transform -translate-y-1/2">
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-bold px-5 py-2 rounded-full uppercase tracking-widest shadow-lg">Popular</span>
            </div>
            <h3 className="text-2xl font-bold mb-2 tracking-tight">Standard Growth</h3>
            <p className="text-neutral-400 mb-8 font-medium">For scaling companies.</p>
            <div className="mb-10 flex items-baseline gap-2">
              <span className="text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">₹35,000</span>
            </div>
            <ul className="space-y-5 mb-10">
              {['Up to 5 Pages', 'CMS Integration', 'Advanced SEO & Analytics', 'Priority Support'].map((feature, idx) => (
                <li key={idx} className="flex items-center text-neutral-300 font-medium">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 mr-4 text-sm border border-blue-500/30 font-bold">✓</span> 
                  {feature}
                </li>
              ))}
            </ul>
            <button onClick={() => handlePayment('Standard Growth', 35000)} className="w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] relative z-10">
              Get Started
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
