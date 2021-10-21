import React from 'react'
import {
  ChampionSkillInfo,
  ChampionTitleContainer,
  ChartsContainer,
  ChartTitle,
  ColumnContainer,
  Container,
  ImageContainer,
  InfoText,
  InfoTitle,
  ItemPurchased,
  RowContainer,
  SkillImage,
  SpellContainer,
  SpellImage,
  StatsChampionContainer,
  StatsChampionLeftContainer,
  StatsChampionRightContainer,
  TitleChampionContainer,
  Text
} from './styles'
import blueWaves from '../../images/blue-waves.png'
import { ChampionIcon } from '../Profile/styles'
import rivenExampleIcon from '../../images/riven-example-icon.jpeg'
import rivenQExample from '../../images/rivenQExample.png'
import { ArrowRight } from '@material-ui/icons'
import SimpleChart from '../../components/SimpleChart'
import RuneTree from '../../components/RuneTree'
import blackCleaverExample from '../../images/black-cleaver.jpg'
import { getSummonerSpellImage } from '../../utils/getSummonerSpellImage'
import { useDdragonDataSet } from '../../custom-hooks/useDdragonDataSet'
import { useParams } from 'react-router-dom'
import { getChampionByKey } from '../../utils/getChampioByKey'
import Header from '../../components/Header'
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts'
import { Colors } from '../../utils/Colors'
import { makeStyles, Theme, createStyles } from '@material-ui/core'
import { Badge } from '@dracula/dracula-ui'

const SkillArrowPriority = () => <ArrowRight fontSize={'large'} style={{ color: '#88c0d0', marginTop: '6px' }} />

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
const Champion: React.FC = () => {

  //@ts-ignore
  const { championId } = useParams()
  const [getDdragonDataSetSuccess, getDdragonDataSetErrorm, isLoadingDdragonDataSet, getDdragonDataSet] = useDdragonDataSet()
  const [champion, setChampion] = React.useState<any>()
  const styles = useStyles()

  React.useEffect(() => {
    getDdragonDataSet()
  }, [])

  React.useEffect(() => {
    if (getDdragonDataSetSuccess) {
      setChampion(getChampionByKey(String(championId), getDdragonDataSetSuccess.data))
      console.log('🚀 ~ file: index.tsx ~ line 60 ~ champion', champion && champion.stats)

    }
  }, [getDdragonDataSetSuccess, champion])

  const data = [
    {
      name: '10.17', uv: 45, amt: 2400,
    },
    {
      name: '10.18', uv: 46, amt: 2210,
    },
    {
      name: '10.19', uv: 48, amt: 2290,
    },
    {
      name: '10.20', uv: 48, amt: 2000,
    },
    {
      name: '10.21', uv: 49, amt: 2181,
    },
    {
      name: '10.22', uv: 49, amt: 2500,
    },
    {
      name: '10.23', uv: 47, amt: 2100,
    },
  ]

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

  const ChampionTags = () => {
    const arrColors: any = ['purple', 'pink', 'cyan', 'red']
    let i = 0
    console.log('oba')
    return (
      <>
        {champion.tags.map((tag: string) => {
          const badge = () => <Badge color={arrColors[i]} variant="subtle">{tag}</Badge>
          i += 1
          return badge
        })}
      </>
    )
  }

  return (
    <Container>
      <Header />
      <ChampionTitleContainer>
        <ChampionIcon src={rivenExampleIcon} />
        <TitleChampionContainer>
          <InfoTitle> Riven </InfoTitle>
          <InfoText> The broken blade</InfoText>
          <RowContainer>
            { champion &&  (
            <>
              {champion.tags.map((tag: string) => (
                <Badge color="cyan" variant="subtle">{tag}</Badge>
              ))}
            </>)}
          </RowContainer>
        </TitleChampionContainer>
        <ChampionSkillInfo>
          <SpellContainer>
            <SpellImage src={getSummonerSpellImage('SummonerFlash')} />
            <SpellImage src={getSummonerSpellImage('SummonerTeleport')} />
          </SpellContainer>
          <RowContainer>
            <SkillImage src={rivenQExample} />
            <SkillImage src={rivenQExample} />
            <SkillImage src={rivenQExample} />
            <SkillImage src={rivenQExample} />
            <SkillImage src={rivenQExample} />
          </RowContainer>
          <RowContainer>
            <SkillImage src={rivenQExample} />
            <SkillArrowPriority />
            <SkillImage src={rivenQExample} />
            <SkillArrowPriority />
            <SkillImage src={rivenQExample} />
          </RowContainer>
        </ChampionSkillInfo>
        <ColumnContainer>
          {champion && (
            <>
              <Text style={{ color: Colors.red }}> Quantidade de HP - {champion.stats.hp}</Text>
              <Text style={{ color: Colors.cyan }}> Dano Inicial - {champion.stats.attackdamage}</Text>
              <Text style={{ color: Colors.green }}> Movespeed - {champion.stats.movespeed}</Text>
              <Text style={{ color: Colors.pink }}> Dano de alcance - {champion.stats.attackrange}</Text>
            </>
          )}
        </ColumnContainer>
      </ChampionTitleContainer>
      <ChartsContainer>
        <ColumnContainer>
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
              name="servidor"
              dataKey="B"
              stroke={teamColors.enemy}
              fill={teamColors.enemy}
              fillOpacity={0.6}
            />
            <Radar
              name="você"
              dataKey="A"
              stroke={teamColors.ally}
              fill={teamColors.ally}
              fillOpacity={0.6}
            />
            <Legend />
          </RadarChart>
        </ColumnContainer>
        <SimpleChart data={data} />
      </ChartsContainer>
      <StatsChampionContainer>
        <StatsChampionLeftContainer>
          <RuneTree />
        </StatsChampionLeftContainer>
        <StatsChampionRightContainer>
          <ItemPurchased src={blackCleaverExample} />
          <ItemPurchased src={blackCleaverExample} />
          <ItemPurchased src={blackCleaverExample} />
          <ItemPurchased src={blackCleaverExample} />
          <ItemPurchased src={blackCleaverExample} />
        </StatsChampionRightContainer>
      </StatsChampionContainer>
    </Container>
  )
}

export default Champion
