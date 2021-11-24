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
import { Badge, Divider } from '@dracula/dracula-ui'
import { buildChampionUrl } from '../../utils/buildChampionUrl'
import { useDdragonDataSetForLore } from '../../custom-hooks/useDdragonDataSetForLore'
import { getSummonerPassiveImage } from '../../utils/getSummonerPassiveImage'
import { getSummonerSkillsImage } from '../../utils/getSummonerSkillsImage'
import { useDdragonDataSetForItem } from '../../custom-hooks/useDdragonDataSetForItem'
import { buildItemUrlWithImageType } from '../../utils/buildItemUrlWithImageType'
import { buildItemUrl } from '../../utils/buildItemUrl'

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
  const [getDdragonDataSetSuccessForLore, getDdragonDataSetErrorForLore, isLoadingDdragonDataSetForLore, getDdragonDataSetForLore] = useDdragonDataSetForLore()
  const [getDdragonDataSetSuccessForItem, getDdragonDataSetErrorForItem, isLoadingDdragonDataSetForItem, getDdragonDataSetForItem] = useDdragonDataSetForItem()
  const [champion, setChampion] = React.useState<any>()
  const [items, setitems] = React.useState<any>()
  const [championLore, setChampionLore] = React.useState<any>()
  const itemsRandom = [3031, 3011, 3033, 3035, 3040, 3041, 3042, 3044, 3046, 3047, 3050, 3051, 3053, 3057, 3066, 3078, 3082, 3085, 3083, 3091, 3094, 3105, 3107, 3109, 3111, 3112, 3110, 3121, 3123, 3134, 3135, 3139, 3211]
  const randomNumberInRange = (min: number, max: number) => ~~(Math.random() * (max - min) + min)
  console.log('🚀 ~ file: index.tsx ~ line 65 ~ setChampionLore', championLore)
  const styles = useStyles()

  React.useEffect(() => {
    getDdragonDataSet()
    getDdragonDataSetForItem()
  }, [])

  React.useEffect(() => {
    if (getDdragonDataSetSuccess) {
      setChampion(getChampionByKey(String(championId), getDdragonDataSetSuccess.data))
    }
  }, [getDdragonDataSetSuccess, champion])

  React.useEffect(() => {
    if (getDdragonDataSetSuccessForLore) {
      setChampionLore(getDdragonDataSetSuccessForLore.data[champion.id])
    }
  }, [getDdragonDataSetSuccessForLore, champion])

  React.useEffect(() => {
    if (champion) {
      getDdragonDataSetForLore(champion.id)      
    }
  }, [champion])

  React.useEffect(() => {
    if (getDdragonDataSetSuccessForItem) {
      setitems(Object.keys(getDdragonDataSetSuccessForItem.data))
    }
  }, [getDdragonDataSetSuccessForItem])

  // console.log(buildItemUrlWithImageType(items[~~randomNumberInRange(0, 20)].image.full))


  const data = [
    {
      name: '10.17', uv: randomNumberInRange(45, 55), amt: 2400,
    },
    {
      name: '10.18', uv: randomNumberInRange(45, 55), amt: 2210,
    },
    {
      name: '10.19', uv: randomNumberInRange(45, 55), amt: 2290,
    },
    {
      name: '10.20', uv: randomNumberInRange(45, 55), amt: 2000,
    },
    {
      name: '10.21', uv: randomNumberInRange(45, 55), amt: 2181,
    },
    {
      name: '10.22', uv: randomNumberInRange(45, 55), amt: 2500,
    },
    {
      name: '10.23', uv: randomNumberInRange(45, 55), amt: 2100,
    },
  ]

  const playersDataWW = [
    {
      subject: 'Fighting',
      A: 120,
      B: 110,
      fullMark: 150
    },
    {
      subject: 'Farming',
      A: 98,
      B: 90,
      fullMark: 150
    },
    {
      subject: 'Agression',
      A: 116,
      B: 90,
      fullMark: 150
    },
    {
      subject: 'Survivability',
      A: 33,
      B: 80,
      fullMark: 150
    },
    {
      subject: 'Objectives',
      A: 85,
      B: 90,
      fullMark: 150
    },
    {
      subject: 'Vision',
      A: 65,
      B: 85,
      fullMark: 150
    }
  ]

  const playersData = [
    {
      subject: 'Farming',
      A: randomNumberInRange(40, 130),
      B: randomNumberInRange(50, 130),
      fullMark: 150
    },
    {
      subject: 'Fighting',
      A: randomNumberInRange(40, 130),
      B: randomNumberInRange(50, 130),
      fullMark: 150
    },
    {
      subject: 'Objectives',
      A: randomNumberInRange(40, 130),
      B: randomNumberInRange(50, 130),
      fullMark: 150
    },
    {
      subject: 'Agression',
      A: randomNumberInRange(40, 130),
      B: randomNumberInRange(50, 130),
      fullMark: 150
    },
    {
      subject: 'Survivability',
      A: randomNumberInRange(40, 130),
      B: randomNumberInRange(50, 130),
      fullMark: 150
    },
    {
      subject: 'Vision',
      A: randomNumberInRange(40, 130),
      B: randomNumberInRange(50, 130),
      fullMark: 150
    }
  ]

  return (
    <Container>
      <Header />
      {champion && championLore && (
        <>
          <ChampionTitleContainer>
            <ChampionIcon src={buildChampionUrl('champion', championId, getDdragonDataSetSuccess.data)} />
            <TitleChampionContainer>
              <InfoTitle> {champion.name} </InfoTitle>
              <InfoText> {champion.title}</InfoText>
              <RowContainer>
                {champion && (
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
                <SkillImage src={getSummonerPassiveImage(championLore.passive.image.full)} />
                <SkillImage src={getSummonerSkillsImage(championLore.spells[0].image.full)} />
                <SkillImage src={getSummonerSkillsImage(championLore.spells[1].image.full)} />
                <SkillImage src={getSummonerSkillsImage(championLore.spells[2].image.full)} />
                <SkillImage src={getSummonerSkillsImage(championLore.spells[3].image.full)} />
              </RowContainer>
              <RowContainer>
                <SkillImage src={getSummonerSkillsImage(championLore.spells[1].image.full)} />
                <SkillArrowPriority />
                <SkillImage src={getSummonerSkillsImage(championLore.spells[0].image.full)} />
                <SkillArrowPriority />
                <SkillImage src={getSummonerSkillsImage(championLore.spells[2].image.full)} />
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
                data={champion.name === 'Viego' ? playersDataWW : playersData}
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
            <ColumnContainer>
            <SimpleChart data={data} />
            </ColumnContainer>
            <ColumnContainer>
              <InfoTitle style={{ color: Colors.pink }}> Algumas dicas do {champion.name} pra você...</InfoTitle>
              {championLore.allytips.map((tip: string) => (
                <Text style={{ color: Colors.red }}> {tip} </Text>
              ))}
            </ColumnContainer>
          </ChartsContainer>
          <StatsChampionContainer>
              <InfoTitle style={{ color: Colors.pink }} > Items core</InfoTitle>
            <RowContainer>
              {/* <ItemPurchased src={} /> */}
              <ItemPurchased src={buildItemUrl(itemsRandom[randomNumberInRange(0, 32)])} />
              <ItemPurchased src={buildItemUrl(itemsRandom[randomNumberInRange(0, 32)])} />
              <ItemPurchased src={buildItemUrl(itemsRandom[randomNumberInRange(0, 32)])} />
              <ItemPurchased src={buildItemUrl(itemsRandom[randomNumberInRange(0, 32)])} />
            </RowContainer>
          </StatsChampionContainer>
        </>
      )}
    </Container>
  )
}

export default Champion
