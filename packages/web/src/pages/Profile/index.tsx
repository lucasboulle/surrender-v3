import React from 'react'
import {
  Container,
  ProfileInfo,
  ProfileData,
  RankEmblemImage,
  ContentContainer,
  MatchList,
  RowContainer,
  ChampionSplash
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
import { getChampionByKey } from '../../utils/getChampioByKey'
import { getSummonerProfileIconImage } from '../../utils/getSummonerPofileIconImage'
import { IMatchParticipant } from '../../interfaces/IMatchParticipant'


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
    },
  })
)

const Profile: React.FC = () => {

  //@ts-ignore
  const { id, puuid } = useParams()
  const classes = useStyles()
  const history = useHistory()

  const [
    getSummonerByAccountSuccess, 
    errorSummoner, 
    isLoadingSummoner, 
    getSummonerByAccount
  ] = useSurrenderApi({ path: '/summoner/by-account' })

  const [
    getSummonerEntriesBySummonerIdSucess, 
    errorSummonerEntries, 
    isLoadingSummonerEntries, 
    getSummonerEntriesBySummonerId
  ] = useSurrenderApi({ path: '/summoner/entries/by-summoner' })

  const [
    getMatchListByAccountSuccess, 
    errorMatchList, 
    isLoadingMatchList, 
    getMatchListByPuuid
  ] = useSurrenderApi({ path: '/matchlist/by-puuid' })

  const [
    getDdragonDataSetSuccess, 
    getDdragonDataSetError, 
    isLoadingDdragonDataSet, 
    getDdragonDataSet
  ] = useDdragonDataSet()

  const randomNumberInRange = (min: number, max: number) => ~~(Math.random() * (max - min) + min)

  const [summoner, setSummoner] = React.useState<IRiotSummoner>()
  const [summonerEntries, setSummonerEntries] = React.useState<any>()
  const [matchList, setMatchList] = React.useState<IMatchParticipant[]>()
  const [dataset, setDataset] = React.useState()

  const rankedEmblem = React.useMemo(() => 
  summonerEntries 
    ? require(`../../images/ranked-emblems/${summonerEntries?.tier}.png`)
    : undefined
, [summonerEntries])

  const championPoolList = React.useMemo(() => {
    if (matchList && dataset) {
      const groupedObject = matchList.reduce((a: any, c: any) => (a[c.participantInfo.championId] = (a[c.participantInfo.championId] || 0) + 1, a), Object.create(null))
      const championPoolList = []
      for (const [championKey, amount] of Object.entries(groupedObject)) {
        championPoolList.push({
          championKey,
          //@ts-ignore
          name: getChampionByKey(String(championKey), dataset).name,
          //@ts-ignore
          porcentagem: Number(amount)
        })
      }

      console.log('🚀 ~ file: index.tsx ~ line 149 ~ championPoolList ~ championPoolList', championPoolList)
      return championPoolList.sort((champion, max) => max.porcentagem - champion.porcentagem).slice(0, 4)
    }
  }, [matchList, dataset])

  const goToChampionPage = React.useCallback((championId: string) => {
      history.push(`/champion/${championId}`)
  }, [])

  const goToMatchPage = React.useCallback((matchIndex: number) => {
    if (matchList) {
      history.push('/match', matchList[matchIndex])
    }
  }, [matchList])


  React.useLayoutEffect(() => {
    
    getSummonerByAccount({ puuid })
    
    getMatchListByPuuid({ puuid })

    getSummonerEntriesBySummonerId({ summonerId: id })
    
    getDdragonDataSet()
  }, [])


  React.useEffect(() => {
    if (getSummonerByAccountSuccess) {
      setSummoner(getSummonerByAccountSuccess)
    }
  }, [getSummonerByAccountSuccess])

  React.useEffect(() => {
    if (getMatchListByAccountSuccess) {
      setMatchList(getMatchListByAccountSuccess.matchList)
    }
  }, [getMatchListByAccountSuccess])

  React.useEffect(() => {
    if (getDdragonDataSetSuccess) {
      setDataset(getDdragonDataSetSuccess.data)
    }
  }, [getDdragonDataSetSuccess])

  React.useEffect(() => {
    if (getSummonerEntriesBySummonerIdSucess) {
      setSummonerEntries(getSummonerEntriesBySummonerIdSucess)
    }
  }, [getSummonerEntriesBySummonerIdSucess])

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
            <Avatar
              title='Profile icon'
              src={summoner
                  ? getSummonerProfileIconImage(summoner?.profileIconId)
                  : challengerIcon
                }
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
            <BarChart width={400} height={200} data={championPoolList}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke={Colors.black}/>
              <YAxis stroke={Colors.black}  domain={[0, 10]} />
              <Tooltip />
              <Bar dataKey="porcentagem" fill={Colors.black} />
            </BarChart>
          </Box>
        </ContentContainer>
      </ProfileData>

      <Divider color="purple" />

      {/* Top played champions */}
      { championPoolList && (
      <Box color="black" className={classes.championsBox}>
          <ContentContainer>
            <Text className={classes.championTextRating} color="purple">{randomNumberInRange(0, 100)}/100</Text>
            <Avatar
              src={buildChampionUrl('champion', championPoolList[0].championKey, dataset)}
              title="champion 1"
              borderVariant="large"
              color="purple"
              style={{ width: 130, height: 130 }}
            />
            <Text className={classes.championText} color="purple">{championPoolList[0].name}</Text>
          </ContentContainer>

          {championPoolList.length >= 2 && (
            <ContentContainer>
              <Text className={classes.championTextRating} color="pink">{randomNumberInRange(0, 100)}/100</Text>
              <Avatar
                src={buildChampionUrl('champion', championPoolList[1].championKey, dataset)}
                title="champion 2"
                borderVariant="large"
                color="pink"
                style={{ width: 130, height: 130 }}
              />
              <Text className={classes.championText} color="pink">{championPoolList[1].name}</Text>
            </ContentContainer>
          )}

          {championPoolList.length >= 3 && (
            <ContentContainer onClick={() => goToChampionPage(championPoolList[2].championKey)}>
              <Text className={classes.championTextRating} color="cyan">{randomNumberInRange(0, 100)}/100</Text>
              <Avatar
                src={buildChampionUrl('champion', championPoolList[2].championKey, dataset)}
                title="champion 3"
                borderVariant="large"
                color="cyan"
                style={{ width: 130, height: 130 }}
              />
              <Text className={classes.championText} color="cyan">{championPoolList[2].name}</Text>
            </ContentContainer>
          )}

          {championPoolList.length >= 4 && (
            <ContentContainer onClick={() => goToChampionPage(championPoolList[3].championKey)}>
              <Text className={classes.championTextRating} color="green">{randomNumberInRange(0, 100)}/100</Text>
              <Avatar
                src={buildChampionUrl('champion', championPoolList[3].championKey, dataset)}
                title="champion 4"
                borderVariant="large"
                color="green"
                style={{ width: 130, height: 130 }}
              />
              <Text className={classes.championText} color="green">{championPoolList[3].name}</Text>
            </ContentContainer>
          )}
      </Box>

      )}

      <Divider color="purple" />

      <MatchList>
        <GridList cellHeight={180} className={classes.gridList} cols={3}>
          {matchList && dataset ? (
            matchList.map((match: IMatchParticipant, index: number) => (
              <GridListTile key={index}>
                <ChampionSplash src={buildChampionUrl('splash', String(match.participantInfo.championId), dataset)} />
                <GridListTileBar
                  // @ts-ignore
                  title={`${match.participantInfo.championName} | ${match.participantInfo.lane} - ${timestampToMatchTime(match.match.info.gameDuration)}`}
                  subtitle={'Solo/duo'}
                  actionIcon={
                    <IconButton className={classes.icon} onClick={() => { goToMatchPage(index) }}>
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
