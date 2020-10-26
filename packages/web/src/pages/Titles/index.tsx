import React from 'react';
import { Container, MainTitle, RowContainer } from './styles';
import SearchBar from '../../components/SearchBar';
import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core';
import waves from '../../images/gray-waves.png'
import { useHistory } from 'react-router-dom'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 1450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
    progressBar: {
      maxHeight: 0,
      minWidth: '99%'

    },
    image: {
      borderRadius: 0
    }

  }),
)

const Titles: React.FC = () => {

  const history = useHistory()
  const goToProfilePage = () =>  {
    history.push('/about')
  }

  const classes = useStyles()
  return (
    <>
      <Container>
        <RowContainer>
          <MainTitle> Surrender.gg </MainTitle>
        </RowContainer>
        <RowContainer>
          <SearchBar onSearch={() => { console.log('yo');  goToProfilePage()}}></SearchBar>
        </RowContainer>
      </Container>
      <Container>
        <img src={waves} style={{margin: 0}} />
      </Container>
    </>
  )
}

export default Titles;