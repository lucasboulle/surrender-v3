import { createStyles, makeStyles, Theme, Tooltip } from '@material-ui/core'
import React from 'react'
import { useLocation } from 'react-router-dom'
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  XAxis,
  YAxis,

} from 'recharts'
import Header from '../../components/Header'
import MatchCard from '../../components/MatchCard'
import TabNavigator from '../../components/TabNavigator'
import { useDdragonDataSet } from '../../custom-hooks/useDdragonDataSet'
import { IMatchParticipant } from '../../interfaces/IMatchParticipant'
import { IParticipant } from '../../interfaces/IParticipant'
import { buildChampionUrl } from '../../utils/buildChampionUrl'
import { Colors } from '../../utils/Colors'
import { getChampionNameById } from '../../utils/getChampionNameById'
import {
  CardsContainer, CardsRowContainer, ChampionIcon, Container, GPITitile, InfoStatistics, StatisticTitle, TipText, TipTitile
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
  const [visionScore, setVisionScore] = React.useState<number[]>([0])
  const randomNumberInRange = (min: number, max: number) => Math.random() * (max - min) + min;

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

  React.useEffect(() => {
    if (allyParticipants) {
      setVisionScore(allyParticipants.map((participant) => participant.visionScore))
    }
  }, [allyParticipants])

  const totalOfParticipation = allyParticipants
    ? allyParticipants.reduce((b, participant) => participant.kills + participant.assists + b, 0)
    : 1

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
      name: 'Top',
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: 'Jungle',
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: 'Mid',
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: 'Bot',
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: 'Support',
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
  ]

  const radialData =
    allyParticipants.length
      ? [
        {
          "name": allyParticipants[0].championName,
          "uv": allyParticipants[0].visionScore,
          "pv": Math.max.apply(null, visionScore),
          "fill": "#8884d8"
        },
        {
          "name": allyParticipants[1].championName,
          "uv": allyParticipants[1].visionScore,
          "pv": 4567,
          "fill": "#83a6ed"
        },
        {
          "name": allyParticipants[2].championName,
          "uv": allyParticipants[2].visionScore,
          "pv": 1398,
          "fill": "#8dd1e1"
        },
        {
          "name": allyParticipants[3].championName,
          "uv": allyParticipants[3].visionScore,
          "pv": 9800,
          "fill": "#82ca9d"
        },
        {
          "name": allyParticipants[4].championName,
          "uv": allyParticipants[4].visionScore,
          "pv": 3908,
          "fill": "#a4de6c"
        },
      ] : []

  const damageChart =
    allyParticipants.length ?
      [
        {
          "name": "Top",
          "Inimigo": enemyParticipants[0].totalDamageDealt,
          "Aliado": allyParticipants[0].totalDamageDealt
        },
        {
          "name": "Jungle",
          "Inimigo": enemyParticipants[1].totalDamageDealt,
          "Aliado": allyParticipants[1].totalDamageDealt
        },
        {
          "name": "Mid",
          "Inimigo": enemyParticipants[2].totalDamageDealt,
          "Aliado": allyParticipants[2].totalDamageDealt
        },
        {
          "name": "Bot",
          "Inimigo": enemyParticipants[3].totalDamageDealt,
          "Aliado": allyParticipants[3].totalDamageDealt
        },
        {
          "name": "Support",
          "Inimigo": enemyParticipants[4].totalDamageDealt,
          "Aliado": allyParticipants[4].totalDamageDealt
        },
      ] : []

  const data01 = [
    {
      "name": "Group A",
      "value": 400
    },
    {
      "name": "Group B",
      "value": 300
    },
    {
      "name": "Group C",
      "value": 300
    },
    {
      "name": "Group D",
      "value": 200
    },
    {
      "name": "Group E",
      "value": 278
    },
    {
      "name": "Group F",
      "value": 189
    }
  ];
  const data02 =
    allyParticipants.length
      ? [
        {
          "name": allyParticipants[0].championName,
          "value": (allyParticipants[0].assists + allyParticipants[0].kills) / totalOfParticipation*100
        },
        {
          "name": allyParticipants[1].championName,
          "value": (allyParticipants[1].assists + allyParticipants[1].kills) / totalOfParticipation*100
        },
        {
          "name": allyParticipants[2].championName,
          "value": (allyParticipants[2].assists + allyParticipants[2].kills) / totalOfParticipation*100
        },
        {
          "name": allyParticipants[3].championName,
          "value": (allyParticipants[3].assists + allyParticipants[3].kills) / totalOfParticipation*100
        },
        {
          "name": allyParticipants[4].championName,
          "value": (allyParticipants[4].assists + allyParticipants[4].kills) / totalOfParticipation*100
        },
      ] : []
      if(allyParticipants.length) {
      }
  const dataAdvantage = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: -1000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 500,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: -2000,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: -250,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const gradientOffset = () => {
    const dataMax = Math.max(...dataAdvantage.map((i) => i.uv));
    const dataMin = Math.min(...dataAdvantage.map((i) => i.uv));

    if (dataMax <= 0) {
      return 0;
    }
    if (dataMin >= 0) {
      return 1;
    }

    return dataMax / (dataMax - dataMin);
  };


  const off = gradientOffset();

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
    <>
      <CardsRowContainer>
        <CardsContainer>
          <InfoStatistics> GOLD DIFF p/ TEMPO </InfoStatistics>
          <AreaChart width={730} height={250} data={chartsData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip children={(<></>)} title={''} />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
          </AreaChart>
        </CardsContainer>
        <CardsContainer>
          <InfoStatistics> SCORE DE VISÃO  </InfoStatistics>
          <RadialBarChart
            width={730}
            height={250}
            innerRadius="10%"
            outerRadius="80%"
            data={radialData}
            startAngle={180}
            endAngle={0}
          >
            <Tooltip children={(<></>)} title={''} />
            <RadialBar angle={15} label={{ fill: '#666', position: 'insideStart' }} background dataKey='uv' />
            <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
          </RadialBarChart>
        </CardsContainer>
      </CardsRowContainer>

      <CardsRowContainer>
        <CardsContainer>
          <InfoStatistics> DANO COMPARATIVO  </InfoStatistics>
          <BarChart width={730} height={250} data={damageChart}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip children={(<></>)} title={''} />
            <Legend />
            <Bar dataKey="Aliado" fill="#8884d8" />
            <Bar dataKey="Inimigo" fill="#82ca9d" />
          </BarChart>
        </CardsContainer>
        <CardsContainer>
          <CardsContainer>
            <InfoStatistics> PARTICIPAÇÃO DE EQUIPE  </InfoStatistics>
            <PieChart width={730} height={250}>
              <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
              <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            </PieChart>
          </CardsContainer>
        </CardsContainer>
      </CardsRowContainer>
    </>
  )

  const TipCards = () => {
    return (
      <>
        <CardsRowContainer>
          <CardsContainer>
            <TipTitile> Seu maior defeito... </TipTitile>
            <GPITitile> Damage </GPITitile>
          </CardsContainer>
          <CardsContainer>
            <StatisticTitle> 12 Mortes </StatisticTitle>
            <StatisticTitle> Tomou 5320 de dano  </StatisticTitle>
            <StatisticTitle> Primeria morte em 12:42  </StatisticTitle>
          </CardsContainer>
        </CardsRowContainer>
        <CardsRowContainer>
          <CardsContainer>
            <ChampionIcon src={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d6df2d66-13da-4ce4-ae85-8009742c5c94/d6u3f5p-458d106e-1fa6-4235-bc6b-4f1c8a2175d1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9kNmRmMmQ2Ni0xM2RhLTRjZTQtYWU4NS04MDA5NzQyYzVjOTQvZDZ1M2Y1cC00NThkMTA2ZS0xZmE2LTQyMzUtYmM2Yi00ZjFjOGEyMTc1ZDEuanBnIn1dXX0.uzUn8PfVCLpB_-fmPvx5EKfYr0Xi7jNYyxO_uOf5bMA'} />
          </CardsContainer>
          <CardsContainer>
            <TipText>
              O Crowd Control e o Kill Potential são afetados pela confiabilidade - basicamente a facilidade de aterrissar o CC ou danos. Isso significa que campeões que dependem de tiros de habilidade, como Lux e Ezreal, têm menos confiabilidade do que campeões como Annie ou Malzahar, que simplesmente podem apontar e clicar. Nossas fórmulas fornecem uma vantagem para pistas mais confiáveis porque os ganks são mais simples de executar.
              Claro, Lux e Ezreal se beneficiam de serem capazes de ultrapassar a maioria dos campeões em composições de cerco / pipa, mas eles simplesmente não têm um potencial de gank tão bom quanto outros campeões, uma vez que sua contribuição tem espaço para erros. É muito difícil identificar um Annie Flash + Q ou um Malzahar Flash + Q.
            </TipText>
          </CardsContainer>
        </CardsRowContainer>
      </>
    )
  }

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
      {currentTab === 'Dicas' && (<TipCards />)}
    </Container>
  )
}

export default Match
