import React, { useState } from 'react';
import Dashboard from './components/Dashboard.jsx';
import Rewards from './components/Rewards.jsx';
import Profile from './components/Profile.jsx';
import NavigationBar from './components/NavigationBar.jsx';

export default function App() {
  const [tab, setTab] = useState('dashboard');

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700">
      {/* Soft gradient overlay for depth without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.15),transparent_60%)]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {tab === 'dashboard' && <Dashboard name="Ava" />}
        {tab === 'rewards' && <Rewards />}
        {tab === 'profile' && <Profile />}
        {tab === 'speak' && (
          <div className="min-h-screen pb-28 px-4 sm:px-8 pt-8">
            <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-2">Speak</h1>
            <p className="text-emerald-100">Practice freely and get instant feedback.</p>
            <div className="mt-10 flex items-center justify-center">
              <button className="relative group w-48 h-48 rounded-full grid place-items-center bg-white shadow-xl border border-white/60">
                <div className="absolute inset-0 rounded-full bg-emerald-400/30 blur-2xl animate-pulse" />
                <div className="relative z-10 p-7 rounded-full bg-emerald-500 text-white shadow-lg">
                  <svg viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor" aria-hidden>
                    <path d="M12 14a4 4 0 0 0 4-4V5a4 4 0 1 0-8 0v5a4 4 0 0 0 4 4Zm7-4a1 1 0 1 0-2 0 5 5 0 1 1-10 0 1 1 0 0 0-2 0 7 7 0 0 0 6 6.92V20H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-3.08A7 7 0 0 0 19 10Z" />
                  </svg>
                </div>
                <span className="absolute -bottom-7 text-white/90 text-sm">Hold to speak</span>
              </button>
            </div>
            <div className="mt-10 bg-white/70 backdrop-blur rounded-2xl p-5 border border-white/60">
              <h2 className="text-emerald-900 font-semibold mb-2">Tips</h2>
              <ul className="list-disc pl-5 text-emerald-800 text-sm space-y-1">
                <li>Speak clearly and naturally.</li>
                <li>Short sentences help with accuracy.</li>
                <li>Every word makes you stronger.</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      <NavigationBar activeTab={tab} onChange={setTab} />
    </div>
  );
}
