const FEATURES = [
  {
    title: 'Pomodoro Timer',
    description: 'Work in focused 25-minute sessions with automatic break reminders.',
    emoji: '⏱️',
    color: 'from-orange-400 to-pink-400',
    bgColor: 'bg-orange-50',
  },
  {
    title: 'Website Blocking',
    description: 'Block distracting websites during focus sessions. Stay on track.',
    emoji: '🛡️',
    color: 'from-red-400 to-rose-500',
    bgColor: 'bg-red-50',
    badge: 'Premium',
  },
  {
    title: 'Progress Tracking',
    description: 'Track daily pomodoros, focus time, and build streaks.',
    emoji: '📊',
    color: 'from-emerald-400 to-teal-500',
    bgColor: 'bg-emerald-50',
  },
  {
    title: '7 Cute Themes',
    description: 'Orange, Watermelon, Blueberry, Kiwi, Peach, Grape & Coconut.',
    emoji: '🎨',
    color: 'from-purple-400 to-pink-500',
    bgColor: 'bg-purple-50',
  },
  {
    title: 'Smart Notifications',
    description: 'Customizable sounds and alerts when sessions end.',
    emoji: '🔔',
    color: 'from-amber-400 to-orange-500',
    bgColor: 'bg-amber-50',
  },
  {
    title: 'Multi-Language',
    description: 'Available in English and Korean. More languages coming soon.',
    emoji: '🌍',
    color: 'from-sky-400 to-blue-500',
    bgColor: 'bg-sky-50',
  },
  {
    title: 'Smart Home',
    description: 'Integrate with Home Assistant for smart home automation.',
    emoji: '🏠',
    color: 'from-blue-400 to-cyan-500',
    bgColor: 'bg-blue-50',
    badge: 'Premium',
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
            <span>✨</span>
            <span>Packed with features</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Everything you need to
            <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              stay productive
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Pomodoro Technique meets beautiful design and smart features
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
