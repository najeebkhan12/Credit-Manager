import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import AppNavbar from './components/layouts/AppNavbar';

function App() {
  return (
    <Router>
      <div className="App">      
        <AppNavbar />
        <div className="container">
          <h1> Credit Manager App </h1>
        </div>
      </div>
    </Router>    
  );
}

export default App;
