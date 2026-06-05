import { BarChart3, CheckCircle2, Map, Sparkles } from 'lucide-react';

const QUEST_POINTS = [
  {
    icon: Map,
    title: 'A visible path',
    description: 'Move through Seed, Sprout, Bloom, Fruit, and Orchard with one clear checkpoint at a time.',
  },
  {
    icon: CheckCircle2,
    title: 'Measured from real sessions',
    description: 'Quests use the same focus, break, streak, and analytics data you already create in FocusFruit.',
  },
  {
    icon: BarChart3,
    title: 'Built around the existing loop',
    description: 'The timer, guided breaks, mood tracking, themes, and blocking stay central. Quests just connect the pieces.',
  },
];

export function QuestUpdate() {
  return (
    <section id="whats-new" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-100 to-pink-100 px-4 py-1.5 text-sm font-semibold text-orange-700">
              <Sparkles className="h-4 w-4" />
              New in this version
            </span>

            <h2 className="mb-5 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Habit Quests give each focus habit a next step.
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-slate-600">
              FocusFruit is still the same Pomodoro timer with guided breaks, patterns, themes, and blocking. Habit Quests add a lightweight journey on top so users know what to practice next.
            </p>

            <div className="space-y-4">
              {QUEST_POINTS.map((point) => {
                const Icon = point.icon;

                return (
                  <div key={point.title} className="flex gap-4 rounded-2xl border border-orange-100 bg-orange-50/60 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-orange-500 shadow-sm">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{point.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{point.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-orange-200/70 via-pink-200/50 to-purple-200/60 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl shadow-orange-100/80">
              <img
                src="/screenshots/quest-page.png"
                alt="FocusFruit Habit Quests page showing stage progress and current stage quests"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuestUpdate;
