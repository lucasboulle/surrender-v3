import React from 'react';
import './App.css';
import GlobalStyle from './styles/global';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Profile from './pages/Profile';
import MainPage from './pages/MainPage';
import Match from './pages/Match';
import Champion from './pages/Champion';
import {Helmet} from 'react-helmet';
import surrenderIcon from './images/surrender-logo.png'

function App() {
  return (
    <>
      <Helmet> 
        <meta charSet="utf-8" />
        <title>{'surrender.gg'}</title>
      </Helmet>
      <Router>
        <Switch>
          <Route path="/main" exact component={MainPage} />
          <Route path="/profile/:accountId" component={Profile} />
          <Route path="/match/:matchId" component={Match} />
          <Route path="/champion/:championId" component={Champion} />
        </Switch>
        <Redirect to="/main"/>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
