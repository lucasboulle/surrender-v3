import React from 'react';
import './App.css';
import GlobalStyle from './styles/global';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Profile from './pages/Profile';
import MainPage from './pages/MainPage';
import Match from './pages/Match';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/main" exact component={MainPage} />
          <Route path="/profile" component={Profile} />
          <Route path="/match" component={Match} />
        </Switch>
        <Redirect to="/match"/>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
