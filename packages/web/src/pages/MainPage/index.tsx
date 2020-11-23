import React from 'react';
import { Container, MainTitle, RowContainer } from './styles';
import SearchBar from '../../components/SearchBar';
import waves from '../../images/gray-waves.png';
import { useHistory } from 'react-router-dom';
import { useSurrenderApi } from '../../custom-hooks/useSurrenderApi';

const MainPage: React.FC = () => {

  const history = useHistory()
  const [searchName, setSearchName] = React.useState()
  const [success, error, isLoading, getSummonerByName] = useSurrenderApi({path: '/summoner/by-name'})

  const goToProfilePage = React.useCallback(async (summonerName: string) =>  {
    // @ts-ignore
    getSummonerByName({summonerName})
  }, [])

  React.useEffect(() => {
    if(success) {
      // @ts-ignore
      history.push(`/profile/${success.accountId}`)  
    }
  }, [success])
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

export default MainPage;