import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Homepage from './Homepage'


function App() {
  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link>
        
      </nav>
      <div className="App">
        <Route exact path='/' component={Homepage} />
      </div>
    </Router>
  );
}

export default App;