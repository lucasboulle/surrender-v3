import React from 'react';
import { Container } from './styles';
import SearchBar from '../../components/SearchBar';

const About: React.FC = () => {
  return (
      <Container>
        <SearchBar onSearch={() => {}} />
      </Container>
  )
}

export default About;