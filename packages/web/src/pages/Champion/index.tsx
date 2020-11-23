import React from 'react'
import {
  ChampionSkillInfo,
  ChampionTitleContainer,
  ChartsContainer,
  ChartTitle,
  Container,
  ImageContainer,
  InfoTitle,
  RowContainer,
  SkillImage,
  SpellContainer,
  SpellImage,
  StatsChampionContainer,
  StatsChampionLeftContainer,
  StatsChampionRightContainer,
  TitleChampionContainer,
} from './styles'
import blueWaves from '../../images/blue-waves.png'
import { ChampionIcon } from '../Profile/styles'
import rivenExampleIcon from '../../images/riven-example-icon.jpeg'
import rivenQExample from '../../images/rivenQExample.png'
import { ArrowRight } from '@material-ui/icons'
import { InfoText, ItemPurchased } from '../../components/MatchCard/styles'
import SimpleChart from '../../components/SimpleChart'
import RuneTree from '../../components/RuneTree'
import blackCleaverExample from '../../images/black-cleaver.jpg'

const SkillArrowPriority = () => <ArrowRight fontSize={'large'} style={{ color: '#88c0d0', marginTop: '6px' }} />

const Champion: React.FC = () => {
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
      name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
  ]

  return (
    <Container>
      <ImageContainer>
        <img src={blueWaves} style={{ rotate: '180deg', background: '#434c5e' }} />
      </ImageContainer>
      <ChampionTitleContainer>
        <ChampionIcon src={rivenExampleIcon} />
        <TitleChampionContainer>
          <InfoTitle> Riven </InfoTitle>
          <InfoText> The broken blade</InfoText>
        </TitleChampionContainer>
        <ChampionSkillInfo>
          <SpellContainer>
            <SpellImage src={rivenQExample} />
            <SpellImage src={rivenQExample} />
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
      </ChampionTitleContainer>
      <ChartsContainer>
        <SimpleChart data={data} />
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
