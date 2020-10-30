import React from 'react'
import {
  Container,
  ProfileInfo,
  ProfileData,
  ProfileImage,
  RankEmblemImage,
  ContentContainer,
  PlayedChampions,
  ChampionIcon
} from './styles'
import challengerIcon from '../../images/challenger-icon.jpeg'
import rankedEmblem from '../../images/ranked-emblems/Emblem_Master.png'
import rivenExample from  '../../images/riven-example.jpeg'

const About: React.FC = () => {
  return (
    <Container>
      <ProfileData>
        <ContentContainer>
          <RankEmblemImage src={rankedEmblem} />
          <ProfileInfo>Master</ProfileInfo>
          <ProfileInfo>670 W | 700 L</ProfileInfo>
        </ContentContainer>

        <ContentContainer>
          <ProfileImage src={challengerIcon} />
          <ProfileInfo>Lucas Boulle</ProfileInfo>
          <ProfileInfo>378</ProfileInfo>
        </ContentContainer>

        <ContentContainer></ContentContainer>
      </ProfileData>
      <PlayedChampions>
        <ContentContainer>
          <ChampionIcon src={rivenExample} />
        </ContentContainer>
        <ContentContainer>
          <ChampionIcon src={rivenExample} />
        </ContentContainer>
        <ContentContainer>
          <ChampionIcon src={rivenExample} />
        </ContentContainer>
      </PlayedChampions>
    </Container>
  )
}

export default About
