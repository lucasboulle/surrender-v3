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
import { getSummonerSpellImage } from '../../utils/getSummonerSpellImage'
import { useDdragonDataSet } from '../../custom-hooks/useDdragonDataSet'
import { useParams } from 'react-router-dom'
import { getChampionByKey } from '../../utils/getChampioByKey'

const SkillArrowPriority = () => <ArrowRight fontSize={'large'} style={{ color: '#88c0d0', marginTop: '6px' }} />

const Champion: React.FC = () => {
  //@ts-ignore
  const {championId} = useParams()
  const [getDdragonDataSetSuccess, getDdragonDataSetErrorm, isLoadingDdragonDataSet, getDdragonDataSet] = useDdragonDataSet()
  const [champion, setChampion] = React.useState()
  React.useEffect(() => {
    //@ts-ignore
    getDdragonDataSet()
  }, [])
  
  React.useEffect(() => {
    if(getDdragonDataSetSuccess) {
      //@ts-ignore
      // setChampion(getChampionByKey(String(championId), getDdragonDataSetSuccess.data))
      } 
  }, [getDdragonDataSetSuccess])

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
      name: '10.21', uv:49, amt: 2181,
    },
    {
      name: '10.22', uv: 49, amt: 2500,
    },
    {
      name: '10.23', uv: 47, amt: 2100,
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
