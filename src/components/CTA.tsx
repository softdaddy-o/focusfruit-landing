import { ChromeIcon } from './icons';
import { CHROME_STORE_URL } from '../constants';

export function CTA() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600" />

      {/* Animated background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float-delayed" />

      {/* Floating emojis */}
      <div className="absolute top-16 left-[10%] text-4xl animate-float opacity-30 select-none hidden md:block" aria-hidden="true">🍊</div>
      <div className="absolute bottom-20 right-[15%] text-3xl animate-float-delayed opacity-25 select-none hidden md:block" aria-hidden="true">🍓</div>
      <div className="absolute top-1/2 left-[5%] text-2xl animate-float opacity-20 select-none hidden lg:block" aria-hidden="true">🫐</div>
      <div className="absolute top-24 right-[8%] text-3xl animate-float-delayed opacity-25 select-none hidden lg:block" aria-hidden="true">🍋</div>

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
          </span>
          <span className="text-sm font-medium text-white/90">Free forever. No account required.</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to actually stick
          <br />
          with Pomodoro?
        </h2>

        {/* Subheadline */}
        <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
          Other Pomodoro apps gave you a countdown. FocusFruit gives you a system — so you're still using it next month.
        </p>

        {/* CTA Button */}
        <a
          href={CHROME_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-900 font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
        >
          <ChromeIcon className="w-6 h-6" />
          Add to Chrome — Free
        </a>

        {/* Trust indicators */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-white/70">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">No sign-up needed</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">Works offline</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">Privacy first</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
