import React from 'react'
import {
  Container,
  ProfileInfo,
  ProfileData,
  ProfileImage,
  RankEmblemImage,
  ContentContainer,
  PlayedChampions,
  ChampionIcon,
  MatchList,
  ImageContainer
} from './styles'
import {
  createStyles,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  LinearProgress,
  makeStyles,
  Theme,
} from '@material-ui/core'
import challengerIcon from '../../images/challenger-icon.jpeg'
import rankedEmblem from '../../images/ranked-emblems/Emblem_Master.png'
import rivenExample from '../../images/riven-example.jpeg'
import rivenExampleIcon from '../../images/riven-example-icon.jpeg'
import blueWaves from '../../images/blue-waves.png'
import { InfoRounded } from '@material-ui/icons'
import { CartesianGrid, BarChart, XAxis, YAxis, Tooltip, Bar } from 'recharts'
import { useHistory } from 'react-router-dom'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper
    },
    gridList: {
      width: '100%'
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)'
    },
    progressBar: {
      maxHeight: 0,
      minWidth: '99%'
    },
    radiusChart: {
      width: 50
    }

  })
)

const Profile: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()
  const [matchList, setMatchList] = React.useState<any>([
    { dale: 'dale' },
    { dale: 'dale' },
    { dale: 'dale' },
    { dale: 'dale' },
    { dale: 'dale' },
    { dale: 'dale' }
  ])

  const data = [
    {
      name: 'Riven', pv: 70, amt: 2400,
    },
    {
      name: 'Riven', pv: 69, amt: 2210,
    },
    {
      name: 'Outra Riven foda-se', pv: 42, amt: 2290,
    },
  ]

  const goToMatchPage = React.useCallback(() => {
    history.push('/match')
  }, [])

  const fetchMatchList = React.useCallback(
    async (term?: string) => {
      const matchList = null
      setMatchList(matchList)
    },
    [matchList]
  )

  return (
    <Container>
      <ImageContainer>
        <img src={blueWaves} style={{rotate: '180deg', background: '#4c566a'}} />
      </ImageContainer>

      <ProfileData>
        <ContentContainer>
          <RankEmblemImage src={rankedEmblem} />
          <ProfileInfo>Master</ProfileInfo>
          <ProfileInfo>670 W | 700 L</ProfileInfo>
        </ContentContainer>

        <ContentContainer>
          <ProfileImage src={challengerIcon} />
          <ProfileInfo>Lucas Boulle</ProfileInfo>
          <ProfileInfo>378</ProfileInfo>
        </ContentContainer>

        <ContentContainer>
          <BarChart width={400} height={200} data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke='#81a1c1' />
            <YAxis stroke='#81a1c1' />
            <Tooltip />
            <Bar dataKey="pv" fill='#81a1c1' />
          </BarChart>
        </ContentContainer>
      </ProfileData>

      <PlayedChampions>
        <ContentContainer>
          <ChampionIcon src={rivenExampleIcon} />
          <ProfileInfo>Master</ProfileInfo>
        </ContentContainer>

        <ContentContainer>
          <ChampionIcon src={rivenExampleIcon} />
          <ProfileInfo>Master</ProfileInfo>
        </ContentContainer>

        <ContentContainer>
          <ChampionIcon src={rivenExampleIcon} />
          <ProfileInfo>Master</ProfileInfo>
        </ContentContainer>
      </PlayedChampions>

      <MatchList> 
        <GridList cellHeight={180} className={classes.gridList} cols={3}>
          {matchList ? (
            matchList.map((match: any, index: number) => (
              <GridListTile key={index}>
                <img src={rivenExample} />
                <GridListTileBar
                  title={'3/7/9 - 50:12'}
                  subtitle={'Solo/duo'}
                  actionIcon={
                    <IconButton className={classes.icon} onClick={goToMatchPage}>
                      <InfoRounded />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))
          ) : (
            <LinearProgress className={classes.progressBar} />
          )}
        </GridList>
      </MatchList>
    </Container>
  )
}

export default Profile
