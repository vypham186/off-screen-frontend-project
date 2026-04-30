import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Explore from './components/Explore/Explore';
import Quiz from './components/Quiz/Quiz';
import Community from './components/Community/Community';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/community" element={<Community />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;