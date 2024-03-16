import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Schemes from './pages/Schemes';
import './styles.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Schemes />} />
      </Routes>
    </Router>
  );
}

export default App;
