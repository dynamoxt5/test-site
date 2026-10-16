import { useState } from 'react';
import LoginPage from './components/LoginPage';
import ExamPage from './components/ExamPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
  }

  return <ExamPage />;
}

export default App;
