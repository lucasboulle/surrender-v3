import React from 'react';
import './App.css';
import GlobalStyle from './styles/global';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Profile from './pages/Profile';
import MainPage from './pages/MainPage';
import Match from './pages/Match';
import Champion from './pages/Champion';
import {Helmet} from 'react-helmet';
import '@dracula/dracula-ui/styles/dracula-ui.css'
function App() {
  return (
    <>
      <Helmet> 
        <meta charSet="utf-8" />
        <title>{'surrender.gg'}</title>
      </Helmet>
      <Router >
        <Switch>
          <Route path="/main" component={MainPage} />
          <Route path="/profile/:id/:puuid" component={Profile} />
          <Route path="/match" component={Match} />
          <Route path="/champion/:championId" component={Champion} />
        </Switch>
        {/* <Redirect to="/main"/> */}
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
