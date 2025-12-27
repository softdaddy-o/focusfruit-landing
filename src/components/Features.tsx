export function Features() {
  const features = [
    {
      icon: <TimerIcon />,
      title: 'Pomodoro Timer',
      description: 'Work in focused 25-minute sessions with automatic break reminders.',
      emoji: '⏱️',
      color: 'from-orange-400 to-pink-400',
      bgColor: 'bg-orange-50',
    },
    {
      icon: <BlockIcon />,
      title: 'Website Blocking',
      description: 'Block distracting websites during focus sessions. Stay on track.',
      emoji: '🛡️',
      color: 'from-red-400 to-rose-500',
      bgColor: 'bg-red-50',
      badge: 'Premium',
    },
    {
      icon: <ChartIcon />,
      title: 'Progress Tracking',
      description: 'Track daily pomodoros, focus time, and build streaks.',
      emoji: '📊',
      color: 'from-emerald-400 to-teal-500',
      bgColor: 'bg-emerald-50',
    },
    {
      icon: <PaletteIcon />,
      title: '7 Cute Themes',
      description: 'Orange, Strawberry, Blueberry, Grape, Kiwi, Lemon & Watermelon.',
      emoji: '🎨',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-purple-50',
    },
    {
      icon: <BellIcon />,
      title: 'Smart Notifications',
      description: 'Customizable sounds and alerts when sessions end.',
      emoji: '🔔',
      color: 'from-amber-400 to-orange-500',
      bgColor: 'bg-amber-50',
    },
    {
      icon: <GlobeIcon />,
      title: 'Multi-Language',
      description: 'Available in English and Korean. More languages coming soon.',
      emoji: '🌍',
      color: 'from-sky-400 to-blue-500',
      bgColor: 'bg-sky-50',
    },
    {
      icon: <HomeIcon />,
      title: 'Smart Home',
      description: 'Control with Google Home or Home Assistant.',
      emoji: '🏠',
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'bg-blue-50',
      badge: 'Coming Soon',
    },
  ];

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
          {features.map((feature) => (
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

function TimerIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" d="M12 6v6l4 2" />
    </svg>
  );
}

function BlockIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

function PaletteIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  );
}

export default Features;
