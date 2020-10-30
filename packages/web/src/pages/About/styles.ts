import styled from 'styled-components';

export const Container = styled.div`
color: #2e3440;
background: #d8dee9;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: sretch;
padding: 0 0 0 0;
`;

export const ProfileData = styled.div`
height: 30%;
background: #4c566a;
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

export const ProfileInfo = styled.text`
font-size: 15px;
margin-top: 10px;
`

export const ContentContainer = styled.div`
display: flex;
flex: 2;
align-items: center;  
flex-direction: column;
justify-content: center;
`

export const PlayedChampions = styled.div`
height: 30%;
background: #434c5e;
display: flex;
flex-direction: row;
justify-content: space-between;
`

export const ChampionIcon = styled.img`
width: 150px;
height: 150px;
border-radius: 150px;
align-self: center;
`