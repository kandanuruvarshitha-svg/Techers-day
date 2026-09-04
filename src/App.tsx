import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { CardPage } from './pages/CardPage';

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<CardPage />} />
      </Routes>
    </Router>
  );
};

export default App;
