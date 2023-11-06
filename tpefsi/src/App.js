import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './componentes/Header';
import Home from './componentes/Home';

function App() {
  return (
    <Router>
      <div>
        <Header />
      
          <Route path="/" exact component={Home} />
          {/* Agrega más rutas según tus necesidades */}
        
      </div>
    </Router>
  );
}

export default App;

