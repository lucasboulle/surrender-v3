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
        <img src={blueWaves} style={{ rotate: '180deg', background: '#434c5e' }} />
      </ImageContainer>

      <CardsRowContainer>
        <CardsContainer>
        <MatchCard team={'ally'} />
        <MatchCard team={'ally'} />
        <MatchCard team={'ally'} />
        <MatchCard team={'ally'} />
        <MatchCard team={'ally'} />
        </CardsContainer>
        <CardsContainer>
          <RadarChart outerRadius={150} width={500} height={500} data={data}>
            <PolarGrid stroke={'#88c0d0'}/>
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar name="Lily" dataKey="B" stroke={teamColors.enemy} fill={teamColors.enemy} fillOpacity={0.6} />
            <Radar name="Mike" dataKey="A" stroke={teamColors.ally} fill={teamColors.ally} fillOpacity={0.6} />
            <Legend />
          </RadarChart>
        </CardsContainer>
        <CardsContainer>
        <MatchCard team={'enemy'} />
        <MatchCard team={'enemy'} />
        <MatchCard team={'enemy'} />
        <MatchCard team={'enemy'} />
        <MatchCard team={'enemy'} />
        </CardsContainer>
      </CardsRowContainer>
    </Container>
  )
}

export default Match
