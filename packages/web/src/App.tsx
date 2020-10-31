import React from 'react';
import './App.css';
import GlobalStyle from './styles/global';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Profile from './pages/Profile';
import MainPage from './pages/MainPage';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/main" exact component={MainPage} />
          <Route path="/profile" component={Profile} />
        </Switch>
        <Redirect to="/profile"/>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
