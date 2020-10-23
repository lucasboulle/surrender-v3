import React from 'react';
import './App.css';
import GlobalStyle from './styles/global';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Container } from './styles/Container';
import { HeaderTitleContainer } from './styles/HeaderTitleContainer';
import Titles from './pages/Titles';

const titleStyle = {
  fontSize: 18, 
  color: '#fff', 
  textDecoration: 'none'
}

function App() {
  return (
    <>
      <Router>
        <Container>
          <h1>Anilist</h1>
          <HeaderTitleContainer>
            <Link to="/titles" style={titleStyle}>Titles</Link>
          </HeaderTitleContainer>
        </Container>
        <Switch>
          <Route path="/titles" exact component={Titles} />
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
