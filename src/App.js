import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Register from './components/Register';
import Courses from './components/Courses';
import Reservation from './components/Reservation';
import './App.css';

function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/gym-app-DEDI" element={<Home />} />
          <Route path="/gym-app-DEDI/register" element={<Register />} />
          <Route path="/gym-app-DEDI/courses" element={<Courses />} />
          <Route path="/gym-app-DEDI/reservation" element={<Reservation />} />
        </Routes>
    </Router>
  );
}

export default App;