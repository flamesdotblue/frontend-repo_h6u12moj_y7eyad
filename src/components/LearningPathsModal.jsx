import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { X, Lock, BookOpen, Mic, MessageCircle } from 'lucide-react';

const PATHS = [
  {
    key: 'interview',
    title: 'Interview Preparation',
    progress: 42,
    locked: false,
    description:
      'Master common interview questions, concise storytelling, and confident delivery.',
    lessons: [
      'Tell me about yourself',
      'STAR method practice',
      'Behavioral questions drill',
      'Salary & negotiation language',
    ],
    tips: [
      'Keep answers under 90 seconds.',
      'Lead with outcomes and metrics.',
      'Mirror the interviewer’s language.',
    ],
  },
  {
    key: 'daily',
    title: 'Daily Conversations',
    progress: 68,
    locked: false,
    description:
      'Build natural small talk, ask follow-ups, and keep conversations flowing.',
    lessons: [
      'Greetings and openings',
      'Follow-up questions',
      'Clarifying and confirming',
      'Polite disagreement',
    ],
    tips: [
      'Use short supportive phrases.',
      'Ask open-ended questions.',
      'Paraphrase to show active listening.',
    ],
  },
  {
    key: 'fluency',
    title: 'Fluency Practice',
    progress: 23,
    locked: false,
    description:
      'Train rhythm, pace, and filler reduction to sound smooth and confident.',
    lessons: [
      'Shadowing short clips',
      'Filler word cleanup',
      'Pacing and pauses',
      'Rhythm & intonation',
    ],
    tips: [
      'Record and compare your timing.',
      'Replace fillers with silence.',
      'Use downward intonation to conclude.',
    ],
  },
  {
    key: 'pronunciation',
    title: 'Pronunciation Practice',
    progress: 10,
    locked: true,
    description:
      'Focus on difficult sounds, stress patterns, and clear articulation.',
    lessons: [
      'Minimal pairs (ship/sheep)',
      'Word stress patterns',
      'Linking and reductions',
      'Ending sounds drill',
    ],
    tips: [
      'Slow down to speed up later.',
      'Exaggerate mouth shapes at first.',
      'Practice with a mirror for clarity.',
    ],
  },
];

function ModalContent({ onClose }) {
  const [active, setActive] = useState(PATHS[0].key);
  const current = PATHS.find((p) => p.key === active) ?? PATHS[0];

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden />

      {/* Sheet/Card */}
      <div className="relative w-full sm:max-w-3xl sm:rounded-2xl bg-white shadow-2xl border border-white/60 p-5 sm:p-6 max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg sm:text-xl font-semibold text-emerald-900">Learning Paths</h3>
          <button onClick={onClose} aria-label="Close" className="p-2 rounded-lg hover:bg-emerald-50 text-emerald-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {PATHS.map((p) => (
            <button
              key={p.key}
              onClick={() => setActive(p.key)}
              className={`whitespace-nowrap px-3 py-2 rounded-full border text-sm transition-colors ${
                active === p.key
                  ? 'bg-emerald-500 border-emerald-500 text-white'
                  : 'bg-white border-emerald-200 text-emerald-700 hover:bg-emerald-50'
              }`}
            >
              {p.title}
              {p.locked && <Lock className="inline w-3.5 h-3.5 ml-2" />}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-4 grid sm:grid-cols-2 gap-4 sm:gap-6 overflow-y-auto pr-1" style={{ maxHeight: '60vh' }}>
          <div className="border border-emerald-100 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="font-medium text-emerald-900">{current.title}</p>
              <span className="text-xs text-emerald-700">{current.progress}% complete</span>
            </div>
            <div className="h-2 w-full bg-emerald-100 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500" style={{ width: `${current.progress}%` }} />
            </div>
            <p className="text-sm text-emerald-800 mt-3">{current.description}</p>

            <div className="mt-4">
              <div className="flex items-center gap-2 mb-2 text-emerald-800">
                <BookOpen className="w-4 h-4" />
                <p className="font-medium">Sample lessons</p>
              </div>
              <ul className="list-disc pl-5 text-emerald-800 space-y-1 text-sm">
                {current.lessons.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border border-emerald-100 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2 text-emerald-800">
              <MessageCircle className="w-4 h-4" />
              <p className="font-medium">Practice tips</p>
            </div>
            <ul className="space-y-2 text-sm text-emerald-800">
              {current.tips.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 text-white py-2.5 shadow hover:bg-emerald-600 transition-colors">
                <Mic className="w-4 h-4" />
                Start speaking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LearningPathsModal({ open, onClose }) {
  if (!open) return null;
  return ReactDOM.createPortal(<ModalContent onClose={onClose} />, document.body);
}
