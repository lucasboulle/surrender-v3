import styled from 'styled-components';
import { Colors } from '../../utils/Colors';

export const Container = styled.div`
color: #2e3440;
background: ${Colors.background};
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: sretch;
padding: 0 0 0 0;
`;

export const RowContainer = styled.div`
  flex-direction: row;
  margin-top 10%;
  align-items: center;
`

export const ProfileData = styled.div`
height: 50%;
background: ${Colors.background};
display: flex;
flex-direction: row;
justify-content: space-between;

`

export const ProfileImage = styled.img`
width: 100px;
height: 100px;
border-radius: 100px;
align-self: center;
`

export const RankEmblemImage = styled.img`
width: 115px;
height: 130px;
` 

export const ProfileInfo = styled.p`
font-size: 15px;
margin-top: 10px;
color: ${Colors.pink}
`

export const ContentContainer = styled.div`
display: flex;
flex: 2;
align-items: center;  
flex-direction: column;
justify-content: center;
`

export const PlayedChampions = styled.div`
height: 40%;
background: #434c5e;
display: flex;
flex-direction: row;
justify-content: space-between;
`

export const MatchList = styled.div`
height: 100px;
background: #434c5e;
`

export const ChampionIcon = styled.img`
width: 130px;
height: 130px;
border-radius: 150px;
align-self: center;
`

export const ChampionSplash = styled.img`
  display: block;
  width: 100%;
`

export const ImageContainer = styled.div`
  color: #2e3440;
  background: #d8dee9;
  width: 100%;
  height: 17%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: sretch;
  padding: 0 0 0 0;
`

