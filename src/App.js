import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Header />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </Router>
  );
}

export default App;
