import { useState } from 'react';
import LogoHeader from './components/LogoHeader.jsx';
import LoginForm from './components/LoginForm.jsx';
import AlertMessage from './components/AlertMessage.jsx';
import FeatureHighlights from './components/FeatureHighlights.jsx';

export default function App() {
  const [error, setError] = useState('');
  const [isAuthed, setIsAuthed] = useState(false);

  const handleLogin = ({ username, password }) => {
    // Exact match including spaces
    const ok = username === 'ava green' && password === 'abc 123';
    if (ok) {
      setIsAuthed(true);
      setError('');
    } else {
      setIsAuthed(false);
      setError('Invalid credentials. Please use username "ava green" and password "abc 123".');
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-emerald-50 via-emerald-100 to-emerald-50 text-emerald-900">
      <div className="max-w-md mx-auto px-4 py-10">
        <LogoHeader />

        <div className="mt-8 rounded-2xl bg-white/80 backdrop-blur-md p-6 ring-1 ring-emerald-200 shadow-xl shadow-emerald-200/40">
          {!isAuthed ? (
            <>
              <h2 className="text-xl font-semibold text-emerald-800 mb-1">Welcome back</h2>
              <p className="text-sm text-emerald-600/80 mb-4">
                Sign in to continue your green journey.
              </p>

              {error && (
                <div className="mb-3">
                  <AlertMessage type="error" message={error} />
                </div>
              )}

              <LoginForm onLogin={handleLogin} error={!!error} />
            </>
          ) : (
            <div className="space-y-4">
              <AlertMessage type="success" message="Signed in successfully!" />
              <div className="rounded-xl p-4 bg-gradient-to-br from-emerald-50 to-green-50 ring-1 ring-emerald-200">
                <h3 className="font-semibold text-emerald-800">Hello, Ava!</h3>
                <p className="text-sm text-emerald-700/80">
                  You’re now logged in. Explore lessons, track your streak, and earn rewards.
                </p>
              </div>
              <button
                className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold py-2.5 shadow-lg shadow-emerald-500/30 hover:from-emerald-600 hover:to-green-700 transition"
                onClick={() => setIsAuthed(false)}
              >
                Sign out
              </button>
            </div>
          )}
        </div>

        <div className="mt-8">
          <FeatureHighlights />
        </div>

        <p className="mt-8 text-center text-xs text-emerald-600/70">
          By continuing you agree to our Terms and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
