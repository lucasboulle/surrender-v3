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
import { buildItemUrl } from '../../utils/buildItemUrl'

interface Props {
  team: 'enemy' | 'ally'
  participant: any
  championUrl: string
  championName: string
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
            <ChampionIcon src={props.championUrl} />
            <InfoTitle style={{ color: '#d8dee9' }}>
                {props.championName}
            </InfoTitle>
            </RightPlayerMatchCardContainer>

            <LeftPlayerMatchCardContainer>
              <InfoText style={{ color: '#d8dee9', marginTop: 10, fontWeight: 'bold' }}>
                {`${props.participant.stats.kills}/${props.participant.stats.deaths}/${props.participant.stats.assists}`}
            </InfoText>
              <InfoText style={{ color: '#ebcb8b' }}>
                {props.participant.stats.goldEarned} gold
            </InfoText>
              <InfoText style={{ color: '#a3be8c' }}>
                {props.participant.stats.totalMinionsKilled} CS
            </InfoText>
              <InfoText style={{ color: '#8fbcbb' }}>
                Level {props.participant.stats.champLevel}
            </InfoText>
              <InfoText style={{ color: '#b48ead' }}>
                p/ kill 25%
            </InfoText>
            </LeftPlayerMatchCardContainer>

          </RightPlayerMatchCardRowContainer>

          <LeftPlayerMatchCardRowContainer>
            <RowContainer>
              <ItemPurchased src={buildItemUrl(props.participant.stats.item0)} />
              <ItemPurchased src={buildItemUrl(props.participant.stats.item1)} />
              <ItemPurchased src={buildItemUrl(props.participant.stats.item2)} />
            </RowContainer>

            <RowContainer>
              <ItemPurchased src={buildItemUrl(props.participant.stats.item4)} />
              <ItemPurchased src={buildItemUrl(props.participant.stats.item5)} />
              <ItemPurchased src={buildItemUrl(props.participant.stats.item6)} />
            </RowContainer>
          </LeftPlayerMatchCardRowContainer>

        </PlayerMatchCardContainer>
  )
}

export default MatchCard
