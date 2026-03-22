import { loadRazorpayScript } from '../lib/razorpay';

export default function Pricing() {
  const handlePayment = async (planName, amount) => {
    const res = await loadRazorpayScript();
    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const options = {
      key: 'rzp_test_YOUR_KEY_HERE', // Replace with your test/live key
      amount: amount * 100, // amount in smallest currency unit (paise)
      currency: 'INR',
      name: 'Prabu Portfolio',
      description: `Payment for ${planName} Plan`,
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: 'Client Name',
        email: 'client@example.com',
      },
      theme: { color: '#059669' }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <section id="pricing" className="py-24 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Pricing.</h2>
          <p className="mt-4 text-lg text-neutral-500">Transparent packages for your business.</p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
          <div className="flex-1 bg-white p-10 rounded-3xl shadow-sm border border-neutral-200">
            <h3 className="text-2xl font-bold mb-2">Landing Page</h3>
            <p className="text-neutral-500 mb-6">Perfect for new businesses.</p>
            <div className="mb-8">
              <span className="text-5xl font-extrabold tracking-tight">₹15,000</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-neutral-600"><span className="text-emerald-500 mr-2">✓</span> 1 Page Website</li>
              <li className="flex items-center text-neutral-600"><span className="text-emerald-500 mr-2">✓</span> Responsive Design</li>
              <li className="flex items-center text-neutral-600"><span className="text-emerald-500 mr-2">✓</span> Basic SEO</li>
            </ul>
            <button onClick={() => handlePayment('Landing Page', 15000)} className="w-full py-4 bg-emerald-50 text-emerald-700 font-bold rounded-xl hover:bg-emerald-100 transition">
              Get Started
            </button>
          </div>

          <div className="flex-1 bg-neutral-900 text-white p-10 rounded-3xl shadow-xl border border-neutral-800 relative transform md:-translate-y-4">
            <div className="absolute top-0 right-10 transform -translate-y-1/2">
              <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Popular</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Standard</h3>
            <p className="text-neutral-400 mb-6">For growing companies.</p>
            <div className="mb-8">
              <span className="text-5xl font-extrabold tracking-tight">₹35,000</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-neutral-300"><span className="text-blue-500 mr-2">✓</span> Up to 5 Pages</li>
              <li className="flex items-center text-neutral-300"><span className="text-blue-500 mr-2">✓</span> CMS Integration</li>
              <li className="flex items-center text-neutral-300"><span className="text-blue-500 mr-2">✓</span> Advanced SEO & Analytics</li>
            </ul>
            <button onClick={() => handlePayment('Standard', 35000)} className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
