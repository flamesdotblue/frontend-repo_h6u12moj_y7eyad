import { CheckCircle2, AlertCircle } from 'lucide-react';

export default function AlertMessage({ type = 'error', message }) {
  const isSuccess = type === 'success';
  return (
    <div
      className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm ${
        isSuccess
          ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200'
          : 'bg-red-50 text-red-700 ring-1 ring-red-200'
      }`}
      role="alert"
    >
      {isSuccess ? (
        <CheckCircle2 className="w-4 h-4" />
      ) : (
        <AlertCircle className="w-4 h-4" />
      )}
      <span>{message}</span>
    </div>
  );
}
