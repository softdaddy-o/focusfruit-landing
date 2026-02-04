import { Check, CheckCircle } from 'lucide-react';
import { CHROME_STORE_URL } from '../constants';

const PLANS = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started with Pomodoro',
    features: [
      'Pomodoro timer (25/5/15 min)',
      '7 beautiful fruit themes',
      'Daily statistics & streaks',
      'Browser notifications',
      'Customizable durations',
      'English & Korean language',
    ],
    cta: 'Get Started Free',
    ctaLink: CHROME_STORE_URL,
    highlighted: false,
  },
  {
    name: 'Premium',
    price: '$2.99',
    period: '/month',
    alternativePrices: [
      { label: '$6.99/quarter', savings: '22% off' },
      { label: '$39.99 lifetime', savings: 'Best value' },
    ],
    description: 'For serious productivity seekers',
    features: [
      'Everything in Free, plus:',
      'Website blocking during focus',
      'Weekly & monthly analytics',
      'Productivity insights & scores',
      'Custom tag management',
      'Home Assistant integration',
      'Priority support',
    ],
    cta: 'Start 7-Day Free Trial',
    ctaLink: CHROME_STORE_URL,
    highlighted: true,
  },
];

const TRUST_BADGES = ['7-day free trial', 'Cancel anytime', 'Secure payment'];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-white to-orange-50">
      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full text-sm font-medium text-orange-700 mb-4">
            <span>Simple pricing</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Start free,
            <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              upgrade when ready
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            No credit card required. Try all features free for 7 days.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-3xl border-2 ${
                plan.highlighted
                  ? 'border-orange-400 bg-white shadow-xl shadow-orange-100'
                  : 'border-slate-200 bg-white'
              }`}
            >
              {/* Popular badge */}
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-sm font-bold rounded-full">
                  Most Popular
                </span>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-slate-500">{plan.period}</span>
                </div>
                {plan.alternativePrices && (
                  <div className="mt-2 space-y-1">
                    {plan.alternativePrices.map((alt, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="text-sm text-slate-600">{alt.label}</span>
                        <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                          {alt.savings}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
                <p className="mt-3 text-slate-600 text-sm">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={plan.ctaLink}
                className={`block w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-200 ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:shadow-lg hover:shadow-orange-200 hover:-translate-y-0.5'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
          {TRUST_BADGES.map((badge) => (
            <span key={badge} className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
