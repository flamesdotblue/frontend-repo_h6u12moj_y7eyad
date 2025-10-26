import React from 'react';
import { Home, Mic, Trophy, User } from 'lucide-react';

const tabs = [
  { key: 'dashboard', label: 'Dashboard', icon: Home },
  { key: 'speak', label: 'Speak', icon: Mic },
  { key: 'rewards', label: 'Rewards', icon: Trophy },
  { key: 'profile', label: 'Profile', icon: User },
];

export default function NavigationBar({ activeTab, onChange }) {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="backdrop-blur-xl bg-white/70 shadow-lg rounded-full px-4 py-2 flex items-center gap-2 border border-white/60">
        {tabs.map(({ key, label, icon: Icon }) => {
          const active = activeTab === key;
          return (
            <button
              key={key}
              onClick={() => onChange(key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                active ? 'bg-emerald-500 text-white' : 'text-emerald-700 hover:bg-emerald-100'
              }`}
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
              <span className="hidden sm:block text-sm font-medium">{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
