import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Partners from "./pages/Partners";
import Programs from "./pages/Programs";



function App() {
  return (
    <Router>
      <Switch>
        
        <Route  exact path="/" component={Dashboard} />
        <Route   path="/dashboard" component={Dashboard} />
        <Route  path="/partners" component={Partners} />
        <Route  path="/marketplace" component={Programs} />
        

      </Switch>
    </Router>
  );
}

export default App;
