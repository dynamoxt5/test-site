import { useState } from 'react';

interface LoginPageProps {
  onLogin: () => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'rehanxt5' && password === 'rehanxt5') {
      onLogin();
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm border border-blue-100">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Exam Portal</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => { setUsername(e.target.value); setError(''); }}
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-blue-400 bg-gray-50"
              placeholder="Enter username"
            />
          </div>
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(''); }}
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-blue-400 bg-gray-50"
              placeholder="Enter password"
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-400 text-white py-2 rounded-md hover:bg-blue-500 transition font-medium"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
