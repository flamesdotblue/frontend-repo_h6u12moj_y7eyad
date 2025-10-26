import React from 'react';
import { Flame, Star, Mic, ChevronRight, CheckCircle } from 'lucide-react';

const paths = [
  { title: 'Interview Preparation', progress: 42, locked: false },
  { title: 'Daily Conversations', progress: 68, locked: false },
  { title: 'Fluency Practice', progress: 23, locked: false },
  { title: 'Pronunciation Practice', progress: 10, locked: true },
];

const weeklyGoals = [
  { text: 'Speak for 5 minutes daily', done: true },
  { text: 'Maintain a 7-day streak', done: false },
  { text: 'Improve pronunciation by 5%', done: false },
];

export default function Dashboard({ name = 'Learner' }) {
  return (
    <div className="min-h-screen pb-28">
      {/* Welcome Header */}
      <header className="px-4 sm:px-8 pt-8">
        <h1 className="text-2xl sm:text-3xl font-semibold text-white">
          Hello {name} <span role="img" aria-label="seedling">🌱</span>
        </h1>
        <p className="text-emerald-100 mt-1">Your fluency is taking root.</p>
      </header>

      <main className="px-4 sm:px-8 grid gap-6 mt-6">
        {/* Streak + XP */}
        <section className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-5 shadow-lg border border-white/60">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
                  <Flame className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-emerald-700">Current streak</p>
                  <p className="text-xl font-semibold text-emerald-900">5 days</p>
                </div>
              </div>
              <span className="text-xs text-emerald-600">Next milestone: 7 days</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-lg border border-white/60">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
                  <Star className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-emerald-700">XP total</p>
                  <p className="text-xl font-semibold text-emerald-900">1,240</p>
                </div>
              </div>
              <span className="text-xs text-emerald-600">Level 6</span>
            </div>
          </div>
        </section>

        {/* Big Speak Button */}
        <section className="flex items-center justify-center">
          <button className="relative group w-44 h-44 rounded-full grid place-items-center bg-white shadow-xl border border-white/60">
            <div className="absolute inset-0 rounded-full bg-emerald-400/30 blur-2xl animate-pulse" />
            <div className="relative z-10 p-6 rounded-full bg-emerald-500 text-white shadow-lg">
              <Mic className="w-10 h-10" />
            </div>
            <span className="absolute -bottom-6 text-white/90 text-sm">Tap to speak</span>
          </button>
        </section>

        {/* Learning Paths Carousel */}
        <section className="bg-white rounded-2xl p-5 shadow-lg border border-white/60">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-emerald-900">Learning Paths</h2>
            <button className="flex items-center gap-1 text-emerald-700 text-sm">
              View all <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {paths.map((p) => (
              <div key={p.title} className="min-w-[220px] bg-white border border-emerald-100 rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-emerald-900">{p.title}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${p.locked ? 'bg-emerald-100 text-emerald-600' : 'bg-emerald-50 text-emerald-700'}`}>{p.locked ? 'Locked' : 'Open'}</span>
                </div>
                <div className="h-2 w-full bg-emerald-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500" style={{ width: `${p.progress}%` }} />
                </div>
                <p className="text-xs text-emerald-700 mt-2">{p.progress}% complete</p>
              </div>
            ))}
          </div>
        </section>

        {/* Weekly Goals */}
        <section className="bg-white rounded-2xl p-5 shadow-lg border border-white/60">
          <h2 className="text-lg font-semibold text-emerald-900 mb-3">Weekly Goals</h2>
          <ul className="space-y-3">
            {weeklyGoals.map((g) => (
              <li key={g.text} className="flex items-center gap-3">
                <span className={`rounded-full p-1 ${g.done ? 'bg-emerald-500 text-white' : 'bg-emerald-100 text-emerald-700'}`}>
                  <CheckCircle className="w-5 h-5" />
                </span>
                <span className={`text-emerald-900 ${g.done ? 'line-through opacity-70' : ''}`}>{g.text}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-emerald-700 mt-4">Every word makes you stronger.</p>
        </section>
      </main>
    </div>
  );
}
