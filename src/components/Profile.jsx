import React from 'react';
import { User, Target, Leaf } from 'lucide-react';

const targets = [
  'Speak 5 mins a day',
  'Maintain 7-day streak',
  'Improve pronunciation by 5%',
];

const progress = [
  { label: 'Hours practiced', value: 22, max: 50 },
  { label: 'Best streak', value: 12, max: 30 },
  { label: 'XP total', value: 1240, max: 2500 },
];

const learningPaths = [
  { title: 'Interview Preparation', progress: 42, locked: false },
  { title: 'Daily Conversations', progress: 68, locked: false },
  { title: 'Fluency Practice', progress: 23, locked: false },
  { title: 'Pronunciation Practice', progress: 10, locked: true },
];

export default function Profile() {
  return (
    <div className="min-h-screen pb-28 px-4 sm:px-8 pt-8 grid gap-6">
      {/* User Info Card */}
      <section className="bg-white rounded-2xl p-5 shadow-lg border border-white/60 flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 grid place-items-center text-white shadow-lg">
          <User className="w-8 h-8" />
        </div>
        <div>
          <p className="text-sm text-emerald-700">Welcome back,</p>
          <h2 className="text-xl font-semibold text-emerald-900">Ava Green</h2>
        </div>
      </section>

      {/* Progress Overview */}
      <section className="bg-white rounded-2xl p-5 shadow-lg border border-white/60">
        <h3 className="text-lg font-semibold text-emerald-900 mb-4">Progress Overview</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {progress.map((p) => {
            const pct = Math.min(100, Math.round((p.value / p.max) * 100));
            return (
              <div key={p.label} className="border border-emerald-100 rounded-xl p-4">
                <p className="text-sm text-emerald-700 mb-2">{p.label}</p>
                <div className="h-2 w-full bg-emerald-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500" style={{ width: `${pct}%` }} />
                </div>
                <p className="text-xs text-emerald-700 mt-2">{p.value} / {p.max}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Targets */}
      <section className="bg-white rounded-2xl p-5 shadow-lg border border-white/60">
        <div className="flex items-center gap-2 mb-3">
          <Target className="w-5 h-5 text-emerald-600" />
          <h3 className="text-lg font-semibold text-emerald-900">Targets</h3>
        </div>
        <ul className="grid sm:grid-cols-3 gap-3">
          {targets.map((t) => (
            <li key={t} className="flex items-center gap-2 border border-emerald-100 rounded-xl px-3 py-2">
              <span className="p-1 rounded-lg bg-emerald-50 text-emerald-600"><Leaf className="w-4 h-4" /></span>
              <span className="text-emerald-900 text-sm">{t}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Learning Paths Selection */}
      <section className="bg-white rounded-2xl p-5 shadow-lg border border-white/60">
        <h3 className="text-lg font-semibold text-emerald-900 mb-3">Learning Paths</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {learningPaths.map((p) => (
            <div key={p.title} className="border border-emerald-100 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium text-emerald-900">{p.title}</p>
                <span className={`text-xs px-2 py-0.5 rounded-full ${p.locked ? 'bg-emerald-100 text-emerald-600' : 'bg-emerald-50 text-emerald-700'}`}>{p.locked ? 'Locked' : 'Unlocked'}</span>
              </div>
              <div className="h-2 w-full bg-emerald-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500" style={{ width: `${p.progress}%` }} />
              </div>
              <p className="text-xs text-emerald-700 mt-2">{p.progress}% complete</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
