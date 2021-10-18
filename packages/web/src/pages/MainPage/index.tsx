import React, {useRef} from 'react';
import { Container, Footer, MainTitle, RowContainer } from './styles';
import SearchBar from '../../components/SearchBar';
// import waves from '../../images/edge-waves.png';
import { useHistory } from 'react-router-dom';
import { useSurrenderApi } from '../../custom-hooks/useSurrenderApi';
import ReactTypingEffect from 'react-typing-effect';
import { createStyles, makeStyles, } from '@material-ui/core';
import { Colors } from '../../utils/Colors';
import Waves from '../../components/Waves';

const useStyles = makeStyles(() =>
  createStyles({
    typingText: {
      fontSize: 35,
      color: Colors.purple,

    }
  })
)

const MainPage: React.FC = () => {

  const classes = useStyles()
  const history = useHistory()
  const [success, error, isLoading, getSummonerByName, doReset] = useSurrenderApi({ path: '/summoner/by-name' })
  const ref = useRef<any>()

  const goToProfilePage = React.useCallback(async (summonerName: string) => {
    getSummonerByName({ summonerName })
  }, [getSummonerByName])

  React.useEffect(() => {
    if (success) {
      history.push(`/profile/${success.id}/${success.puuid}`)
    }
  }, [success, history])
  return (
    <>
      <Container>
        <Container>
          <RowContainer>
            <MainTitle ref={ref}> Surrender.gg </MainTitle>
          </RowContainer>

          <RowContainer style={{ alignSelf: 'center'}}>
            <SearchBar onSearch={goToProfilePage} style={{width: 460}} ></SearchBar>
          </RowContainer>

          <RowContainer style={{ paddingTop: '8%' }}>
            <ReactTypingEffect
              staticText={'Vencer é'}
              text={[
                'aprender.',
                'aprimorar.',
                'nunca desistir.',
                'superar.',
              ]}
              className={classes.typingText}
              speed={100}
              eraseSpeed={50}
            />
          </RowContainer>
        </Container>
      </Container>
      <Footer>
        <Waves />
      </Footer>
    </>
  )
}

export default MainPage;
