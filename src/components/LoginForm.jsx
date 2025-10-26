import { useState } from 'react';
import { User, Lock, Eye, EyeOff } from 'lucide-react';

export default function LoginForm({ onLogin, error }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ username, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-emerald-800 mb-1">Username</label>
        <div className={`flex items-center gap-2 rounded-xl ring-1 px-3 py-2 bg-white/90 backdrop-blur-sm ${error ? 'ring-red-300' : 'ring-emerald-200 focus-within:ring-emerald-400'}`}>
          <User className="w-4 h-4 text-emerald-600" />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="ava green"
            className="w-full bg-transparent outline-none placeholder:text-emerald-400 text-emerald-900"
            autoComplete="username"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-emerald-800 mb-1">Password</label>
        <div className={`flex items-center gap-2 rounded-xl ring-1 px-3 py-2 bg-white/90 backdrop-blur-sm ${error ? 'ring-red-300' : 'ring-emerald-200 focus-within:ring-emerald-400'}`}>
          <Lock className="w-4 h-4 text-emerald-600" />
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="abc 123"
            className="w-full bg-transparent outline-none placeholder:text-emerald-400 text-emerald-900"
            autoComplete="current-password"
          />
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            className="text-emerald-600 hover:text-emerald-700"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold py-2.5 shadow-lg shadow-emerald-500/30 hover:from-emerald-600 hover:to-green-700 transition"
      >
        Sign in
      </button>

      <p className="text-xs text-center text-emerald-600/80">
        Hint: username “ava green”, password “abc 123”
      </p>
    </form>
  );
}
