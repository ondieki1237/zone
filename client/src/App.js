import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';  // Adjust the path based on your folder structure
import Signup from './components/Signup';  // Adjust the path based on your folder structure
import Login from './components/Login';  // Adjust the path based on your folder structure

function App() {
    return (
    <Router>
      <div className="App">
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/" element={<Signup />} />
            <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
    );
}

export default App;
