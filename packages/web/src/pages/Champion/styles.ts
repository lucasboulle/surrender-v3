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
justidy-content: flex-start;
padding: 0 0 0 0;
`;

export const ImageContainer = styled.div`
  color: #2e3440;
  background: #434c5e;
  width: 100%;
  height: 17%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: sretch;
  padding: 0 0 0 0;
`;

export const ChampionIcon = styled.img`
  border: 1px solid;  
  border-radius: 5px;
  border-image-width: 5px;
  width: 35px;
  height: 35px;
`

export const ChampionTitleContainer = styled.div`
  height: 5%;
  width: 80%;
  display: flex;
  flex: 2;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  margin-left: 10%;
`
export const ChartsContainer = styled.div`
  height:  40%;
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
`

export const ChampionSkillInfo = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  justify-content: center;
  align-items: center;
`

export const InfoTitle = styled.p`
  font-size: 34px;
  margin-left: 15px;
  color: ${Colors.pink}
`

export const ChartTitle = styled.p`
  font-size: 24px;
  margin-left: 15px;
  color: ${Colors.purple}
`

export const InfoText = styled.p`
  font-size: 25px;
  color: ${Colors.purple}
`

export const Text = styled.p`
  font-size: 25px;
`

export const SkillImage = styled.img`
  border: 1px solid;  
  border-radius: 5px;
  border-image-width: 5px;
  width: 50px;
  height: 50px;
`

export const SpellImage = styled.img`
  border: 1px solid;  
  border-radius: 5px;
  border-image-width: 5px;
  width: 50px;
  height: 50px;
  margin-left: 15px;
`

export const RowContainer = styled.div`
  color: #fffff; 
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 50%;
  margin-top: 15px;
`;

export const SpellContainer = styled.div`
  color: #fffff; 
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 50%;
  margin-top: 15px;
`;

export const TitleChampionContainer = styled.div`
  color: #fffff; 
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  margin-left: 5px;
`;

export const StatsChampionContainer = styled.div`
  height: 15%;
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StatsChampionLeftContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StatsChampionRightContainer = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ItemPurchased = styled.img`
  border: 1px solid;  
  border-radius: 5px;
  border-image-width: 5px;
  width: 35px;
  height: 35px;
`

export const LeftStatsChampionContainer = styled.div`
  height: 20%;
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ColumnContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`