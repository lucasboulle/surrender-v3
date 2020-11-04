import React from 'react'
import {
  InfoText,
  InfoTitle,
  ItemPurchased,
  LeftPlayerMatchCardContainer,
  PlayerMatchCardContainer,
  RightPlayerMatchCardContainer,
  RightPlayerMatchCardRowContainer,
  RowContainer,
  ChampionIcon,
  LeftPlayerMatchCardRowContainer
} from './styles'
import blackCleaverExample from '../../images/black-cleaver.jpg'
import rivenExampleIcon from '../../images/riven-example-icon.jpeg'

interface Props {
  team: 'enemy' | 'ally'
}

const teamColors = {
  enemy: '#bf616a',
  ally: '#5e81ac'
}

const MatchCard = (props: Props) => {


  return (
        <PlayerMatchCardContainer style={{background: teamColors[props.team]}}>
          <RightPlayerMatchCardRowContainer>

            <RightPlayerMatchCardContainer>
            <ChampionIcon src={rivenExampleIcon} />
            <InfoTitle style={{ color: '#d8dee9' }}>
                Riven
            </InfoTitle>
            </RightPlayerMatchCardContainer>

            <LeftPlayerMatchCardContainer>
              <InfoText style={{ color: '#d8dee9', marginTop: 10, fontWeight: 'bold' }}>
                2/5/9
            </InfoText>
              <InfoText style={{ color: '#ebcb8b' }}>
                2580 gold
            </InfoText>
              <InfoText style={{ color: '#a3be8c' }}>
                250 CS
            </InfoText>
              <InfoText style={{ color: '#8fbcbb' }}>
                Level 11
            </InfoText>
              <InfoText style={{ color: '#b48ead' }}>
                p/ kill 25%
            </InfoText>
            </LeftPlayerMatchCardContainer>

          </RightPlayerMatchCardRowContainer>

          <LeftPlayerMatchCardRowContainer>
            <RowContainer>
              <ItemPurchased src={blackCleaverExample} />
              <ItemPurchased src={blackCleaverExample} />
              <ItemPurchased src={blackCleaverExample} />
            </RowContainer>

            <RowContainer>
              <ItemPurchased src={blackCleaverExample} />
              <ItemPurchased src={blackCleaverExample} />
              <ItemPurchased src={blackCleaverExample} />
            </RowContainer>
          </LeftPlayerMatchCardRowContainer>

        </PlayerMatchCardContainer>
  )
}

export default MatchCard
