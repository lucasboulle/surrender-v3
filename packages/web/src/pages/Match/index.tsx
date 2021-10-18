import {createStyles, makeStyles, Theme, Tooltip} from '@material-ui/core'
import React from 'react'
import {useLocation} from 'react-router-dom'
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  XAxis,
  YAxis
} from 'recharts'
import Header from '../../components/Header'
import MatchCard from '../../components/MatchCard'
import TabNavigator from '../../components/TabNavigator'
import {useDdragonDataSet} from '../../custom-hooks/useDdragonDataSet'
import {IMatchParticipant} from '../../interfaces/IMatchParticipant'
import {IParticipant} from '../../interfaces/IParticipant'
import {buildChampionUrl} from '../../utils/buildChampionUrl'
import {Colors} from '../../utils/Colors'
import {getChampionNameById} from '../../utils/getChampionNameById'
import {
  CardsContainer,


  CardsRowContainer, Container
} from './styles'

const teamColors = {
  enemy: Colors.red,
  ally: Colors.cyan
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    hexGrid: {
      color: Colors.comment
    }
  })
)

const Match: React.FC = () => {
  const styles = useStyles()
  const location = useLocation<IMatchParticipant>()
  const [
    getDdragonDataSetSuccess,
    getDdragonDataSetErrorm,
    isLoadingDdragonDataSet,
    getDdragonDataSet
  ] = useDdragonDataSet()
  const [dataset, setDataset] = React.useState()
  const [itemdataset, setItemDataset] = React.useState()
  const [matchPaticipant, setMatchParticipant] = React.useState<IMatchParticipant>()
  const [allyParticipants, setAllyParticipants] = React.useState<IParticipant[]>([])
  const [enemyParticipants, setEnemyParticipants] = React.useState<IParticipant[]>([])
  const [currentTab, setCurrentTab] = React.useState('Jogadores')

  React.useEffect(() => {
    setMatchParticipant(location.state)
    getDdragonDataSet()
  }, [])

  React.useEffect(() => {
    if (matchPaticipant) {
      setAllyParticipants(
        matchPaticipant.match.info.participants.filter(p => p.teamId === 200)
      )
      setEnemyParticipants(
        matchPaticipant.match.info.participants.filter(p => p.teamId === 100)
      )
    }
  }, [matchPaticipant])

  React.useEffect(() => {
    if (getDdragonDataSetSuccess) {
      setDataset(getDdragonDataSetSuccess.data)
    }
  }, [getDdragonDataSetSuccess])

  const playersData = [
    {
      subject: 'Gold',
      A: 120,
      B: 110,
      fullMark: 150
    },
    {
      subject: 'Kill',
      A: 98,
      B: 130,
      fullMark: 150
    },
    {
      subject: 'Objectives',
      A: 86,
      B: 130,
      fullMark: 150
    },
    {
      subject: 'Damage',
      A: 99,
      B: 100,
      fullMark: 150
    },
    {
      subject: 'Heal',
      A: 85,
      B: 90,
      fullMark: 150
    },
    {
      subject: 'Participation',
      A: 65,
      B: 85,
      fullMark: 150
    }
  ]

  const chartsData = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ]

  const MatchCards = () => (
    <CardsRowContainer>
      <CardsContainer>
        {allyParticipants.length &&
          dataset &&
          allyParticipants?.map((participant: any, index: number) => {
            return (
              <MatchCard
                key={index}
                team={'ally'}
                participant={participant}
                championUrl={buildChampionUrl(
                  'champion',
                  String(participant.championId),
                  dataset
                )}
                championName={getChampionNameById(
                  String(participant.championId),
                  dataset
                )}
              />
            )
          })}
      </CardsContainer>
      <CardsContainer>
        <RadarChart
          outerRadius={150}
          width={500}
          height={500}
          data={playersData}
          className={styles.hexGrid}
        >
          <PolarGrid stroke={Colors.comment} />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name="enemy"
            dataKey="B"
            stroke={teamColors.enemy}
            fill={teamColors.enemy}
            fillOpacity={0.6}
          />
          <Radar
            name="ally"
            dataKey="A"
            stroke={teamColors.ally}
            fill={teamColors.ally}
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </CardsContainer>
      <CardsContainer>
        {enemyParticipants.length &&
          dataset &&
          enemyParticipants?.map((participant: any, index: number) => {
            return (
              <MatchCard
                key={index}
                team={'enemy'}
                participant={participant}
                championUrl={buildChampionUrl(
                  'champion',
                  String(participant.championId),
                  dataset
                )}
                championName={getChampionNameById(
                  String(participant.championId),
                  dataset
                )}
              />
            )
          })}
      </CardsContainer>
    </CardsRowContainer>
  )

  const MatchCharts = () => (
    <CardsRowContainer>
      <AreaChart
        width={730}
        height={250}
        data={chartsData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={Colors.cyan} stopOpacity={0.8} />
            <stop offset="95%" stopColor={Colors.cyan} stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={Colors.red} stopOpacity={0.8} />
            <stop offset="95%" stopColor={Colors.red} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Area
          type="monotone"
          dataKey="uv"
          stroke={Colors.cyan}
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stroke={Colors.red}
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </CardsRowContainer>
  )

  return (
    <Container>
      <Header />
      <TabNavigator
        tabOptions={[
          { name: 'Jogadores', onTabPress: () => { setCurrentTab('Jogadores') } },
          { name: 'Graficos', onTabPress: () => { setCurrentTab('Graficos') } },
          { name: 'Dicas', onTabPress: () => { setCurrentTab('Dicas') } }
        ]}
      />

      {currentTab === 'Jogadores' && (<MatchCards />)}
      {currentTab === 'Graficos' && (<MatchCharts />)}
      {currentTab === 'Dicas' && (<></>)}
    </Container>
  )
}

export default Match
