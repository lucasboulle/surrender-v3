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
import { InfoRounded, PieChart } from '@material-ui/icons'
import { CartesianGrid, BarChart, XAxis, YAxis, Tooltip, Bar } from 'recharts'


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
      name: 'Page A', pv: 2400, amt: 2400,
    },
    {
      name: 'Page B', pv: 1398, amt: 2210,
    },
    {
      name: 'Page C', pv: 9800, amt: 2290,
    },
    {
      name: 'Page D', pv: 3908, amt: 2000,
    },
    {
      name: 'Page E', pv: 4800, amt: 2181,
    },
    {
      name: 'Page F', pv: 3800, amt: 2500,
    },
    {
      name: 'Page G', pv: 4300, amt: 2100,
    },
  ]

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
            <XAxis dataKey="name"  />
            <YAxis />
            <Tooltip />
            <Bar dataKey="pv" fill="#8884d8" />
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
                    <IconButton className={classes.icon} onClick={() => null}>
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
