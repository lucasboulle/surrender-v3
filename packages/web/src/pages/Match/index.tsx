import React from 'react'
import {
  CardsContainer,
  Container,
  ImageContainer,
  CardsRowContainer,
} from './styles'
import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core'
import blueWaves from '../../images/blue-waves.png'
import MatchCard from '../../components/MatchCard'
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from 'recharts'
import { useSurrenderApi } from '../../custom-hooks/useSurrenderApi'
import { useParams } from 'react-router-dom'
import { useDdragonDataSet } from '../../custom-hooks/useDdragonDataSet'
import { buildChampionUrl } from '../../utils/buildChampionUrl'
import { useDdragonDataSetForItem } from '../../custom-hooks/useDdragonDataSetForItem'
import { getChampionNameById } from '../../utils/getChampionNameById'

const teamColors = {
  enemy: '#bf616a',
  ally: '#5e81ac'
}

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

const Match: React.FC = () => {
  //@ts-ignore
  const { matchId } = useParams()
  const [getDetailedMatchSuccess, errorSummoner, isLoadingSummoner, getDetailedMatch] = useSurrenderApi({ path: '/match/by-id'})
  const [getDdragonDataSetSuccess, getDdragonDataSetErrorm, isLoadingDdragonDataSet, getDdragonDataSet] = useDdragonDataSet()
  const [dataset, setDataset] = React.useState()
  const [itemdataset, setItemDataset] = React.useState()

  const [allyParticipants, setAllyParticipants] = React.useState([])
  const [enemyParticipants, setEnemyParticipants] = React.useState([])
  React.useEffect(() => {
    //@ts-ignore
    getDetailedMatch({ matchId })

        //@ts-ignore
        getDdragonDataSet()
  }, [])

  React.useEffect(() => {
    if (getDetailedMatchSuccess) {
      console.log('🚀 ~ file: index.tsx ~ line 62 ~ getDetailedMatchSuccess', getDetailedMatchSuccess)
      // //@ts-ignore
      // setDataset(getDdragonDataSetSuccess.data)
      //@ts-ignore
      setAllyParticipants(getDetailedMatchSuccess.participants.filter(p => p.teamId === 200))
      //@ts-ignore
      setEnemyParticipants(getDetailedMatchSuccess.participants.filter(p => p.teamId === 100))
    }
  }, [getDetailedMatchSuccess])

  React.useEffect(() => {
    if (getDdragonDataSetSuccess) {
      //@ts-ignore
      setDataset(getDdragonDataSetSuccess.data)
    }
  }, [getDdragonDataSetSuccess])

  React.useEffect(() => {
    if (getDdragonDataSetSuccess) {
      //@ts-ignore
      setDataset(getDdragonDataSetSuccess.data)
    }
  }, [getDdragonDataSetSuccess])

  const data = [
    {
      subject: 'Gold', A: 120, B: 110, fullMark: 150,
    },
    {
      subject: 'Kill', A: 98, B: 130, fullMark: 150,
    },
    {
      subject: 'Objectives', A: 86, B: 130, fullMark: 150,
    },
    {
      subject: 'Damage', A: 99, B: 100, fullMark: 150,
    },
    {
      subject: 'Heal', A: 85, B: 90, fullMark: 150,
    },
    {
      subject: 'Participation', A: 65, B: 85, fullMark: 150,
    },
  ]

  return (
    <Container>
      <ImageContainer>
        <img src={blueWaves} style={{ rotate: '180deg', background: '#434c5e' }} />
      </ImageContainer>

      <CardsRowContainer>
        <CardsContainer>
          {allyParticipants.length && dataset && (
            allyParticipants?.map((participant: any, index: number) => {
              return <MatchCard 
              key={index} 
              team={'ally'} 
              participant={participant} 
              championUrl={buildChampionUrl('champion', String(participant.championId), dataset)} 
              championName={getChampionNameById(String(participant.championId), dataset)}
              />
            })
          )}
        </CardsContainer>
        <CardsContainer>
          <RadarChart outerRadius={150} width={500} height={500} data={data}>
            <PolarGrid stroke={'#88c0d0'}/>
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar name="enemy" dataKey="B" stroke={teamColors.enemy} fill={teamColors.enemy} fillOpacity={0.6} />
            <Radar name="ally" dataKey="A" stroke={teamColors.ally} fill={teamColors.ally} fillOpacity={0.6} />
            <Legend />
          </RadarChart>
        </CardsContainer>
        <CardsContainer>
          {enemyParticipants.length && dataset && (
            enemyParticipants?.map((participant: any, index: number) => {
              return <MatchCard
                key={index}
                team={'enemy'}
                participant={participant}
                championUrl={buildChampionUrl('champion', String(participant.championId), dataset)}
                championName={getChampionNameById(String(participant.championId), dataset)}
              />
            })
          )}
        </CardsContainer>
      </CardsRowContainer>
    </Container>
  )
}

export default Match
