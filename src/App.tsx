import { useState } from 'react';
import LoginPage from './components/LoginPage';
import ExamPage from './components/ExamPage';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return loggedIn ? <ExamPage /> : <LoginPage onLogin={() => setLoggedIn(true)} />;
}
