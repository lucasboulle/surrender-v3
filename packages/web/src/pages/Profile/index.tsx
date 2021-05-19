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
import rankedEmblem from '../../images/ranked-emblems/Emblem_Platinum.png'
import rivenExample from '../../images/riven-example.jpeg'
import rivenExampleIcon from '../../images/riven-example-icon.jpeg'
import blueWaves from '../../images/blue-waves.png'
import { InfoRounded } from '@material-ui/icons'
import { CartesianGrid, BarChart, XAxis, YAxis, Tooltip, Bar } from 'recharts'
import { useHistory, useParams } from 'react-router-dom'
import { useSurrenderApi } from '../../custom-hooks/useSurrenderApi'
import { IRiotSummoner } from '../../interfaces/IRiotSummoner'
import { timestampToMatchTime } from '../../utils/timestampToMatchTime'
import { useDdragonDataSet } from '../../custom-hooks/useDdragonDataSet'
import { buildChampionUrl } from '../../utils/buildChampionUrl'


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
    },
  })
)

const Profile: React.FC = () => {

  //@ts-ignore
  const { accountId } = useParams()
  const classes = useStyles()
  const history = useHistory()

  const [getSummonerByAccountSuccess, errorSummoner, isLoadingSummoner, getSummonerByAccount] = useSurrenderApi({ path: '/summoner/by-account'})
  const [getMatchListByAccountSuccess, errorMatchList, isLoadingMatchList, getMatchListByAccount] = useSurrenderApi({ path: '/matchlist/by-account'})
  const [getDdragonDataSetSuccess, getDdragonDataSetErrorm, isLoadingDdragonDataSet, getDdragonDataSet] = useDdragonDataSet()
  const [summoner, setSummoner] = React.useState<IRiotSummoner>()
  const [matchList, setMatchList] = React.useState<any>()
  const [dataset, setDataset] = React.useState()

  React.useLayoutEffect(() => {
    //@ts-ignore
    getSummonerByAccount({ summonerAccount: accountId })
    //@ts-ignore
    getMatchListByAccount({ summonerAccount: accountId })
    //@ts-ignore
    getDdragonDataSet()
  }, [])


  

  React.useEffect(() => {
    if (getSummonerByAccountSuccess) {
      //@ts-ignore
      setSummoner(getSummonerByAccountSuccess)
    }
  }, [getSummonerByAccountSuccess])

  React.useEffect(() => {
    if (getMatchListByAccountSuccess) {
      //@ts-ignore
      setMatchList(getMatchListByAccountSuccess.matches.slice(0, 6))
    }
  }, [getMatchListByAccountSuccess])

  React.useEffect(() => {
    if (getDdragonDataSetSuccess) {
      //@ts-ignore
      setDataset(getDdragonDataSetSuccess.data)
    }
  }, [getDdragonDataSetSuccess])

  const goToChampionPage = () => {
    history.push(`/champion/92`)
  }

  const data = [
    {
      name: 'Riven', pv: 70, amt: 2400,
    },
    {
      name: 'Aatrox', pv: 69, amt: 2210,
    },
    {
      name: 'Fiora', pv: 42, amt: 2290,
    },
  ]

  const goToMatchPage = React.useCallback((matchId: string) => {
    history.push(`/match/${matchId}`)
  }, [])

  return (
    <Container>
      <ImageContainer>
        <img src={blueWaves} style={{ rotate: '180deg', background: '#4c566a' }} />
      </ImageContainer>

      <ProfileData>
        <ContentContainer>
          <RankEmblemImage src={rankedEmblem} />
          <ProfileInfo>{summoner?.tier ? `${summoner?.tier} ${summoner?.rank}` : 'loading'}</ProfileInfo>
          <ProfileInfo>{summoner ? `${summoner?.wins} W | ${summoner?.losses} L ` : ''}</ProfileInfo>
        </ContentContainer>

        <ContentContainer>
          <ProfileImage src={challengerIcon} />
          <ProfileInfo>{summoner?.name ?? 'loading'}</ProfileInfo>
          <ProfileInfo>{summoner?.summonerLevel}</ProfileInfo>
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
          <ProfileInfo>Riven</ProfileInfo>
        </ContentContainer>

        <ContentContainer>
          <ChampionIcon src={rivenExampleIcon} />
          <ProfileInfo>Riven</ProfileInfo>
        </ContentContainer>

        <ContentContainer onClick={goToChampionPage}>
          <ChampionIcon src={rivenExampleIcon} />
          <ProfileInfo>Riven</ProfileInfo>
        </ContentContainer>
      </PlayedChampions>

      <MatchList>
        <GridList cellHeight={180} className={classes.gridList} cols={3}>
          {matchList && dataset ? (
            matchList.map((match: any, index: number) => (
              <GridListTile key={index}>
                <img src={buildChampionUrl('splash', String(match.champion), dataset)}/>
                <GridListTileBar
                  title={`${match.lane} - ${timestampToMatchTime(match.timestamp)}`}
                  subtitle={'Solo/duo'}
                  actionIcon={
                    <IconButton className={classes.icon} onClick={() => {goToMatchPage(match.gameId)}}>
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
