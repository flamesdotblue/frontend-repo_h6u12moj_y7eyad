import { Flame } from 'lucide-react';

export default function LogoHeader() {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-lg shadow-emerald-500/30">
        <Flame className="w-6 h-6" />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-extrabold tracking-tight text-emerald-700">
          Verdant Speak
        </h1>
        <p className="text-sm text-emerald-600/80">Practice English, level up daily</p>
      </div>
    </div>
  );
}
