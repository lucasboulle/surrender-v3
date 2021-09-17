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
  const [searchName, setSearchName] = React.useState()
  const [success, error, isLoading, getSummonerByName] = useSurrenderApi({ path: '/summoner/by-name' })
  const ref = useRef<any>()

  const goToProfilePage = React.useCallback(async (summonerName: string) => {
    // @ts-ignore
    getSummonerByName({ summonerName })
  }, [])

  React.useEffect(() => {
    console.log('🚀 ~ file: index.tsx ~ line 39 ~ React.useEffect ~ success', success)
    if (success) {
      // @ts-ignore
      history.push(`/profile/${success.accountId}`)
    }
  }, [success])

  React.useEffect(() => {
    console.log("width", ref?.current?.offsetWidth);
  }, []);
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
