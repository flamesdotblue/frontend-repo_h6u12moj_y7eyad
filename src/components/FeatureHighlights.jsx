import { Mic, Trophy, ShieldCheck } from 'lucide-react';

export default function FeatureHighlights() {
  const items = [
    {
      icon: <Mic className="w-5 h-5 text-emerald-600" />,
      title: 'Speak-first design',
      desc: 'Hold to speak and get instant feedback (coming soon).',
    },
    {
      icon: <Trophy className="w-5 h-5 text-emerald-600" />,
      title: 'Gamified progress',
      desc: 'Earn XP, keep streaks, unlock badges.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      title: 'Private by default',
      desc: 'Your practice stays on your device unless you share.',
    },
  ];

  return (
    <ul className="grid gap-3 sm:grid-cols-3">
      {items.map((item, idx) => (
        <li
          key={idx}
          className="rounded-xl ring-1 ring-emerald-200/70 bg-white/70 backdrop-blur-sm p-3 flex items-start gap-3"
        >
          <div className="shrink-0 p-2 rounded-lg bg-emerald-50 ring-1 ring-emerald-100">
            {item.icon}
          </div>
          <div>
            <p className="font-semibold text-emerald-800">{item.title}</p>
            <p className="text-sm text-emerald-600/80">{item.desc}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
