import React from 'react';
import { Container, MainTitle, RowContainer } from './styles';
import SearchBar from '../../components/SearchBar';
import waves from '../../images/gray-waves.png';
import { useHistory } from 'react-router-dom';

const Titles: React.FC = () => {

  const history = useHistory()
  const goToProfilePage = () =>  {
    history.push('/about')
  }
  return (
    <>
      <Container>
        <RowContainer>
          <MainTitle> Surrender.gg </MainTitle>
        </RowContainer>
        <RowContainer>
          <SearchBar onSearch={goToProfilePage}></SearchBar>
        </RowContainer>
      </Container>
      <Container>
        <img src={waves} style={{margin: 0}} alt="waves" />
      </Container>
    </>
  )
}

export default Titles;