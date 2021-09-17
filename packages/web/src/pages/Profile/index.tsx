import React from 'react'
import {
  Container,
  ProfileInfo,
  ProfileData,
  RankEmblemImage,
  ContentContainer,
  MatchList,
  RowContainer
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
import rivenExampleIcon from '../../images/riven-example-icon.jpeg'
import { InfoRounded } from '@material-ui/icons'
import { CartesianGrid, BarChart, XAxis, YAxis, Tooltip, Bar } from 'recharts'
import { useHistory, useParams } from 'react-router-dom'
import { useSurrenderApi } from '../../custom-hooks/useSurrenderApi'
import { IRiotSummoner } from '../../interfaces/IRiotSummoner'
import { timestampToMatchTime } from '../../utils/timestampToMatchTime'
import { useDdragonDataSet } from '../../custom-hooks/useDdragonDataSet'
import { buildChampionUrl } from '../../utils/buildChampionUrl'
import { Avatar, Badge, Box, Card, Divider, Tabs, Text } from '@dracula/dracula-ui'
import Header from '../../components/Header'
import { Colors } from '../../utils/Colors'


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
    rankedBox: {
      alignItems: 'center',
      flexDIrection: 'column',
      justifyContent: 'center'
    },
    championsBox: {
      height: '40%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    championText: {
      fontSize: '15px',
      marginTop: '10px'
    },
    championTextRating: {
      fontSize: '25px',
      marginBottom: '10px',
      fontWeight: 'bold'
    },
    championAvatar: {
      width: 130,
      height: 130,
    }
  })
)

const Profile: React.FC = () => {

  //@ts-ignore
  const { accountId } = useParams()
  const classes = useStyles()
  const history = useHistory()

  const [getSummonerByAccountSuccess, errorSummoner, isLoadingSummoner, getSummonerByAccount] = useSurrenderApi({ path: '/summoner/by-account' })
  const [getSummonerEntriesBySummonerIdSucess, errorSummonerEntries, isLoadingSummonerEntries, getSummonerEntriesBySummonerId] = useSurrenderApi({ path: '/summoner/entries/by-summoner' })
  const [getMatchListByAccountSuccess, errorMatchList, isLoadingMatchList, getMatchListByAccount] = useSurrenderApi({ path: '/matchlist/by-account' })
  const [getDdragonDataSetSuccess, getDdragonDataSetErrorm, isLoadingDdragonDataSet, getDdragonDataSet] = useDdragonDataSet()
  const [summoner, setSummoner] = React.useState<IRiotSummoner>()
  const [summonerEntries, setSummonerEntries] = React.useState<any>()
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

      //@ts-ignore
      getSummonerEntriesBySummonerId({ summonerId: getSummonerByAccountSuccess?.id })
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

  React.useEffect(() => {
    if (getSummonerEntriesBySummonerIdSucess) {
      //@ts-ignore
      setSummonerEntries(getSummonerEntriesBySummonerIdSucess)
    }
  }, [getSummonerEntriesBySummonerIdSucess])

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
      <Header />
      <ProfileData>
        <ContentContainer>
          <Tabs style={{ marginBottom: '2%' }} color="pink">
            <li className="drac-tab drac-tab-active">
              <a className="drac-tab-link drac-text" href="#">
                Solo/duo
              </a>
            </li>
            <li className="drac-tab">
              <a className="drac-tab-link drac-text" href="#">
                Flex
              </a>
            </li>
          </Tabs>
          <RankEmblemImage src={rankedEmblem} />
          <ProfileInfo>{summonerEntries?.tier ? `${summonerEntries?.tier} ${summonerEntries?.rank}` : 'loading'}</ProfileInfo>
          <ProfileInfo>{summonerEntries ? `${summonerEntries?.wins} W | ${summonerEntries?.losses} L ` : ''}</ProfileInfo>
        </ContentContainer>

        <ContentContainer>
          {/* <Box
            color="black"
            height="xs"
            width="xxs"
            rounded="lg"
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              display: 'flex'
            }}
          > */}
            <Avatar
              title='Profile icon'
              src={challengerIcon}
              style={{ width: 100, height: 100 }}
              color="pink"
              borderVariant="large"
            />
            <ProfileInfo>{summoner?.name ?? 'loading'}</ProfileInfo>
            <ProfileInfo>{summoner?.summonerLevel}</ProfileInfo>
            <RowContainer>
              <Badge color="purple" variant="subtle">S7 Gold</Badge>
              <Badge color="pink" variant="subtle" style={{marginLeft: 50}}>S8 Gold</Badge>
              <Badge color="cyan" variant="subtle" style={{marginLeft: 50}}>S9 Gold</Badge>
            </RowContainer>
          {/* </Box> */}
        </ContentContainer>

        <ContentContainer>
          <Box
            color="pinkPurple"
            rounded="lg"
            height="xxs"
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              display: 'flex'
            }}
          >
            <BarChart width={400} height={200} data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke={Colors.black} />
              <YAxis stroke={Colors.black} />
              <Tooltip />
              <Bar dataKey="pv" fill={Colors.black} />
            </BarChart>
          </Box>
        </ContentContainer>
      </ProfileData>

      <Divider color="purple" />

      {/* Top played champions */}
      <Box color="black" className={classes.championsBox}>
        <ContentContainer>
          <Text className={classes.championTextRating} color="purple">92/100</Text>
          <Avatar
            src={rivenExampleIcon}
            title="champion 1"
            borderVariant="large"
            color="purple"
            style={{ width: 130, height: 130 }}
          />
          <Text className={classes.championText} color="purple">Riven</Text>
        </ContentContainer>

        <ContentContainer>
          <Text className={classes.championTextRating} color="pink">57/100</Text>
          <Avatar
            src={rivenExampleIcon}
            title="champion 2"
            borderVariant="large"
            color="pink"
            style={{ width: 130, height: 130 }}
          />
          <Text className={classes.championText} color="pink">Riven</Text>
        </ContentContainer>

        <ContentContainer onClick={goToChampionPage}>
          <Text className={classes.championTextRating} color="cyan">35/100</Text>
          <Avatar
            src={rivenExampleIcon}
            title="champion 3"
            borderVariant="large"
            color="cyan"
            style={{ width: 130, height: 130 }}
          />
          <Text className={classes.championText} color="cyan">Riven</Text>
        </ContentContainer>


        <ContentContainer onClick={goToChampionPage}>
          <Text className={classes.championTextRating} color="green">31/100</Text>
          <Avatar
            src={rivenExampleIcon}
            title="champion 4"
            borderVariant="large"
            color="green"
            style={{ width: 130, height: 130 }}
          />
          <Text className={classes.championText} color="green">Riven</Text>
        </ContentContainer>
      </Box>

      <MatchList>
        <GridList cellHeight={180} className={classes.gridList} cols={3}>
          {matchList && dataset ? (
            matchList.map((match: any, index: number) => (
              <GridListTile key={index}>
                <img src={buildChampionUrl('splash', String(match.champion), dataset)} />
                <GridListTileBar
                  title={`${match.lane} - ${timestampToMatchTime(match.timestamp)}`}
                  subtitle={'Solo/duo'}
                  actionIcon={
                    <IconButton className={classes.icon} onClick={() => { goToMatchPage(match.gameId) }}>
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
