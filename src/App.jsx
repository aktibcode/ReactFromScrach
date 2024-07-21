import React from 'react';
// import {Router as BrowserRouter }from 'react-router-dom'  ;
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';

const App = () => {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Le Path * enverra le client vers la page d'erreur */}
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;