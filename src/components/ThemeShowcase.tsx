import { useState } from 'react';

// Theme data with screenshot paths
const THEMES = [
  { id: 'orange', name: 'Orange', emoji: '🍊', screenshot: '/screenshots/popup-orange.png' },
  { id: 'strawberry', name: 'Strawberry', emoji: '🍓', screenshot: '/screenshots/popup-strawberry.png' },
  { id: 'blueberry', name: 'Blueberry', emoji: '🫐', screenshot: '/screenshots/popup-blueberry.png' },
  { id: 'grape', name: 'Grape', emoji: '🍇', screenshot: '/screenshots/popup-grape.png' },
  { id: 'kiwi', name: 'Kiwi', emoji: '🥝', screenshot: '/screenshots/popup-kiwi.png' },
  { id: 'lemon', name: 'Lemon', emoji: '🍋', screenshot: '/screenshots/popup-lemon.png' },
  { id: 'watermelon', name: 'Watermelon', emoji: '🍉', screenshot: '/screenshots/popup-watermelon.png' },
];

// Theme colors for UI elements (buttons, glow effects)
const THEME_COLORS: Record<string, string> = {
  orange: '#FF8C42',
  strawberry: '#FF6B9D',
  blueberry: '#7B9FF5',
  grape: '#9B6FD6',
  kiwi: '#A8D55C',
  lemon: '#FFE066',
  watermelon: '#FF6B6B',
};

export function ThemeShowcase() {
  const [activeTheme, setActiveTheme] = useState(THEMES[1]); // Strawberry

  const activeColor = THEME_COLORS[activeTheme.id];

  return (
    <section id="themes" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />

      {/* Subtle gradient blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] opacity-15 transition-colors duration-700"
        style={{ backgroundColor: activeColor }}
      />

      <div className="relative max-w-6xl mx-auto section-padding">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full text-sm font-medium text-purple-700 mb-4">
            <span>🎨</span>
            <span>7 Beautiful Themes</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Pick your favorite fruit
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Express yourself with vibrant colors that make focusing fun
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Extension preview - using actual screenshot */}
          <div className="relative">
            {/* Glow effect */}
            <div
              className="absolute -inset-4 rounded-3xl blur-2xl opacity-40 transition-colors duration-500"
              style={{ backgroundColor: activeColor }}
            />

            {/* Screenshot image */}
            <img
              src={activeTheme.screenshot}
              alt={`FocusFruit Timer - ${activeTheme.name} Theme`}
              className="relative w-[270px] rounded-2xl shadow-2xl transition-all duration-300"
            />
          </div>

          {/* Theme picker */}
          <div className="flex flex-col items-center lg:items-start gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Choose your theme
              </h3>
              <p className="text-slate-500 text-sm">
                Click a fruit to preview
              </p>
            </div>

            {/* Theme grid */}
            <div className="grid grid-cols-4 gap-3">
              {THEMES.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setActiveTheme(theme)}
                  className={`relative w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-200 ${
                    activeTheme.id === theme.id
                      ? 'scale-110 shadow-lg ring-2 ring-offset-2'
                      : 'hover:scale-105 hover:shadow-md'
                  }`}
                  style={{
                    backgroundColor: THEME_COLORS[theme.id],
                    '--tw-ring-color': THEME_COLORS[theme.id],
                  } as React.CSSProperties}
                  aria-label={`Select ${theme.name} theme`}
                  aria-pressed={activeTheme.id === theme.id}
                >
                  {theme.emoji}
                </button>
              ))}
            </div>

            {/* Active theme label */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300"
              style={{
                backgroundColor: `${activeColor}20`,
                color: activeColor,
              }}
            >
              <span className="text-lg">{activeTheme.emoji}</span>
              {activeTheme.name} Theme
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThemeShowcase;
