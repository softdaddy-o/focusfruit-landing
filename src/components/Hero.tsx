import { ChromeIcon } from './icons';
import { CHROME_STORE_URL } from '../constants';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      {/* Animated gradient blobs */}
      <div className="absolute top-20 -right-20 w-72 h-72 bg-gradient-to-br from-orange-300/40 to-pink-300/40 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-purple-300/30 to-blue-300/30 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/3 w-60 h-60 bg-gradient-to-r from-yellow-200/30 to-orange-200/30 rounded-full blur-3xl" />

      {/* Floating emojis - cute touch */}
      <div className="absolute top-24 left-[15%] text-4xl animate-float opacity-60 select-none hidden md:block" aria-hidden="true">🍊</div>
      <div className="absolute top-40 right-[20%] text-3xl animate-float-delayed opacity-50 select-none hidden md:block" aria-hidden="true">🍓</div>
      <div className="absolute bottom-32 left-[10%] text-3xl animate-float opacity-40 select-none hidden lg:block" aria-hidden="true">🫐</div>
      <div className="absolute bottom-48 right-[12%] text-4xl animate-float-delayed opacity-50 select-none hidden lg:block" aria-hidden="true">🍋</div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-orange-100 mb-6 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-slate-700">Free Chrome Extension</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight mb-6 animate-slide-up">
              The Pomodoro timer that
              <br />
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                doesn't let you fail.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8 animate-slide-up-delayed">
              Most timers just count down. FocusFruit catches you when you drift, recharges you on breaks, and shows you your focus patterns — so the habit actually sticks.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up-delayed">
              <a
                href={CHROME_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold text-lg rounded-2xl shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <ChromeIcon className="w-5 h-5" />
                Add to Chrome — Free
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/80 backdrop-blur-sm text-slate-700 font-semibold rounded-2xl border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-md transition-all duration-200"
              >
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex flex-wrap items-center gap-6 justify-center lg:justify-start animate-fade-in">
              <div className="flex -space-x-2">
                {['🧑‍💻', '👩‍🎓', '👨‍💼', '👩‍🔬', '🧑‍🎨'].map((emoji, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center text-sm border-2 border-white shadow-sm"
                    aria-hidden="true"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-0.5 text-yellow-500" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-slate-500">
                  Loved by <span className="font-semibold text-slate-700">1,000+</span> users
                </p>
              </div>
            </div>
          </div>

          {/* Right: App Screenshot */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in" aria-hidden="true">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-pink-400/20 to-purple-400/20 rounded-full blur-3xl scale-110" />

            {/* Extension popup screenshot */}
            <div className="relative">
              {/* Floating decorations */}
              <div className="absolute -top-4 -left-8 text-3xl animate-float">🎯</div>
              <div className="absolute -bottom-2 -right-6 text-2xl animate-float-delayed">✨</div>

              {/* Screenshot image */}
              <img
                src="/screenshots/popup-orange.png"
                alt="FocusFruit Timer - Orange Theme"
                className="w-[270px] rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <div className="w-6 h-10 rounded-full border-2 border-slate-300 flex justify-center pt-2">
          <div className="w-1 h-2 bg-slate-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
