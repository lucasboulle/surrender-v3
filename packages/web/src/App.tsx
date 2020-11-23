import React from 'react';
import './App.css';
import GlobalStyle from './styles/global';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Profile from './pages/Profile';
import MainPage from './pages/MainPage';
import Match from './pages/Match';
import Champion from './pages/Champion';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/main" exact component={MainPage} />
          <Route path="/profile/:accountId" component={Profile} />
          <Route path="/match/:matchId" component={Match} />
          <Route path="/champion" component={Champion} />
        </Switch>
        <Redirect to="/match/2118616948"/>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
