import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componentes/Header';
import Home from './componentes/Home'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Agrega más rutas según tus necesidades */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;