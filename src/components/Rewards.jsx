import React from 'react';
import { Flame, Star, Trophy, Award } from 'lucide-react';

function generateGridData(days = 84) {
  // Create an array of performance levels: 0(min attempt),1(goal met),2(strong),3(milestone)
  return Array.from({ length: days }, (_, i) => {
    // simple pattern for demo
    if ((i + 1) % 21 === 0) return 3;
    if ((i + 1) % 7 === 0) return 2;
    if ((i + 3) % 5 === 0) return 1;
    return 0;
  });
}

const COLORS = {
  0: 'bg-emerald-100', // Light Mint
  1: 'bg-emerald-300', // Leaf Green
  2: 'bg-emerald-500', // Forest Green
  3: 'bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.6)]', // Emerald Glow
};

export default function Rewards() {
  const data = generateGridData();

  return (
    <div className="min-h-screen pb-28 px-4 sm:px-8 pt-8">
      <header className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-semibold text-white">Rewards</h1>
        <p className="text-emerald-100 mt-1">Progress that feels good — not chaos.</p>
      </header>

      <div className="grid gap-6">
        {/* Daily Practice Grid */}
        <section className="bg-white rounded-2xl p-5 shadow-lg border border-white/60">
          <h2 className="text-lg font-semibold text-emerald-900 mb-4">Daily Practice</h2>
          <div className="flex flex-wrap gap-2">
            {/* 12 weeks x 7 days */}
            <div className="grid grid-cols-12 gap-2">
              {Array.from({ length: 12 }).map((_, week) => (
                <div key={week} className="grid grid-rows-7 gap-2">
                  {Array.from({ length: 7 }).map((__, day) => {
                    const idx = week * 7 + day;
                    const level = data[idx] ?? 0;
                    const color = COLORS[level];
                    const tooltip = `Accuracy: ${60 + level * 10}%\nDuration: ${5 + level * 3} min\nXP: ${10 + level * 15}`;
                    return (
                      <div
                        key={`${week}-${day}`}
                        title={tooltip}
                        className={`w-4 h-4 rounded-sm ${color} transition-transform hover:scale-105`}
                        aria-label={tooltip}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs text-emerald-700 mt-3">Tip: Hover tiles to see details. Colors stay consistent — no hover color change.</p>
        </section>

        {/* Badges + XP + Streak */}
        <section className="grid sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-5 shadow-lg border border-white/60">
            <div className="flex items-center gap-3">
              <Trophy className="w-6 h-6 text-emerald-600" />
              <p className="text-emerald-900 font-medium">Badges</p>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <span className="p-2 rounded-xl bg-emerald-50 text-emerald-600"><Award className="w-5 h-5" /></span>
              <span className="p-2 rounded-xl bg-emerald-50 text-emerald-600"><Star className="w-5 h-5" /></span>
              <span className="p-2 rounded-xl bg-emerald-50 text-emerald-600"><Trophy className="w-5 h-5" /></span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-lg border border-white/60">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6 text-emerald-600" />
                <p className="text-emerald-900 font-medium">XP Progress</p>
              </div>
              <span className="text-xs text-emerald-600">Level 6</span>
            </div>
            <div className="h-2 w-full bg-emerald-100 rounded-full overflow-hidden mt-4">
              <div className="h-full bg-emerald-500" style={{ width: '65%' }} />
            </div>
            <p className="text-sm text-emerald-700 mt-2">850 / 1300 XP</p>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-lg border border-white/60">
            <div className="flex items-center gap-3">
              <Flame className="w-6 h-6 text-emerald-600" />
              <p className="text-emerald-900 font-medium">Streak</p>
            </div>
            <p className="text-emerald-900 text-2xl font-semibold mt-2">5 days 🔥</p>
            <p className="text-sm text-emerald-700">Confetti triggers on milestones!</p>
          </div>
        </section>
      </div>
    </div>
  );
}
