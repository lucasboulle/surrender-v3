import React from 'react';
import './App.css';
import GlobalStyle from './styles/global';
import Titles from './pages/Titles';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import About from './pages/About';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/titles" exact component={Titles} />
          <Route path="/about" component={About} />
        </Switch>
        <Redirect to="/titles"/>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
