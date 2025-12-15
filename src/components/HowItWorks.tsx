export function HowItWorks() {
  const steps = [
    {
      number: '1',
      emoji: '🎯',
      title: 'Focus for 25 minutes',
      description: 'Start a session and work on a single task without distractions.',
      color: 'from-orange-400 to-pink-500',
      bgColor: 'bg-orange-50',
      time: '25:00',
      label: 'FOCUS',
    },
    {
      number: '2',
      emoji: '☕',
      title: 'Take a 5-minute break',
      description: 'Rest your mind, stretch, or grab a snack to recharge.',
      color: 'from-emerald-400 to-teal-500',
      bgColor: 'bg-emerald-50',
      time: '5:00',
      label: 'BREAK',
    },
    {
      number: '3',
      emoji: '🏆',
      title: 'Repeat & track progress',
      description: 'Complete 4 pomodoros, enjoy a 15-min break. Watch your streak grow!',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-purple-50',
      time: '🍊🍊🍊',
      label: 'STREAK',
    },
  ];

  return (
    <section id="how-it-works" className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700 mb-4 shadow-sm">
            <span>🍅</span>
            <span>The Pomodoro Technique</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Simple as
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent"> 1, 2, 3</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            The proven technique that has helped millions stay focused
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-0.5 bg-gradient-to-r from-slate-200 to-transparent" />
              )}

              {/* Card */}
              <div className={`${step.bgColor} rounded-3xl p-8 text-center h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-white/50`}>
                {/* Step number badge */}
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${step.color} text-white font-bold text-lg mb-6 shadow-lg`}>
                  {step.number}
                </div>

                {/* Timer visual */}
                <div className="relative mb-6">
                  <div className="w-28 h-28 mx-auto rounded-full bg-white/80 border-4 border-white shadow-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-800">{step.time}</div>
                      <div className={`text-xs font-medium bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                        {step.label}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Emoji */}
                <div className="text-3xl mb-4">{step.emoji}</div>

                {/* Content */}
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom tip */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm">
            <span className="text-xl">💡</span>
            <p className="text-slate-600 text-sm">
              <span className="font-semibold text-slate-800">Pro tip:</span> Start with defaults, adjust once you find your rhythm
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
