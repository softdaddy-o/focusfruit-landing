const FEATURES = [
  {
    title: 'Idle Detection',
    description: 'Forgot to start your next session? FocusFruit nudges you before the gap becomes a quit.',
    emoji: '🔔',
    color: 'from-orange-400 to-pink-400',
    bgColor: 'bg-orange-50',
  },
  {
    title: 'Guided Break Screen',
    description: '38 guided activities — stretching, breathing, eye rest — so breaks actually restore you.',
    emoji: '🧘',
    color: 'from-emerald-400 to-teal-500',
    bgColor: 'bg-emerald-50',
  },
  {
    title: 'Smart Pause',
    description: 'Log what interrupted you (call, notification, wandering thought). See your distraction patterns over time.',
    emoji: '⏸️',
    color: 'from-sky-400 to-blue-500',
    bgColor: 'bg-sky-50',
  },
  {
    title: 'Mood & Energy Tracking',
    description: 'Rate your mood and energy before and after each session. Spot the conditions where you do your best work.',
    emoji: '😊',
    color: 'from-purple-400 to-pink-500',
    bgColor: 'bg-purple-50',
  },
  {
    title: 'Analytics with Explanations',
    description: 'Weekly and monthly charts with plain-language explanations — not just numbers, but what to do about them.',
    emoji: '📈',
    color: 'from-amber-400 to-orange-500',
    bgColor: 'bg-amber-50',
  },
  {
    title: 'Website Blocking',
    description: 'Block distracting sites during focus sessions. 3 emergency overrides per day.',
    emoji: '🛡️',
    color: 'from-red-400 to-rose-500',
    bgColor: 'bg-red-50',
    badge: 'Premium',
  },
  {
    title: 'Accidental-Stop Protection',
    description: 'A confirmation step prevents stopping a session by mistake — so you never lose a flow state to a stray click.',
    emoji: '🔒',
    color: 'from-slate-400 to-slate-600',
    bgColor: 'bg-slate-50',
  },
  {
    title: '9 Beautiful Themes',
    description: 'Pick your fruit. Nine color themes so your timer feels like yours.',
    emoji: '🎨',
    color: 'from-pink-400 to-purple-500',
    bgColor: 'bg-pink-50',
  },
  {
    title: '7 Languages',
    description: 'Full interface in 7 languages — English, Spanish, French, Japanese, Korean, Portuguese, and Chinese.',
    emoji: '🌍',
    color: 'from-blue-400 to-cyan-500',
    bgColor: 'bg-blue-50',
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-20 lg:py-28 overflow-hidden bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full text-sm font-medium text-orange-700 mb-4">
            <span>🎯</span>
            <span>Built for consistency</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Features that keep you
            <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              in the habit
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Every feature answers one question: does this help you do more Pomodoros consistently?
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className={`group relative p-6 rounded-2xl ${feature.bgColor} border border-slate-100 hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300`}
            >
              {/* Badge */}
              {feature.badge && (
                <span className="absolute top-4 right-4 px-2 py-0.5 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-[10px] font-bold rounded-full uppercase tracking-wider">
                  {feature.badge}
                </span>
              )}

              {/* Emoji icon */}
              <div className="text-3xl mb-4">{feature.emoji}</div>

              {/* Content */}
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative gradient line */}
              <div className={`absolute bottom-0 left-6 right-6 h-1 rounded-full bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
