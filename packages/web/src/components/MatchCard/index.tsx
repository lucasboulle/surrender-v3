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
import { buildItemUrl } from '../../utils/buildItemUrl'
import { IParticipant } from '../../interfaces/IParticipant'
import { Colors } from '../../utils/Colors'
import {Box, Tabs} from '@dracula/dracula-ui'

interface Props {
  team: 'enemy' | 'ally'
  participant: IParticipant
  championUrl: string
  championName: string
}

const teamColors: {
  enemy: 'red'
  ally: 'cyan'
} = {
  enemy: 'red',
  ally: 'cyan' 
}

const MatchCard = (props: Props) => {

  return (
    <Box
      color={teamColors[props.team]}
      style={{
        borderRadius: '15px',
        width: '470px',
        height: '110px',
        display: 'flex',
        flexDirection: 'row',
        margin: '10px'
      }}
    >
      <RightPlayerMatchCardRowContainer>
        <RightPlayerMatchCardContainer>
          <ChampionIcon src={props.championUrl} />
          <InfoTitle style={{ color: Colors.black }}>
            {props.championName}
          </InfoTitle>
        </RightPlayerMatchCardContainer>

        <LeftPlayerMatchCardContainer>
          <InfoText
            style={{ color: Colors.black, marginTop: 10, fontWeight: 'bold' }}
          >
            {`${props.participant.kills}/${props.participant.deaths}/${props.participant.assists}`}
          </InfoText>
          <InfoText style={{ color: '#ebcb8b' }}>
            {props.participant.goldEarned} gold
          </InfoText>
          <InfoText style={{ color: '#a3be8c' }}>
            {props.participant.totalMinionsKilled} CS
          </InfoText>
          <InfoText style={{ color: '#8fbcbb' }}>
            Level {props.participant.champLevel}
          </InfoText>
          <InfoText style={{ color: '#b48ead' }}>p/ kill 25%</InfoText>
        </LeftPlayerMatchCardContainer>
      </RightPlayerMatchCardRowContainer>

      <LeftPlayerMatchCardRowContainer>
        <RowContainer>
          <ItemPurchased src={buildItemUrl(props.participant.item0)} />
          <ItemPurchased src={buildItemUrl(props.participant.item1)} />
          <ItemPurchased src={buildItemUrl(props.participant.item2)} />
        </RowContainer>

        <RowContainer>
          <ItemPurchased src={buildItemUrl(props.participant.item4)} />
          <ItemPurchased src={buildItemUrl(props.participant.item5)} />
          <ItemPurchased src={buildItemUrl(props.participant.item6)} />
        </RowContainer>
      </LeftPlayerMatchCardRowContainer>
    </Box>
  )
}

export default MatchCard
